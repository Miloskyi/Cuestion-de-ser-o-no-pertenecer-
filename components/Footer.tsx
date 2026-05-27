export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0A0A0A] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-[#C8A96E] text-lg mb-3">
              Cuestión de Ser o No Pertenecer
            </h3>
            <p className="text-[#A09880] text-sm leading-relaxed">
              Imaginarios urbanos, capitales simbólicos y formas de exclusión en
              la ciudad contemporánea.
            </p>
          </div>
          <div>
            <h4 className="text-[#F5F0E8] text-sm font-medium uppercase tracking-widest mb-3">
              Proyecto
            </h4>
            <ul className="space-y-1 text-[#A09880] text-sm">
              <li>Seminario de Cibercultura</li>
              <li>Politécnico Colombiano Jaime Isaza Cadavid</li>
              <li>Medellín, Colombia — 2026</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#F5F0E8] text-sm font-medium uppercase tracking-widest mb-3">
              Derechos
            </h4>
            <p className="text-[#5C5648] text-sm leading-relaxed">
              Contenido académico producido por estudiantes del Seminario de
              Cibercultura. Todos los derechos reservados a sus respectivos
              autores, 2026.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#2A2A2A] text-center text-[#5C5648] text-xs">
          Seminario de Cibercultura — Politécnico Colombiano Jaime Isaza Cadavid — 2026
        </div>
      </div>
    </footer>
  );
}
