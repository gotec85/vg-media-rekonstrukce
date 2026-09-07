import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reference — VG Media",
  description: "Case studies a reference VG Media.",
};

export default function ReferencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Reference</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-zinc-900">
        Připravujeme
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
        Na téhle stránce brzy najdete case studies s konkrétními výsledky. Zatím pracujeme na
        podkladech.
      </p>
    </div>
  );
}
