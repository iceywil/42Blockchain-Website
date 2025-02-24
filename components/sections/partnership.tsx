"use client";

import { partnerLogos } from '@/lib/constants'
import Image from 'next/image'

export function Partnership() {
  return (
    <section className="padding-y" id="partners">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="relative overflow-hidden h-[60px]">
          <div className="w-full h-full xl:flex xl:flex-wrap xl:justify-center xl:h-auto">
            <div className="flex h-full items-center xl:flex-wrap xl:justify-center xl:h-auto animate-partner-scroll hover:animate-pause xl:animate-none translate-x-[35%] xl:translate-x-0">
              {partnerLogos.map((partner, index) => (
                <div 
                  key={`${partner.alt}-${index}`}
                  className="flex-shrink-0 px-8 xl:px-6 flex items-center xl:mb-8"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-10 w-auto object-contain"
                    priority
                  />
                </div>
              ))}
              {/* Mobile anim */}
              <div className="xl:hidden h-full flex items-center">
                {partnerLogos.map((partner, index) => (
                  <div 
                    key={`${partner.alt}-copy-${index}`}
                    className="flex-shrink-0 px-8 xl:px-6 flex items-center"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      className="h-10 w-auto object-contain"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

