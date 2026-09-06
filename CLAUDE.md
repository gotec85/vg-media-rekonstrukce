# CLAUDE.md — VG Media (web agentury)

Tento soubor dává Claude Code kontext pro práci na webu marketingové agentury **VG Media**. Než začneš cokoliv generovat nebo upravovat, přečti si celý tento dokument.

## 1. O firmě

- **Název:** VG Media
- **Doména:** vgmedia.cz
- **Kontakt:** info@vgmedia.cz, +420 724 250 607
- **Jazyk webu:** pouze čeština (zatím žádná anglická/slovenská mutace)
- **Stav:** aktuální web je jen dočasná "coming soon" stránka s logem a kontaktem — tenhle projekt je nový web od nuly

### Čím se agentura zabývá
Performance a AI-driven reklama. Konkrétní služby, které web musí komunikovat:

- **Meta Ads** — správa reklam na Facebooku a Instagramu
- **Google Ads** — výkonnostní kampaně ve vyhledávání a sítích
- **Reklama v ChatGPT / AI chatech** — nová, odlišující se disciplína; agentura je mezi prvními, kdo to nabízí, tak by to mělo být na webu vidět jako diferenciátor, ne schované na vedlejší koleji
- **AI video** — tvorba video kreativ pomocí AI nástrojů
- **Bannery** — display/bannerová reklamní grafika

→ Pozicionování: "moderní performance agentura, která umí i to, co ostatní ještě ne" (AI video, AI/chat reklama). Tohle je hlavní odlišení od konkurence, klidně to zdůrazňovat.

## 2. Vizuální identita (brand)

