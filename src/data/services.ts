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
          "Nastavíme a pravidelně optimalizujeme kampaně ve vyhledávání, Shopping a Performance Max podle dat z Google Ads i Google Analytics, včetně optimalizace produktového feedu v Merchant Center. Rozpočet směřujeme tam, kde skutečně vznikají poptávky a objednávky, ne jen kliky.",
        price: "od 9 900 Kč",
        priceUnit: "měsíčně",
        icon: "chart",
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
      "ChatGPT Ads je nový reklamní kanál od OpenAI, který se od srpna 2026 spustil i v Česku. Reklama se zobrazuje pod odpověďmi v ChatGPT, a to jen uživatelům plánů Free a Go – lidem na placených plánech (Plus, Pro, Business, Enterprise, Edu) se nezobrazí nikdy. Formát je jednoduchý a přísně daný: krátký název produktu, jedna věta popisku a jedna čistá fotka bez textu a loga. Kampaň lze cílit na CPM (zásah), CPC (proklik) nebo oCPC (proklik s vyšší šancí na konverzi) podle toho, v jaké fázi rozhodování se vaše cílovka nachází. Reklama se nezobrazuje u citlivých témat, u nezletilých účtů ani v dočasném chatu a v Evropě zatím funguje bez agresivní personalizace na základě historie konverzací. Jsme mezi prvními agenturami v Česku, které tuhle disciplínu klientům nabízí – víme, jak kampaň správně nastavit a jak popsat produkt přesně podle doporučení OpenAI, aby reklama padla ve chvíli, kdy o něm lidé v ChatGPT skutečně přemýšlí.",
    highlight: true,
    isNew: true,
    offerings: [
      {
        id: "nastaveni-kampane",
        title: "Nastavení ChatGPT Ads kampaně",
        description:
          "Založíme váš účet v ChatGPT Ads Manageru, zvolíme správný cíl kampaně (CPM, CPC nebo oCPC) a popíšeme váš produkt přesně podle doporučení OpenAI. Připravíme kreativu ve formátu, který tenhle kanál vyžaduje, nastavíme rozpočet i měření výsledků, abyste hned viděli, jestli a jak kanál funguje.",
        price: "od 4 900 Kč",
        icon: "search",
      },
    ],
  },
];
