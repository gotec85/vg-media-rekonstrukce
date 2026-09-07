"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { href: "/sluzby/meta-ads", label: "Meta Ads" },
  { href: "/sluzby/google-ads", label: "Google Ads" },
  { href: "/sluzby/ai-video", label: "AI video" },
  { href: "/sluzby/bannery", label: "AI fotky a bannery" },
  { href: "/sluzby/reklama-v-ai-chatech", label: "Reklama v AI chatech" },
];

const links = [{ href: "/reference", label: "Case studies" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="VG Media" width={140} height={34} priority />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 sm:flex">
          <div className="group relative">
            <Link
              href="/#co-delame"
              className="flex items-center gap-1 py-2 transition-colors hover:text-brand"
            >
              Služby
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-zinc-700 transition-colors hover:bg-brand/5 hover:text-brand"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-brand">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/kontakt#form"
            onClick={() => setOpen(false)}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Kontakt
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:text-brand sm:hidden"
          >
            {open ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-4 sm:hidden">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Služby</p>
          <div className="mt-2 flex flex-col">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-zinc-700 transition-colors hover:bg-brand/5 hover:text-brand"
              >
                {service.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col border-t border-black/5 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-brand/5 hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
