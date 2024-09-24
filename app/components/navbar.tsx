"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Nav() {
	const router = useRouter();
	return (
		<div className="w-full flex items-center justify-center px-8 py-4 mx-auto bg-transparent fixed top-0 left-0 z-50">
			<div className="flex items-center justify-between w-full">
				<div>
					<button onClick={() => router.push("/")}>
						<Image src="/42 Blockchain Blanc.svg" alt="42 Blockchain" width={200} height={200} />
					</button>
				</div>
				<div className="flex justify-between gap-8">
					<button onClick={() => router.push("./Events")}>
						Events
					</button>
					<button onClick={() => router.push("./Contact")}>
						Contact
					</button>
				</div>
			</div>
		</div >
	);
}
