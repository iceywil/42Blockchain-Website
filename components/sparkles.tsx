"use client";
import React from "react";
import { Text_Effect } from '@/components/text_effect'
//import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
	return (
		<div className=" relative md:mt-16 bottom-0 w-full flex flex-col items-center justify-center overflow-hidden">
			<div className="py-4">
				<Text_Effect />
			</div>
			<div className="w-full max-w-3xl py-2 relative">
				{/* Gradients */}
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-light-blue to-transparent h-[2px] w-3/4 blur-sm
          animate-gradient-x motion-reduce:animate-none" />
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-light-blue to-transparent h-px w-3/4
          animate-gradient-x motion-reduce:animate-none animate-pulse" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent h-[5px] w-1/4 blur-sm
          animate-gradient-x-slow motion-reduce:animate-none" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent h-px w-1/4
          animate-gradient-x-slow motion-reduce:animate-none animate-pulse" />

				{/* Core component */}
				{/*         <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

				{/* Radial Gradient to prevent sharp edges */}
				{/*         <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
 */}      </div>
		</div>
	);
}
