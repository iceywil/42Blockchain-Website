"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface NavbarProps {
	navItems: {
		name: string;
		link: string;
	}[];
	visible: boolean;
}

export const Navbar = () => {
	const navItems = [
		{ name: "Home", link: "/" },
		{ name: "Events", link: "/events" },
	];

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
			<DesktopNav visible={visible} navItems={navItems} />
			<MobileNav visible={visible} navItems={navItems} />
		</motion.div>
	);
};

const DesktopNav = ({ navItems, visible }: NavbarProps) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


	return (
		<div>
			<motion.div
				onMouseLeave={() => setHoveredIndex(null)}
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
					"hidden lg:flex flex-row self-center items-center justify-between mt-1 py-2 mx-auto px-6 rounded-full relative z-[60] backdrop-saturate-[1.8] ",
					visible && "ring-1 ring-white/50"
				)
				}
			>
				<Image src="/logo.svg" alt="Logo" width="80" height="20" />
				<motion.div
					className="lg:flex flex-row flex-1 items-center justify-end space-x-1 text-sm"
					animate={{
						scale: visible ? 0.9 : 1,
						justifyContent: "flex-end",
					}}
				>
					{navItems.map((navItem, idx) => (
						<motion.div
							key={`nav-item-${idx}`}
							onHoverStart={() => setHoveredIndex(idx)}
							className="relative"
						>
							<Link
								className="text-white/90 relative px-3 py-1.5 transition-colors"
								href={navItem.link}
							>
								<span className="relative z-10">{navItem.name}</span>
								{hoveredIndex === idx && (
									<motion.div
										layoutId="menu-hover"
										className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/20"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{
											opacity: 1,
											scale: 1.1,
											background:
												"radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
										}}
										exit={{
											opacity: 0,
											scale: 0.8,
											transition: {
												duration: 0.2,
											},
										}}
										transition={{
											type: "spring",
											bounce: 0.4,
											duration: 0.4,
										}}
									/>
								)}
							</Link>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
	<motion.div
		initial={{ opacity: 0, y: -20 }}
		animate={{ opacity: 1, y: 0 }}
		className="w-full text-center"
	>
		<Link
			href={href}
			onClick={onClick}
			className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
		>
			{children}
		</Link>
	</motion.div>
);

const MobileNav = ({ navItems, visible }: NavbarProps) => {
	const [open, setOpen] = useState(false);
	const closeMenu = () => setOpen(false);

	return (
		<div className="lg:hidden">
			<motion.nav
				initial={false}
				animate={{
					background: visible || open ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.4)",
					height: open ? "100vh" : "auto",
				}}
				transition={{ duration: 0.3 }}
				className="fixed inset-x-0 top-0 z-50"
			>
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<Link href="/" onClick={closeMenu}>
							<Image 
								src="/logo.svg" 
								alt="42Blockchain logo" 
								width="100" 
								height="28"
								className="relative z-50" 
								priority
							/>
						</Link>
						<button
							onClick={() => setOpen(!open)}
							className="relative z-50 p-2 text-white/90 hover:text-white transition-colors"
							aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
						>
							{open ? <IconX size={24} /> : <IconMenu2 size={24} />}
						</button>
					</div>
				</div>

				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 z-40 flex items-center justify-center px-4"
						>
							<nav className="flex flex-col items-center w-full gap-8">
								{navItems.map((item, idx) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, y: -20 }}
										animate={{ 
											opacity: 1, 
											y: 0,
											transition: { delay: idx * 0.1 } 
										}}
										className="w-full"
									>
										<MobileNavLink href={item.link} onClick={closeMenu}>
											{item.name}
										</MobileNavLink>
									</motion.div>
								))}
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</div>
	);
};
