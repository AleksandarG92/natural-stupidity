import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natural Stupidity™",
  description: "The internet's most confident source of terrible advice.",

  openGraph: {
    title: "Natural Stupidity™",
    description: "The internet's most confident source of terrible advice.",
    url: "https://natural-stupidity.vercel.app",
    siteName: "Natural Stupidity™",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Natural Stupidity™",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Natural Stupidity™",
    description: "The internet's most confident source of terrible advice.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}