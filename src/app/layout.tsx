import type { Metadata } from "next";
import { Geist } from "next/font/google";
import LenisProvider from "@/components/providers/LenisProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Signage Software & DOOH Network | DMSG",
  description:
    "Deploy programmatic DOOH ads across 130+ prime screens and manage displays with mStream AI CMS. Accredited by Kerala Startup Mission.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dms.family"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logos/dms-symbol.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/logos/dms-symbol.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Digital Signage Software & DOOH Network | DMSG",
    description:
      "Deploy programmatic DOOH ads across 130+ prime screens and manage displays with mStream AI CMS. Accredited by Kerala Startup Mission.",
    url: "https://dms.family",
    siteName: "DMSG",
    images: [
      {
        url: "/logos/dms-logo.svg",
        width: 841,
        height: 150,
        alt: "DMSG Private Limited (dms.family)",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text selection:bg-brand selection:text-white">
        <LenisProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
