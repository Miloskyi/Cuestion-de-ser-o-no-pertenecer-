"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { VideoEnsayo } from "@/lib/types";
import {
  getYouTubeFallbackThumbnailUrl,
  getYouTubeThumbnailUrl,
} from "@/lib/utils";

interface EssayCarouselProps {
  ensayos: VideoEnsayo[];
}

const THEME_LABELS: Record<string, string> = {
  "Capital econÃ³mico y gentrificaciÃ³n": "Gentrificacion",
  "Capital erÃ³tico y turismo sexual": "Turismo sexual",
  "Capital social y mercantilizaciÃ³n de la memoria": "Memoria",
  "EconomÃ­a de la visibilidad": "Visibilidad",
};

const CARD_OFFSETS = [-2, -1, 0, 1, 2];
const DRAG_THRESHOLD = 70;
const DRAG_LIMIT = 260;

function getSafeIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function getEssayImageUrl(ensayo: VideoEnsayo) {
  const isPending = !ensayo.youtubeId || ensayo.youtubeId === "PENDIENTE";
  return isPending ? "/images/cap-1.png" : getYouTubeThumbnailUrl(ensayo.youtubeId);
}

function EssayImage({
  ensayo,
  priority = false,
}: {
  ensayo: VideoEnsayo;
  priority?: boolean;
}) {
  const [thumbnailError, setThumbnailError] = useState(false);
  const isPending = !ensayo.youtubeId || ensayo.youtubeId === "PENDIENTE";

  if (isPending) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#1E1E1E]">
        <span className="text-xs uppercase tracking-[0.28em] text-[#5C5648]">
          Proximamente
        </span>
      </div>
    );
  }

  const thumbnail = thumbnailError
    ? getYouTubeFallbackThumbnailUrl(ensayo.youtubeId)
    : getYouTubeThumbnailUrl(ensayo.youtubeId);

  return (
    <Image
      src={thumbnail}
      alt={`Miniatura: ${ensayo.title}`}
      fill
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className="object-cover"
      onError={() => setThumbnailError(true)}
      sizes="(min-width: 1024px) 420px, 72vw"
    />
  );
}

