// lib/types.ts

export type EjeTematico =
  | "Capital económico y gentrificación"
  | "Capital erótico y turismo sexual"
  | "Capital social y mercantilización de la memoria"
  | "Economía de la visibilidad";

export interface VideoEnsayo {
  slug: string;
  title: string;
  author: string[];
  duration: string;
  theme: EjeTematico;
  available: boolean;
  description: string;
  year: number;
  youtubeId: string;
  synopsis: string;
  theoreticalFramework: string;
  references: string[];
  keywords: string[];
}
