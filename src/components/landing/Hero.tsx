"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Countdown() {
    const [mounted, setMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        setMounted(true);
        const targetDate = new Date('2026-03-15T10:30:00').getTime();

        const updateTime = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            const hours = Math.floor(distance / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0')
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center justify-center gap-2 md:gap-4 relative z-10 w-full min-h-[90px]">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md w-[80px] md:w-[100px] h-[70px] md:h-[90px] animate-pulse" />
                ))}
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center gap-2 md:gap-4 relative z-10 w-full min-h-[90px]">
            <div className="flex flex-col items-center px-4 py-3 bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl backdrop-blur-md min-w-[80px] md:min-w-[100px] shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <span className="text-3xl md:text-5xl font-black text-white font-mono tracking-tighter shadow-blue-500/50 drop-shadow-md">{timeLeft.hours}</span>
                <span className="text-[8px] md:text-[10px] text-blue-400 uppercase tracking-widest font-bold mt-1">Hours</span>
            </div>
            <span className="text-2xl md:text-4xl font-black text-blue-500/50 animate-[pulse_1s_ease-in-out_infinite] mb-6">:</span>
            <div className="flex flex-col items-center px-4 py-3 bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl backdrop-blur-md min-w-[80px] md:min-w-[100px] shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <span className="text-3xl md:text-5xl font-black text-white font-mono tracking-tighter shadow-blue-500/50 drop-shadow-md">{timeLeft.minutes}</span>
                <span className="text-[8px] md:text-[10px] text-blue-400 uppercase tracking-widest font-bold mt-1">Mins</span>
            </div>
            <span className="text-2xl md:text-4xl font-black text-blue-500/50 animate-[pulse_1s_ease-in-out_infinite] mb-6">:</span>
            <div className="flex flex-col items-center px-4 py-3 bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl backdrop-blur-md min-w-[80px] md:min-w-[100px] shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <span className="text-3xl md:text-5xl font-black text-white font-mono tracking-tighter shadow-blue-500/50 drop-shadow-md">{timeLeft.seconds}</span>
                <span className="text-[8px] md:text-[10px] text-blue-400 uppercase tracking-widest font-bold mt-1">Secs</span>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20">
            {/* Background "Kryptonian" Beam Pulses */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0, 0.2, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_70%)] hidden md:block gpu-opacity"
                />
            </div>

            <div className="container px-4 mx-auto text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gpu"
                >
                    {/* Top Detail - Registration Deadline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm md:backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[8px] md:text-xs font-black text-blue-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                                14th - 15th March 2026
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-[10rem] font-black text-white mb-4 md:mb-8 tracking-tighter uppercase italic leading-[0.8] relative">
                        Datathon
                        <br />
                        <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] text-3xl md:text-8xl block mt-2 md:mt-4">2k26</span>

                        {/* Title Accent */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -inset-10 bg-blue-500/10 blur-2xl md:blur-[100px] pointer-events-none gpu-opacity"
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-sm md:text-2xl text-slate-400 mb-2 md:mb-4 max-w-2xl font-light tracking-wide italic"
                    >
                        24 Hour Hackathon
                    </motion.p>

                    {/* New Highlight: Prize Pool & Internships */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col items-center gap-2 md:gap-4 mb-8"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                            <div className="relative px-6 py-2 md:px-10 md:py-4 bg-black/60 border border-blue-500/20 backdrop-blur-xl rounded-xl flex flex-col md:flex-row items-center gap-2 md:gap-6">
                                <span className="text-xl md:text-3xl font-black text-white italic tracking-tighter">
                                    <span className="text-blue-500">₹75,000 </span> PRIZE POOL
                                </span>
                                <div className="hidden md:block w-[1px] h-8 bg-blue-500/20" />
                                <span className="text-[10px] md:text-sm font-bold text-blue-400/80 uppercase tracking-[0.2em]">
                                    Internship opportunities will be created
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Highly Visible Deadline & Fee */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                        className="mb-12 flex flex-col items-center gap-4 relative group"
                    >
                        <div className="absolute -inset-4 bg-red-600/20 blur-2xl group-hover:bg-red-600/30 transition-all rounded-[2rem]" />

                        {/* Fee Detail */}
                        <div className="relative flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                Fee: <span className="text-white">₹300 / Person</span>
                                <span className="text-white ml-1 md:ml-2">(2-4 in a team)</span>
                            </span>
                        </div>

                        {/* Deadline Banner */}
                        <div className="relative px-5 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-black/60 border-2 border-red-600 backdrop-blur-xl mb-6">
                            <span className="text-red-500 font-black text-sm md:text-3xl tracking-tighter uppercase italic drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                Registrations Closed
                            </span>
                        </div>

                        {/* Event Ends Countdown */}
                        <div className="relative mt-2 flex flex-col items-center">
                            <span className="text-xs font-black text-white uppercase tracking-[0.3em] mb-4 italic flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Event Ends In
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            </span>
                            <Countdown />
                        </div>
                    </motion.div>

                    {/* CTA & Venue */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col md:flex-row gap-6 items-center"
                    >
                        <div className="flex flex-col items-center md:items-start px-6 py-2 border-none md:border-white/10 ml-0 md:ml-4">
                            <span className="text-[8px] text-slate-500 font-black tracking-widest uppercase">Venue</span>
                            <span className="text-white font-bold uppercase tracking-tight text-[10px] md:text-sm">Coimbatore Institute of Technology</span>
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
