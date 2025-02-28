import React from 'react'
import { socialLinks } from '@/lib/constants'
import { BlurFade } from '@/components/magicui/blur-fade'

export function Contact() {
  return (
    <section className="padding-y relative" id='contact'>
      <div className="container mx-auto px-4 relative">
        <BlurFade inView>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Connect with us and be part of the future of blockchain
            </p>
          </div>
        </BlurFade>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {socialLinks.map(({ label, href, icon }, index) => (
            <BlurFade key={label} delay={index * 0.1} inView>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-8 py-3 rounded-lg
                  bg-black/20 backdrop-blur-sm border border-white/10
                  hover:border-light-blue/50 hover:bg-light-blue/10
                  transition-all duration-300"
              >
                <div className="text-xl text-white/60 group-hover:text-light-blue transition-colors">
                  {icon}
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

