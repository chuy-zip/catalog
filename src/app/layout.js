import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// METADATOS (para SEO, tags <head> normales)
export const metadata = {
  title: "Demo Catálogo",
  description: "Pagina web demo para catálogo de productos",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Catalogo", "Productos", "web"],
  authors: [{ name: "Ricardo Chuy", url: "https://..." }],
  icons: [
    { rel: "apple-touch-icon", url: "/icons/icon-128x128.png" },
    { rel: "icon", url: "/icons/icon-128x128.png" },
  ],
};

// VIEWPORT y THEMECOLOR (separado)
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}