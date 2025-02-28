"use client";

import React, { Suspense, lazy } from 'react';
import { Hero } from "@/components/sections/hero";

const Presence = lazy(() => import("@/components/sections/presence").then(mod => ({ default: mod.Presence })));
const Partnership = lazy(() => import("@/components/sections/partnership").then(mod => ({ default: mod.Partnership })));
const Contact = lazy(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })));

const SectionLoader = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="animate-pulse bg-gray-800 rounded-lg h-64 w-full max-w-4xl"></div>
  </div>
);

export default function Home() {
  return (
    <section className="container mx-auto">
      {/* Hero is critical, so it's not lazy loaded */}
      <Hero />
      
      {/* Below-the-fold content is lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <Presence />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Partnership />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </section>
  );
}