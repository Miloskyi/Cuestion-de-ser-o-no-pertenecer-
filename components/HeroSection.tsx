"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  function handleScroll() {
    const el = document.getElementById("ensayos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Presentación del proyecto"
    >
      {/* Background image */}
      <Image
        src="/images/cap-1.png"
        alt="Medellín contemporánea — imagen del proyecto"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Dark overlay so text stays readable */}
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="text-[#C8A96E] text-xs uppercase tracking-[0.3em] mb-6"
        >
          Seminario de Cibercultura — Politécnico Colombiano Jaime Isaza Cadavid, 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="font-playfair text-[#F5F0E8] leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          ¿Cuestión de Ser
          <br />
          <span className="text-[#C8A96E]">o No Pertenecer?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          className="text-[#A09880] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Imaginarios urbanos, capitales simbólicos y formas de exclusión en
          Medellín contemporánea
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        >
          <button
            onClick={handleScroll}
            className="inline-block text-sm text-[#0A0A0A] bg-[#C8A96E] px-8 py-3 uppercase tracking-widest hover:bg-[#F5F0E8] transition-colors"
            style={{ borderRadius: "2px" }}
          >
            Ver los ensayos
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
