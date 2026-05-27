import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import ReferenceList from "@/components/ReferenceList";
import ShareButton from "@/components/ShareButton";
import { getEnsayos, getEnsayoBySlug, getAvailableEnsayos, getYouTubeThumbnailUrl } from "@/lib/utils";

// Dynamic import — YouTube scripts only load when user clicks play
const YouTubeEmbed = dynamic(() => import("@/components/YouTubeEmbed"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-[#141414] border border-[#2A2A2A] animate-pulse" />
  ),
});

interface EnsayoPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const ensayos = getAvailableEnsayos();
  return ensayos.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: EnsayoPageProps): Promise<Metadata> {
  const ensayo = getEnsayoBySlug(params.slug);
  if (!ensayo) return {};

  const thumbnailUrl = getYouTubeThumbnailUrl(ensayo.youtubeId);

  return {
    title: ensayo.title,
    description: ensayo.synopsis.slice(0, 160),
    openGraph: {
      title: `${ensayo.title} | Cuestión de Ser o No Pertenecer`,
      description: ensayo.synopsis.slice(0, 160),
      images: [{ url: thumbnailUrl, width: 1280, height: 720, alt: ensayo.title }],
      type: "video.other",
    },
  };
}

const THEME_LABELS: Record<string, string> = {
  "Capital económico y gentrificación": "Gentrificación",
  "Capital erótico y turismo sexual": "Turismo Sexual",
  "Capital social y mercantilización de la memoria": "Memoria",
  "Economía de la visibilidad": "Visibilidad",
};

export default function EnsayoPage({ params }: EnsayoPageProps) {
  const ensayo = getEnsayoBySlug(params.slug);
  if (!ensayo) notFound();

  const otrosEnsayos = getEnsayos().filter((e) => e.slug !== ensayo.slug);
  const thumbnailUrl = getYouTubeThumbnailUrl(ensayo.youtubeId);

  // JSON-LD VideoObject
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: ensayo.title,
    description: ensayo.synopsis,
    thumbnailUrl,
    uploadDate: `${ensayo.year}-01-01`,
    duration: "PT19M",
    embedUrl: `https://www.youtube.com/embed/${ensayo.youtubeId}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
          {/* Main content */}
          <article>
            {/* Breadcrumb */}
            <nav aria-label="Ruta de navegación" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-[#5C5648]">
                <li>
                  <Link href="/" className="hover:text-[#A09880] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/ensayos" className="hover:text-[#A09880] transition-colors">
                    Ensayos
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#A09880] truncate max-w-[200px]">{ensayo.title}</li>
              </ol>
            </nav>

            {/* Video player */}
            <div className="mb-8">
              <YouTubeEmbed
                videoId={ensayo.youtubeId}
                title={ensayo.title}
                thumbnailUrl={thumbnailUrl}
              />
            </div>

            {/* Title & meta */}
            <div className="mb-8 pb-8 border-b border-[#2A2A2A]">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="text-xs border border-[#C8A96E] text-[#C8A96E] px-2 py-0.5 uppercase tracking-wider"
                  style={{ borderRadius: "2px" }}
                >
                  {THEME_LABELS[ensayo.theme] ?? ensayo.theme}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 border ${
                    ensayo.available
                      ? "border-emerald-800 text-emerald-400 bg-emerald-900/20"
                      : "border-[#2A2A2A] text-[#5C5648]"
                  }`}
                  style={{ borderRadius: "2px" }}
                >
                  {ensayo.available ? "Disponible" : "Próximamente"}
                </span>
              </div>
              <h1 className="font-playfair text-[#F5F0E8] text-3xl md:text-4xl mb-3 leading-tight">
                {ensayo.title}
              </h1>
              <p className="text-[#A09880] text-sm">
                {ensayo.author.join(", ")} — {ensayo.year} — {ensayo.duration}
              </p>
            </div>

            {/* Synopsis */}
            <section aria-labelledby="sinopsis-heading" className="mb-8">
              <h2
                id="sinopsis-heading"
                className="text-[#F5F0E8] text-xs uppercase tracking-[0.3em] mb-4"
              >
                Sinopsis
              </h2>
              <p className="text-[#A09880] leading-relaxed">{ensayo.synopsis}</p>
            </section>

            {/* Theoretical framework */}
            <section aria-labelledby="marco-heading" className="mb-8">
              <h2
                id="marco-heading"
                className="text-[#F5F0E8] text-xs uppercase tracking-[0.3em] mb-4"
              >
                Marco teórico
              </h2>
              <p className="text-[#A09880] leading-relaxed">{ensayo.theoreticalFramework}</p>
            </section>

            {/* Keywords */}
            <section aria-labelledby="conceptos-heading" className="mb-8">
              <h2
                id="conceptos-heading"
                className="text-[#F5F0E8] text-xs uppercase tracking-[0.3em] mb-4"
              >
                Conceptos clave
              </h2>
              <div className="flex flex-wrap gap-2">
                {ensayo.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs border border-[#2A2A2A] text-[#A09880] px-3 py-1"
                    style={{ borderRadius: "2px" }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </section>

            {/* References */}
            <section aria-labelledby="referencias-heading" className="mb-8">
              <h2
                id="referencias-heading"
                className="text-[#F5F0E8] text-xs uppercase tracking-[0.3em] mb-4"
              >
                Bibliografía
              </h2>
              <ReferenceList references={ensayo.references} />
            </section>
          </article>

          {/* Sidebar */}
          <aside aria-label="Otros ensayos y acciones">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Share */}
              <div className="bg-[#141414] border border-[#2A2A2A] p-4" style={{ borderRadius: "2px" }}>
                <h3 className="text-[#F5F0E8] text-xs uppercase tracking-widest mb-3">
                  Compartir
                </h3>
                <ShareButton />
              </div>

              {/* Other essays */}
              {otrosEnsayos.length > 0 && (
                <div className="bg-[#141414] border border-[#2A2A2A] p-4" style={{ borderRadius: "2px" }}>
                  <h3 className="text-[#F5F0E8] text-xs uppercase tracking-widest mb-4">
                    Otros ensayos del proyecto
                  </h3>
                  <ul className="space-y-3">
                    {otrosEnsayos.map((otro) => (
                      <li key={otro.slug}>
                        {otro.available ? (
                          <Link
                            href={`/ensayos/${otro.slug}`}
                            className="block group"
                          >
                            <p className="text-[#A09880] text-sm group-hover:text-[#C8A96E] transition-colors leading-snug">
                              {otro.title}
                            </p>
                            <p className="text-[#5C5648] text-xs mt-0.5">
                              {otro.author[0]} — {otro.year}
                            </p>
                          </Link>
                        ) : (
                          <div>
                            <p className="text-[#5C5648] text-sm leading-snug">{otro.title}</p>
                            <p className="text-[#5C5648] text-xs mt-0.5 opacity-60">
                              Próximamente
                            </p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
