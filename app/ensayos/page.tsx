import type { Metadata } from "next";
import { Suspense } from "react";
import VideoCard from "@/components/VideoCard";
import ThemeFilter from "@/components/ThemeFilter";
import { getEnsayos } from "@/lib/utils";
import type { EjeTematico } from "@/lib/types";

export const metadata: Metadata = {
  title: "Catálogo de Video Ensayos",
  description:
    "Catálogo completo de video ensayos del Seminario de Cibercultura — Medellín 2026. Explora las investigaciones sobre imaginarios urbanos y exclusión.",
  openGraph: {
    title: "Catálogo de Video Ensayos — Cibercultura Medellín 2026",
    description:
      "Explora los video ensayos sobre imaginarios urbanos, capitales simbólicos y formas de exclusión en Medellín contemporánea.",
    type: "website",
  },
};

interface EnsayosPageProps {
  searchParams: { theme?: string };
}

export default function EnsayosPage({ searchParams }: EnsayosPageProps) {
  const allEnsayos = getEnsayos();
  const selectedTheme = (searchParams.theme as EjeTematico) || null;

  const filtered = selectedTheme
    ? allEnsayos.filter((e) => e.theme === selectedTheme)
    : allEnsayos;

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[#C8A96E] text-xs uppercase tracking-[0.3em] mb-4">
          Repositorio audiovisual
        </p>
        <h1 className="font-playfair text-[#F5F0E8] text-4xl md:text-5xl mb-4">
          Video Ensayos
        </h1>
        <p className="text-[#A09880] max-w-2xl leading-relaxed">
          Piezas audiovisuales de larga duración producidas por estudiantes del
          Seminario de Cibercultura. Cada ensayo explora una dimensión de la
          exclusión urbana en Medellín contemporánea.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-10 pb-8 border-b border-[#2A2A2A]">
        <Suspense fallback={null}>
          <ThemeFilter selected={selectedTheme} />
        </Suspense>
      </div>

      {/* Results count */}
      <p className="text-[#5C5648] text-xs uppercase tracking-widest mb-8">
        {filtered.length} ensayo{filtered.length !== 1 ? "s" : ""}
        {selectedTheme ? ` en "${selectedTheme}"` : " en total"}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-[#A09880] text-lg mb-2">
            No hay ensayos disponibles para este eje temático aún.
          </p>
          <p className="text-[#5C5648] text-sm">
            Los ensayos se publicarán a lo largo del semestre.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ensayo, i) => (
            <VideoCard key={ensayo.slug} ensayo={ensayo} priority={i < 3} />
          ))}
        </div>
      )}
    </main>
  );
}
