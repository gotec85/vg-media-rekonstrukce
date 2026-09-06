import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Služby — VG Media",
  description: "Meta Ads, Google Ads, AI video, reklama v AI chatech a bannery.",
};

const services = [
  {
    title: "Meta Ads",
    description:
      "Nastavení a správa reklam na Facebooku a Instagramu — od cílení přes kreativy až po pravidelné vyhodnocování a optimalizaci na základě dat.",
  },
  {
    title: "Google Ads",
    description:
      "Výkonnostní kampaně ve vyhledávání, obsahové síti a nákupních kampaních Google, propojené s Meta Ads do jedné strategie.",
  },
  {
    title: "Reklama v AI chatech",
    description:
      "Nová disciplína — reklama v prostředí AI chatbotů a AI vyhledávání. Jsme mezi prvními agenturami v Česku, které tohle klientům nabízí.",
    highlight: true,
  },
  {
    title: "AI video",
    description:
      "Reklamní video kreativy vytvořené pomocí AI nástrojů — rychlejší a levnější produkce než klasické natáčení, ideální na rychlé testování konceptů.",
  },
  {
    title: "Bannery",
    description:
      "Display a bannerová reklamní grafika napříč reklamními sítěmi, navazující na vizuální styl klienta.",
  },
];

export default function SluzbyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Služby</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-zinc-900">
        Performance a AI reklama pod jednou střechou
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
        Kombinujeme osvědčené kanály (Meta Ads, Google Ads) s tím, co teprve přichází — AI video a
        reklamou v AI chatech.
      </p>

      <div className="mt-14 space-y-10">
        {services.map((service) => (
          <div
            key={service.title}
            className={`rounded-2xl border p-8 ${
              service.highlight ? "border-brand bg-brand/5" : "border-zinc-200"
            }`}
          >
            <h2 className="text-xl font-semibold text-zinc-900">{service.title}</h2>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
