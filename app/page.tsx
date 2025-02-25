"use client";

import { Hero } from "@/components/sections/hero";
import { Presence } from "@/components/sections/presence";
import { Partnership } from "@/components/sections/partnership";
import { Contact } from "@/components/sections/contact";
import { Event } from "@/components/sections/event";


export default function Home() {
  return (
    <section className="container mx-auto">
      <Hero />
      <Presence />
      <Contact />
      <Partnership />
      <Event />
    </section>
  );
}
