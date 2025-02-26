"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";

interface NavbarProps {
	visible: boolean;
}

export const Navbar = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const [visible, setVisible] = useState<boolean>(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 100) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	});

	return (
		<motion.div
			ref={ref}
			className="w-full h-16 fixed z-50"
		>
			<DesktopNav visible={visible} />
			<MobileNav visible={visible} />
		</motion.div>
	);
};

const DesktopNav = ({ visible }: NavbarProps) => {
	return (
		<div>
			<motion.div
				animate={{
					background: visible ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.4)",
					width: visible ? "38%" : "80%",
					height: visible ? "48px" : "64px",
					y: visible ? 8 : 0,
				}}
				initial={{
					width: "80%",
					height: "64px",
					background: "rgba(0, 0, 0, 0.4)",
				}}
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 30,
				}}
				className={cn(
					"hidden lg:flex flex-row self-center items-center justify-between mt-1 py-2 mx-auto px-6 rounded-full relative z-[60] backdrop-saturate-[1.8]",
					visible && "ring-1 ring-white/50"
				)}
			>
				<BlurFade delay={0}>
					<Link href="/">
						<Image src="/logo.svg" alt="Logo" width="80" height="20" />
					</Link>
				</BlurFade>
				<div className="flex items-center gap-8">
					<BlurFade delay={0.1}>
						<Link 
							href="/#event"
							className="text-white/90 hover:text-light-blue transition-colors duration-300 text-sm"
						>
							Events
						</Link>
					</BlurFade>
					<BlurFade delay={0.2}>
						<Link 
							href="/#contact"
							className="text-white/90 hover:text-light-blue transition-colors duration-300 text-sm"
						>
							Contact
						</Link>
					</BlurFade>
				</div>
			</motion.div>
		</div>
	);
};

const MobileNav = ({ visible }: NavbarProps) => {
	return (
		<div className="lg:hidden fixed top-0 left-0 right-0 z-50">
			<div className={cn(
				"flex items-center justify-between px-4 py-3",
				"bg-black/40 backdrop-blur-sm",
				visible && "bg-black/70"
			)}>
				<BlurFade delay={0}>
					<Link href="/">
						<Image src="/logo.svg" alt="Logo" width="100" height="24" />
					</Link>
				</BlurFade>
				<div className="flex items-center gap-6">
					<BlurFade delay={0.1}>
						<Link 
							href="/#event"
							className="text-white/90 hover:text-light-blue transition-colors duration-300 text-sm"
						>
							Events
						</Link>
					</BlurFade>
					<BlurFade delay={0.2}>
						<Link 
							href="/#contact"
							className="text-white/90 hover:text-light-blue transition-colors duration-300 text-sm"
						>
							Contact
						</Link>
					</BlurFade>
				</div>
			</div>
		</div>
	);
};
