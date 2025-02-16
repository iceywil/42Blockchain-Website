
"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { eventsList } from "@/lib/constants";
import { socialLinks } from "@/lib/constants";

export default function EventsPage() {
  const discordLink = socialLinks.find((link) => link.label === "Discord")?.href

  return (
    <div className="min-h-screen padding-y">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-14 max-md:mb-8">Past Events</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {eventsList.map((event) => (
            <Card
              key={event.id}
              className="bg-glass border-white/10 overflow-hidden group hover:border-light-blue/50 transition-colors"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-light-blue mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <Button
                    variant="outline"
                    className="border-light-blue text-light-blue 
                      hover:bg-light-blue/40 hover:text-white/90 bg-black w-full"
                  >
                    <Link href={`${discordLink}`} target='_blank'>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

