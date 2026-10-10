import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Next.js + Cloudflare Pages — Production Ready Template",
    template: "%s | Next.js + Cloudflare Pages",
  },
  description:
    "Полноценное React-приложение с TypeScript, Tailwind CSS, файловым роутингом, API routes, статическим экспортом и переключением темы — развёрнутое бесплатно на глобальном CDN Cloudflare.",
  keywords: [
    "Next.js",
    "Cloudflare Pages",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Static Export",
    "Edge Runtime",
  ],
  authors: [{ name: "CptEugeneSparrow" }],
  creator: "CptEugeneSparrow",
  publisher: "CptEugeneSparrow",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://test-nextjs-site-9da.pages.dev",
    siteName: "Next.js + Cloudflare Pages",
    title: "Next.js + Cloudflare Pages — Production Ready Template",
    description:
      "Полноценное React-приложение с TypeScript, Tailwind CSS, файловым роутингом, API routes и статическим экспортом",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next.js + Cloudflare Pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js + Cloudflare Pages",
    description: "Production-ready Next.js template on Cloudflare Pages",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}