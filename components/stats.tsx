import React from "react";
import { NumberTicker } from "./ui/numberticker";

type StatsProps = {
  label: string;
  value: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  plus: boolean;
};

export function Stats({ stats }: { stats: StatsProps[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {stats.map((stat: StatsProps) => (
        <div
          key={stat.label}
          className="flex items-center rounded-full px-4 py-2 border 
            border-white/10 hover:border-light-blue/50 transition-colors"
        >
          <stat.icon className="w-4 h-4 text-light-blue mr-2 font-inter" />
          <NumberTicker
            className="text-sm font-medium text-white mr-2 w-7"
            value={Number(stat.value)}
            plus={stat.plus}
          />
          {/* <p className="text-sm font-medium text-white mr-2">+</p> */}
          {/* <p className="text-sm font-medium text-white mr-2">{stat.value}</p> */}
          <p className="text-xs text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
