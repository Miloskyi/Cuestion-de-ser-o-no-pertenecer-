import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[#C8A96E] text-xs uppercase tracking-[0.3em] mb-4">
          Error 404
        </p>
        <h1 className="font-playfair text-[#F5F0E8] text-4xl mb-4">
          Página no encontrada
        </h1>
        <p className="text-[#A09880] leading-relaxed mb-8">
          El ensayo o página que buscas no existe o ha sido movido. Puedes
          regresar al catálogo para explorar los video ensayos disponibles.
        </p>
        <Link
          href="/ensayos"
          className="inline-block text-sm text-[#0A0A0A] bg-[#C8A96E] px-6 py-3 uppercase tracking-widest hover:bg-[#F5F0E8] transition-colors"
          style={{ borderRadius: "2px" }}
        >
          Ver catálogo de ensayos
        </Link>
      </div>
    </main>
  );
}
