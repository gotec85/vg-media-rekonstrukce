"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { href: "/sluzby/meta-ads", label: "Meta Ads" },
  { href: "/sluzby/google-ads", label: "Google Ads" },
  { href: "/sluzby/ai-video", label: "AI video" },
  { href: "/sluzby/bannery", label: "AI grafika" },
  { href: "/sluzby/reklama-v-ai-chatech", label: "Reklama v AI chatech" },
];

const links = [{ href: "/blog", label: "Blog" }];

function NavLink({
  href,
  label,
  isActive,
  accent,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  accent?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative pt-3 pb-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
        accent || isActive ? "text-brand" : "text-zinc-900 hover:text-brand"
      }`}
    >
      {isActive && (
        <span className="absolute left-1/2 top-0 h-0.5 w-8 -translate-x-1/2 rounded-full bg-brand" />
      )}
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isBlogActive = pathname === "/blog" || pathname.startsWith("/blog/");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="VG Media" width={140} height={34} priority />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {services.map((service) => (
            <NavLink key={service.href} href={service.href} label={service.label} isActive={pathname === service.href} />
          ))}
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} isActive={isBlogActive} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/kontakt#form"
            onClick={() => setOpen(false)}
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Kontakt
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:text-brand lg:hidden"
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
        <div className="border-t border-black/5 bg-white px-6 py-4 lg:hidden">
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
