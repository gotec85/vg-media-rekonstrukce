export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  highlight?: boolean;
  isNew?: boolean;
  offerings?: Offering[];
};

export type Offering = {
  id: string;
  title: string;
  description: string;
  price: string;
  priceUnit?: string;
  icon: "search" | "chart" | "user";
};

export const services: Service[] = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    shortDescription:
      "Správa reklam na Facebooku a Instagramu zaměřená na výkon, ne na proklikávání rozpočtu.",
    description:
      "Nastavení a správa reklam na Facebooku a Instagramu, od cílení přes kreativy až po pravidelné vyhodnocování a optimalizaci na základě dat. Víme, jak vystoupit ze šedi konkurence a ve správný čas zaujmout vaši cílovku.",
    offerings: [
      {
        id: "audit",
        title: "Meta audit",
        description:
          "Projdeme vaše kampaně na Facebooku a Instagramu od A do Z. Zkontrolujeme nastavení účtu, cílení, strukturu kampaní, využití formátů i výkon kreativ. Výsledkem je srozumitelný report s jasným plánem, co upravit, kde ubrat a kam má smysl přidat.",
        price: "od 3 900 Kč",
        priceUnit: "bez DPH",
        icon: "search",
      },
      {
        id: "sprava-kampani",
        title: "Správa Meta kampaní",
        description:
          "Zadáme cíl kampaně, definujeme publikum, postaráme se o kreativy a kampaně pravidelně vyhodnocujeme a optimalizujeme podle dat. Facebook i Instagram nastavíme tak, aby přinášely nové zákazníky, ne jen proklikaný rozpočet.",
        price: "od 9 900 Kč",
        priceUnit: "měsíčně, bez DPH",
        icon: "chart",
      },
      {
        id: "skoleni",
        title: "Meta školení",
        description:
          "Chcete si kampaně řídit sami nebo se v nich lépe orientovat? Připravíme školení šité na míru vaší značce a týmu, srozumitelné i bez předchozích zkušeností s reklamou na Facebooku a Instagramu.",
        price: "od 1 900 Kč",
        priceUnit: "za hodinu, bez DPH",
        icon: "user",
      },
    ],
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
