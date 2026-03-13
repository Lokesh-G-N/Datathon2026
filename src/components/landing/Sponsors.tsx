"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const allSponsors = [
    { name: "Karthipuram", tier: "Title Sponsor", logo: "/images/sponsors/1.png", color: "rgba(139, 92, 246, 0.4)", size: "large" },
    { name: "EXL", tier: "Platinum Sponsor", logo: "/images/sponsors/4.png", color: "rgba(139, 92, 246, 0.4)", size: "large" },
    { name: "Dsignz Media", tier: "Silver Sponsor", logo: "/images/sponsors/3.png", color: "rgba(139, 92, 246, 0.4)", size: "medium" },
    { name: "Profitstory", tier: "Silver Sponsor", logo: "/images/sponsors/5.png", color: "rgba(139, 92, 246, 0.4)", size: "medium" },
    { name: "Aveon Infotech", tier: "Silver Sponsor", logo: "/images/sponsors/2.png", color: "rgba(139, 92, 246, 0.4)", size: "medium" }

];

function SponsorLogoPlaceholder({ sponsor }: { sponsor: { name: string, tier: string, logo?: string, color: string, size: string } }) {
    const sizeClasses = {
        large: "w-80 h-[180px] md:w-[500px] md:h-[281px]",
        medium: "w-56 h-[126px] md:w-[380px] md:h-[214px]",
        small: "w-40 h-[90px] md:w-[280px] md:h-[157px]"
    }[sponsor.size as "large" | "medium" | "small"];

    return (
        <div className={`relative flex items-center justify-center ${sizeClasses} mx-6 group flex-shrink-0`}>
            {/* Holographic Background */}

            {/* Glow Effect */}
            <div
                className="absolute inset-4 blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at center, ${sponsor.color}, transparent 70%)` }}
            />

            <div className="relative z-10 flex flex-col items-center w-full h-full p-2 text-center">
                <div className="w-full mb-6 -mt-8">
                    <span className="text-[12px] md:text-sm font-black text-blue-400 group-hover:text-blue-300 transition-all duration-500 uppercase tracking-[0.5em] drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                        {sponsor.tier}
                    </span>
                </div>

                {sponsor.logo ? (
                    <div className="w-full flex-1 flex items-center justify-center overflow-hidden rounded-2xl relative">
                        <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="absolute inset-0 object-cover bg-white/5 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15_rgba(59,130,246,0.3)] transition-all duration-500 scale-100 group-hover:scale-105"
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
    // Duplicate sponsors for seamless looping
    const duplicatedSponsors = [...allSponsors, ...allSponsors];

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
                            Supporting our vision to innovate
                        </p>
                    </motion.div>
                </div>

                <div className="w-full overflow-hidden relative py-10">
                    <motion.div
                        className="flex items-center gap-8 min-w-max"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedSponsors.map((sponsor, i) => (
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
