import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Meta Ads",
    description:
      "Správa reklam na Facebooku a Instagramu zaměřená na výkon, ne na proklikávání rozpočtu.",
  },
  {
    title: "Google Ads",
    description: "Výkonnostní kampaně ve vyhledávání a obsahové síti Google.",
  },
  {
    title: "Reklama v AI chatech",
    description:
      "Nová disciplína, se kterou jsme mezi prvními na trhu — reklama tam, kde lidé hledají odpovědi přes AI.",
    highlight: true,
  },
  {
    title: "AI video",
    description:
      "Reklamní videokreativy vytvořené pomocí AI nástrojů — rychleji a levněji než klasická produkce.",
  },
  {
    title: "Bannery",
    description: "Display a bannerová reklamní grafika napříč sítěmi.",
  },
];

const stats = [
  { value: "—", label: "Celkově spravovaný rozpočet (doplníme)" },
  { value: "—", label: "Aktivních klientů" },
  { value: "—", label: "Let zkušeností" },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Reklama, která vydělává.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
            Spravujeme Meta Ads a Google Ads, tvoříme AI video a bannery — nově přidáváme i reklamu v
            AI chatech.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Domluvit nezávazný audit
            </Link>
            <Link
              href="/sluzby"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-brand hover:text-brand"
            >
              Co nabízíme
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100 shadow-xl">
            <Image
              src="/hero-team.jpg"
              alt="Tým VG Media při práci na kampani"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-8">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="text-sm font-semibold text-zinc-800">Meta Ads</span>
          </div>

          <div className="absolute -right-3 top-1/3 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-right-6">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="text-sm font-semibold text-zinc-800">Google Ads</span>
          </div>

          <div className="absolute -left-3 bottom-16 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-6">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="text-sm font-semibold text-zinc-800">AI video</span>
          </div>

          <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 shadow-lg sm:right-10">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="text-sm font-semibold text-white">Reklama v AI chatech</span>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-brand">{stat.value}</p>
              <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Co pro klienty děláme</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-2xl border p-6 ${
                service.highlight ? "border-brand bg-brand/5" : "border-zinc-200"
              }`}
            >
              <h3 className="text-lg font-semibold text-zinc-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/sluzby" className="text-sm font-semibold text-brand hover:underline">
            Detailně o všech službách →
          </Link>
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
