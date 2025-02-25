import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Globe_data } from '@/components/globe_data'
import { SparklesPreview } from '@/components/sparkles'

export function Hero() {
	return (
		<section className="relative overflow-hidden h-[95vh] flex items-center justify-center container mx-auto px-4" id='hero'>
			{/* Globe en background */}
			<div className="absolute inset-0 opacity-75">
				<div className="w-full h-full">
					<Globe_data />
				</div>
			</div>

			{/* Contenu centré */}
			<div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
				<div className="w-full">
					<div className="relative mb-16">
						<SparklesPreview />
					</div>
					
					{/*             <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300 mb-8">
              42Blockchain is the largest Blockchain Developer Student&apos;s Union in the world.
              Our members are students and alumni from the programming school 42 École 42,
              aiming to empower our 2000+ members in 30+ countries.
            </p> */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
						<Button asChild variant="outline"
							className="w-auto px-10 py-4 bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:border-light-blue hover:text-light-blue hover:bg-black/40 transition-all duration-300 text-base"
						>
							<Link href="/#event">See last event</Link>
						</Button>
						<Button asChild variant="outline"
							className="w-auto px-10 py-4 bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:border-light-blue hover:text-light-blue hover:bg-black/40 transition-all duration-300 text-base"
						>
							<Link href="/#contact">Contact Us</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

