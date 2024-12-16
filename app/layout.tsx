import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "42 Blockchain",
  description: "The largest Blockchain Developer Student's Union",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/42-favicon.svg" />
      </head>
      <body
        className={`${inter.className} bg-dark-blue text-white min-h-screen relative `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
