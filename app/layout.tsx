import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://www.naturalstupidityapp.com"),

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

  alternates: {
    canonical: "https://www.naturalstupidityapp.com",
  },

  openGraph: {
    title: "Natural Stupidity™ | AI Bad Advice Generator",

    description:
      "The funniest AI-powered bad advice generator on the internet. Ask anything and receive hilariously terrible advice with dangerous confidence.",

    url: "https://www.naturalstupidityapp.com",

    siteName: "Natural Stupidity™",

    images: [
      {
        url: "/og-image.png",
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

    images: ["/og-image.png"],
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
      <body className="min-h-full flex flex-col">
        {children}

        <GoogleAnalytics gaId="G-89GMTK1VGK" />
        <SpeedInsights />
      </body>
    </html>
  );
}