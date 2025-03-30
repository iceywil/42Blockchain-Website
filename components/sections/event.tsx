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
  return (
    <BlurFade duration={0.4} delay={0} direction="down" inView={true}>
      <Card
        className="relative bg-gradient-to-r from-black/40 to-black/20
          backdrop-blur-xl border-0 border-b border-white/10
          transition-all duration-500"
      >
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-[50%] aspect-[16/9] overflow-hidden">
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

            <div className="relative flex flex-col justify-center w-full md:w-[50%] p-10">
              <p className="text-sm text-light-blue mb-3 transition-colors duration-500
                group-hover:text-blue-400">{event.date}</p>
              <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-500
                group-hover:text-light-blue">{event.title}</h3>
              <p className="text-gray-400 text-base mb-6 transition-colors duration-500
                group-hover:text-gray-300">{event.description}</p>
              
              {event.link && (
                <Link 
                  href={event.link} 
                  target="_blank" 
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-light-blue/20 to-blue-900/20 
                    hover:from-light-blue/30 hover:to-blue-900/30 text-light-blue hover:text-blue-300
                    px-6 py-2 rounded-md border border-light-blue/30 transition-all duration-300 w-fit"
                >
                  <span className="text-sm">View Event</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  )
}

export function Event() {
  return (
    <section className="relative overflow-hidden bg-black/30 backdrop-blur-sm py-40" id="event">
      <div className="container mx-auto px-4 mb-20 text-center">
        <BlurFade inView>
          <div className="max-w-3xl mx-auto text-center mb-16">
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
        <div className="flex flex-col divide-y divide-white/10 [&>*:not(:hover)]:md:opacity-50 transition-opacity duration-500">
          {eventsList.map((event, index) => (
            <div key={event.id} className={index > 0 ? "pt-8" : ""}>
              <EventCard 
                event={event}
              />
              {index < eventsList.length - 1 && (
                <div className="mx-auto w-3/4 mt-8 overflow-hidden relative h-[1px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light-blue/20 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
