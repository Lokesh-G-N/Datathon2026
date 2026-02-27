"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const staffCategories = [
    {
        title: "Event Convener",
        members: [
            { name: "Dr. S. Suganthi", role: "Event Convener", degree: "M.Sc., M.Phil.,Ph.D.", photo: "/Suganthi.jpg" }
        ]
    },
    {
        title: "Event Ideation & Industry Collaboration",
        members: [
            { name: "Dr. D. Sudha Devi", role: "Concept Lead", degree: "M.C.A., M.Phil., Ph.D.", photo: "/Sudhadevi.jpg" }
        ]
    },
    {
        title: "Event Coordinators",
        members: [
            { name: "Dr. J. Rathika", role: "Event Coordinator", degree: "M.Phil., Ph.D.", photo: "/rathika.jpg" },
            { name: "Dr. M. Marimuthu", role: "Event Coordinator", degree: "M.C.A., M.Phil., Ph.D.", photo: "/marimuthu.jpg" }
        ]
    },
    {
        title: "Judging and Jury Coordinator",
        members: [
            { name: "Dr. S. Gayathri Devi", role: "Judging & Jury Coordinator", degree: "M.Sc., M.Phil., Ph.D.", photo: "/gayathri devi.jpg" }
        ]
    },
    {
        title: "Inauguration and Valedictory Coordinators",
        members: [
            { name: "Dr. M. Srividya", role: "Ceremony Lead", degree: "M.Phil., Ph.D.", photo: "/srividhya.jpg" },
            { name: "Dr. J. Rathika", role: "Event Coordinator", degree: "M.Phil., Ph.D.", photo: "/rathika.jpg" },
            { name: "Dr. M. Marimuthu", role: "Event Coordinator", degree: "M.C.A., M.Phil., Ph.D.", photo: "/marimuthu.jpg" }
        ]
    },
    {
        title: "Sponsorship and Finance Coordinator",
        members: [
            { name: "Dr. K. Rajarajeshwari", role: "Finance Coordinator", degree: "M.Sc., M.Phil., Ph.D.", photo: "/rajarajeshwari.jpg" }
        ]
    },
    {
        title: "Registration & Participant Management",
        members: [
            { name: "Ms. S. Deivarani", role: "Registration Lead", degree: "M.C.A., M.Phil.", photo: "/deivarani.jpg" },
            { name: "Ms. K. H. Vani", role: "Registration Lead", degree: "M.Sc., M.Phil.", photo: "/vani.jpg" }
        ]
    },
    {
        title: "Food and Hospitality Coordinators",
        members: [
            { name: "Dr. P. Velvadivu", role: "Hospitality Lead", degree: "M.C.A., M.Phil., Ph.D.", photo: "/velavadivu.jpg" },
            { name: "Dr. D. Sudha Devi", role: "Food lead", degree: "M.C.A., M.Phil., Ph.D.", photo: "/Sudhadevi.jpg" }
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
            className="group w-full"
        >
            <Card className={`relative p-4 md:p-5 bg-white/5 backdrop-blur-sm border transition-all duration-300 rounded-2xl overflow-hidden ${type === 'staff' ? 'border-blue-500/10 group-hover:bg-blue-500/5 group-hover:border-blue-500/30' : 'border-white/5 group-hover:bg-white/10 group-hover:border-blue-500/20'}`}>
                <div className="flex items-center gap-4">
                    {type === 'staff' && (
                        <div className="shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 overflow-hidden flex items-center justify-center relative group-hover:border-blue-500/40 transition-colors">
                                <img
                                    src={person.photo ?? "/OIP.jpg"}
                                    alt={person.name}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500/50" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500/50" />
                            </div>
                        </div>
                    )}

                    <div className="flex-1 min-w-0">
                        <h4 className="text-sm md:text-lg font-black text-white italic uppercase tracking-tight truncate">
                            {person.name}
                        </h4>
                        <div className="flex flex-col mt-0.5">
                            {type === 'staff' ? (
                                <p className="text-[10px] font-bold text-blue-400/70 uppercase tracking-widest leading-tight">
                                    {person.degree}
                                </p>
                            ) : (
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                                    {person.role}
                                </p>
                            )}
                        </div>
                    </div>

                    {type === 'student' && person.phone && (
                        <a
                            href={`tel:${person.phone.replace(/\s/g, '')}`}
                            className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group-hover:scale-105"
                        >
                            <Phone className="w-4 h-4 text-blue-500 group-hover:text-white" />
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
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                        Event <span className="text-blue-500">Coordinators</span>
                    </h2>
                </motion.div>

                <div className="space-y-6 md:space-y-4">
                    {/* Faculty Categories */}
                    {staffCategories.map((category, catIdx) => (
                        <div key={catIdx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-4 border-b border-white/5 last:border-0 lg:border-b-0">
                            {/* Category Title - Left Side */}
                            <div className="md:w-1/3 lg:w-1/4 shrink-0">
                                <h3 className="text-xs md:text-sm font-black text-blue-500 uppercase tracking-[0.2em] italic leading-tight">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Members Grid - Right Side */}
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                                {category.members.map((staff, i) => (
                                    <ContactCard key={i} person={staff} type="staff" />
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Student Section */}
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 mt-12 border-t border-blue-500/10">
                        <div className="md:w-1/3 lg:w-1/4 shrink-0">
                            <h3 className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-[0.2em] italic">
                                Student Leads
                            </h3>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
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
