export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  highlight?: boolean;
  isNew?: boolean;
  offerings?: Offering[];
  image?: string;
  imageAlt?: string;
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
        icon: "search",
      },
      {
        id: "sprava-kampani",
        title: "Správa Meta kampaní",
        description:
          "Zadáme cíl kampaně, definujeme publikum, postaráme se o kreativy a kampaně pravidelně vyhodnocujeme a optimalizujeme podle dat. Facebook i Instagram nastavíme tak, aby přinášely nové zákazníky, ne jen proklikaný rozpočet.",
        price: "od 9 900 Kč",
        priceUnit: "měsíčně",
        icon: "chart",
      },
      {
        id: "skoleni",
        title: "Meta školení",
        description:
          "Chcete si kampaně řídit sami nebo se v nich lépe orientovat? Připravíme školení šité na míru vaší značce a týmu, srozumitelné i bez předchozích zkušeností s reklamou na Facebooku a Instagramu.",
        price: "od 1 900 Kč",
        priceUnit: "za hodinu",
        icon: "user",
      },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    shortDescription:
      "Výkonnostní kampaně ve vyhledávání, Shopping a Performance Max zaměřené na konverze, ne na prokliky.",
    description:
      "Nastavení a správa kampaní ve vyhledávání Google, v Google Display síti, Performance Max a nákupních (Shopping) kampaních, propojené s daty z Google Analytics tak, aby přiváděly poptávky a objednávky, ne jen návštěvy webu.",
    offerings: [
      {
        id: "audit",
        title: "Google audit",
        description:
          "Projdeme váš účet Google Ads od A do Z. Zkontrolujeme strukturu kampaní, klíčová slova, nastavení konverzí i propojení s Google Analytics. Výsledkem je srozumitelný report s jasným plánem, co upravit, kde ubrat rozpočet a kam má smysl přidat.",
        price: "od 3 900 Kč",
        icon: "search",
      },
      {
        id: "sprava-kampani",
        title: "Správa Google kampaní",
        description:
          "Nastavíme a pravidelně optimalizujeme kampaně ve vyhledávání, Shopping a Performance Max podle dat z Google Ads i Google Analytics. Rozpočet směřujeme tam, kde skutečně vznikají poptávky a objednávky, ne jen kliky.",
        price: "od 9 900 Kč",
        priceUnit: "měsíčně",
        icon: "chart",
      },
      {
        id: "skoleni",
        title: "Google školení",
        description:
          "Chcete si kampaně řídit sami nebo se v nich lépe orientovat? Připravíme školení šité na míru vašemu byznysu, srozumitelné i bez předchozích zkušeností s Google Ads.",
        price: "od 1 900 Kč",
        priceUnit: "za hodinu",
        icon: "user",
      },
    ],
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
