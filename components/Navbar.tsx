"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/ensayos", label: "Ensayos" },
  { href: "/sobre-el-proyecto", label: "Sobre el Proyecto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur-sm">
      <nav
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="font-playfair text-[#C8A96E] text-sm tracking-widest uppercase hover:text-[#F5F0E8] transition-colors"
        >
          Cibercultura
        </Link>
        <ul className="flex items-center gap-8" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-[#C8A96E] border-b border-[#C8A96E] pb-0.5"
                      : "text-[#A09880] hover:text-[#F5F0E8]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
