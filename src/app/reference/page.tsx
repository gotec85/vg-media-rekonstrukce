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
        Case studies
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
        Případové studie právě připravujeme — každá bude obsahovat zadání, co jsme udělali a
        konkrétní výsledky v číslech.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center text-zinc-400"
          >
            <p className="text-sm">Case study #{i}</p>
            <p className="mt-2 text-xs">Čeká na podklady od klienta</p>
          </div>
        ))}
      </div>
    </div>
  );
}
