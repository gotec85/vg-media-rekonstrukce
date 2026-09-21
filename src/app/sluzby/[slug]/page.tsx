import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, type Offering } from "@/data/services";
import ImageMarquee from "@/components/ImageMarquee";
import VideoGrid from "@/components/VideoGrid";

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

function OfferingIcon({ icon }: { icon: Offering["icon"] }) {
  const common = "h-5 w-5 text-white";

  if (icon === "search") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={common}>
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
      </svg>
    );
  }

  if (icon === "chart") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M12 20V4M20 20v-7" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={common}>
      <circle cx="12" cy="8" r="3.5" />
      <path strokeLinecap="round" d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </svg>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  const hasOfferings = !!service.offerings && service.offerings.length > 0;

  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">{service.title}</h1>
        {service.isNew && (
          <span className="animate-pulse rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
            Novinka
          </span>
        )}
      </div>
      <p className="mt-6 text-lg leading-8 text-zinc-600">{service.description}</p>

      {service.image && (
        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-3xl bg-zinc-100 shadow-xl">
          <Image
            src={service.image}
            alt={service.imageAlt ?? service.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      {hasOfferings ? (
        <>
          <div className="mt-14 space-y-16">
            {service.offerings!.map((offering) => (
              <section key={offering.id} id={offering.id} className="scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand">
                    <OfferingIcon icon={offering.icon} />
                  </span>
                  <h2 className="text-2xl font-bold text-zinc-900">{offering.title}</h2>
                </div>
                <p className="mt-4 text-base leading-7 text-zinc-600">{offering.description}</p>

                {offering.moreInfoHref && (
                  <Link
                    href={offering.moreInfoHref}
                    className="mt-3 inline-block text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    {offering.moreInfoLabel ?? "Více informací najdete zde"} →
                  </Link>
                )}

                {offering.videos && offering.videos.length > 0 && (
                  offering.videos.length === 1 && offering.videoUrl ? (
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="overflow-hidden rounded-2xl bg-zinc-900 shadow-sm">
                        <video
                          src={offering.videos[0]}
                          className="w-full"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                      <div className="overflow-hidden rounded-2xl bg-zinc-100 shadow-sm">
                        <div className="relative aspect-[9/16] w-full">
                          <iframe
                            src={offering.videoUrl}
                            className="absolute inset-0 h-full w-full"
                            allow="autoplay"
                            allowFullScreen
                            title={offering.title}
                          />
                        </div>
                      </div>
                    </div>
                  ) : offering.videos.length === 1 ? (
                    <div className="mt-6 flex justify-center">
                      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-zinc-900 shadow-sm">
                        <video
                          src={offering.videos[0]}
                          className="w-full"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                    </div>
                  ) : (
                    <VideoGrid videos={offering.videos} />
                  )
                )}

                {offering.videoUrl && !(offering.videos && offering.videos.length === 1) && (
                  <div className="mt-6 flex justify-center">
                    <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl bg-zinc-100 shadow-sm">
                      <iframe
                        src={offering.videoUrl}
                        className="absolute inset-0 h-full w-full"
                        allow="autoplay"
                        allowFullScreen
                        title={offering.title}
                      />
                    </div>
                  </div>
                )}

                {offering.images && offering.images.length > 0 && (
                  <ImageMarquee images={offering.images} alt={offering.title} />
                )}

                {offering.price && (
                  <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-zinc-50 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-2xl font-bold text-zinc-900">{offering.price}</p>
                      {offering.priceUnit && <p className="text-sm text-zinc-500">{offering.priceUnit}</p>}
                    </div>
                    <Link
                      href="/kontakt#form"
                      className="inline-block rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                    >
                      Mám zájem
                    </Link>
                  </div>
                )}
              </section>
            ))}
          </div>

          {service.offerings!.some((offering) => !offering.price) && (
            <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-zinc-50 p-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div>
                <p className="text-lg font-bold text-zinc-900">Individuální nabídka</p>
                <p className="mt-1 text-sm text-zinc-600">
                  Máte zájem o některou z těchto služeb? Ozvěte se, probereme rozsah a cenu na míru.
                </p>
              </div>
              <Link
                href="/kontakt#form"
                className="inline-block flex-shrink-0 rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Mám zájem
              </Link>
            </div>
          )}
        </>
      ) : (
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
      )}
    </div>
  );
}
