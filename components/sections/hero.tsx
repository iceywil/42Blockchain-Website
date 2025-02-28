import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Globe_data } from '@/components/globe_data'
import { SparklesPreview } from '@/components/sparkles'
import { stats } from '@/lib/constants'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Arrow } from '@/components/svg/arrow'

export function Hero() {
	return (
		<section className="relative overflow-hidden min-h-[95vh] py-20 flex items-center justify-center container mx-auto px-4" id='hero'>

			<div className="absolute inset-0 opacity-75">
				<div className="w-full h-full">
					<Globe_data />
				</div>
			</div>

			<div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
				<div className="w-full">
					<BlurFade delay={0}>
						<div className="relative mb-16">
							<SparklesPreview />
						</div>
					</BlurFade>
					
					{/* Stats */}
					<div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
						{stats.map((stat, idx) => (
							<BlurFade key={stat.label} delay={0.1 * (idx + 1)}>
								<div className="flex flex-col items-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
									<p className="text-sm text-gray-400 mb-3">{stat.label}</p>
									<div className="flex items-center gap-3">
										<stat.icon className="w-6 h-6 text-light-blue" />
										<div className="text-xl font-medium text-white">
											{typeof stat.value === 'number' ? (
												<NumberTicker
													value={stat.value}
													className="font-medium text-white"
													direction="up"
												/>
											) : (
												stat.value
											)}
										</div>
									</div>
								</div>
							</BlurFade>
						))}
					</div>
					
					<BlurFade delay={0.2}>
						<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
							<Button asChild variant="hero" size="hero">
								<Link href="/#event" className="flex items-center gap-2">
									<span>See last event</span>
									<Arrow />
								</Link>
							</Button>
							<Button asChild variant="hero" size="hero">
								<Link href="/#contact" className="flex items-center gap-2">
									<span>Contact Us</span>
									<Arrow />
								</Link>
							</Button>
						</div>
					</BlurFade>

				</div>
			</div>
		</section>
	)
}

