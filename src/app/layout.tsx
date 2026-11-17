import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import "./globals.css";

const clash = localFont({ src: [{ path: "../../public/fonts/clash-grotesk-400.woff2", weight: "400" }, { path: "../../public/fonts/clash-grotesk-500.woff2", weight: "500" }], variable: "--font-clash", display: "swap" });
const cabinet = localFont({ src: [{ path: "../../public/fonts/cabinet-grotesk-400.woff2", weight: "400" }, { path: "../../public/fonts/cabinet-grotesk-500.woff2", weight: "500" }], variable: "--font-cabinet", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "SOLVERRA ESTATES | A considered way to live", template: "%s | SOLVERRA ESTATES" },
  description: "An architectural portfolio of thoughtfully imagined residences, distinctive developments, and considered spaces by SOLVERRA ESTATES.",
  openGraph: { title: "SOLVERRA ESTATES", description: "A considered way to live. Explore our architectural concepts and imagined residences.", type: "website", locale: "en_US", siteName: "SOLVERRA ESTATES" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${clash.variable} ${cabinet.variable}`}><a className="skip-link" href="#main">Skip to content</a><Header />{children}</body></html>;
}
