"use client";

import { WarpBackground } from '@/components/magicui/warp-background';
import Image from 'next/image';
import { BlurFade } from '@/components/magicui/blur-fade';

export function Footer() {
  return (
    <footer className="relative min-h-[400px] flex items-center justify-center overflow-hidden border-0">
      <WarpBackground
        className="absolute inset-0 border-0"
        gridColor="rgba(6, 182, 212, 0.1)"
      >
        <div className="border-0" />
      </WarpBackground>
      <div className="relative container mx-auto px-4 py-16 text-center border-0">
        <BlurFade>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            You&apos;ve reached the edge of our blockchain universe
          </h3>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-3 mx-auto transition-transform hover:scale-110 border-0"
          >
            <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border-0
              flex items-center justify-center transition-all duration-300
              group-hover:bg-light-blue/10">
              <Image
                src="/42favicon.svg"
                alt="42 Logo"
                width={24}
                height={24}
                className="transition-transform group-hover:-translate-y-1"
              />
            </div>
            <span className="text-sm text-white/60 group-hover:text-light-blue transition-colors">
              Back to top
            </span>
          </button>
        </BlurFade>
      </div>
    </footer>
  );
}
