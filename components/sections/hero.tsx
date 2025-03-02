import React from 'react'
import Link from 'next/link'
import { Globe_data } from '@/components/globe_data'
import { stats } from '@/lib/constants'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { BlurFade } from '@/components/magicui/blur-fade'
import { socialLinks } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'
import { HyperText } from '../magicui/hyper-text'
import { SparklesPreview } from '../sparkles'

export function Hero() {
	const discordLink = socialLinks.find(link => link.label === 'Discord')?.href

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden" id='hero'>
			{/* Globe background */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="lg:size-[60%] md:size-[80%] size-full">
					<div className="w-full h-full">
						<Globe_data />
					</div>
				</div>
			</div>

			<div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col h-full">
				<div className="flex-1 flex flex-col justify-center items-center">
					<div className="w-full max-w-5xl mx-auto text-center flex flex-col space-y-12 py-8 mt-24">
						{/* Announcement banner */}
						<BlurFade delay={0}>
							<div className="inline-flex justify-center">
								<div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-300 bg-black/40 backdrop-blur-sm border border-white/10">
									<span className="hidden md:inline">Announcing our next event</span>{' '}
									<Link href={String(discordLink)} target='_blank' className="font-semibold ml-2 text-light-blue">
										Read more <ArrowUpRight className="w-4 h-4 inline" />
									</Link>
								</div>
							</div>
						</BlurFade>

						{/* Heading */}
						<BlurFade delay={0.05}>
							<div className="w-full flex flex-col items-center justify-center">
								<h1 className="text-5xl md:text-7xl font-bold text-center text-white leading-tight">
									The Future of
									<span className='mx-4'>
										<HyperText>Blockchain</HyperText>
									</span> <span className="block md:inline">Education</span>
								</h1>
							</div>
						</BlurFade>



						{/* Stats Grid */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
							{stats.map((stat, idx) => (
								<BlurFade key={stat.label} delay={0.1 * (idx + 1)}>
									<div className="relative flex flex-col items-center p-4 rounded-lg border border-white/10 transition-colors overflow-hidden group">
										{/* Backdrop overlay */}
										<div className="absolute inset-0 bg-black/80 backdrop-blur-lg -z-10"></div>

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

						{/* Contact button */}
						<BlurFade delay={0.2}>

							<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-4">
								<Link href="#contact" className="flex items-center gap-2 px-8 py-3.5 font-medium text-gray-900 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 group">
									<span>Contact Us</span>
								</Link>
							</div>
							<SparklesPreview />
						</BlurFade>
					</div>
				</div>

				{/* Optional: Footer spacing at bottom of viewport */}
				<div className="h-16 md:h-24"></div>
			</div>
		</section>
	)
}