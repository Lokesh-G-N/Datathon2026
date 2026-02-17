"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Info, Landmark, Cpu } from "lucide-react";

const aboutData = {
    event: {
        title: "Datathon 2026",
        icon: <Cpu className="w-6 h-6" />,
        content: "DATATHON 2026 is a national-level 24-hour hackathon, an innovation marathon where creativity meets technology and ideas turn into impactful solutions. The event ignites innovation, encourages cross-disciplinary collaboration, and empowers young minds to solve real-world, industry-defined challenges through rapid ideation, development, and pitching in a high-energy environment. Participants will present their solutions to a jury of experts and leaders from leading industries, gaining valuable insights, mentorship, and recognition."
    },
    college: {
        title: "About CIT",
        icon: <Landmark className="w-6 h-6" />,
        content: "Coimbatore Institute of Technology (CIT), established in 1956, is a reputed institution under the Government of Tamil Nadu. CIT is an autonomous institution since 1987 and is affiliated to Anna University, Chennai. The institute’s alumni network and industry-aligned curriculum ensure bright career opportunities for students. CIT has a very active Alumni Connect, serving in key positions across the globe in multiple sectors, mentoring and motivating current students."
    },
    department: {
        title: "About M.Sc. Data Science",
        icon: <Info className="w-6 h-6" />,
        content: "M.Sc. Data Science is a specialized program focused on data analytics and intelligent decision-making. It builds a strong foundation in computer science, statistics, and data engineering. Students learn to analyze large datasets using machine learning and analytical techniques. The curriculum emphasizes hands-on laboratory work and real-world case studies. The program develops problem-solving, analytical, and innovation skills, preparing graduates for careers as Data Scientists, Data Analysts, and ML Engineers."
    }
};

export default function About() {
    const [activeTab, setActiveTab] = useState("event");

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-transparent">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic">
                        <span className="text-blue-500">About</span>
                    </h2>
                </motion.div>

                <Tabs defaultValue="event" className="w-full max-w-5xl mx-auto" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3 bg-black/40 p-2 rounded-2xl border border-white/5 backdrop-blur-xl h-auto mb-16 relative">
                        {/* Animated Selector Highlight */}
                        <motion.div
                            className="absolute inset-y-2 left-2 right-2 bg-blue-500/10 rounded-xl pointer-events-none"
                            layoutId="tabBackground"
                        />

                        <TabsTrigger value="event" className="relative py-4 rounded-xl data-[state=active]:text-white data-[state=active]:bg-white/5 transition-all flex items-center gap-3">
                            <span className={`p-2 rounded-lg ${activeTab === 'event' ? 'bg-blue-500/20 text-blue-400' : 'text-slate-500'}`}>
                                <Cpu className="w-5 h-5" />
                            </span>
                            <span className="font-bold uppercase tracking-widest text-xs hidden md:block">The Event</span>
                        </TabsTrigger>
                        <TabsTrigger value="college" className="relative py-4 rounded-xl data-[state=active]:text-white data-[state=active]:bg-white/5 transition-all flex items-center gap-3">
                            <span className={`p-2 rounded-lg ${activeTab === 'college' ? 'bg-blue-500/20 text-blue-400' : 'text-slate-500'}`}>
                                <Landmark className="w-5 h-5" />
                            </span>
                            <span className="font-bold uppercase tracking-widest text-xs hidden md:block">The College</span>
                        </TabsTrigger>
                        <TabsTrigger value="department" className="relative py-4 rounded-xl data-[state=active]:text-white data-[state=active]:bg-white/5 transition-all flex items-center gap-3">
                            <span className={`p-2 rounded-lg ${activeTab === 'department' ? 'bg-blue-500/20 text-blue-400' : 'text-slate-500'}`}>
                                <Info className="w-5 h-5" />
                            </span>
                            <span className="font-bold uppercase tracking-widest text-xs hidden md:block">Department</span>
                        </TabsTrigger>
                    </TabsList>

                    <AnimatePresence mode="wait">
                        {Object.entries(aboutData).map(([key, data]) => (
                            <TabsContent key={key} value={key} className="mt-0 focus-visible:ring-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                >
                                    <Card className="bg-black/40 border border-white/5 backdrop-blur-2xl shadow-2xl rounded-[3rem] overflow-hidden group">
                                        <CardContent className="p-8 md:p-14 relative overflow-hidden">
                                            {/* Holographic Scan Line - GPU Accelerated */}
                                            <motion.div
                                                animate={{ y: ["-100%", "600%"] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                                className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none z-0"
                                            />

                                            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
                                                <div className="flex-1">
                                                    <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
                                                        {data.title}
                                                    </h3>
                                                    <p className="text-xl text-slate-400 leading-relaxed font-light mb-4 max-w-4xl border-l-2 border-blue-500/20 pl-8">
                                                        {data.content}
                                                    </p>
                                                </div>

                                                <div className="w-full lg:w-48 h-full flex flex-row lg:flex-col gap-4">
                                                    <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-center">
                                                        <div className="w-12 h-12 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </AnimatePresence>
                </Tabs>
            </div>
        </section>
    );
}
