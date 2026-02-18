"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Problems", href: "#problems" },
  { name: "Timeline", href: "#timeline" },
  { name: "Prizes", href: "#prizes" },
  { name: "Guidelines", href: "#rules" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const diff = latest - previous;

    // Only update if we've scrolled a reasonable amount to avoid jitter
    if (Math.abs(diff) > 5) {
      if (latest > previous && latest > 150) {
        if (!hidden) setHidden(true);
      } else {
        if (hidden) setHidden(false);
      }
    }

    const isScrolled = latest > 50;
    if (isScrolled !== scrolled) setScrolled(isScrolled);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -120 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "py-2 md:py-4 bg-black/40 backdrop-blur-md md:backdrop-blur-2xl border-b border-white/10" : "py-4 md:py-8 bg-transparent"}`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center group cursor-pointer shrink-0">
          <img
            src="/logo.png"
            alt="Datathon Logo"
            className="h-8 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-400 transition-all relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              />
              {/* Hover Data Glow */}
              <div className="absolute -inset-x-4 -inset-y-2 bg-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic tracking-widest rounded-full px-4 py-3 md:px-8 md:py-6 text-[10px] md:text-sm h-auto transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] border-none relative overflow-hidden group"
          >
            <a href="https://forms.gle/skZuVWsB53vJsH2j7" target="_blank">
              <span className="relative z-10">Register Now</span>
              {/* Scanning Light Beam */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-8 bg-white/20 skew-x-12 pointer-events-none"
              />
            </a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
