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
        <section id="problems" className="py-6 md:py-32 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-2xl md:text-7xl font-black mb-4 md:mb-6 text-white tracking-tighter uppercase italic">
                        <span className="text-blue-500">Problem Statements</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col items-center justify-center min-h-[400px] relative">
                    <Card className="w-full max-w-2xl bg-black/40 border border-white/5 backdrop-blur-md md:backdrop-blur-2xl rounded-[1.5rem] md:rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 z-10" />

                        <motion.div
                            animate={{ y: ["-100%", "600%"] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[50px] md:h-[100px] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none z-0 hidden md:block"
                        />

                        <div className="relative z-10 flex flex-col items-center gap-8">
                            <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 animate-pulse">
                                <Shield className="w-12 h-12" />
                            </div>

                            <div className="space-y-4">
                                <p className="text-[11px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest">Data Encryption Enabled</p>
                                <h3 className="text-xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-tight">
                                    Problems <br />
                                    <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Released Soon</span>
                                </h3>
                            </div>

                            <p className="text-[11px] md:text-xl text-slate-400 font-light italic max-w-md">
                                Participants will engage with problems derived directly from industrial and real world use cases.
                            </p>
                        </div>

                        {/* Corner Decals */}
                        <div className="absolute top-0 right-0 p-8 flex gap-2 opacity-20">
                            <div className="w-1 h-8 bg-blue-500" />
                            <div className="w-1 h-4 bg-blue-500" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 flex gap-2 opacity-20">
                            <div className="w-1 h-4 bg-blue-500" />
                            <div className="w-1 h-8 bg-blue-500" />
                        </div>
                    </Card>
                </div>
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10 pointer-events-none" />
            </div>
        </section>
    );
}
