import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DevHost 2023",
    template: `%s - DevHost 2023`,
  },
  description: "SOSC's flagship student developer meet.",
  keywords: [
    "sosc",
    "Sahyadri Open Source Community",
    "sosc devhost",
    "devhost 2023",
    "DevHost",
    "Devhost",
    "Devhost 2023",
    "DevHost 2023",
  ],
  creator: "so-sc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devhost.sosc.org.in/",
    title: "DevHost 2023",
    description: "SOSC's flagship student developer meet.",
    siteName: "DevHost 2023",
    images: [
      {
        url: "https://devhost.sosc.org.in/og.png",
        width: 1200,
        height: 630,
        alt: "DevHost 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHost 2023",
    description: "SOSC's flagship student developer meet.",
    images: ["https://devhost.sosc.org.in/og.png"],
    creator: "@sahyadri_osc",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
