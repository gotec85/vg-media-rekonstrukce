export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    id: "chatgpt-ads",
    title: "ChatGPT Ads v Česku: jak funguje reklama v umělé inteligenci a proč ji zkusit",
    category: "AI reklama",
    date: "11. 9. 2026",
    image: "/blog/chatgpt-ads.png",
    imageAlt: "Telefon s AI chatem a sponzorovanou reklamou pod odpovědí",
    excerpt:
      "Po Googlu, Facebooku a Instagramu přibyl nový reklamní kanál – ChatGPT. Vysvětlujeme srozumitelně, jak reklama v AI chatu funguje, komu se vůbec zobrazí a proč může dávat smysl zkusit ji jako jedni z prvních.",
    sections: [
      {
        paragraphs: [
          "Google Ads, Meta Ads, a teď navíc ChatGPT Ads. Od konce srpna 2026 může inzerovat přímo v ChatGPT i kdokoliv v Česku, a to přes samoobslužné rozhraní podobné tomu, na které jsou firmy zvyklé z Googlu nebo Facebooku. Vzniká tak nový prostor, jak oslovit lidi přesně ve chvíli, kdy řeší konkrétní problém a hledají řešení – ne jen když scrollují sociální sítě.",
        ],
      },
      {
        heading: "Jak reklamy v ChatGPT vlastně fungují?",
        paragraphs: [
          "Reklama není součástí odpovědi, kterou ChatGPT napíše. Objevuje se až pod ní, jasně označená jako sponzorovaný obsah a oddělená čárou od zbytku textu. Inzerenti nijak neovlivňují, co ChatGPT uživateli odpoví – model a reklamní systém fungují odděleně. Neplatíte tedy za to, že by chat váš produkt sám doporučil, ale za reklamní prostor zobrazený vedle relevantní konverzace.",
        ],
      },
      {
        heading: "Proč by to mělo zajímat i vás?",
        paragraphs: [
          "Představte si někoho, kdo se ChatGPT zeptá: „Jaký šampon vybrat na mastné vlasy?“ nebo „Potřebuju kávovar do 8 000 Kč, na co si dát pozor?“ Nejde o náhodné procházení – člověk přesně popisuje, co řeší a co potřebuje. Právě v tenhle moment se může objevit vaše reklama. Kanál je navíc zatím nový a v Česku ho aktivně využívá jen málo firem, takže je v aukci menší konkurence a šance zaujmout dřív, než se trh zaplní.",
        ],
      },
      {
        heading: "Kdo reklamu vůbec uvidí?",
        paragraphs: [
          "Reklamy se zobrazují jen uživatelům bezplatného plánu Free a levnějšího placeného plánu Go. Kdo platí za Plus, Pro, Business, Enterprise nebo Edu, reklamu neuvidí nikdy – dražším předplatným si ji fakticky odkoupil. Stejně tak ji neuvidí nikdo mladší 18 let ani uživatel v takzvaném dočasném chatu, který se po zavření okna sám smaže. U citlivých témat, jako je zdraví, duševní zdraví nebo politika, se reklama nezobrazuje vůbec, bez ohledu na to, jaký plán zrovna používáte.",
        ],
      },
      {
        heading: "Podle čeho se rozhoduje, která reklama se zobrazí?",
        paragraphs: [
          "OpenAI při výběru reklamy zohledňuje víc věcí najednou: o čem konverzace je a co v ní uživatel řeší, co jste jako inzerent o svém produktu napsali, jak jste kampaň zacílili a jak relevantní vaše nabídka vůbec je vůči tomu, na co se člověk ptá. Pokud se o stejné místo uchází víc vhodných reklam, rozhoduje kombinace relevance a nabídky – podobně jako v aukcích Google nebo Meta Ads. Nestačí tedy jen být v ChatGPT přítomní, důležité je mít jasně definované, komu se chcete zobrazovat a s jakým produktem.",
        ],
      },
      {
        heading: "Jak reklama vypadá?",
        paragraphs: [
          "Formát je záměrně jednoduchý a dost striktní: krátký název produktu (orientačně kolem 16 znaků), jedna věta popisku s jedním hlavním argumentem (kolem 32 znaků) a jeden čistý obrázek bez textu a loga. Grafika s claimem nebo přeplácaný vizuál se na tak malém formátu ztratí – funguje jen jasná, jednoduchá fotka produktu.",
        ],
      },
      {
        heading: "Jak se ChatGPT Ads platí?",
        paragraphs: [
          "Firma si může zvolit, za co přesně platí. Za tisíc zobrazení (CPM), pokud chce hlavně dostat produkt do povědomí. Za proklik (CPC), což dává smysl na začátku, kdy teprve zjišťujete, jestli kanál na vaši cílovku funguje. Nebo za proklik s vyšší šancí na konverzi (oCPC), který je nejúčinnější, ale vyžaduje mít už na webu nastavené měření výsledků.",
          "Minimální denní rozpočet je aktuálně 15 €, reálně ale systém počítá průměr za sedm dní, takže jeden den může utratit klidně 24 €. Reálný strop tedy není 15 € na den, ale spíš zhruba 105 € na týden.",
        ],
      },
      {
        heading: "Jak popsat produkt, aby to fungovalo?",
        paragraphs: [
          "OpenAI radí inzerentům držet se u každé reklamní sestavy jednoho produktu, tématu nebo záměru – a napsat, komu produkt pomáhá a kdy se hodí. Nikdy tedy jen strohé „váš produkt“, ale celá věta. Nabízí se tři přístupy: popsat přímo produkt („přírodní šampon proti lupům pro citlivou pokožku, který zvládne i časté mytí“), širší téma, do kterého patří („přírodní kosmetika a péče o vlasy bez sulfátů a silikonů“), nebo záměr, který člověk řeší („řeší, jak se zbavit lupů a podráždění pokožky hlavy“). Nejblíž samotné konverzi bývá popis podle záměru, ale nejlepší výsledky často dá vyzkoušet všechny tři varianty vedle sebe.",
        ],
      },
      {
        heading: "Co ChatGPT Ads (zatím) neumí",
        paragraphs: [
          "Kanál je nový, a to má i svoje limity. Nedostanete přehled, ve kterých konkrétních konverzacích se reklama objevila – obdoba reportu vyhledávacích dotazů z Googlu tu zatím není. Chybí i možnost vyloučit reklamu pomocí negativních klíčových slov, cílení tak řídíte jen tím, co o produktu napíšete. A v Evropě OpenAI zatím nepoužívá agresivní personalizaci založenou na historii vašich chatů jako v USA – řídí se jen kontextem aktuální konverzace. Pro výkon to může být zpočátku limit, pro soukromí uživatelů ale plus.",
        ],
      },
      {
        heading: "Vyplatí se to zkusit?",
        paragraphs: [
          "Nejde o kanál, který nahradí Google nebo Meta Ads, spíš je doplní tam, kde lidé řeší konkrétní rozhodnutí. Protože je nový, dává smysl počítat s tím, že první týdny budou spíš o sbírání dat než o okamžitých výsledcích – stejně jako u každého nového reklamního kanálu je rozumné dát mu aspoň pár měsíců, než se vyplatí, nebo ne, vyhodnotit.",
          "Jsme mezi prvními agenturami v Česku, které ChatGPT Ads klientům nabízí. Pokud vás zajímá, jestli by kanál dával smysl i vám, ozvěte se nám – rádi to s vámi proberem.",
        ],
      },
    ],
  },
];
