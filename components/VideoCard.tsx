"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { VideoEnsayo } from "@/lib/types";
import { getYouTubeThumbnailUrl, getYouTubeFallbackThumbnailUrl } from "@/lib/utils";
import { useState } from "react";

interface VideoCardProps {
  ensayo: VideoEnsayo;
  priority?: boolean;
}

const THEME_LABELS: Record<string, string> = {
  "Capital económico y gentrificación": "Gentrificación",
  "Capital erótico y turismo sexual": "Turismo Sexual",
  "Capital social y mercantilización de la memoria": "Memoria",
  "Economía de la visibilidad": "Visibilidad",
};

const THEME_COLORS: Record<string, string> = {
  "Capital económico y gentrificación": "border-[#C8A96E] text-[#C8A96E]",
  "Capital erótico y turismo sexual": "border-[#A09880] text-[#A09880]",
  "Capital social y mercantilización de la memoria": "border-[#8A6F3F] text-[#8A6F3F]",
  "Economía de la visibilidad": "border-[#5C5648] text-[#5C5648]",
};

export default function VideoCard({ ensayo, priority = false }: VideoCardProps) {
  const [thumbnailError, setThumbnailError] = useState(false);
  const isPending = !ensayo.youtubeId || ensayo.youtubeId === "PENDIENTE";

  const thumbnail = thumbnailError
    ? getYouTubeFallbackThumbnailUrl(ensayo.youtubeId)
    : getYouTubeThumbnailUrl(ensayo.youtubeId);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-[#141414] border border-[#2A2A2A] hover:border-[#C8A96E] transition-colors duration-300"
      style={{ borderRadius: "2px" }}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#1E1E1E]">
        {isPending ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#5C5648] text-xs uppercase tracking-widest">
              Próximamente
            </span>
          </div>
        ) : (
          <Image
            src={thumbnail}
            alt={`Miniatura: ${ensayo.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            onError={() => setThumbnailError(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amk2pa7hbI0mHJQ6w6gKQtJ4IPkVW2u6XC3RFRoMpbLKlFRSADk+5ooA/9k="
          />
        )}
        {/* Duration overlay */}
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[#F5F0E8] text-xs">
          {ensayo.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Theme badge + availability */}
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-xs border px-2 py-0.5 uppercase tracking-wider ${
              THEME_COLORS[ensayo.theme] ?? "border-[#2A2A2A] text-[#5C5648]"
            }`}
            style={{ borderRadius: "2px" }}
          >
            {THEME_LABELS[ensayo.theme] ?? ensayo.theme}
          </span>
          <span
            className={`text-xs px-2 py-0.5 ${
              ensayo.available
                ? "bg-emerald-900/30 text-emerald-400 border border-emerald-800"
                : "bg-[#1E1E1E] text-[#5C5648] border border-[#2A2A2A]"
            }`}
            style={{ borderRadius: "2px" }}
          >
            {ensayo.available ? "Disponible" : "Próximamente"}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-playfair text-[#F5F0E8] text-lg leading-snug mb-1 group-hover:text-[#C8A96E] transition-colors">
          {ensayo.title}
        </h3>

        {/* Authors */}
        <p className="text-[#A09880] text-xs mb-3">
          {ensayo.author.join(", ")} — {ensayo.year}
        </p>

        {/* Description */}
        <p className="text-[#A09880] text-sm leading-relaxed line-clamp-2 mb-4">
          {ensayo.description}
        </p>

        {/* CTA */}
        {ensayo.available ? (
          <Link
            href={`/ensayos/${ensayo.slug}`}
            className="inline-block text-xs text-[#C8A96E] border border-[#C8A96E] px-4 py-2 hover:bg-[#C8A96E] hover:text-[#0A0A0A] transition-colors uppercase tracking-widest"
            style={{ borderRadius: "2px" }}
          >
            Ver ensayo
          </Link>
        ) : (
          <span
            className="inline-block text-xs text-[#5C5648] border border-[#2A2A2A] px-4 py-2 uppercase tracking-widest cursor-not-allowed"
            style={{ borderRadius: "2px" }}
          >
            Próximamente
          </span>
        )}
      </div>
    </motion.article>
  );
}
