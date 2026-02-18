"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Trophy, Star, Award } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const prizes = [
    {
        tier: "Second Place",
        amount: "₹25,000",
        icon: <Award className="w-12 h-12 text-slate-300" />,
        color: "rgba(148, 163, 184, 0.2)",
        borderColor: "border-slate-500/30"
    },
    {
        tier: "First Place",
        amount: "₹35,000",
        icon: <Trophy className="w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />,
        color: "rgba(59, 130, 246, 0.3)",
        borderColor: "border-blue-500/50",
        featured: true
    },
    {
        tier: "Third Place",
        amount: "₹15,000",
        icon: <Star className="w-12 h-12 text-amber-600" />,
        color: "rgba(180, 83, 9, 0.2)",
        borderColor: "border-amber-700/30"
    }
];

function PrizeCard({ prize, index }: { prize: typeof prizes[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    // Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`perspective-1000 ${prize.featured ? 'md:scale-110 z-20' : 'z-10'}`}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : rotateX,
                    rotateY: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : rotateY,
                    transformStyle: "preserve-3d"
                }}
                className={`relative group bg-black/40 backdrop-blur-md md:backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2.5rem] border ${prize.borderColor} transition-all duration-300 p-0.5 md:p-1`}
            >
                {/* Radiant Spotlight Background */}
                <motion.div
                    className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: `radial-gradient(circle at center, ${prize.color}, transparent 70%)`
                    }}
                />

                <div className="relative z-10 p-4 md:p-10 flex flex-col items-center text-center">
                    <div className="mb-3 md:mb-8 p-3 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                        {/* Smaller icon for mobile */}
                        <div className="w-6 h-6 md:w-full md:h-full flex items-center justify-center">
                            {prize.icon}
                        </div>
                    </div>

                    <h3 className={`text-xs md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase mb-1 md:mb-4 ${prize.featured ? 'text-blue-400' : 'text-slate-500'}`}>
                        {prize.tier}
                    </h3>

                    <div className="text-sm md:text-5xl font-black text-white mb-2 md:mb-6 tracking-tighter">
                        {prize.amount}
                    </div>

                </div>

                {/* Cybernetic Accent Lines - Hidden on mobile for perf */}
                <div className="absolute top-10 right-0 w-1 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
                <div className="absolute bottom-10 left-0 w-1 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
            </motion.div>
        </motion.div>
    );
}

export default function Prizes() {
    return (
        <section id="prizes" className="py-6 md:py-32 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h2 className="text-2xl md:text-7xl font-black mb-4 md:mb-6 text-white tracking-tighter uppercase italic">
                        <span className="text-blue-500">Prizes</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 gap-2 md:gap-12 items-stretch max-w-6xl mx-auto pb-8 px-2 md:px-0">
                    {prizes.map((prize, i) => (
                        <PrizeCard key={i} prize={prize} index={i} />
                    ))}
                </div>

                {/* Global Section Accents */}
                <div className="mt-8 md:mt-32 p-4 md:p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm max-w-3xl mx-auto text-center">
                    <p className="text-[10px] md:text-sm text-slate-500 font-medium tracking-widest uppercase mb-2 md:mb-4">Plus Specialized Categories</p>
                    <div className="flex flex-row justify-center items-center gap-3 md:gap-6 text-white/60 font-bold text-[10px] md:text-base">
                        <span>Creative Solution</span>
                        <span className="text-blue-500/40">•</span>
                        <span>Impactful Solution</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
