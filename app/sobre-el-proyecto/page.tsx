import type { Metadata } from "next";
import TheoryCard from "@/components/TheoryCard";

export const metadata: Metadata = {
  title: "Sobre el Proyecto",
  description:
    "Plataforma colectiva de video ensayos del Seminario de Cibercultura — Politécnico Colombiano Jaime Isaza Cadavid, 2026. Reflexiones sobre estándares utópicos de éxito e imaginarios urbanos en Medellín.",
  openGraph: {
    title: "Sobre el Proyecto — Cibercultura Medellín 2026",
    description:
      "Una plataforma colectiva que reúne video ensayos sobre cómo los estándares utópicos de éxito, reconocimiento y visibilidad configuran imaginarios urbanos y formas de pertenencia en Medellín.",
    type: "website",
  },
};

const TEORICOS = [
  {
    author: "Pierre Bourdieu",
    work: "La Distinción (1979)",
    concept: "Capital simbólico",
    description:
      "Bourdieu aporta el concepto de capital simbólico para analizar cómo los distintos tipos de capital —económico, social, cultural— operan como mecanismos de distinción y exclusión en el espacio urbano. Su teoría de los campos permite entender Medellín como un espacio de lucha por la legitimidad y la pertenencia.",
  },
  {
    author: "Catherine Hakim",
    work: "Erotic Capital (2011)",
    concept: "Capital erótico",
    description:
      "Hakim introduce el concepto de capital erótico para examinar cómo la atracción física y la sexualidad se convierten en recursos sociales. En el contexto de Medellín, permite analizar la sexualización de la ciudad para el turismo internacional y la instrumentalización del cuerpo como capital urbano.",
  },
  {
    author: "Byung-Chul Han",
    work: "La sociedad de la transparencia (2012)",
    concept: "Sociedad del rendimiento",
    description:
      "Han aporta la crítica a la sociedad de la transparencia y el rendimiento. Su análisis de cómo el sujeto contemporáneo se convierte en empresario de sí mismo ilumina las dinámicas de las identidades aspiracionales en redes sociales y la economía de la visibilidad en Medellín.",
  },
  {
    author: "Armando Silva",
    work: "Imaginarios urbanos (2006)",
    concept: "Imaginarios urbanos",
    description:
      "Silva ofrece las herramientas conceptuales para analizar cómo las ciudades son construidas imaginariamente por sus habitantes. Sus categorías de ciudadanos, otredades y marcas urbanas permiten examinar cómo Medellín es percibida, narrada y deseada desde dentro y desde fuera.",
  },
  {
    author: "Aníbal Quijano",
    work: "Colonialidad del poder (2000)",
    concept: "Colonialidad del poder",
    description:
      "Quijano contextualiza el fenómeno desde la colonialidad del poder, mostrando cómo las jerarquías raciales y sociales heredadas del colonialismo persisten en la organización del espacio urbano latinoamericano y en la distribución desigual de los capitales simbólicos.",
  },
  {
    author: "Walter Mignolo",
    work: "Desobediencia epistémica (2010)",
    concept: "Colonialidad del saber",
    description:
      "Mignolo complementa el análisis con la noción de colonialidad del saber, cuestionando los marcos epistemológicos desde los que se construye el conocimiento sobre las ciudades latinoamericanas. Su propuesta orienta la perspectiva crítica y decolonial del proyecto.",
  },
];

const FENOMENOS = [
  { icon: "💰", label: "Capital económico y gentrificación" },
  { icon: "💼", label: "Capital erótico y turismo sexual" },
  { icon: "🌿", label: "Cultura del consumo de drogas" },
  { icon: "📱", label: "Economía de la visibilidad en redes sociales" },
  { icon: "🏙️", label: "Estéticas del éxito urbano" },
  { icon: "🤝", label: "Capital social y pertenencia" },
  { icon: "🏘️", label: "Gentrificación y desplazamiento" },
  { icon: "✨", label: "Reconocimiento y visibilidad" },
];

