import type { Metadata } from "next";
import { articles } from "@/data/articles";

const article = articles[0];

export const metadata: Metadata = {
  title: `${article.title} - VG Media`,
  description: article.excerpt,
};

export default function ReferencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Know-how</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">{article.title}</h1>
      <p className="mt-6 text-lg leading-8 text-zinc-600">{article.excerpt}</p>

      <div className="mt-12 space-y-10">
        {article.sections.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <h2 className="text-2xl font-bold text-zinc-900">{section.heading}</h2>
            )}
            <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="text-base leading-7 text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
