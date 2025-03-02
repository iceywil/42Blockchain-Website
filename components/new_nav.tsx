"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  visible: boolean;
}

export const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className="w-full fixed z-50"
    >
      <DesktopNav visible={visible} />
      <MobileNav visible={visible} />
    </motion.div>
  );
};

const DesktopNav = ({ visible }: NavbarProps) => {
  return (
    <div>
      <motion.div
        animate={{
          background: visible ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.4)",
          width: visible ? "70%" : "85%",
          height: visible ? "60px" : "70px",
          y: visible ? 8 : 12,
        }}
        initial={{
          width: "85%",
          height: "70px",
          background: "rgba(0, 0, 0, 0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={cn(
          "hidden lg:flex flex-row self-center items-center justify-between mx-auto px-6 rounded-xl relative z-[60] backdrop-blur-sm backdrop-saturate-[1.8]",
          visible && "ring-1 ring-white/10"
        )}
      >
        <BlurFade delay={0}>
          <Link href="/" className="py-2">
            <Image src="/logo.svg" alt="Logo" width="70" height="20" priority />
          </Link>
        </BlurFade>
        <div className="flex items-center gap-8">
          <BlurFade delay={0.2}>
            <Link 
              href="/#events"
              className="text-white/90 hover:text-white/80 transition-colors duration-300 text-sm font-light"
            >
              Events
            </Link>
          </BlurFade>
          <BlurFade delay={0.3}>
            <Link 
              href="/#partners"
              className="text-white/90 hover:text-white/80 transition-colors duration-300 text-sm font-light"
            >
              Partners
            </Link>
          </BlurFade>
          <BlurFade delay={0.4}>
            <Button 
              size="sm" 
              className="bg-white text-black hover:bg-white/90 font-normal rounded-full"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </BlurFade>
        </div>
      </motion.div>
    </div>
  );
};

const MobileNav = ({ visible }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
      <div className={cn(
        "flex items-center justify-between px-4 py-3",
        "bg-black/40 backdrop-blur-sm",
        visible && "bg-black/70 border-b border-white/10"
      )}>
        <BlurFade delay={0}>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width="100" height="24" priority />
          </Link>
        </BlurFade>
        
        {/* Hamburger icon */}
        <button 
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={cn(
            "w-6 h-0.5 bg-white/90 transition-all duration-300",
            menuOpen && "rotate-45 translate-y-1.5"
          )} />
          <span className={cn(
            "w-6 h-0.5 bg-white/90 transition-all duration-300 opacity-0",
            menuOpen && "opacity-0"
          )} />
          <span className={cn(
            "w-6 h-0.5 bg-white/90 transition-all duration-300",
            menuOpen && "-rotate-45 -translate-y-1.5"
          )} />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "flex flex-col bg-black/80 backdrop-blur-md border-b border-white/10",
        "transition-all duration-300 overflow-hidden",
        menuOpen ? "max-h-60" : "max-h-0"
      )}>
        <Link 
          href="/events"
          className="px-8 py-3 text-white/90 hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Events
        </Link>
        <Link 
          href="/#partners"
          className="px-8 py-3 text-white/90 hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Partners
        </Link>
        <div className="px-4 py-4">
          <Button 
            className="w-full bg-light-blue hover:bg-light-blue/85 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};