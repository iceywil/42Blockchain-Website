"use client";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
	return (
		<nav className="fixed inset-x-0 top-0 z-50 bg-black/40">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center">
					<Link href="/">
						<Image 
							src="/logo.svg" 
							alt="42Blockchain logo" 
							width="100" 
							height="28"
							className="relative z-50" 
							priority
						/>
					</Link>
				</div>
			</div>
		</nav>
	);
};
