// app/layout.tsx
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import Script from "next/script"

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: "42Blockchain",
  description: "42Blockchain is the largest Blockchain Developer Student's Union, connecting 2000+ members across 54 campuses worldwide. Learn blockchain development, join hackathons, and connect with industry partners.",
  keywords: "blockchain, developer, student union, 42 school, web3, cryptocurrency, blockchain education, blockchain development",
  authors: [{ name: "42Blockchain" }],
  creator: "42Blockchain",
  publisher: "42Blockchain",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://42blockchain.com',
    title: "42Blockchain | Largest Blockchain Developer Student's Union",
    description: "42Blockchain is the largest Blockchain Developer Student's Union, connecting 2000+ members across 54 campuses worldwide. Learn blockchain development, join hackathons, and connect with industry partners.",
    siteName: '42Blockchain',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '42Blockchain'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "42Blockchain | Largest Blockchain Developer Student's Union",
    description: "42Blockchain is the largest Blockchain Developer Student's Union, connecting 2000+ members across 54 campuses worldwide.",
    images: ['/twitter-image.jpg']
  },
  alternates: {
    canonical: 'https://42blockchain.com'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/42favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${inter.className} bg-black text-white min-h-screen relative`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* Google Analytics - Replace with your actual Google Analytics ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}