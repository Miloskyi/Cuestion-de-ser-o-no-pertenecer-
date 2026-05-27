import { describe, it, expect } from "vitest";
import ensayosData from "../../data/ensayos.json";
import type { EjeTematico } from "../../lib/types";

const REQUIRED_FIELDS = [
  "slug",
  "title",
  "author",
  "duration",
  "theme",
  "available",
  "description",
  "year",
  "youtubeId",
  "synopsis",
  "theoreticalFramework",
  "references",
  "keywords",
] as const;

const VALID_THEMES: EjeTematico[] = [
  "Capital económico y gentrificación",
  "Capital erótico y turismo sexual",
  "Capital social y mercantilización de la memoria",
  "Economía de la visibilidad",
];

describe("ensayos.json schema validation", () => {
  it("should be a non-empty array", () => {
    expect(Array.isArray(ensayosData)).toBe(true);
    expect(ensayosData.length).toBeGreaterThan(0);
  });

  ensayosData.forEach((ensayo, index) => {
    const e = ensayo as Record<string, unknown>;

    describe(`ensayo[${index}] — "${e.title}"`, () => {
      // Presence checks for all required fields
      REQUIRED_FIELDS.forEach((field) => {
        it(`should have field: ${field}`, () => {
          expect(e).toHaveProperty(field);
        });
      });

      // Type checks for string fields
      it("slug should be a non-empty string", () => {
        expect(typeof e.slug).toBe("string");
        expect((e.slug as string).length).toBeGreaterThan(0);
      });

      it("title should be a non-empty string", () => {
        expect(typeof e.title).toBe("string");
        expect((e.title as string).length).toBeGreaterThan(0);
      });

      it("duration should be a non-empty string", () => {
        expect(typeof e.duration).toBe("string");
        expect((e.duration as string).length).toBeGreaterThan(0);
      });

      it("description should be a non-empty string", () => {
        expect(typeof e.description).toBe("string");
        expect((e.description as string).length).toBeGreaterThan(0);
      });

      it("youtubeId should be a string", () => {
        expect(typeof e.youtubeId).toBe("string");
      });

      it("synopsis should be a non-empty string", () => {
        expect(typeof e.synopsis).toBe("string");
        expect((e.synopsis as string).length).toBeGreaterThan(0);
      });

      it("theoreticalFramework should be a non-empty string", () => {
        expect(typeof e.theoreticalFramework).toBe("string");
        expect((e.theoreticalFramework as string).length).toBeGreaterThan(0);
      });

      // author: array of strings
      it("author should be a non-empty array of strings", () => {
        expect(Array.isArray(e.author)).toBe(true);
        expect((e.author as unknown[]).length).toBeGreaterThan(0);
        (e.author as unknown[]).forEach((a) =>
          expect(typeof a).toBe("string")
        );
      });

      // theme: one of the 4 EjeTematico values
      it("theme should be a valid EjeTematico", () => {
        expect(VALID_THEMES).toContain(e.theme);
      });

      // available: boolean
      it("available should be a boolean", () => {
        expect(typeof e.available).toBe("boolean");
      });

      // year: number
      it("year should be a number", () => {
        expect(typeof e.year).toBe("number");
      });

      // references: array of strings
      it("references should be an array of strings", () => {
        expect(Array.isArray(e.references)).toBe(true);
        (e.references as unknown[]).forEach((ref) =>
          expect(typeof ref).toBe("string")
        );
      });

      // keywords: array of strings
      it("keywords should be an array of strings", () => {
        expect(Array.isArray(e.keywords)).toBe(true);
        (e.keywords as unknown[]).forEach((kw) =>
          expect(typeof kw).toBe("string")
        );
      });
    });
  });
});