- **Logo:** wordmark "VG MEDIA" — červený obdélníkový blok s bílým "VG" + červený nápis "MEDIA" vedle něj. Tučné, geometrické sans-serif písmo (kulaté "G", ostré "V") — pokud přesný název fontu nemáme, jako web-safe náhradu použít **Poppins ExtraBold** nebo **Montserrat Bold** (vizuálně nejblíž).
- **Primární barva — červená:** `#A81B1E` — přesně naměřeno ze souboru `public/logo.png` (ostrý, nezkreslený zdroj, na rozdíl od fotorealistických mockupů loga, kde barvu mění nasvícení). Potvrzeno, zavedeno v kódu (`--brand` v `globals.css` + Tailwind `brand`/`brand-dark` barvy).
- **Sekundární/neutrální paleta:** bílá (#FFFFFF) a tmavě šedá/černá pro text — doplnit podle zbytku brand manuálu, pokud existuje. Zatím žádný sekundární akcent kromě červené není definovaný.
- **Favicon:** vychází ze zkratky "VG" na červeném podkladu (viz logo) — použít verzi bez podnázvu "MEDIA" (druhý obrázek/varianta jen "VG") jako základ pro favicon/app ikonu.
- **Formáty k dodání:** SVG loga (celý wordmark i samostatné "VG" pro favicon), případně brand manuál, pokud existuje.
- **Poznámka:** v repu už existuje `logo.png` (z předchozí "coming soon" verze) — ověřit, jestli odpovídá aktuální barvě/verzi loga, nebo jestli přijde novější export.

## 3. Tón komunikace

**Seriózní a slušný.** Konkrétně to znamená:

- Profesionální, věcný jazyk — ne agresivní ani vulgární (viz "Dos/Don'ts" níž)
- Sebevědomí ano, arogance ne
- Konkrétní čísla a výsledky místo prázdných frází ("výkonnostní marketing", "růst" apod. jen když jsou podložené daty)
- Klidně vstřícný a lidský tón, ale bez přehnané familiárnosti nebo vtípků

**Neděláme to jako:**
- Fanl.cz a HonzaBartos.cz jdou do drzého, "no bullshit" tónu ("Ne branding. Ne bullshit.") — pro VG Media je to moc agresivní, náš tón má být slušnější
- Socialsharks.cz staví celou komunikaci na metafoře žraloka/vody — vtipné, ale hodně "creative agency", ne náš styl

**Inspirace tónem spíš:**
- Petr Handlíř — sebevědomý, ale přátelský a věcný, dobrá rovnováha profesionality a osobnosti

## 4. Struktura webu

Domluvené stránky (MVP):

1. **Home** — hero se stručným sdělením co děláme a pro koho, přehled služeb, výsledky/čísla, výběr case studies, CTA na kontakt
2. **Služby** — samostatná stránka nebo sekce rozepisující Meta Ads, Google Ads, AI video, reklamu v ChatGPT/AI, bannery (doporučuji samostatnou podstránku/sekci pro každou službu, min. jako anchor sekce)
3. **Case studies / Reference** — přehled + detail jednotlivých případovek (klient, zadání, co jsme udělali, výsledek v číslech). Podklady dodá Martin.
4. **Kontakt** — kontaktní formulář, telefon, e-mail, případně adresa

### Doporučené doplňkové stránky (zvážit, ne povinné pro MVP)
- **O nás / Tým** — kdo za agenturou stojí, důvěryhodnost (konkurence — Handlíř, Bartoš — na tom staví hodně: fotky týmu, zkušenosti v číslech)
- **Ceník / Jak spolupráce funguje** — viz doporučení v sekci 5
- **Blog / Know-how** — SEO benefit a budování expertízy, ale není nutné pro launch, dá se přidat později
- **Kariéra** — jen pokud agentura aktuálně nabírá, jinak vynechat

### Legacy stránky v repu
V repu už existují statické stránky z předchozí verze webu (`ochrana-osobnich-udaju.html`, `podminky-pouziti.html`, `mazani-dat.html` a jejich EN varianty, `data-deletion-en.html`, `privacy-policy-en.html`, `terms-of-service-en.html`). Nový web musí mít ekvivalent (ochrana osobních údajů, podmínky použití) — obsah z nich znovu použít/aktualizovat, ne psát od nuly, pokud jsou právně v pořádku.

## 5. Čísla a ceník — jak je prezentovat

### Jaká čísla ukázat (rozhodnuto)
Doporučení: kombinace, ne jen jedno číslo.

- **Hlavní/hero číslo: celkově** (od založení agentury) — je to nejvyšší a nejpůsobivější hodnota (např. "spravovali jsme přes X mil. Kč v reklamách"), stejný trik používají Handlíř ("1,5 miliardy Kč v kampaních") i Bartoš ("1B+ CZK ad spend"). Nemusí se často aktualizovat.
- **Doplňkové číslo: roční/aktuální objem** (např. "aktuálně spravujeme X mil. Kč ročně" nebo "X aktivních klientů") — ukazuje, že agentura běží naplno teď, ne jen v minulosti.
- **Měsíční čísla na web nedávat** — působí malá/nekonzistentní (mění se každý měsíc, vypadá to nejistě). Měsíční granularita je dobrá leda v konkrétní case study ("za 3 měsíce zvýšili ROAS z X na Y"), ne jako obecné firemní číslo.

→ Typicky 3 stat-tiles na Home: **celkově spravovaný rozpočet** (all-time) + **počet klientů/kampaní** + **let na trhu nebo průměrný výsledek (např. ROAS)**.

### Ceník (doporučení)
Žádná z inspiračních agentur (Fanl, Handlíř, Bartoš) nezveřejňuje přesný ceník — performance marketing se těžko cení paušálně, protože závisí na rozpočtu a rozsahu. Doporučuju:

- **Nedávat konkrétní ceny/balíčky s Kč částkami** — u služby, kde cena záleží na výši spravovaného rozpočtu, to působí zavádějícě nebo si to lidé špatně vyloží
- Místo toho mít sekci **"Jak probíhá spolupráce"** — kroky (úvodní call/audit → návrh strategie → nastavení → reporting), aby klient věděl, co ho čeká, bez konkrétních čísel
- Volitelně jedna orientační věta typu *"pracujeme s klienty od X Kč měsíčního rozpočtu na reklamu výš"* — funguje jako filtr nekvalifikovaných poptávek, ale konkrétní částku X je potřeba potvrdit s Martinem
- CTA vždy směřuje na **nezávazný úvodní call/audit**, ne na "koupit balíček"

## 6. Designová inspirace

Weby, které Martin poslal jako referenci:

- [fanl.cz](https://www.fanl.cz) — čistý, na Frameru, silný důraz na čísla a case studies, "stavíme celý funnel" pozicionování
- [socialsharks.cz](https://www.socialsharks.cz) — hravý, silně brandovaný (metafora žraloka), moderní, hodně bílého prostoru
- [petrhandlir.cz](https://www.petrhandlir.cz) — moderní čistý design, barevné akcenty, testimonials, case studies, osobní/lidský přístup (fotky, video)
- [honzabartos.cz](https://www.honzabartos.cz) — datově orientovaný, tyrkysový akcent, minimalistický, hodně čísel a metrik, headshoty týmu

Doplňkové reference dohledané pro AI/performance pozicionování:

- [nogood.io](https://nogood.io) — growth marketing, hodně datový
- [rno1.com](https://rno1.com) — agentura zaměřená na AI/Web3, futuristický vizuál
- [madgicx.com](https://madgicx.com) — AI platforma pro Meta Ads, srozumitelné vysvětlení AI produktu
- [adamigo.ai](https://www.adamigo.ai) — AI agenti pro Meta/Google Ads, minimalistický produktový styl
- [omneky.com](https://www.omneky.com) — AI generátor kreativ, silně vizuální/video

### Co si z toho vzít pro VG Media
- Čistý, minimalistický layout s dostatkem bílého prostoru (ne Socialsharks úroveň brandingu, spíš Handlíř/Bartoš úroveň serióznosti)
- Čísla a konkrétní výsledky prominentně na Home i v case studies (vzor: Fanl, Bartoš) — viz sekce 5
- Jeden výrazný barevný akcent — u VG Media je to červená (#A81B1E), použít podobně jako Bartoš tyrkysovou nebo Handlíř oranžovou: akcentově (CTA tlačítka, čísla, ikony), ne jako plošné pozadí celého webu
- Fotky týmu pro důvěryhodnost — Martin foto dodá
- Prostor pro AI video ukázky přímo na Home — je to diferenciátor, měl by být vidět hned, ne schovaný ve službách — Martin ukázky dodá

## 7. Tech stack

- **Framework:** Next.js (App Router) + TypeScript — výchozí volba pro rychlý, moderní web nasazovaný na Vercelu. (Pokud chceš místo toho čistě statický web nebo Astro, řekni a přepíšeme.)
- **Styling:** Tailwind CSS v4 (bez `tailwind.config.js`, barvy definované přes `@theme inline` v `globals.css`) — barva `#A81B1E` je zavedená jako `brand`/`brand-dark`, používat tyto utility třídy (`bg-brand`, `text-brand`, ...), ne hardcodovaný hex na více místech
- **Repozitář:** Git — repo už existuje (tenhle), aktuálně obsahuje jen starou statickou "coming soon" verzi + právní stránky. Nový web se buduje nad stejným repem/remote.
- **Deploy:** Vercel, napojený na Git repo (auto-deploy na push do `main`, preview deploys na PR)
- **Formulář na kontaktní stránce:** řešit přes jednoduchý serverless endpoint nebo služby typu Resend/Formspree — upřesnit až podle potřeby (e-mail notifikace na info@vgmedia.cz)
- **Obrázky/video:** optimalizace přes `next/image`, videa (AI video ukázky) hostovat externě (např. Cloudflare Stream / YouTube unlisted) a embedovat, ne nahrávat těžké soubory do repa

## 8. Konvence pro psaní kódu

- Komponenty v `components/`, stránky v `app/`
- Texty (copy) držet oddělené od komponent, pokud možno v konstantách/JSON — usnadní to pozdější úpravy textů bez zásahu do kódu
- Commit messages v angličtině, stručné, imperativ ("add hero section", ne "added" nebo "přidávám hero")
- Mobile-first přístup — většina návštěvníků z reklamy přijde z mobilu

## 9. Co ještě chybí (checklist — než půjde web do finální podoby)

- [x] Logo, favicon a přesná brand barva (#A81B1E) — dodáno a zavedeno v kódu
- [x] Next.js projekt založen, MVP stránky (Home, Služby, Reference, Kontakt) naskriptované a lokální build prochází
- [x] Repo propojeno s Vercelem, produkční doména vgmedia.cz ukazuje na nový build (deploy z commitu 1488d0d proběhl bez chyb)
- [x] Rozpočet za posledních 12 měsíců — 13 831 089 Kč (na Home nahradilo dlaždici s počtem klientů)
- [x] Let zkušeností — 7
- [ ] Celkově spravovaný rozpočet (all-time, hero číslo) — zatím placeholder "—" na Home, Martin dodá
- [ ] Obsah case studies (klient, zadání, řešení, výsledek) — Martin dodá
- [ ] Fotky týmu — Martin dodá
- [ ] Ukázky AI video kreativ ke vložení na web — Martin dodá
- [ ] Potvrdit orientační minimální rozpočet klienta pro sekci "s kým spolupracujeme" (pokud se do toho půjde, viz sekce 5)

## 10. Poznámka pro Claude

Při jakékoliv práci na tomto webu:
- Drž se sekce 3 (tón komunikace) — radši méně efektní věta než agresivní/vulgární tón
- Služba "reklama v ChatGPT/AI" je diferenciátor — nenech ji zapadnout mezi ostatní služby
- Než napíšeš finální copy pro case studies nebo čísla o výsledcích, over si u Martina, že čísla jsou reálná — nikdy si je nevymýšlej
- Konkrétní Kč ceny/balíčky na web nepiš, dokud to Martin výslovně nepotvrdí (viz sekce 5)
- Pokud si nejsi jistý designovým rozhodnutím, priorituj styl Handlíř/Bartoš (seriózní, datový, čistý) před stylem Fanl/Socialsharks (drzý/hravý)
