"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20">
            {/* Background "Kryptonian" Beam Pulses */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0, 0.2, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_70%)]"
                />
            </div>

            <div className="container px-4 mx-auto text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Top Detail - Registration Deadline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] md:text-xs font-black text-blue-400 uppercase tracking-[0.3em]">
                                14th - 15th March 2026
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.8] relative">
                        Datathon
                        <br />
                        <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] text-5xl md:text-8xl block mt-4">2k26</span>

                        {/* Title Accent */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -inset-10 bg-blue-500/10 blur-[100px] pointer-events-none"
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl font-light tracking-wide italic"
                    >
                        24 Hour Hackathon
                    </motion.p>

                    {/* Highly Visible Deadline & Fee */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                        className="mb-12 flex flex-col items-center gap-4 relative group"
                    >
                        <div className="absolute -inset-4 bg-red-600/20 blur-2xl group-hover:bg-red-600/30 transition-all rounded-[2rem]" />

                        {/* Fee Detail */}
                        <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                Registration Fee: <span className="text-white">₹300 / Participant</span>
                                <span className="text-slate-600 ml-2">(max 4 per team)</span>
                            </span>
                        </div>

                        {/* Deadline Banner */}
                        <div className="relative px-8 py-4 rounded-2xl bg-black/60 border-2 border-red-600/50 backdrop-blur-xl">
                            <span className="text-red-500 font-black text-xl md:text-3xl tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                                Register before Feb 27th
                            </span>
                        </div>
                    </motion.div>

                    {/* CTA & Venue */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col md:flex-row gap-6 items-center"
                    >
                        <Button
                            asChild
                            className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic tracking-widest rounded-full px-12 py-8 h-auto text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.4)] border-none relative overflow-hidden group"
                        >
                            <a href="https://forms.gle/skZuVWsB53vJsH2j7" target="_blank">
                                <span className="relative z-10">Register Now</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                            </a>
                        </Button>

                        <div className="flex flex-col items-start px-6 py-2 border-l border-white/10 ml-0 md:ml-4">
                            <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Venue</span>
                            <span className="text-white font-bold uppercase tracking-tight text-sm">Coimbatore Institute of Technology</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Cinematic Overlay Textures */}
            <div className="absolute bottom-10 left-10 pointer-events-none select-none hidden lg:block">
                <span className="text-[10px] font-mono text-white/10 uppercase tracking-[2em] transform -rotate-90 origin-left">
                </span>
            </div>
        </section>
    );
}
