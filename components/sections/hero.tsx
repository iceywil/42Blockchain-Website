import React from "react";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/stats";
import { stats } from "@/lib/constants";
import { socialLinks } from "@/lib/constants";
import Link from "next/link";
import Particles from "../ui/particles";

export function Hero() {
  const discordLink = socialLinks.find(
    (link) => link.label === "Discord"
  )?.href;
  return (
    <section className="relative overflow-hidden padding-y w-full" id="hero">
      <div className="mb-8 flex justify-center">
        <div
          className="relative rounded-full px-3 py-1 text-sm max-[330px]:text-xs 
            leading-6 text-gray-300 bg-glass border border-white/10"
        >
          Announcing our next event{" "}
          <Link
            href={String(discordLink)}
            target="_blank"
            className="font-semibold text-light-blue"
          >
            Read more <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
          The Future of Blockchain Education
        </h1>
        <Stats stats={stats} />
        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300 mb-8">
          42Blockchain is the largest Blockchain Developer Student&apos;s Union
          in the world. Our members are students and alumni from the programming
          school 42 École 42, aiming to empower our 2000+ members in 30+
          countries.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-light-blue hover:bg-light-blue/85 active:hover:bg-light-blue/85 text-white">
            <a href={discordLink} target="_blank">
              Get Started
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-light-blue text-light-blue hover:bg-light-blue/40 hover:text-white/90 bg-dark-blue"
          >
            <Link href="/#contact">Learn More</Link>
          </Button>
        </div>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={20}
        color="#adadad"
        refresh
      />
    </section>
  );
}
