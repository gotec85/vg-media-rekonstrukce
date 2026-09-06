export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} VG Media</p>
        <div className="flex gap-6">
          <a href="mailto:info@vgmedia.cz" className="hover:text-brand">
            info@vgmedia.cz
          </a>
          <a href="tel:+420724250607" className="hover:text-brand">
            +420 724 250 607
          </a>
        </div>
      </div>
    </footer>
  );
}
