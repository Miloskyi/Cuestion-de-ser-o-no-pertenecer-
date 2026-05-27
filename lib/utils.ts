import type { EjeTematico, VideoEnsayo } from "./types";
import ensayosData from "../data/ensayos.json";

export function getEnsayos(): VideoEnsayo[] {
  return ensayosData as VideoEnsayo[];
}

export function getEnsayoBySlug(slug: string): VideoEnsayo | undefined {
  return getEnsayos().find((e) => e.slug === slug);
}

export function getAvailableEnsayos(): VideoEnsayo[] {
  return getEnsayos().filter((e) => e.available === true);
}

export function getEnsayosByTheme(theme: EjeTematico): VideoEnsayo[] {
  return getEnsayos().filter((e) => e.theme === theme);
}

// YouTube thumbnail helpers
export function getYouTubeThumbnailUrl(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export function getYouTubeFallbackThumbnailUrl(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

// WCAG 2.1 contrast ratio calculation
function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return [r, g, b];
}

function relativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function wcagContrastRatio(hex1: string, hex2: string): number {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  const l1 = relativeLuminance(r1, g1, b1);
  const l2 = relativeLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
