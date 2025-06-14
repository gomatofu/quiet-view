import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://quietview.app"),
  title: "Quiet View — Six quiet windows to the world",
  description: "A quiet place to watch cities live. Six windows. One quiet world. Watch the present moment unfold across cities.",
  keywords: ["live cameras", "world view", "quiet", "meditation", "cities", "real-time"],
  authors: [{ name: "Quiet View" }],
  creator: "Quiet View",
  publisher: "Quiet View",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Quiet View — Six quiet windows to the world",
    description: "A quiet place to watch cities live. Watch the present moment unfold across cities.",
    url: "https://quietview.app",
    siteName: "Quiet View",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://quietview.app/og.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet View - Six windows. One quiet world.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiet View — Six quiet windows to the world",
    description: "A quiet place to watch cities live. Watch the present moment unfold across cities.",
    images: ["https://quietview.app/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://quietview.app",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        {children}
      </body>
    </html>
  );
}