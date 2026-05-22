"use client";
import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ url, title: document.title });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // User cancelled or clipboard not available
    }
  }

  return (
    <button
      onClick={handleShare}
      aria-label="Compartir enlace de este ensayo"
      className="flex items-center gap-2 text-xs text-[#A09880] border border-[#2A2A2A] px-4 py-2 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors w-full justify-center"
      style={{ borderRadius: "2px" }}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          ¡Copiado!
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5" />
          Compartir enlace
        </>
      )}
    </button>
  );
}
