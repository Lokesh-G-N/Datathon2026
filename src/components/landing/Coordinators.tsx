"use client";

import { motion } from "framer-motion";
import { Phone, User, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const staffCategories = [
    {
        title: "Event Coordination & Ideation",
        members: [
            { name: "Dr.D.Sudha Devi", role: "Event Ideation & Concept Lead / Food & Hospitality", phone: "+91 98944 54045" },
            { name: "Dr.J.Rathika", role: "Event Coordinator / Inauguration & Validation", phone: "+91 96290 59808" },
            { name: "Dr.M.Marimuthu", role: "Event Coordinator / Inauguration & Validation", phone: "+91 98940 62167" }
        ]
    },
    {
        title: "Inauguration & Validation",
        members: [
            { name: "Dr.M.Srividya", role: "Inauguration and Validation Lead", phone: "+91 98651 89542" },
            { name: "Dr.J.Rathika", role: "Event Coordinator / Inauguration & Validation", phone: "+91 96290 59808" },
            { name: "Dr.M.Marimuthu", role: "Event Coordinator / Inauguration & Validation", phone: "+91 98940 62167" }
        ]
    },
    {
        title: "Judging & Jury",
        members: [
            { name: "Dr.S.Gayathri Devi", role: "Judging & Jury Coordinator", phone: "+91 99445 61345" }
        ]
    },
    {
        title: "Registration",
        members: [
            { name: "Ms.S.Deivarani", role: "Registration & Participant Management", phone: "+91 94866 24020" },
            { name: "Ms.K.H.Vani", role: "Registration & Participant Management", phone: "+91 98439 32496" }
        ]
    },
    {
        title: "Food & Hospitality",
        members: [
            { name: "Dr.P.Velavadivu", role: "Food & Hospitality Coordinator", phone: "+91 94866 41259" },
            { name: "Dr.D.Sudha Devi", role: "Event Ideation & Concept Lead / Food & Hospitality", phone: "+91 98944 54045" }
        ]
    },
    {
        title: "Sponsorship & Finance",
        members: [
            { name: "Dr.K.Rajarajeshwari", role: "Sponsorship & Finance Coordinator", phone: "+91 97916 77644" }
        ]
    }
];

const studentCoordinators = [
    { name: "PRAISOODI A", role: "Student Coordinator", phone: "95972 81888" },
    { name: "RAMSANJAI S", role: "Student Coordinator", phone: "93616 29703" },
    { name: "Dhivya K P", role: "Student Coordinator", phone: "99942 22914" },
    { name: "Sahithya V", role: "Student Coordinator", phone: "80723 21655" }
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
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 mb-4 md:mb-8">
                    {/* Photo Placeholder for Staff */}
                    {type === 'staff' && (
                        <div className="relative group/photo">
                            <div className="w-20 h-20 md:w-32 md:h-32 rounded-xl md:rounded-2xl border-2 border-blue-500/20 bg-blue-500/5 overflow-hidden flex items-center justify-center transition-all duration-500 group-hover/photo:border-blue-500/40">
                                <User className="w-10 h-10 md:w-16 md:h-16 text-blue-500/20" />
                                {/* Cybernetic corner accents for photo */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500/40" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/40" />
                            </div>
                            <div className="absolute -inset-2 bg-blue-500/5 blur-xl rounded-full opacity-0 group-hover/photo:opacity-100 transition-opacity" />
                        </div>
                    )}

                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 w-fit">
                                {type === 'staff' ? <GraduationCap className="w-4 h-4 md:w-6 md:h-6" /> : <User className="w-4 h-4 md:w-6 md:h-6" />}
                            </div>
                            <h4 className="text-sm md:text-2xl font-black text-white tracking-tighter uppercase italic leading-[1.1] w-full break-normal">
                                {person.name}
                            </h4>
                        </div>
                        {type === 'student' && (
                            <p className="text-[8px] md:text-xs font-black text-slate-500 uppercase tracking-widest leading-tight">{person.role}</p>
                        )}
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
                        Event <span className="text-blue-500">Coordinators</span>
                    </h2>
                </motion.div>

                <div className="space-y-24">
                    {/* Staff Categories Section */}
                    {staffCategories.map((category, catIdx) => (
                        <div key={catIdx} className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] flex-1 bg-blue-500/20" />
                                <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.5em] whitespace-nowrap">{category.title}</h3>
                                <div className="h-[1px] flex-1 bg-blue-500/20" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
                                {category.members.map((staff, i) => (
                                    <ContactCard key={i} person={staff} type="staff" />
                                ))}
                            </div>
                        </div>
                    ))}

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
