"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "About", href: "/#about" },
  { name: "Problems", href: "/#problems" },
  { name: "Prizes", href: "/#prizes" },
  { name: "Guidelines", href: "/#rules" },
  { name: "Coordinators", href: "/coordinators" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-blue-500 transition-colors relative z-[110]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="flex items-center gap-4 shrink-0 relative z-[110]">
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

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-[105] lg:hidden w-[75vw] bg-black/80 backdrop-blur-xl flex flex-col p-6 pt-24 border-r border-white/10 shadow-2xl"
          >
            {/* Background Cybernetic Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />

            <nav className="flex flex-col gap-6 relative z-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-lg font-black uppercase tracking-[0.2em] text-slate-200 group-hover:text-blue-500 transition-colors italic">
                      {link.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto"
            >
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic tracking-widest rounded-xl py-6 text-[10px] h-auto shadow-[0_0_30px_rgba(59,130,246,0.3)] border-none"
              >
                <a href="https://forms.gle/skZuVWsB53vJsH2j7" target="_blank" onClick={() => setIsOpen(false)}>
                  Register here
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
