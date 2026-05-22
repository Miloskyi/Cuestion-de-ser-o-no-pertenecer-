"use client";
import { motion } from "framer-motion";

interface TheoryCardProps {
  author: string;
  work: string;
  concept: string;
  description: string;
}

export default function TheoryCard({ author, work, concept, description }: TheoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#141414] border border-[#2A2A2A] p-6 hover:border-[#C8A96E] transition-colors"
      style={{ borderRadius: "2px" }}
    >
      <h3 className="font-playfair text-[#F5F0E8] text-xl mb-1">{author}</h3>
      <p className="text-[#C8A96E] text-xs uppercase tracking-widest mb-3">{work}</p>
      <p className="text-[#A09880] text-sm leading-relaxed mb-4">{description}</p>
      <span
        className="inline-block text-xs border border-[#2A2A2A] text-[#5C5648] px-3 py-1"
        style={{ borderRadius: "2px" }}
      >
        {concept}
      </span>
    </motion.div>
  );
}
