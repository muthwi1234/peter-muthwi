import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderCustom } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.profession}`,
  description: siteConfig.bio,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.profession}`,
    description: siteConfig.bio,
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.profession}`,
    description: siteConfig.bio,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProviderCustom>
          <Navbar />
          {children}
          <Footer />
        </ThemeProviderCustom>
      </body>
    </html>
  );
}
