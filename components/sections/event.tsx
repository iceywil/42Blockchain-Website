"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { eventsList } from "@/lib/constants";
import { socialLinks } from "@/lib/constants";

export function Event() {
  const discordLink = socialLinks.find((link) => link.label === "Discord")?.href;

  return (
    <section className="py-20" id="event">
      <div className="max-w-6xl container mx-auto px-4">

        {/* Header */}
        <div className="max-w-3xl text-start mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-light-blue to-blue-400 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Join us at our upcoming events and learn from the best in the industry
          </p>
        </div>
        
        <div className="grid gap-8 mx-auto">
          {eventsList.map((event) => (
            <Link 
              key={event.id} 
              href={`${discordLink}`} 
              target="_blank"
              className="block group"
            >
              <Card className="bg-black/30 border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10">
                <CardContent className="p-0">
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
                    {/* Image container with responsive height */}
                    <div className="relative h-48 md:h-64 w-full overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                      
                      {/* Event date badge */}
                      <div className="absolute top-4 left-4 bg-light-blue/10 backdrop-blur-md border-light-blue/15 border text-accent px-3 py-1.5 rounded-full">
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                    
                    {/* Content section with proper padding on all devices */}
                    <div className="p-5 md:p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-medium mb-2 md:mb-3 text-white">{event.title}</h3>
                        <p className="text-gray-400 text-sm">{event.description}</p>
                      </div>
                      
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1.5 border border-white/10 text-sm text-white rounded-md">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}