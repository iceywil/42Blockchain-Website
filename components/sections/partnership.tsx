"use client";

import Image from 'next/image';
import Link from "next/link";
import { partnerLogos } from '@/lib/constants';
import { socialLinks } from '@/lib/constants';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, PlusCircle } from "lucide-react";

export function Partnership() {
  const discordLink = socialLinks.find((link) => link.label === "Discord")?.href;

  return (
    <section className="py-32 relative" id="partners">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl text-start mb-20">
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-light-blue to-blue-400 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-xl text-white leading-relaxed">
            Working together to advance blockchain education and innovation
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partnerLogos.map((partner) => (
            <Card 
              key={partner.alt}
              className="flex items-center justify-center p-6 h-32 bg-black/20 backdrop-blur-md border-none"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                className="h-12 w-auto object-contain"
                priority
              />
            </Card>
          ))}
        </div>
          
        <Link href={`${discordLink}`} target="_blank" className="block w-full">
          <Card className="bg-black/10 backdrop-blur-md border-muted-foreground/30 border-dashed p-8 cursor-pointer">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left side - Your logo here with plus icon */}
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 rounded-full p-4">
                    <PlusCircle className="h-10 w-10 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white">Become a Partner</h3>
                    <p className="text-white mt-1">Join us in shaping the future of blockchain development</p>
                  </div>
                </div>
                
                {/* Right side - Contact button */}
                <div className="md:ml-auto">
                  <Button className="bg-white hover:bg-white/90 text-black whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      Contact us <ExternalLink size={16} />
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Footer note */}
        <div className="mt-6 text-start text-muted-foreground text-sm">
          <p>We&apos;re always looking for new collaborations and partnerships for our development and educational initiatives. If you&apos;re interested in working with us, please reach out to us on Discord.</p>
        </div>
      </div>
    </section>
  );
}