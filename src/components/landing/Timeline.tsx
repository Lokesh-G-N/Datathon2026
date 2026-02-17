"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const schedule = [
    { time: "09:00 AM", event: "Tactical Check-in", desc: "Registration and welcome kits distribution." },
    { time: "10:00 AM", event: "Initiation Protocol", desc: "Opening ceremony and track briefings." },
    { time: "11:00 AM", event: "The Surge", desc: "Coding phase begins. Let the innovation overflow." },
    { time: "01:00 PM", event: "Fuel Intake", desc: "High-protein lunch served at the main hall." },
    { time: "06:00 PM", event: "Neural Review", desc: "First round of mentoring and project validation." },
    { time: "08:00 PM", event: "Energy Reload", desc: "Dinner and networking session." },
    { time: "12:00 AM", event: "Midnight Protocol", desc: "Surprise activity and midnight refreshment." },
    { time: "11:00 AM", event: "Cease Fire", desc: "Final submissions and project freeze." },
    { time: "12:00 PM", event: "The Tribunal", desc: "Expert judging and live demonstrations." },
    { time: "03:00 PM", event: "Legacy forged", desc: "Closing ceremony and prize distribution." }
];

function TimelineItem({ item, index }: { item: typeof schedule[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
            className="relative pl-12 pb-20 group"
        >
            {/* Pulsing Light Node */}
            <div className="absolute left-[-9px] top-6 z-20">
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        boxShadow: ["0 0 0px #3b82f6", "0 0 20px #3b82f6", "0 0 0px #3b82f6"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-4 h-4 rounded-full bg-blue-500 border-2 border-[#0a0e14]"
                />
                <div className="absolute inset-0 rounded-full bg-blue-400 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content Card with Glow */}
            <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="relative bg-black/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-2xl"
            >
                {/* Background Glow Overlay */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-all" />

                <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                    <div className="shrink-0">
                        <span className="text-3xl font-black text-white/20 group-hover:text-blue-500/40 transition-colors duration-500 tabular-nums">
                            {item.time}
                        </span>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                            {item.event}
                        </h3>
                        <p className="mt-2 text-slate-400 font-medium group-hover:text-slate-300 transition-colors italic">
                            {item.desc}
                        </p>
                    </div>
                </div>

                {/* Animated Scan Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent origin-left"
                />
            </motion.div>
        </motion.div>
    );
}

export default function Timeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    return (
        <section id="timeline" className="py-32 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-32"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic">
                        <span className="text-blue-500">Timelines</span>
                    </h2>
                </motion.div>

                <div ref={containerRef} className="relative ml-4 md:ml-12 lg:ml-24 min-h-[1000px]">
                    {/* Glowing Track Path */}
                    <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-white/5" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-red-500 to-blue-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
                    />

                    {/* Rocket Astronaut Mascot */}
                    <motion.div
                        style={{
                            top: useTransform(scaleY, [0, 1], ["0%", "100%"]),
                            translateX: "-50%"
                        }}
                        className="absolute left-0 z-30 pointer-events-none"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [-2, 2, -2],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative group flex flex-col items-center"
                        >
                            {/* Cosmic Propulsion Glow */}
                            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-12 bg-orange-500/30 blur-xl rounded-full animate-pulse" />
                            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-125 opacity-40" />

                            <img
                                src="/rocket-astronaut.png"
                                alt="Rocket Astronaut"
                                className="w-20 md:w-24 h-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                            />
                        </motion.div>
                    </motion.div>

                    <div className="pt-8">
                        {schedule.map((item, i) => (
                            <TimelineItem key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
