"use client";

import { partnerLogos } from '@/lib/constants'
import Image from 'next/image'
import { Marquee } from '@/components/magicui/marquee'
import { BlurFade } from '@/components/magicui/blur-fade'

export function Partnership() {
  return (
    <section className="padding-y bg-black/30 backdrop-blur-sm" id="partners">
      <div className="container mx-auto px-4">
        <BlurFade inView>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Partners
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Working together to advance blockchain education
            </p>
          </div>
        </BlurFade>
        <BlurFade inView>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8">
            <Marquee 
              className="h-[60px]"
            >
              {partnerLogos.map((partner, index) => (
                <div 
                  key={`${partner.alt}-${index}`}
                  className="flex-shrink-0 px-8 flex items-center"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-10 w-auto object-contain"
                    priority
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

