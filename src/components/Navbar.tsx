import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/sluzby", label: "Služby" },
  { href: "/reference", label: "Reference" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <header className="border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="VG Media" width={140} height={34} priority />
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-zinc-700 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/kontakt"
          className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Nezávazný audit
        </Link>
      </div>
    </header>
  );
}
