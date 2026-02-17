"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Laptop, Award, Coffee, Fingerprint, Ticket } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const kitItems = [
    { name: "Participant Kit", icon: <ShoppingBag />, desc: "Complete event set including physical file, notepad, and pen." },
    { name: "Real-world Data", icon: <Fingerprint />, desc: "Hands-on experience with industry-defined problem statements." },
    { name: "Tech Exposure", icon: <Laptop />, desc: "Deep dive into industrial tools and modern digital technologies." },
    { name: "Networking", icon: <Award />, desc: "Connect with industry experts, faculty, and peer innovators." },
    { name: "Future Prospects", icon: <Ticket />, desc: "Learning and recognition beyond standard classroom boundaries." },
    { name: "Recognition", icon: <Coffee />, desc: "Participation certificates and substantial prize money awards." }
];

function KitCard({ item, index }: { item: typeof kitItems[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full"
        >
            <Card className="relative h-full bg-black/40 backdrop-blur-2xl border border-white/5 group-hover:border-blue-500/30 transition-all duration-700 rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Intricate Background Glow */}
                <div className="absolute inset-x-0 bottom-[-50%] top-[-50%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

                {/* Abstract Hex Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                <CardContent className="relative z-10 p-10 flex flex-col items-center text-center h-full">
                    <motion.div
                        animate={{
                            y: isHovered ? -5 : 0,
                            scale: isHovered ? 1.1 : 1,
                            color: isHovered ? "#60a5fa" : "#94a3b8"
                        }}
                        className="mb-6 p-5 rounded-2xl bg-white/5 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-all duration-500 shadow-inner"
                    >
                        {item.icon}
                    </motion.div>

                    <h3 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">
                        {item.name}
                    </h3>

                    <motion.p
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: isHovered ? 1 : 0.6 }}
                        className="text-sm text-slate-400 font-medium leading-relaxed"
                    >
                        {item.desc}
                    </motion.p>

                </CardContent>

                {/* Lighted Border Edge Reveal */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.4),transparent_30%)]"
                />
            </Card>
        </motion.div>
    );
}

export default function Kits() {
    return (
        <section id="kits" className="py-32 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-32"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic">
                        <span className="text-blue-500">Kits</span> Provided
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {kitItems.map((item, i) => (
                        <KitCard key={i} item={item} index={i} />
                    ))}
                </div>

                {/* Participant Facilities - Meals */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-10 md:p-16 border border-blue-500/10 bg-black/40 backdrop-blur-3xl rounded-[3rem] relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8">
                        <Coffee className="w-12 h-12 text-blue-500/20" />
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white mb-12 uppercase italic tracking-tighter">
                        Participant <span className="text-blue-500">Facilities</span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="flex items-center gap-3 text-blue-400 font-black uppercase tracking-widest text-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                14th March
                            </h4>
                            <ul className="grid grid-cols-1 gap-4 text-slate-300 font-bold uppercase tracking-wide text-xs">
                                <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all">
                                    <span className="text-blue-500/40">01</span> Lunch (Veg/Non-Veg)
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all">
                                    <span className="text-blue-500/40">02</span> Evening Refreshments
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all">
                                    <span className="text-blue-500/40">03</span> Dinner
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all">
                                    <span className="text-blue-500/40">04</span> Night Refreshments
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="flex items-center gap-3 text-blue-400 font-black uppercase tracking-widest text-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                15th March
                            </h4>
                            <ul className="grid grid-cols-1 gap-4 text-slate-300 font-bold uppercase tracking-wide text-xs">
                                <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all">
                                    <span className="text-blue-500/40">01</span> Breakfast
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all">
                                    <span className="text-blue-500/40">02</span> Lunch (Veg/Non-Veg)
                                </li>
                            </ul>
                            <div className="mt-8 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 italic text-[10px] text-blue-400/60 font-medium tracking-widest leading-relaxed">
                                NOTE: LUNCH ALONE CAN BE OPTED FOR NON-VEG DIETARY PREFERENCE.
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section Tech Overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            </div>
        </section>
    );
}
