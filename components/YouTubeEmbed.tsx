"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { getYouTubeThumbnailUrl, getYouTubeFallbackThumbnailUrl } from "@/lib/utils";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
}

export default function YouTubeEmbed({ videoId, title, thumbnailUrl }: YouTubeEmbedProps) {
  const [isActive, setIsActive] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);

  const isPending = !videoId || videoId === "PENDIENTE";

  const mainThumbnail = thumbnailUrl ?? getYouTubeThumbnailUrl(videoId);
  const fallbackThumbnail = getYouTubeFallbackThumbnailUrl(videoId);
  const activeThumbnail = thumbnailError ? fallbackThumbnail : mainThumbnail;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white&cc_load_policy=0&iv_load_policy=3`;

  if (isPending) {
    return (
      <div className="relative w-full aspect-video bg-[#141414] border border-[#2A2A2A] flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-16 h-16 rounded-full border border-[#2A2A2A] flex items-center justify-center mx-auto mb-4">
            <Play className="w-6 h-6 text-[#5C5648]" />
          </div>
          <p className="text-[#A09880] text-sm">Video próximamente disponible</p>
          <p className="text-[#5C5648] text-xs mt-1">
            El ensayo será publicado cuando el video sea subido a YouTube
          </p>
        </div>
      </div>
    );
  }

  if (isActive) {
    return (
      <div className="relative w-full aspect-video bg-black">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-[#141414] overflow-hidden group cursor-pointer">
      <Image
        src={activeThumbnail}
        alt={`Miniatura del ensayo: ${title}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        onError={() => setThumbnailError(true)}
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
      {/* Play button */}
      <button
        onClick={() => setIsActive(true)}
        aria-label={`Reproducir: ${title}`}
        className="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96E]"
      >
        <div className="w-20 h-20 rounded-full bg-[#C8A96E]/90 group-hover:bg-[#C8A96E] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <Play className="w-8 h-8 text-[#0A0A0A] ml-1" fill="currentColor" />
        </div>
      </button>
    </div>
  );
}
