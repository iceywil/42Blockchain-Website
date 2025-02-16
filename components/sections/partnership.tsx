"use client";

import { useRef, useEffect } from 'react'
import { partnerLogos } from '@/lib/constants'
import Image from 'next/image'

function usePartnerCarousel() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const content = container.innerHTML
    container.innerHTML += content
  }, [])

  return ref
}

export function Partnership() {
  const carouselRef = usePartnerCarousel()

  return (
    <section className="padding-y">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div
          ref={carouselRef}
          className="flex items-center space-x-12 overflow-x-hidden whitespace-nowrap"
        >
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 transition-transform duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                className="h-10 w-auto"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

