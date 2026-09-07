import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Služby - VG Media",
  description: "Meta Ads, Google Ads, AI video, reklama v AI chatech a bannery.",
};

export default function SluzbyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Služby</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-zinc-900">
        Performance a AI reklama pod jednou střechou
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
        Kombinujeme osvědčené kanály (Meta Ads, Google Ads) s tím, co teprve přichází, AI video a
        reklamou v AI chatech.
      </p>

      <div className="mt-14 space-y-6">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/sluzby/${service.id}`}
            className={`block scroll-mt-24 rounded-2xl p-8 transition-colors hover:border-brand hover:bg-brand/5 ${
              service.highlight ? "border-2 border-brand" : "border border-zinc-200"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-semibold text-brand">{service.title}</h2>
              {service.isNew && (
                <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-white">
                  Novinka
                </span>
              )}
            </div>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
