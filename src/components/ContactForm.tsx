"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Něco se pokazilo, zkuste to prosím znovu.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Něco se pokazilo, zkuste to prosím znovu nebo napište na info@vgmedia.cz.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-14 rounded-2xl border border-brand bg-brand/5 p-8 text-center">
        <p className="font-semibold text-zinc-900">Díky za zprávu!</p>
        <p className="mt-2 text-sm text-zinc-600">Ozveme se vám co nejdřív.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-14 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-zinc-900">
            Jméno
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-zinc-900">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 outline-none transition-colors focus:border-brand"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-zinc-900">
          Telefon <span className="font-normal text-zinc-400">(nepovinné)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 outline-none transition-colors focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-zinc-900">
          Zpráva
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 outline-none transition-colors focus:border-brand"
        />
      </div>

      {status === "error" && <p className="text-sm text-brand">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Odesílám…" : "Odeslat zprávu"}
      </button>
    </form>
  );
}
