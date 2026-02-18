"use client";

import { motion } from "framer-motion";
import { Phone, User, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const staffCoordinators = [
    { name: "Dr.D.Sudha Devi", role: "Event Ideation & Concept Lead / Food & Hospitality", phone: "+91 98944 54045" },
    { name: "Dr.J.Rathika", role: "Event Coordinator / Inauguration & Validation", phone: "+91 96290 59808" },
    { name: "Dr.M.Marimuthu", role: "Event Coordinator / Inauguration & Validation", phone: "+91 98940 62167" },
    { name: "Dr.S.Gayathri Devi", role: "Judging & Jury Coordinator", phone: "+91 99445 61345" },
    { name: "Dr.K.Rajarajeshwari", role: "Sponsorship & Finance Coordinator", phone: "+91 97916 77644" },
    { name: "Dr.M.Srividya", role: "Inauguration and Validation Lead", phone: "+91 98651 89542" },
    { name: "Ms.S.Deivarani", role: "Registration & Participant Management", phone: "+91 94866 24020" },
    { name: "Ms.K.H.Vani", role: "Registration & Participant Management", phone: "+91 98439 32496" },
    { name: "Dr.P.Velavadivu", role: "Food & Hospitality Coordinator", phone: "+91 94866 41259" }
];

const studentCoordinators = [
    { name: "PRAISOODI A", role: "Student Coordinator", phone: "95972 81888" },
    { name: "RAMSANJAI S", role: "Student Coordinator", phone: "93616 29703" },
    { name: "ROHIT V", role: "Student Coordinator", phone: "93427 34959" }
];

function ContactCard({ person, type }: { person: any, type: 'staff' | 'student' }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group"
        >
            <Card className={`relative p-3 md:p-8 bg-black/40 backdrop-blur-md md:backdrop-blur-2xl border transition-all duration-500 rounded-2xl md:rounded-[2rem] overflow-hidden ${type === 'staff' ? 'border-blue-500/10 group-hover:border-blue-500/30' : 'border-white/5 group-hover:border-blue-500/20'}`}>
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 mb-3 md:mb-6">
                    <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        {type === 'staff' ? <GraduationCap className="w-4 h-4 md:w-6 md:h-6" /> : <User className="w-4 h-4 md:w-6 md:h-6" />}
                    </div>
                    <div>
                        <h4 className="text-[10px] md:text-xl font-black text-white tracking-tight uppercase italic leading-tight">{person.name}</h4>
                        <p className="text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mt-0.5">{person.role}</p>
                    </div>
                </div>

                {person.phone.match(/\d/) ? (
                    <a
                        href={`tel:${person.phone.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300"
                    >
                        <Phone className="w-3 h-3 md:w-4 md:h-4 text-blue-500 group-hover:text-white" />
                        <span className="text-[8px] md:text-sm font-bold text-white tracking-widest">{person.phone}</span>
                    </a>
                ) : (
                    <div className="flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5">
                        <Phone className="w-3 h-3 md:w-4 md:h-4 text-slate-500" />
                        <span className="text-[8px] md:text-sm font-bold text-slate-400 tracking-widest">{person.phone}</span>
                    </div>
                )}
            </Card>
        </motion.div>
    );
}

export default function Coordinators() {
    return (
        <section id="coordinators" className="py-6 md:py-32 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h2 className="text-2xl md:text-7xl font-black mb-4 md:mb-6 text-white tracking-tighter uppercase italic">
                        <span className="text-blue-500">Coordinators</span>
                    </h2>
                </motion.div>

                <div className="space-y-24">
                    {/* Staff Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-[1px] flex-1 bg-blue-500/20" />
                            <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.5em] whitespace-nowrap">Faculty Oversight</h3>
                            <div className="h-[1px] flex-1 bg-blue-500/20" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                            {staffCoordinators.map((staff, i) => (
                                <ContactCard key={i} person={staff} type="staff" />
                            ))}
                        </div>
                    </div>

                    {/* Student Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-[1px] flex-1 bg-slate-800" />
                            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.5em] whitespace-nowrap">Student Leads</h3>
                            <div className="h-[1px] flex-1 bg-slate-800" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                            {studentCoordinators.map((student, i) => (
                                <ContactCard key={i} person={student} type="student" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
        </section>
    );
}
