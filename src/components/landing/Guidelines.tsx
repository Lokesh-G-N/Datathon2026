"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const protocols = [
    "Identity: Participants must carry a valid college ID.",
    "Timeline: Teams must strictly adhere to the event schedule.",
    "Integrity: Plagiarism in any form leads to immediate disqualification.",
    "Authority: Decision of the expert jury will be final.",
    "Conduct: Participants must follow the institute's code of conduct.",
    "Self-Sufficiency: Bring your own laptops and required accessories.",
];

function GuidelineCard({ rule, index }: { rule: string, index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group"
        >
            <Card className="relative p-8 bg-black/40 backdrop-blur-2xl border border-white/5 group-hover:border-red-500/30 transition-all duration-500 rounded-3xl h-full overflow-hidden">
                {/* Protocol Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                        <motion.div
                            animate={{
                                opacity: isHovered ? [0.4, 1, 0.4] : 0.4,
                                scale: isHovered ? 1.2 : 1
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="p-2 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20"
                        >
                            <ShieldAlert className="w-5 h-5" />
                        </motion.div>
                        <div className="absolute inset-0 bg-red-500 blur-md opacity-20" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-red-500/60 uppercase tracking-widest">Protocol</span>
                        <span className="text-xs font-mono text-slate-500">#{index + 101}</span>
                    </div>
                </div>

                <p className="text-lg font-bold text-white leading-relaxed mb-6 group-hover:text-red-400 transition-colors">
                    {rule}
                </p>

                {/* Cybernetic Accent */}
                <div className="mt-auto flex items-center gap-4">
                    <div className="flex-1 h-[1px] bg-white/5 relative">
                        <motion.div
                            animate={{
                                left: isHovered ? "100%" : "0%",
                                opacity: isHovered ? [0, 1, 0] : 0
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 w-8 h-[1px] bg-red-500"
                        />
                    </div>
                    <CheckCircle2 className={`w-4 h-4 transition-colors duration-500 ${isHovered ? 'text-red-500' : 'text-slate-700'}`} />
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 p-1 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 border-t border-r border-white/10 rounded-tr-xl" />
                </div>
            </Card>
        </motion.div>
    );
}

export default function Guidelines() {
    return (
        <section id="rules" className="py-32 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic">
                        <span className="text-red-500">Guidelines</span>
                    </h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {protocols.map((rule, i) => (
                        <GuidelineCard key={i} rule={rule} index={i} />
                    ))}
                </div>

                {/* Registration Details */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-md rounded-3xl text-center">
                        <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase mb-2">Registration Fee</p>
                        <p className="text-3xl font-black text-white italic">₹300 / Participant</p>
                        <p className="text-xs text-slate-400 mt-2">Max 4 Members per Team</p>
                    </div>
                    <div className="p-8 border border-blue-500/20 bg-blue-500/5 backdrop-blur-md rounded-3xl text-center">
                        <p className="text-[10px] text-blue-400/60 font-black tracking-widest uppercase mb-2">Deadline</p>
                        <p className="text-3xl font-black text-white italic">27th Feb 2026</p>
                        <p className="text-xs text-blue-400/40 mt-2">Final Registration Protocol</p>
                    </div>
                </div>

                {/* Facilities & Meals */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 border border-white/5 bg-black/40 backdrop-blur-3xl rounded-[2.5rem] relative overflow-hidden"
                >
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-10 uppercase italic tracking-tighter">
                        Facilities & <span className="text-blue-500">Meals</span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-[10px]">Day 1 - 14th March</h4>
                            <ul className="space-y-2 text-slate-400 font-bold uppercase tracking-wide text-[10px]">
                                <li className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">Lunch</li>
                                <li className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">Evening Refreshments</li>
                                <li className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">Dinner</li>
                                <li className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-blue-400/80">Midnight Refreshments</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-[10px]">Day 2 - 15th March</h4>
                            <ul className="space-y-2 text-slate-400 font-bold uppercase tracking-wide text-[10px]">
                                <li className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">Breakfast</li>
                            </ul>
                            <div className="mt-6 p-5 rounded-2xl bg-red-500/5 border border-red-500/20 text-red-500 font-black uppercase tracking-[0.2em] text-[10px] text-center">
                                No Accommodation Provided
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section Warning Overlay */}
                <div className="mt-20 p-8 border border-red-900/20 bg-red-900/5 backdrop-blur-md rounded-3xl text-center">
                    <p className="text-red-400/80 text-sm font-bold tracking-[0.3em] uppercase">
                        Violation of protocols results in immediate disqualification.
                    </p>
                </div>
            </div>
        </section>
    );
}
