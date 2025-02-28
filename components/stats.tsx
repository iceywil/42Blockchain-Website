import React from 'react'
import { NumberTicker } from './magicui/number-ticker'
import { BlurFade } from './magicui/blur-fade'

type StatsProps = {
  label: string;
  value: string | number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function Stats({ stats }: { stats: StatsProps[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {stats.map((stat: StatsProps, index) => (
        <BlurFade key={stat.label} delay={index * 0.1}>
          <div
            className="flex flex-col items-center w-[220px] rounded-lg px-8 py-6
              bg-gradient-to-r from-white/5 to-white/[0.02]
              border border-white/10 backdrop-blur-sm
              hover:border-light-blue/50 hover:from-light-blue/10 hover:to-transparent
              transition-all duration-300"
          >
            <p className="text-sm text-gray-400 mb-4">{stat.label}</p>
            <div className="flex items-center gap-3">
              <stat.icon className="w-6 h-6 text-light-blue" />
              <div className="text-2xl font-medium text-white">
                {typeof stat.value === 'number' ? (
                  <NumberTicker
                    value={stat.value} 
                    className="font-medium text-white"
                    direction="up"
                  />
                ) : (
                  stat.value
                )}
              </div>
            </div>
          </div>
        </BlurFade>
      ))}
    </div>
  )
}

