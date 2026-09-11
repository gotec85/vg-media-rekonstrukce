import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog - VG Media",
  description: "Tipy, novinky a know-how ze světa performance marketingu a AI reklamy.",
};

export default function BlogPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-brand to-brand-dark">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.imageAlt ?? article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="px-6 text-center text-lg font-bold text-white/90">{article.title}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">{article.category}</p>
                <h2 className="mt-2 text-lg font-bold text-zinc-900 transition-colors group-hover:text-brand">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{article.excerpt}</p>
                <p className="mt-4 text-sm text-zinc-400">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