export default function SobreElProyectoPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 pb-16 border-b border-[#2A2A2A]">
        <p className="text-[#C8A96E] text-xs uppercase tracking-[0.3em] mb-4">
          Seminario de Cibercultura — 2026
        </p>
        <h1 className="font-playfair text-[#F5F0E8] text-4xl md:text-5xl mb-6 leading-tight">
          Sobre el Proyecto
        </h1>
        <p className="text-[#A09880] text-lg leading-relaxed max-w-2xl">
          Una plataforma colectiva que reúne video ensayos producidos por
          estudiantes del Politécnico Colombiano Jaime Isaza Cadavid sobre los
          imaginarios urbanos y las formas de pertenencia en Medellín
          contemporánea.
        </p>
      </div>

      {/* Qué es */}
      <section aria-labelledby="proyecto-heading" className="mb-16">
        <h2
          id="proyecto-heading"
          className="font-playfair text-[#F5F0E8] text-2xl mb-6"
        >
          ¿Qué es esta plataforma?
        </h2>
        <div className="space-y-4 text-[#A09880] leading-relaxed">
          <p>
            Esta plataforma es un repositorio colectivo de video ensayos
            producidos por estudiantes del Seminario de Cibercultura del
            Politécnico Colombiano Jaime Isaza Cadavid. Cada pieza es una
            investigación audiovisual independiente que aborda, desde distintas
            perspectivas y metodologías, una pregunta común: ¿cómo ciertos
            estándares utópicos de éxito, reconocimiento y visibilidad han
            configurado los imaginarios urbanos que atraviesan la vida
            contemporánea de Medellín?
          </p>
          <p>
            No se trata de un único proyecto ni de una sola voz. Son múltiples
            miradas, múltiples autores, múltiples cruces temáticos que
            convergen en una misma pregunta sobre la ciudad y sus formas de
            incluir y excluir.
          </p>
        </div>
      </section>

      {/* La pregunta central */}
      <section aria-labelledby="pregunta-heading" className="mb-16">
        <h2
          id="pregunta-heading"
          className="font-playfair text-[#F5F0E8] text-2xl mb-6"
        >
          La pregunta que nos convoca
        </h2>
        <div className="space-y-4 text-[#A09880] leading-relaxed">
          <p>
            Medellín ha construido una narrativa de transformación que proyecta
            estándares utópicos de éxito, reconocimiento y visibilidad sobre la
            vida cotidiana de sus habitantes. Esos estándares —encarnados en el
            cuerpo, el consumo, la imagen digital y el acceso al espacio
            urbano— configuran imaginarios que atraviesan todas las capas de la
            ciudad contemporánea.
          </p>
          <blockquote className="border-l-2 border-[#C8A96E] pl-6 my-8">
            <p className="font-playfair text-[#F5F0E8] text-xl italic leading-relaxed">
              &ldquo;¿Cómo estos estándares producen formas de pertenencia
              frágiles, aspiracionales o excluyentes dentro de la ciudad?&rdquo;
            </p>
          </blockquote>
          <p>
            El proyecto analiza fenómenos como el capital social, el capital
            económico, el capital erótico, el turismo sexual, la cultura del
            consumo de drogas, la gentrificación, la economía de la visibilidad
            en redes sociales y las estéticas del éxito urbano, entre otros
            posibles cruces. El objetivo es identificar cómo estas dinámicas
            producen formas de pertenencia frágiles, aspiracionales o
            excluyentes dentro de la ciudad.
          </p>
        </div>
      </section>

      {/* Fenómenos bajo análisis */}
      <section aria-labelledby="fenomenos-heading" className="mb-16">
        <h2
          id="fenomenos-heading"
          className="font-playfair text-[#F5F0E8] text-2xl mb-8"
        >
          Fenómenos bajo análisis
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {FENOMENOS.map((f) => (
            <div
              key={f.label}
              className="bg-[#141414] border border-[#2A2A2A] p-4 text-center hover:border-[#C8A96E] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              <span className="text-2xl block mb-2" aria-hidden="true">
                {f.icon}
              </span>
              <p className="text-[#A09880] text-xs leading-snug">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ser para no pertenecer */}
      <section aria-labelledby="concepto-heading" className="mb-16">
        <h2
          id="concepto-heading"
          className="font-playfair text-[#F5F0E8] text-2xl mb-6"
        >
          La noción de &ldquo;ser para no pertenecer&rdquo;
        </h2>
        <div className="space-y-4 text-[#A09880] leading-relaxed">
          <p>
            Uno de los conceptos que atraviesa varios de los ensayos es la
            noción de &ldquo;ser para no pertenecer&rdquo;: la condición de
            quienes habitan la ciudad, participan de sus dinámicas y aspiran a
            sus estándares, pero no son reconocidos como sujetos plenos de
            pertenencia. Es una condición existencial producida por los mismos
            imaginarios que prometen inclusión.
          </p>
          <blockquote className="border-l-2 border-[#C8A96E] pl-6 my-8">
            <p className="font-playfair text-[#F5F0E8] text-xl italic leading-relaxed">
              &ldquo;La sociedad de la transparencia es una sociedad del
              rendimiento y la positividad. Cada uno es empresario de
              sí mismo.&rdquo;
            </p>
            <footer className="mt-3 text-[#C8A96E] text-xs uppercase tracking-widest">
              Byung-Chul Han, La sociedad de la transparencia (2012)
            </footer>
          </blockquote>
          <p>
            En Medellín, esta lógica del rendimiento se articula con las
            jerarquías de clase, raza y género, produciendo sujetos que existen
            en la ciudad pero que no logran acceder a sus códigos de
            reconocimiento y pertenencia.
          </p>
        </div>
      </section>

      {/* Marco teórico */}
      <section aria-labelledby="marco-heading" className="mb-16">
        <h2
          id="marco-heading"
          className="font-playfair text-[#F5F0E8] text-2xl mb-4"
        >
          Marco teórico
        </h2>
        <p className="text-[#A09880] text-sm leading-relaxed mb-8">
          Los ensayos se apoyan en distintas tradiciones teóricas según el
          fenómeno que abordan. Estos son algunos de los autores que orientan
          el proyecto colectivo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEORICOS.map((t) => (
            <TheoryCard
              key={t.author}
              author={t.author}
              work={t.work}
              concept={t.concept}
              description={t.description}
            />
          ))}
        </div>
      </section>

      {/* Contexto institucional */}
      <section aria-labelledby="institucional-heading">
        <h2
          id="institucional-heading"
          className="font-playfair text-[#F5F0E8] text-2xl mb-6"
        >
          Contexto institucional
        </h2>
        <div className="bg-[#141414] border border-[#2A2A2A] p-6" style={{ borderRadius: "2px" }}>
          <p className="text-[#A09880] leading-relaxed">
            Este repositorio es el resultado del trabajo del{" "}
            <span className="text-[#F5F0E8]">Seminario de Cibercultura</span>{" "}
            del{" "}
            <span className="text-[#F5F0E8]">
              Politécnico Colombiano Jaime Isaza Cadavid
            </span>
            , Medellín, 2026. Los video ensayos son producciones académicas
            independientes de cada estudiante. Los derechos de cada pieza
            pertenecen a sus respectivos autores.
          </p>
        </div>
      </section>
    </main>
  );
}
