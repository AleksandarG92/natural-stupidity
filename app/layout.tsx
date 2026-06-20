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
  title: "Natural Stupidity™ | AI Bad Advice Generator",

  description:
    "The funniest AI-powered bad advice generator on the internet. Ask anything and receive hilariously terrible advice with dangerous confidence.",

  keywords: [
    "AI",
    "Artificial Intelligence",
    "Bad Advice",
    "Funny AI",
    "Humor",
    "Comedy",
    "Satire",
    "Joke Generator",
    "Natural Stupidity",
    "Terrible Advice",
    "Funny Website",
  ],

  authors: [
    {
      name: "Aleksandar Gojković",
    },
  ],

  creator: "Aleksandar Gojković",

  openGraph: {
    title: "Natural Stupidity™ | AI Bad Advice Generator",

    description:
      "The funniest AI-powered bad advice generator on the internet. Ask anything and receive hilariously terrible advice with dangerous confidence.",

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

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Natural Stupidity™ | AI Bad Advice Generator",

    description:
      "The funniest AI-powered bad advice generator on the internet. Ask anything and receive hilariously terrible advice with dangerous confidence.",

    images: ["/opengraph-image"],
  },

  metadataBase: new URL(
    "https://natural-stupidity.vercel.app"
  ),
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}