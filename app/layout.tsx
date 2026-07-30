import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Espaço REVITTALE | Massoterapia, Estética, Fisioterapia e Pilates - Dois Irmãos/RS",
  description:
    "No Espaço REVITTALE proporcionamos bem-estar e qualidade de vida através de Massoterapia, Estética Corporal e Facial, Fisioterapia e Pilates. Agende sua avaliação em Dois Irmãos/RS.",
  keywords: [
    "massoterapia",
    "estética corporal",
    "estética facial",
    "fisioterapia",
    "pilates",
    "Dois Irmãos",
    "bem-estar",
    "REVITTALE",
  ],
  openGraph: {
    title: "Espaço REVITTALE | Corpo & Mente",
    description:
      "Bem-estar e qualidade de vida com Massoterapia, Estética, Fisioterapia e Pilates em Dois Irmãos/RS.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}