import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    description:
      "Správa reklam na Facebooku a Instagramu zaměřená na výkon, ne na proklikávání rozpočtu.",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description: "Výkonnostní kampaně ve vyhledávání a obsahové síti Google.",
  },
  {
    id: "ai-video",
    title: "AI video",
    description:
      "Reklamní videokreativy vytvořené pomocí AI nástrojů, rychleji a levněji než klasická produkce.",
  },
  {
    id: "bannery",
    title: "AI fotky a bannery",
    description: "Display a bannerová reklamní grafika napříč sítěmi.",
  },
  {
    id: "reklama-v-ai-chatech",
    title: "Reklama v AI chatech",
    description:
      "Nová disciplína, se kterou jsme mezi prvními na trhu, reklama tam, kde lidé hledají odpovědi přes AI.",
    highlight: true,
    isNew: true,
  },
];

const heroBadges = [
  {
    label: "Meta Ads",
    href: "/sluzby#meta-ads",
    position: "left-3 top-4 sm:-left-8 sm:top-6",
  },
  {
    label: "AI grafika",
    href: "/sluzby#bannery",
    position: "right-3 top-4 sm:-right-6 sm:top-10",
  },
  {
    label: "Google Ads",
    href: "/sluzby#google-ads",
    position: "right-3 top-1/2 sm:-right-8 sm:top-[58%]",
  },
  {
    label: "AI video",
    href: "/sluzby#ai-video",
    position: "bottom-16 left-3 sm:-left-6",
  },
  {
    label: "Reklama v AI chatech",
    href: "/sluzby#reklama-v-ai-chatech",
    position: "bottom-3 right-3 sm:-bottom-5 sm:right-10",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Reklama, která skutečně <span className="text-brand">vydělává</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
            Neřešíme kliky, přivádíme vám nové zákazníky. Kampaně na Metě, Google Ads i v AI
            chatech nastavujeme tak, aby vydělávaly, ne aby vypadaly dobře v reportu.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="rounded-full border-2 border-brand bg-brand px-6 py-[10px] text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
            >
              Chci spravovat reklamy
            </Link>
            <Link
              href="#co-delame"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-brand hover:text-brand"
            >
              Naše služby
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100 shadow-xl">
            <Image
              src="/hero-team.jpg"
              alt="Tým VG Media při práci na kampani"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="object-cover"
            />
          </div>

          {heroBadges.map((badge) => (
            <Link
              key={badge.label}
              href={badge.href}
              className={`group absolute flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 shadow-lg transition-colors hover:bg-brand hover:text-white sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-base ${badge.position}`}
            >
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 group-hover:bg-white" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand transition-colors group-hover:bg-white sm:h-3 sm:w-3" />
              </span>
              <span>{badge.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="co-delame" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Co pro klienty děláme</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-2xl p-6 transition-colors hover:border-brand hover:bg-brand/5 ${
                service.highlight ? "border-2 border-brand" : "border border-zinc-200"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Link
                  href={`/sluzby#${service.id}`}
                  className="text-lg font-semibold text-brand hover:underline"
                >
                  {service.title}
                </Link>
                {service.isNew && (
                  <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-white">
                    Novinka
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Reference a case studies</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600">
            Případové studie s konkrétními výsledky připravujeme — brzy je najdete na samostatné
            stránce.
          </p>
          <Link
            href="/reference"
            className="mt-6 inline-block rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-brand hover:text-brand"
          >
            Zobrazit reference
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Probereme váš projekt?</h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">
          Napište nám, co potřebujete — na úvodním callu proberete rozpočet, cíle a jestli si sedneme.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Kontaktovat VG Media
        </Link>
      </section>
    </div>
  );
}
