import React from 'react'
import Image from 'next/image'
import { BlurFade } from '@/components/magicui/blur-fade'

export function Presence() {
	return (
		<section className="padding-y" id='about'>
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="relative max-md:mb-20">
						<Image unoptimized src="/42blockchain_logo.gif" alt="42Blockchain Logo" width={550} height={500} />
					</div>
					<div className="space-y-8">
						<BlurFade inView>
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
								Global Presence, Local Impact
							</h2>
						</BlurFade>
						<BlurFade inView>
							<p className="text-gray-300 text-lg">
								Our network spans across the 54 campuses of 42 School around the world, a free elite coding program based on peer-to-peer learning without teachers. 
								<br /> <br />
								Fostering a truly global community of blockchain enthusiasts and developers. 
								<br /> <br />
								From Paris to San Francisco, Seoul to São Paulo, we&apos;re cultivating innovation hubs that drive the future of decentralized technologies.
							</p>
						</BlurFade>
						<BlurFade inView delay={0.2}>
							<ul className="space-y-4">
								{['International Collaborations', 'Career Development', 'Cross-Cultural Learning', 'Startup Incubation', 'Global Hackathons'].map((item) => (
									<li key={item} className="flex items-center">
										<CheckIcon />
										{item}
									</li>
								))}
							</ul>
						</BlurFade>
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
