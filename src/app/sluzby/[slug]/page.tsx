import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);

  if (!service) {
    return { title: "Služby - VG Media" };
  }

  return {
    title: `${service.title} - VG Media`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">
        <Link href="/#co-delame" className="hover:underline">
          Služby
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">{service.title}</h1>
        {service.isNew && (
          <span className="rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
            Novinka
          </span>
        )}
      </div>
      <p className="mt-6 text-lg leading-8 text-zinc-600">{service.description}</p>

      <div className="mt-14 rounded-2xl border border-zinc-200 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">Připravujeme</p>
        <p className="mt-3 text-zinc-600">
          Detailní obsah téhle stránky (postup práce, ukázky, výsledky) doplníme brzy.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Kontaktujte nás
        </Link>
      </div>
    </div>
  );
}
