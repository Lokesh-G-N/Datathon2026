"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const PARTICLE_COUNT = 120; // Increased for density, optimized for performance

interface ParticleData {
    id: number;
    initialX: number;
    initialY: number;
    size: number;
    color: string;
}

const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#f87171", "#ef4444"];

export default function Background3D() {
    const { scrollY } = useScroll();
    const yParallaxFast = useTransform(scrollY, [0, 2000], [0, -300]);
    const yParallaxSlow = useTransform(scrollY, [0, 2000], [0, -100]);
    const rotateRings = useTransform(scrollY, [0, 2000], [0, 180]);

    const [particles, setParticles] = useState<ParticleData[]>([]);
    const [streaks, setStreaks] = useState<{ left: number; duration: number; delay: number }[]>([]);
    const [phase, setPhase] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setPhase((prev) => (prev + 1) % 3);
        }, 6000);

        setParticles(
            Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
                id: i,
                initialX: Math.random() * 100,
                initialY: Math.random() * 100,
                size: Math.random() * 5 + 1,
                color: COLORS[i % COLORS.length],
            }))
        );

        setStreaks(
            Array.from({ length: 5 }).map((_, i) => ({
                left: 20 * i + Math.random() * 10,
                duration: 5 + Math.random() * 5,
                delay: i * 2,
            }))
        );

        return () => clearInterval(timer);
    }, []);

    const getPosition = (p: ParticleData, currentPhase: number) => {
        const i = p.id;
        let x = p.initialX;
        let y = p.initialY;
        // Use a stable reference for time or a client-only clock if needed
        const time = mounted ? Date.now() / 3000 : 0;

        if (currentPhase === 0) {
            const stream = i % 4;
            x = (i / (PARTICLE_COUNT / 1.5)) * 100 - 25;
            y = (20 * (stream + 1)) + Math.sin((i / 4) + time) * 12;
        } else if (currentPhase === 1) {
            const gridX = (i % 8) * 12.5 + 6.25;
            const gridY = Math.floor(i / 15) * 15 + 10;
            const angle = (i / 8) + time;
            x = gridX + Math.cos(angle) * 8;
            y = gridY + Math.sin(angle) * 8;
        } else if (currentPhase === 2) {
            const radius = (i / PARTICLE_COUNT) * 45 + 5;
            const angle = (i / 4) + (i / PARTICLE_COUNT) * Math.PI * 6 + time * 0.4;
            x = 50 + Math.cos(angle) * radius;
            y = 50 + Math.sin(angle) * (radius * 1.05);
        }

        return { x, y };
    };

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020408] pointer-events-none">
            {/* 1. Cinematic Base Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0c1a30_0%,_#020408_100%)]" />

            {/* 2. Digital Grid System */}
            <motion.div
                style={{ y: yParallaxSlow }}
                className="absolute inset-0 opacity-[0.15]"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_#020408_80%)]" />
            </motion.div>

            {/* 3. Rotating Holographic Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <motion.div
                    style={{ rotate: rotateRings }}
                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[80vw] h-[80vw] border-[1px] border-blue-500/30 rounded-full border-dashed"
                />
                <motion.div
                    style={{ rotate: useTransform(rotateRings, (v) => -v) }}
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[60vw] h-[60vw] border-[1px] border-red-500/20 rounded-full"
                />
            </div>

            {/* 4. Particle Swarm */}
            <motion.div style={{ y: yParallaxFast }} className="absolute inset-0">
                {mounted && particles.map((p) => {
                    const pos = getPosition(p, phase);
                    return (
                        <motion.div
                            key={p.id}
                            className="absolute rounded-full"
                            style={{
                                width: p.size,
                                height: p.size,
                                left: 0,
                                top: 0,
                                willChange: "transform",
                                background: `radial-gradient(circle, ${p.color} 0%, transparent 80%)`,
                                boxShadow: p.size > 3 ? `0 0 ${p.size * 2}px ${p.color}40` : 'none',
                            }}
                            animate={{
                                x: `${pos.x}vw`,
                                y: `${pos.y}vh`,
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.3, 1]
                            }}
                            transition={{
                                x: { type: "spring", stiffness: 8, damping: 15 },
                                y: { type: "spring", stiffness: 8, damping: 15 },
                                opacity: { duration: 3 + (p.id % 3), repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 3 + (p.id % 3), repeat: Infinity, ease: "easeInOut" },
                                delay: (p.id % 30) * 0.03
                            }}
                        />
                    );
                })}

                {/* 5. Dynamic Scanning Beams */}
                <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-md rotate-[-5deg]"
                />
                <motion.div
                    animate={{ x: ["200%", "-100%"] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent blur-xl rotate-[10deg]"
                />
            </motion.div>

            {/* 6. High-Frequency "Data" Streaks */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {mounted && streaks.map((streak, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: ["-20%", "120%"] }}
                        transition={{
                            duration: streak.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: streak.delay
                        }}
                        className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                        style={{ left: `${streak.left}%` }}
                    />
                ))}
            </div>

            {/* 7. Atmosphere & Texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408] pointer-events-none" />
        </div>
    );
}
