import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Quiet View — Six quiet windows to the world",
    description: "A quiet place to watch cities live.",
    url: "https://quietview.app",
    siteName: "Quiet View",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiet View — Six quiet windows to the world",
    description: "A quiet place to watch cities live.",
    images: ["/og.jpg"],
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}