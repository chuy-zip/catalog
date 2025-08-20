// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demo Catálogo",
  description: "Pagina web demo para catálogo de productos",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Catalogo", "Productos", "web"],
  authors: [{ name: "Ricardo Chuy", url: "https://..." }],
  icons: [
    { rel: "apple-touch-icon", url: "/icons/icon-152x152.png" },
    { rel: "icon", url: "/icons/icon-192x192.png" },
  ],
};

export const viewport = {
  themeColor: "#000000",
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
      <head>
        {/* Meta tags actualizados para PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Demo Catálogo" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}