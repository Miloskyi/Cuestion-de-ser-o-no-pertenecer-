import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import VideoCard from "@/components/VideoCard";
import SkeletonCard from "@/components/SkeletonCard";
import { getEnsayos } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cuestión de Ser o No Pertenecer — Seminario de Cibercultura",
  description:
    "Plataforma académica y audiovisual del Seminario de Cibercultura — Politécnico Colombiano Jaime Isaza Cadavid, 2026. Video ensayos sobre estándares utópicos de éxito, imaginarios urbanos y formas de pertenencia en Medellín.",
  openGraph: {
    title: "Cuestión de Ser o No Pertenecer — Seminario de Cibercultura",
    description:
      "Video ensayos sobre cómo los estándares utópicos de éxito, reconocimiento y visibilidad configuran imaginarios urbanos y formas de pertenencia frágiles en Medellín contemporánea.",
    type: "website",
  },
};

const EJES = [
  {
    icon: "💰",
    title: "Capital económico y gentrificación",
    description:
      "Cómo la acumulación de capital redefine el acceso al espacio urbano y produce zonas de exclusión aspiracional dentro de la misma ciudad.",
  },
  {
    icon: "💼",
    title: "Capital erótico y turismo sexual",
    description:
      "La sexualización de Medellín como producto de consumo internacional y las formas en que el cuerpo se convierte en capital dentro de la economía urbana.",
  },
  {
    icon: "📱",
    title: "Economía de la visibilidad",
    description:
      "Redes sociales, estéticas del éxito urbano e identidades aspiracionales. La ciudad como escenario de performance digital y validación simbólica.",
  },
  {
    icon: "🌿",
    title: "Cultura del consumo y capital social",
    description:
      "El consumo de drogas, el ocio y la fiesta como marcadores de pertenencia. Cómo el capital social opera como mecanismo de inclusión y exclusión simultánea.",
  },
];

export default function HomePage() {
  const ensayos = getEnsayos();

  return (
    <main>
      {/* Hero */}
      <HeroSection />

      {/* Contexto académico */}
      <section
        className="max-w-7xl mx-auto px-6 py-24"
        aria-labelledby="contexto-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#C8A96E] text-xs uppercase tracking-[0.3em] mb-4">
              Contexto del proyecto
            </p>
            <h2
              id="contexto-heading"
              className="font-playfair text-[#F5F0E8] text-3xl md:text-4xl mb-6 leading-tight"
            >
              Estándares utópicos de éxito en la ciudad contemporánea
            </h2>
            <p className="text-[#A09880] leading-relaxed mb-6">
              Medellín ha construido una narrativa de transformación que proyecta
              estándares utópicos de éxito, reconocimiento y visibilidad sobre
              la vida cotidiana de sus habitantes. Esos estándares —encarnados
              en el cuerpo, el consumo, la imagen digital y el acceso al espacio
              urbano— configuran imaginarios que atraviesan todas las capas de
              la ciudad contemporánea.
            </p>
            <p className="text-[#A09880] leading-relaxed">
              Este proyecto analiza fenómenos como el capital social, el capital
              económico, el capital erótico, el turismo sexual, la cultura del
              consumo de drogas, la gentrificación, la economía de la
              visibilidad en redes sociales y las estéticas del éxito urbano,
              para identificar cómo estas dinámicas producen formas de
              pertenencia frágiles, aspiracionales o excluyentes dentro de la
              ciudad.
            </p>
          </div>

          {/* Pull quote */}
          <div className="border-l-2 border-[#C8A96E] pl-8 py-4">
            {/* TODO: Replace with actual conceptual image of Comuna 13 or El Poblado */}
            <div className="w-full aspect-video bg-[#141414] border border-[#2A2A2A] mb-8 flex items-center justify-center">
              <span className="text-[#5C5648] text-xs uppercase tracking-widest">
                Imagen conceptual — pendiente
              </span>
            </div>
            <blockquote>
              <p className="font-playfair text-[#F5F0E8] text-xl md:text-2xl leading-relaxed italic">
                &ldquo;¿Cómo los capitales simbólicos y materiales han
                reconfigurado Medellín como un espacio utópico que
                paradójicamente aliena a sus propios habitantes?&rdquo;
              </p>
              <footer className="mt-4 text-[#C8A96E] text-xs uppercase tracking-widest">
                Pregunta central del proyecto
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Ejes temáticos */}
      <section
        className="bg-[#141414] border-y border-[#2A2A2A] py-24"
        aria-labelledby="ejes-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#C8A96E] text-xs uppercase tracking-[0.3em] mb-4">
            Ejes de investigación
          </p>
          <h2
            id="ejes-heading"
            className="font-playfair text-[#F5F0E8] text-3xl mb-12"
          >
            Fenómenos bajo análisis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EJES.map((eje) => (
              <article
                key={eje.title}
                className="bg-[#0A0A0A] border border-[#2A2A2A] p-6 hover:border-[#C8A96E] transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">
                  {eje.icon}
                </span>
                <h3 className="font-playfair text-[#F5F0E8] text-base mb-3 leading-snug">
                  {eje.title}
                </h3>
                <p className="text-[#A09880] text-sm leading-relaxed">
                  {eje.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de ensayos */}
      <section
        id="ensayos"
        className="max-w-7xl mx-auto px-6 py-24"
        aria-labelledby="ensayos-heading"
      >
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#C8A96E] text-xs uppercase tracking-[0.3em] mb-4">
              Video ensayos
            </p>
            <h2
              id="ensayos-heading"
              className="font-playfair text-[#F5F0E8] text-3xl"
            >
              Repositorio audiovisual
            </h2>
          </div>
          <a
            href="/ensayos"
            className="text-xs text-[#A09880] border border-[#2A2A2A] px-4 py-2 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors uppercase tracking-widest hidden md:inline-block"
            style={{ borderRadius: "2px" }}
          >
            Ver catálogo completo
          </a>
        </div>

        {ensayos.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ensayos.map((ensayo, i) => (
              <VideoCard key={ensayo.slug} ensayo={ensayo} priority={i === 0} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
