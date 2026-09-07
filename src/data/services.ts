export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  highlight?: boolean;
  isNew?: boolean;
};

export const services: Service[] = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    shortDescription:
      "Správa reklam na Facebooku a Instagramu zaměřená na výkon, ne na proklikávání rozpočtu.",
    description:
      "Nastavení a správa reklam na Facebooku a Instagramu, od cílení přes kreativy až po pravidelné vyhodnocování a optimalizaci na základě dat.",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    shortDescription: "Výkonnostní kampaně ve vyhledávání a obsahové síti Google.",
    description:
      "Výkonnostní kampaně ve vyhledávání, obsahové síti a nákupních kampaních Google, propojené s Meta Ads do jedné strategie.",
  },
  {
    id: "ai-video",
    title: "AI video",
    shortDescription:
      "Reklamní videokreativy vytvořené pomocí AI nástrojů, rychleji a levněji než klasická produkce.",
    description:
      "Reklamní video kreativy vytvořené pomocí AI nástrojů, rychlejší a levnější produkce než klasické natáčení, ideální na rychlé testování konceptů.",
  },
  {
    id: "bannery",
    title: "AI fotky a bannery",
    shortDescription: "Display a bannerová reklamní grafika napříč sítěmi.",
    description:
      "Display a bannerová reklamní grafika napříč reklamními sítěmi, navazující na vizuální styl klienta.",
  },
  {
    id: "reklama-v-ai-chatech",
    title: "Reklama v AI chatech",
    shortDescription:
      "Nová disciplína, se kterou jsme mezi prvními na trhu, reklama tam, kde lidé hledají odpovědi přes AI.",
    description:
      "Nová disciplína, reklama v prostředí AI chatbotů a AI vyhledávání. Jsme mezi prvními agenturami v Česku, které tohle klientům nabízí.",
    highlight: true,
    isNew: true,
  },
];