export default function EssayCarousel({ ensayos }: EssayCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const deckControls = useAnimationControls();
  const activeEnsayo = ensayos[activeIndex];

  if (ensayos.length === 0 || !activeEnsayo) return null;

  function goPrevious() {
    setActiveIndex((current) => getSafeIndex(current - 1, ensayos.length));
  }

  function goNext() {
    setActiveIndex((current) => getSafeIndex(current + 1, ensayos.length));
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) {
    if (info.offset.x > DRAG_THRESHOLD) {
      goPrevious();
    }

    if (info.offset.x < -DRAG_THRESHOLD) {
      goNext();
    }

    deckControls.start({
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 28,
        mass: 0.9,
      },
    });
  }

  const activeTheme = THEME_LABELS[activeEnsayo.theme] ?? activeEnsayo.theme;
  const activeHref = activeEnsayo.available
    ? `/ensayos/${activeEnsayo.slug}`
    : "/ensayos";
  const progress = ((activeIndex + 1) / ensayos.length) * 100;

  return (
    <section
      id="ensayos"
      aria-labelledby="ensayos-heading"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#050505]"
    >
      <motion.div
        key={activeEnsayo.slug}
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={getEssayImageUrl(activeEnsayo)}
          alt=""
          fill
          priority
          className="object-cover opacity-25 blur-2xl scale-110"
          sizes="100vw"
          aria-hidden="true"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.72)_0%,rgba(10,10,10,0.96)_100%),radial-gradient(circle_at_50%_45%,rgba(200,169,110,0.16),transparent_38%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col px-6 py-10 md:py-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#C8A96E]">
              Repositorio audiovisual
            </p>
            <h1
              id="ensayos-heading"
              className="max-w-3xl font-playfair text-4xl leading-none text-[#F5F0E8] md:text-6xl lg:text-7xl"
            >
              Video ensayos
            </h1>
          </div>

          <Link
            href="/ensayos"
            className="hidden items-center gap-2 border border-[#2A2A2A] px-4 py-3 text-xs uppercase tracking-widest text-[#A09880] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E] md:inline-flex"
            style={{ borderRadius: "2px" }}
          >
            Catalogo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-12">
          <motion.div
            className="relative h-[440px] w-full cursor-grab touch-pan-y active:cursor-grabbing md:h-[520px]"
            drag="x"
            animate={deckControls}
            dragConstraints={{ left: -DRAG_LIMIT, right: DRAG_LIMIT }}
            dragElastic={0.08}
            dragMomentum={false}
            whileDrag={{ scale: 0.985 }}
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          >
            {CARD_OFFSETS.map((offset) => {
              const index = getSafeIndex(activeIndex + offset, ensayos.length);
              const ensayo = ensayos[index];
              const isActive = offset === 0;
              const x = offset * 210;
              const rotate = offset * 5;
              const scale = isActive ? 1 : 0.84;
              const opacity = Math.abs(offset) > 1 ? 0.34 : 0.72;

              return (
                <motion.button
                  key={`${ensayo.slug}-${index}-${offset}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Mostrar ensayo: ${ensayo.title}`}
                  aria-current={isActive ? "true" : undefined}
                  className="absolute left-1/2 top-1/2 h-[390px] w-[280px] origin-center overflow-hidden border border-[#2A2A2A] bg-[#141414] text-left shadow-2xl outline-none transition-colors hover:border-[#C8A96E] focus-visible:border-[#C8A96E] md:h-[470px] md:w-[350px]"
                  style={{ borderRadius: "2px" }}
                  whileHover={{
                    y: isActive ? "-52%" : "-51%",
                    scale: isActive ? 1.03 : 0.88,
                  }}
                  animate={{
                    x: `calc(-50% + ${x}px)`,
                    y: "-50%",
                    rotate,
                    scale,
                    opacity: isActive ? 1 : opacity,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <EssayImage ensayo={ensayo} priority={isActive} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 border border-[#C8A96E]/70"
                      style={{ borderRadius: "2px" }}
                      layoutId="activeEssayGlow"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#C8A96E]">
                      {THEME_LABELS[ensayo.theme] ?? ensayo.theme}
                    </p>
                    <h2 className="font-playfair text-2xl leading-tight text-[#F5F0E8] md:text-3xl">
                      {ensayo.title}
                    </h2>
                    <p className="mt-3 text-xs uppercase tracking-widest text-[#A09880]">
                      {ensayo.author.join(", ")} / {ensayo.duration}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <div className="grid gap-6 border-t border-[#2A2A2A] pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-sm uppercase tracking-[0.28em] text-[#5C5648]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(ensayos.length).padStart(2, "0")}
              </span>
              <span className="border border-[#C8A96E] px-2 py-1 text-xs uppercase tracking-wider text-[#C8A96E]">
                {activeTheme}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#A09880]">
                {activeEnsayo.available ? "Disponible" : "Proximamente"}
              </span>
            </div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-40 overflow-hidden bg-[#2A2A2A] md:w-64">
                <motion.div
                  className="h-full bg-[#C8A96E]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="flex gap-2">
                {ensayos.map((ensayo, index) => (
                  <button
                    key={`${ensayo.slug}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ir al ensayo ${index + 1}`}
                    className="relative h-2.5 w-2.5"
                  >
                    <span
                      className={`absolute inset-0 border transition-colors ${
                        index === activeIndex
                          ? "border-[#C8A96E] bg-[#C8A96E]"
                          : "border-[#5C5648] bg-transparent hover:border-[#A09880]"
                      }`}
                      style={{ borderRadius: "999px" }}
                    />
                  </button>
                ))}
              </div>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-[#A09880] md:text-base">
              {activeEnsayo.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Ensayo anterior"
              className="flex h-11 w-11 items-center justify-center border border-[#2A2A2A] text-[#A09880] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E]"
              style={{ borderRadius: "2px" }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Ensayo siguiente"
              className="flex h-11 w-11 items-center justify-center border border-[#2A2A2A] text-[#A09880] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E]"
              style={{ borderRadius: "2px" }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link
              href={activeHref}
              className={`inline-flex h-11 items-center gap-2 px-5 text-xs uppercase tracking-widest transition-colors ${
                activeEnsayo.available
                  ? "bg-[#C8A96E] text-[#0A0A0A] hover:bg-[#F5F0E8]"
                  : "border border-[#2A2A2A] text-[#5C5648]"
              }`}
              style={{ borderRadius: "2px" }}
            >
              {activeEnsayo.available ? "Ver ensayo" : "Ver catalogo"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
