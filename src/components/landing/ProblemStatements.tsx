"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useState, useRef } from "react";

const problems = [
    {
        title: "Live Classroom Transcription",
        desc: "Develop a system for live classroom transcription with speaker diarization, which automatically generates and shares structured class notes with students for future reference.",
        tags: ["Education", "NLP", "Rocket Learning"],
        color: "rgba(59, 130, 246, 0.4)"
    },
    {
        title: "Student Behavior Monitoring",
        desc: "Design an intelligent solution to monitor student behavior in classrooms, analyze attention span, and identify factors causing distraction to enhance learning outcomes.",
        tags: ["Education", "CV", "Rocket Learning"],
        color: "rgba(16, 185, 129, 0.3)"
    },
    {
        title: "G2211 Code Prediction",
        desc: "Build a machine learning model to predict G2211 CPT codes for complex hospital visits to improve billing accuracy.",
        tags: ["Healthcare", "ML", "Billing"],
        color: "rgba(239, 68, 68, 0.3)"
    },
    {
        title: "Insurance Web-Scraper",
        desc: "Develop an AI agent to web-scrape insurance websites to track new policy changes and provide real-time updates.",
        tags: ["Healthcare", "AI Agent", "Automation"],
        color: "rgba(139, 92, 246, 0.3)"
    },
    {
        title: "Healthy Food Agentic Framework",
        desc: "Create an agentic framework for healthy food and diet planning, using customer data as a hospital support bot.",
        tags: ["Healthcare", "GenAI", "Diet"],
        color: "rgba(245, 158, 11, 0.3)"
    },
    {
        title: "AI Treatment Recommender",
        desc: "Design an AI-driven deterministic decision-making system to recommend appropriate treatments and estimate associated billing costs.",
        tags: ["Healthcare", "Expert System", "Billing"],
        color: "rgba(59, 130, 246, 0.4)"
    },
    // Placeholders to reach 15
    {
        title: "Precision Agriculture AI",
        desc: "Optimize crop yields using satellite imagery and IoT sensor data to predict local soil health and irrigation needs.",
        tags: ["AgriTech", "IoT", "Sustainable"],
        color: "rgba(16, 185, 129, 0.3)"
    },
    {
        title: "Financial Fraud Sentinel",
        desc: "Identify anomalous transaction patterns in real-time to prevent sophisticated digital payment fraud in emerging markets.",
        tags: ["FinTech", "Security", "Real-time"],
        color: "rgba(139, 92, 246, 0.3)"
    },
    {
        title: "Supply Chain Resilience",
        desc: "Predict supply chain disruptions using global logistics data and suggest alternative routes to maintain efficiency.",
        tags: ["Logistics", "Predictive", "Efficiency"],
        color: "rgba(59, 130, 246, 0.4)"
    },
    {
        title: "Energy Grid Optimizer",
        desc: "Manage renewable energy distribution in smart grids to balance load during peak demand using demand forecasting.",
        tags: ["Energy", "Smart Cities", "ML"],
        color: "rgba(245, 158, 11, 0.3)"
    },
    {
        title: "Autonomous Waste Sorting",
        desc: "Robotic vision system to categorize and sort recyclable materials from mixed waste streams with high precision.",
        tags: ["GreenTech", "Robotics", "Sustainability"],
        color: "rgba(16, 185, 129, 0.3)"
    },
    {
        title: "Personalized Genomic Medicine",
        desc: "Analyze genomic sequences to identify markers for rare genetic disorders and suggest tailored therapeutic interventions.",
        tags: ["BioTech", "Genomics", "Healthcare"],
        color: "rgba(239, 68, 68, 0.3)"
    },
    {
        title: "Smart Traffic Flow Control",
        desc: "Dynamic signal management system using real-time traffic density data to minimize congestion in urban hubs.",
        tags: ["Public Infra", "IoT", "Smart Cities"],
        color: "rgba(59, 130, 246, 0.4)"
    },
    {
        title: "Digital Twin for Industry 4.0",
        desc: "Create a virtual replica of a manufacturing unit to simulate stress tests and optimize production line parameters.",
        tags: ["Industry", "Simulation", "Systems"],
        color: "rgba(139, 92, 246, 0.3)"
    },
    {
        title: "Quantum Cryptography Guard",
        desc: "Implement post-quantum encryption protocols for securing critical communication channels against future threats.",
        tags: ["CyberSec", "Quantum", "Research"],
        color: "rgba(239, 68, 68, 0.3)"
    }
];

import { Terminal, Database, Shield, Zap } from "lucide-react";

export default function ProblemStatements() {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section id="problems" className="py-32 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic">
                        The <span className="text-blue-500 text-glow">Databank</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 h-[800px] md:h-[600px]">
                    {/* Sidebar - Problem List */}
                    <div className="lg:w-1/3 w-full flex flex-col h-full">
                        <div className="p-4 bg-blue-500/10 border-t border-x border-blue-500/20 rounded-t-2xl flex items-center justify-between">
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Active Dossiers</span>
                            <Database className="w-3 h-3 text-blue-500" />
                        </div>
                        <div className="flex-1 overflow-y-auto bg-black/40 border border-white/5 backdrop-blur-xl rounded-b-2xl custom-scrollbar p-2 space-y-2">
                            {problems.map((prob, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIdx(i)}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${activeIdx === i
                                            ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                            : "hover:bg-white/5 text-slate-500"
                                        }`}
                                >
                                    <span className={`text-[10px] font-mono ${activeIdx === i ? "text-blue-200" : "text-slate-700"}`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-bold uppercase tracking-tight text-xs truncate">
                                        {prob.title}
                                    </span>
                                    {activeIdx === i && (
                                        <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-white ml-auto" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Panel - Problem Details */}
                    <div className="lg:w-2/3 w-full h-full relative group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="h-full bg-black/40 border border-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 flex flex-col relative overflow-hidden"
                            >
                                {/* Digital Scanline Effect */}
                                <motion.div
                                    animate={{ y: ["-100%", "500%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-[1px] bg-blue-500/10 z-0 pointer-events-none"
                                />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                                            <Terminal className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-blue-500/60 uppercase tracking-[0.3em]">Accessing Dossier</p>
                                            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                                                {problems[activeIdx].title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex gap-4 mb-8">
                                            {problems[activeIdx].tags.map(tag => (
                                                <Badge key={tag} className="bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light italic border-l-2 border-blue-500/30 pl-8">
                                            "{problems[activeIdx].desc}"
                                        </p>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Priority</span>
                                            <div className="flex gap-1">
                                                {[1, 2, 3].map(bit => (
                                                    <div key={bit} className="w-4 h-1 rounded-full bg-blue-500" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Risk Level</span>
                                            <span className="block text-xs font-bold text-white uppercase italic tracking-tighter text-blue-400">Low Exposure</span>
                                        </div>
                                        <div className="hidden md:block space-y-1">
                                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Complexity</span>
                                            <span className="block text-xs font-bold text-white uppercase italic tracking-tighter">Class A-IX</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Decals */}
                                <div className="absolute top-0 right-0 p-8 flex gap-2 opacity-20">
                                    <div className="w-1 h-8 bg-blue-500" />
                                    <div className="w-1 h-4 bg-blue-500" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
