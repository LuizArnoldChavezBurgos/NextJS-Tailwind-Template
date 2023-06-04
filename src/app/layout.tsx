import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mesa para 2",
  description:
    "Mesa para 2 es una plataforma de restaurantes para poder conseguir amigos y conocer nuevos lugares donde comer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="h-full w-screen bg-[#F0F0F0]">{children}</body>
    </html>
  );
}
