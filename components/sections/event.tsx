import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { eventsList } from "@/lib/constants"
import { BlurFade } from "@/components/magicui/blur-fade"

type Event = {
  id: number
  title: string
  date: string
  description: string
  image: string
  link?: string
}

function EventCard({ event }: { event: Event }) {
  const EventCardContent = (
    <Card
      className="relative bg-gradient-to-r from-black/40 to-black/20
        backdrop-blur-xl border-0 border-b border-white/10
        transition-all duration-500"
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-[55%] aspect-[16/9] overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-all duration-700
                group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r 
              from-black/80 to-transparent opacity-70 transition-all duration-500
              group-hover:opacity-40" />
          </div>

          <div className="relative flex flex-col justify-center w-full md:w-[45%] p-8">
            <p className="text-sm text-light-blue mb-3 transition-colors duration-500
              group-hover:text-blue-400">{event.date}</p>
            <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-500
              group-hover:text-light-blue">{event.title}</h3>
            <p className="text-gray-400 text-base transition-colors duration-500
              group-hover:text-gray-300">{event.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <BlurFade duration={0.4} delay={0} direction="down" inView={true}>
      {event.link ? (
        <Link href={event.link} target="_blank" className="block group">
          {EventCardContent}
        </Link>
      ) : (
        <div className="block group">
          {EventCardContent}
        </div>
      )}
    </BlurFade>
  )
}

export function Event() {
  return (
    <section className="relative overflow-hidden bg-black/30 backdrop-blur-sm" id="event">
      <div className="container mx-auto px-4 mb-20 text-center">
        <BlurFade inView>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Latest Events
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Discover our recent blockchain gatherings and hackathons
            </p>
          </div>
        </BlurFade>
      </div>

      <div className="w-full">
        <div className="flex flex-col [&>*:not(:hover)]:md:opacity-50 transition-opacity duration-500">
          {eventsList.map((event) => (
            <EventCard 
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
