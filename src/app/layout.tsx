import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Widget } from "@/components/Widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WiseFit | Transforme seu esforço em resultados",
  description: "Transforme seu esforço em resultados - WiseFit, seu parceiro de treino inteligente.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <Widget />
        {children}
      </body>
    </html>
  );
}
