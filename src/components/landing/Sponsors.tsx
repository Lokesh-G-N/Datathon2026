"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const sponsors = [
    { name: "Tech Corp", tier: "Title", color: "rgba(59, 130, 246, 0.4)" },
    { name: "Cloud Systems", tier: "Gold", color: "rgba(96, 165, 250, 0.3)" },
    { name: "Dev Tools", tier: "Gold", color: "rgba(147, 197, 253, 0.2)" },
    { name: "Startup IO", tier: "Silver", color: "rgba(239, 68, 68, 0.2)" },
    { name: "Digital Future", tier: "Silver", color: "rgba(16, 185, 129, 0.2)" },
    { name: "Code Academy", tier: "Bronze", color: "rgba(139, 92, 246, 0.2)" }
];

function SponsorCard({ sponsor, index }: { sponsor: typeof sponsors[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center justify-center p-8 relative group cursor-pointer"
        >
            {/* Holographic Pedestal Base */}
            <div className="absolute inset-0 bg-white/5 border border-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 backdrop-blur-xl" />

            {/* Radial Brand Glow */}
            <div
                className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at center, ${sponsor.color}, transparent 70%)` }}
            />

            <div className="relative z-10 flex flex-col items-center">
                <span className="font-black text-lg md:text-2xl text-slate-300 group-hover:text-white transition-colors duration-500 tracking-tighter uppercase italic">
                    {sponsor.name}
                </span>
                <span className="text-[8px] font-black text-blue-500/50 uppercase tracking-[0.4em] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {sponsor.tier} Partner
                </span>
            </div>

            {/* Scanning Line */}
            <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[1px] bg-white/10 opacity-0 group-hover:opacity-100 top-1/2"
            />
        </motion.div>
    );
}

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-6 md:py-32 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-[0.3em] md:tracking-[0.5em] text-blue-500 uppercase italic">
                        Sponsors
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-6xl mx-auto">
                    {sponsors.map((s, i) => (
                        <SponsorCard key={i} sponsor={s} index={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-32"
                >
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 w-full max-w-md" />
                    <p className="text-muted-foreground mb-6 text-sm font-medium tracking-wide">Ready to fuel the future of engineering?</p>
                    <a href="mailto:sponsor@hackathon.com" className="relative group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-500 hover:text-white transition-all overflow-hidden inline-flex items-center gap-2">
                        <span className="relative z-10">Join the Collective</span>
                        <div className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    </a>
                </motion.div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </section>
    );
}
