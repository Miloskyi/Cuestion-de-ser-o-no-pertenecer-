"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ReferenceListProps {
  references: string[];
  defaultOpen?: boolean;
}

export default function ReferenceList({ references, defaultOpen = false }: ReferenceListProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#2A2A2A]" style={{ borderRadius: "2px" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#1E1E1E] transition-colors"
      >
        <span className="text-[#F5F0E8] text-sm font-medium uppercase tracking-widest">
          Referencias bibliográficas ({references.length})
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[#A09880]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#A09880]" />
        )}
      </button>
      {isOpen && (
        <ol className="px-4 pb-4 space-y-2 border-t border-[#2A2A2A]">
          {references.map((ref, i) => (
            <li key={i} className="text-[#A09880] text-sm leading-relaxed pt-2">
              {ref}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
