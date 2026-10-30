import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Enterprises | Turnkey Commercial & Government Electrical EPC Infrastructure (Pan-India)",
  description: "Premier pan-India electrical contractor and turnkey EPC infrastructure leader executing high-impact commercial, industrial, and central/state government projects with Class-1 compliance.",
  keywords: "Nexus Enterprises, electrical contractor India, commercial EPC, government tenders, HT LT substations, pan India electrical works, smart city electrification, ISO 9001 certified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
