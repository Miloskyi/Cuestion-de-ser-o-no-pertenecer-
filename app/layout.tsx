import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cuestión de Ser o No Pertenecer — Seminario de Cibercultura",
    template: "%s | Cuestión de Ser o No Pertenecer",
  },
  description:
    "Plataforma académica y audiovisual del Seminario de Cibercultura — Politécnico Colombiano Jaime Isaza Cadavid, 2026. Video ensayos sobre imaginarios urbanos y exclusión en la ciudad contemporánea.",
  openGraph: {
    siteName: "Cuestión de Ser o No Pertenecer",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#0A0A0A] text-[#F5F0E8] font-inter">
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
