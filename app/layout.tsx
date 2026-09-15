import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Trésor ALADE | AI & Data Engineer",
  description:
    "Portfolio de Trésor ALADE, AI & Data Engineer spécialisé en intelligence artificielle, ingénierie des données et automatisation.",
  icons: {
    icon: "/profile.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden min-h-screen scroll-smooth">
        <LanguageProvider>
          <Nav />
          <main className="w-full overflow-hidden">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
