import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { site } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Christ-Centered Digital Experiences`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Word of God Almighty",
    site.domain,
    "wordofgodalmighty",
    "Christian",
    "faith",
    "Christ-centered",
    "Purity Shield Pro",
    "Christian apparel",
    "faith technology",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | Christ-Centered Digital Experiences`,
    description: site.tagline,
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.domain}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Christ-Centered Digital Experiences`,
    description: site.tagline,
    images: ["/images/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
