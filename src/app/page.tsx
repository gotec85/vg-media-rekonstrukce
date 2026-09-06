import Link from "next/link";

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
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Performance &amp; AI reklama
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
          Reklama, která funguje — a umí i to, co ostatní ještě ne.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          VG Media spravuje Meta Ads a Google Ads kampaně, tvoří AI video kreativy a bannery — a jako
          jedni z prvních v Česku nabízíme i reklamu v AI chatech.
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
            Co všechno děláme
          </Link>
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
