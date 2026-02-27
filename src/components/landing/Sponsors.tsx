"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const allSponsors = [
    { name: "Karthipuram", tier: "Title Sponsor", logo: "/images/sponsors/Untitled design.png", color: "rgba(139, 92, 246, 0.4)", size: "large" },
    { name: "Aveon Infotech", tier: "Silver Sponsor", logo: "/images/sponsors/aveon-logo.png", color: "rgba(139, 92, 246, 0.4)", size: "medium" }
];

function SponsorLogoPlaceholder({ sponsor }: { sponsor: any }) {
    const sizeClasses = {
        large: "h-48 w-80 md:h-64 md:w-[400px]",
        medium: "h-40 w-64 md:h-52 md:w-[320px]",
        small: "h-32 w-52 md:h-44 md:w-[240px]"
    }[sponsor.size as "large" | "medium" | "small"];

    return (
        <div className={`relative flex items-center justify-center ${sizeClasses} mx-6 group flex-shrink-0`}>
            {/* Holographic Background */}
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl opacity-40 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm" />

            {/* Glow Effect */}
            <div
                className="absolute inset-4 blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at center, ${sponsor.color}, transparent 70%)` }}
            />

            <div className="relative z-10 flex flex-col items-center w-full h-full p-6 md:p-8 text-center">
                <div className="w-full mb-4">
                    <span className="text-[10px] md:text-[12px] font-bold text-blue-400/80 group-hover:text-blue-400 transition-all duration-500 uppercase tracking-[0.3em]">
                        {sponsor.tier}
                    </span>
                </div>

                {sponsor.logo ? (
                    <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-full max-h-[90%] object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-500 scale-95 group-hover:scale-105"
                        />
                    </div>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <span className="font-black text-xl md:text-2xl text-white/70 group-hover:text-white transition-all duration-500 tracking-tighter uppercase italic">
                            {sponsor.name}
                        </span>
                    </div>
                )}
            </div>

            {/* Animated Scanning Line */}
            <motion.div
                animate={{ x: ["-100%", "230%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 left-0"
            />
        </div>
    );
}

export default function Sponsors() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

    useEffect(() => {
        const updateScrolling = () => {
            if (containerRef.current && contentRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const contentWidth = contentRef.current.scrollWidth;
                const overflowing = contentWidth > containerWidth;

                setIsOverflowing(overflowing);

                // Calculate constraints
                // We want to allow dragging from the rightmost edge to the leftmost edge
                // Padded by the container's padding to keep items visible
                setDragConstraints({
                    left: -(contentWidth - containerWidth + 80), // 80 accounting for px-10 on both sides
                    right: 0
                });
            }
        };

        // Run immediately and after a short delay to account for layout
        updateScrolling();
        const timers = [
            setTimeout(updateScrolling, 100),
            setTimeout(updateScrolling, 1000) // Back-up for slow loading images
        ];

        window.addEventListener("resize", updateScrolling);
        return () => {
            timers.forEach(t => clearTimeout(t));
            window.removeEventListener("resize", updateScrolling);
        };
    }, [allSponsors.length]);

    return (
        <section id="sponsors" className="py-24 bg-transparent relative overflow-hidden">
            <div className="relative z-10 w-full">
                <div className="container px-4 mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-[0.4em] text-white uppercase italic">
                            Official <span className="text-blue-500">Sponsors</span>
                        </h2>
                        <p className="text-[10px] md:text-xs text-slate-500 font-black tracking-widest uppercase">
                            Swipe or drag to explore
                        </p>
                    </motion.div>
                </div>

                <div
                    ref={containerRef}
                    className={`w-full overflow-hidden relative px-10 py-10 flex ${isOverflowing ? 'cursor-grab active:cursor-grabbing' : 'justify-center'}`}
                >
                    <motion.div
                        ref={contentRef}
                        drag={isOverflowing ? "x" : false}
                        dragConstraints={dragConstraints}
                        dragElastic={0.2}
                        dragTransition={{ power: 0.3, timeConstant: 200 }}
                        whileTap={isOverflowing ? { cursor: "grabbing" } : {}}
                        className="flex items-center gap-2 md:gap-8 min-w-max"
                    >
                        {allSponsors.map((sponsor, i) => (
                            <SponsorLogoPlaceholder key={i} sponsor={sponsor} />
                        ))}
                    </motion.div>

                    {/* Faded edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020408] via-[#020408]/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020408] via-[#020408]/80 to-transparent z-20 pointer-events-none" />
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Ambient Glows */}
            <div className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />
            <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[120px] rounded-full" />
        </section>
    );
}
