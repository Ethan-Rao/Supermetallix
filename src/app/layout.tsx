import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuperMetalix — Superhard Metal Boride Materials",
  description:
    "SuperMetalix develops Tetride®, a patented superhard material with hardness approaching diamond. Commercializing 15+ years of UCLA research for cutting tools, abrasives, and more.",
  openGraph: {
    title: "SuperMetalix — Commercializing the World's Hardest Metal",
    description:
      "Tetride® superhard metal boride formulations. Patented. Scalable. Investment-ready.",
    url: "https://supermetalix.com",
    siteName: "SuperMetalix",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#050810] text-[#f9fafb] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
