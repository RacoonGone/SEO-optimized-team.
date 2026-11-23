import type { Metadata } from "next";
import {websiteConfig} from "@/lib/seo";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {JsonLd} from "@/components/seo/JsonLd";
import {organizationSchema} from "@/lib/seo/schemas";
import SmoothScroll from "@/components/animation/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(websiteConfig.url),
  title: {
    default: `${websiteConfig.name} | main tagline`,
    template: `%s | ${websiteConfig.name}`
    // template default name other pages
  },
  description: websiteConfig.description,
  openGraph: {
    type: "website",
    locale: websiteConfig.locale,
    url: websiteConfig.url,
    siteName: websiteConfig.name,
    title: websiteConfig.name,
    description: websiteConfig.description,
    images: [{ url: websiteConfig.ogImage, width: 1200, height: 630, alt: websiteConfig.name} ]
  },
  twitter: {
    card: "summary_large_image",
    title: websiteConfig.name,
    description: websiteConfig.description,
    images: [websiteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>

        <JsonLd data={organizationSchema}/>
      </body>
    </html>
  );
}
