"use client";

import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Script from "next/script";

export default function MerchPage() {
  return (
    <>
      {/* Load 3shop scripts using Next.js Script component */}
      <Script id="3shop-global" strategy="beforeInteractive">
        {`var global = global || window;
        window.__3SHOP_APP_ID__="55d104d6-75c4-4a80-ab7c-29822d6652b4";
        window.__3SHOP_NETWORK__="XRPLEDGER";`}
      </Script>
      
      <Script 
        src="https://cdn.3shop.co/app/index.js"
        type="module" 
        strategy="afterInteractive"
      />
      
      <section className="min-h-screen bg-black text-white">
        <div className="relative w-full min-h-screen">
          <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
            <BlurFade>
              <div className="mb-6">
                <Image 
                  src="/42Blockchain-logo.svg" 
                  alt="42Blockchain Logo" 
                  width={200} 
                  height={50} 
                />
              </div>
            </BlurFade>
            
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
                Merch Page
              </h1>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl text-center mb-10">
                Exclusive merchandise for token holders
              </p>
            </BlurFade>
            
            <BlurFade delay={0.3}>
              {/* White background for the 3shop section */}
              <div className="p-6 rounded-lg bg-white text-black max-w-3xl w-full">
                {/* 3shop token gating module */}
                <div id="3shop-app" className="mb-8"></div>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.4}>
              <div className="mt-8 p-6 rounded-lg bg-black/20 border border-white/10 max-w-3xl w-full">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Why Authenticate?</h2>
                <p className="text-gray-300 mb-6">
                  Token holders get exclusive access to limited-edition 42Blockchain merchandise. 
                  Authenticate above to view and purchase our collection.
                </p>
                <div className="flex justify-center">
                  <Button asChild variant="hero" size="hero">
                    <Link href="/" className="flex items-center gap-2">
                      <span>Return to Homepage</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
}