```
"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const studentCoordinators = [
    { name: "PRAISOODI A", role: "Student Coordinator", phone: "95972 81888" },
    { name: "RAMSANJAI S", role: "Student Coordinator", phone: "93616 29703" },
    { name: "Dhivya K P", role: "Student Coordinator", phone: "99942 22914" },
    { name: "Sahithya V", role: "Student Coordinator", phone: "80723 21655" }
];

function ContactCard({ person }: { person: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group w-full"
        >
            <Card className="relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 rounded-2xl overflow-hidden group-hover:bg-white/10 group-hover:border-blue-500/30">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <h4 className="text-lg md:text-xl font-black text-white italic uppercase tracking-tight truncate">
                            {person.name}
                        </h4>
                        <p className="text-[10px] font-bold text-blue-400/70 uppercase tracking-widest mt-1">
                            {person.role}
                        </p>
                    </div>

                    {person.phone.match(/\d/) && (
                        <a
                            href={`tel:${ person.phone.replace(/\s/g, '') } `}
                            className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group-hover:scale-105"
                        >
                            <Phone className="w-5 h-5 text-blue-500 group-hover:text-white" />
                        </a>
                    )}
                </div>
            </Card>
        </motion.div>
    );
}

export default function Coordinators() {
    return (
        <section id="coordinators" className="py-24 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-4">
                        Student <span className="text-blue-500">Coordinators</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium uppercase tracking-widest">
                        Reach out to our student team for any event-related queries
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {studentCoordinators.map((student, i) => (
                        <ContactCard key={i} person={student} />
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
        </section>
    );
}
