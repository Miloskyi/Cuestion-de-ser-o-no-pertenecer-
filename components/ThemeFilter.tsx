"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { EjeTematico } from "@/lib/types";

const THEMES: EjeTematico[] = [
  "Capital económico y gentrificación",
  "Capital erótico y turismo sexual",
  "Capital social y mercantilización de la memoria",
  "Economía de la visibilidad",
];

const THEME_SHORT: Record<EjeTematico, string> = {
  "Capital económico y gentrificación": "Gentrificación",
  "Capital erótico y turismo sexual": "Turismo Sexual",
  "Capital social y mercantilización de la memoria": "Memoria",
  "Economía de la visibilidad": "Visibilidad",
};

interface ThemeFilterProps {
  selected: EjeTematico | null;
}

export default function ThemeFilter({ selected }: ThemeFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSelect(theme: EjeTematico | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (theme) {
      params.set("theme", theme);
    } else {
      params.delete("theme");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por eje temático">
      <button
        onClick={() => handleSelect(null)}
        aria-pressed={selected === null}
        className={`text-xs px-4 py-2 border uppercase tracking-widest transition-colors ${
          selected === null
            ? "border-[#C8A96E] text-[#C8A96E] bg-[#C8A96E]/10"
            : "border-[#2A2A2A] text-[#A09880] hover:border-[#A09880] hover:text-[#F5F0E8]"
        }`}
        style={{ borderRadius: "2px" }}
      >
        Todos
      </button>
      {THEMES.map((theme) => (
        <button
          key={theme}
          onClick={() => handleSelect(theme)}
          aria-pressed={selected === theme}
          className={`text-xs px-4 py-2 border uppercase tracking-widest transition-colors ${
            selected === theme
              ? "border-[#C8A96E] text-[#C8A96E] bg-[#C8A96E]/10"
              : "border-[#2A2A2A] text-[#A09880] hover:border-[#A09880] hover:text-[#F5F0E8]"
          }`}
          style={{ borderRadius: "2px" }}
        >
          {THEME_SHORT[theme]}
        </button>
      ))}
    </div>
  );
}
