import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — VG Media",
  description: "Kontaktujte VG Media — probereme váš projekt.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">Kontakt</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900">
        Probereme váš projekt
      </h1>
      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Napište nám nebo zavolejte — na úvodním callu proberete rozpočet, cíle a jestli si sedneme.
      </p>

      <div className="mt-10 space-y-4 text-lg">
        <p>
          E-mail:{" "}
          <a href="mailto:info@vgmedia.cz" className="font-semibold text-brand hover:underline">
            info@vgmedia.cz
          </a>
        </p>
        <p>
          Telefon:{" "}
          <a href="tel:+420724250607" className="font-semibold text-brand hover:underline">
            +420 724 250 607
          </a>
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
