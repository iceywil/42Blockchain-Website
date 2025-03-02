"use client";

import { useState } from "react";
import Image from "next/image";
import {
	Globe,
	Users,
	Code2,
	Lightbulb,
	MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Presence() {
	const [activeFeature, setActiveFeature] = useState<number | null>(null);

	const features = [
		{
			id: 1,
			title: "International Collaboration",
			description: "Connect with developers across continents on shared projects and initiatives",
			icon: Globe,
			color: "from-light-blue to-blue-400"
		},
		{
			id: 2,
			title: "Diverse Perspectives",
			description: "Learn from varied cultural approaches to blockchain technology and development",
			icon: Users,
			color: "from-teal-400 to-emerald-500"
		},
		{
			id: 3,
			title: "Global Hackathons",
			description: "Participate in worldwide competitions with teams from multiple campuses",
			icon: Code2,
			color: "from-indigo-400 to-purple-500"
		},
		{
			id: 4,
			title: "Cross-Cultural Learning",
			description: "Exchange knowledge across cultures and educational approaches",
			icon: Lightbulb,
			color: "from-amber-400 to-orange-500"
		}
	];

	const campusHighlights = [
		{ name: "Paris", count: 450 },
		{ name: "San Francisco", count: 320 },
		{ name: "Seoul", count: 280 },
		{ name: "Tokyo", count: 210 },
		{ name: "Sao Paulo", count: 190 },
		{ name: "Berlin", count: 170 }
	];

	return (
		<section className="py-32" id="about">
			<div className="container mx-auto px-6 max-w-6xl">
				{/* Header */}
				<div className="mb-24 max-w-3xl">
					<h2 className="text-5xl font-bold mb-8 leading-tight">
						Global Presence,{" "}
						<span className="bg-gradient-to-r from-light-blue to-blue-400 bg-clip-text text-transparent">
							Local Impact
						</span>
					</h2>
					<p className="text-xl text-gray-300 leading-relaxed">
						Our network spans across 54 campuses worldwide, fostering a truly global community
						of blockchain enthusiasts and developers.
					</p>
				</div>

				{/* Main content grid */}
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					{/* Left side - 3D logo */}

					<div className="space-y-6">
						{features.map((feature) => (
							<Card
								key={feature.id}
								className={`bg-black/20 backdrop-blur-md border-none transition-all duration-300 overflow-hidden
                  ${activeFeature === feature.id ? 'border-white/10' : ''}
                `}
								onMouseEnter={() => setActiveFeature(feature.id)}
								onMouseLeave={() => setActiveFeature(null)}
							>
								<CardContent className="p-6">
									<div className="flex items-start gap-5">
										<div className={`rounded-full p-3 bg-gradient-to-br ${feature.color} bg-opacity-10 backdrop-blur-xl`}>
											<feature.icon className="h-6 w-6 text-white" />
										</div>
										<div className="space-y-2">
											<h3 className="text-xl font-medium text-white">{feature.title}</h3>
											<p className="text-gray-400">{feature.description}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}

					</div>




					{/* Right side - Features */}
					<div className="relative flex justify-center lg:justify-start">
						<div className="relative h-[500px] w-[500px]">
							<Image
								src="/42blockchain_logo.gif"
								alt="42Blockchain Logo"
								fill
								className="object-contain"
								unoptimized
							/>
						</div>

						{/* Campus badges */}
						<div className="absolute inset-0 w-full h-full">
							{campusHighlights.map((campus, index) => (
								<Badge
									key={campus.name}
									className={`absolute bg-black/60 backdrop-blur-md border-white/10 text-white px-3 py-1.5
                    ${index === 0 ? 'top-10 right-5' : ''}
                    ${index === 1 ? 'bottom-20 left-0' : ''}
                    ${index === 2 ? 'top-1/3 left-10' : ''}
                    ${index === 3 ? 'top-20 left-1/4' : ''}
                    ${index === 4 ? 'bottom-10 right-1/4' : ''}
                    ${index === 5 ? 'top-1/2 right-0' : ''}
                  `}
								>
									<div className="flex items-center gap-1.5">
										<MapPin className="h-3 w-3 text-light-blue" />
										<span className="mr-1">{campus.name}</span>
										<span className="text-xs text-gray-400">{campus.count}+</span>
									</div>
								</Badge>
							))}
						</div>
					</div>



				</div>
			</div>
		</section>
	);
}