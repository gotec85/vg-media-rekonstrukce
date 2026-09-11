import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.id === slug);

  if (!article) {
    return { title: "Blog - VG Media" };
  }

  return {
    title: `${article.title} - VG Media`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.id === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12">
      <Link href="/blog" className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark">
        ← Zpět na blog
      </Link>

      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">{article.category}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">{article.title}</h1>
      <p className="mt-4 text-sm text-zinc-400">{article.date}</p>
      <p className="mt-6 text-lg leading-8 text-zinc-600">{article.excerpt}</p>

      {article.image && (
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-zinc-100">
          <Image
            src={article.image}
            alt={article.imageAlt ?? article.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

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
