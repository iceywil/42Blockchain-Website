"use client";

import { useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function Contact() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const mainLinks = socialLinks.slice(0, 3);
  const secondaryLinks = socialLinks.slice(3);

  return (
    <section className="py-32 relative" id="contact">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl text-start mb-20">
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            Join Our{" "}
            <span className="bg-gradient-to-r from-light-blue to-blue-400 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-white leading-relaxed">
            Connect with us and be part of the future of blockchain development
          </p>
        </div>

        {/* Main social links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainLinks.map(({ label, href, icon }) => (
            <Link 
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Card 
                className={`h-full bg-black/20 backdrop-blur-md transition-all duration-300
                  ${hoveredLink === label ? 'border-light-blue/50' : 'border-muted-foreground/30'}
                `}
              >
                <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                  <div className="text-4xl mb-6 text-white">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-white">{label}</h3>
                  <div className="flex items-center gap-1 text-sm text-white">
                    <span>Connect with us</span>
                    <ExternalLink size={14} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Secondary social links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {secondaryLinks.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(label)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`flex items-center gap-4 p-5 rounded-lg
                bg-black/10 backdrop-blur-md border transition-all duration-300
                ${hoveredLink === label ? 'border-light-blue/50' : 'border-muted-foreground/30'}`}
            >
              <div className="text-2xl text-white">
                {icon}
              </div>
              <div>
                <p className="font-medium text-white">{label}</p>
                <p className="text-xs text-white">
                  {label === "Email" 
                    ? "Send us a message" 
                    : label === "YouTube" 
                      ? "Watch our content"
                      : "Join our community"}
                </p>
              </div>
              <ExternalLink size={16} className="ml-auto text-white" />
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}