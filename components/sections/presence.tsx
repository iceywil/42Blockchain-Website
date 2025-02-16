import React from 'react'
import Image from 'next/image'

export function Presence() {
  return (
    <section className="padding-y " id='about'>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative max-md:hidden">
            <Image unoptimized src="/42blockchain_logo.gif" alt="42Blockchain Logo" width={550} height={500} />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Global Presence, Local Impact</h2>
            <p className="text-gray-300">
              Our network spans across 54 campuses worldwide, fostering a truly global community
              of blockchain enthusiasts and developers. From Paris to San Francisco,
              Seoul to São Paulo, we&apos;re cultivating innovation hubs that drive the future of decentralized technologies.
            </p>
            <ul className="space-y-4">
              {['International Collaboration', 'Diverse Perspectives', 'Global Hackathons', 'Cross-Cultural Learning'].map((item) => (
                <li key={item} className="flex items-center">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="h-6 w-6 text-light-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
