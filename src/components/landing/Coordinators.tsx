"use client";

import { motion } from "framer-motion";
import { Phone, User, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const staffCategories = [
    {
        title: "Event Ideation & Industry Collaboration Coordinator",
        members: [
            { name: "Dr.D.Sudha Devi", role: "Concept Lead", phone: "+91 98944 54045", photo: "/Sudhadevi.jpg" }
        ]
    },
    {
        title: "Event Coordinators",
        members: [
            { name: "Dr.J.Rathika", role: "Event Coordinator", phone: "+91 96290 59808", photo: "/rathika.jpg" },
            { name: "Dr.M.Marimuthu", role: "Event Coordinator", phone: "+91 98940 62167", photo: "/marimuthu.jpg" }
        ]
    },
    {
        title: "Judging and Jury Coordinator",
        members: [
            { name: "Dr.S.Gayathri Devi", role: "Judging & Jury Coordinator", phone: "+91 99445 61345", photo: "/gayathri devi.jpg" }
        ]
    },
    {
        title: "Inauguration and Valedictory Coordinators",
        members: [
            { name: "Dr.M.Srividya", role: "Ceremony Lead", phone: "+91 98651 89542", photo: "/srividhya.jpg" },
            { name: "Dr.J.Rathika", role: "Event Coordinator", phone: "+91 96290 59808", photo: "/rathika.jpg" },
            { name: "Dr.M.Marimuthu", role: "Event Coordinator", phone: "+91 98940 62167", photo: "/marimuthu.jpg" }
        ]
    },
    {
        title: "Sponsorship and Finance Coordinator",
        members: [
            { name: "Dr.K.Rajarajeshwari", role: "Finance Coordinator", phone: "+91 97916 77644", photo: "/rajarajeshwari.jpg" }
        ]
    },
    {
        title: "Registration & Participant Management Coordinators",
        members: [
            { name: "Ms.S.Deivarani", role: "Registration Lead", phone: "+91 94866 24020", photo: "/deivarani.jpg" },
            { name: "Ms.K.H.Vani", role: "Registration Lead", phone: "+91 98439 32496", photo: "/vani.jpg" }
        ]
    },
    {
        title: "Food and Hospitality Coordinators",
        members: [
            { name: "Dr.P.Velavadivu", role: "Hospitality Lead", phone: "+91 94866 41259", photo: "/velavadivu.jpg" },
            { name: "Dr.D.Sudha Devi", role: "Food lead", phone: "+91 98944 54045", photo: "/Sudhadevi.jpg" }
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group w-full"
        >
            <Card className="relative p-2 md:p-3 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 rounded-xl overflow-hidden group-hover:bg-white/10 group-hover:border-blue-500/30">
                <div className="flex items-center gap-3">
                    {/* Photo Avatar - staff only */}
                    {type === 'staff' && (
                        <div className="shrink-0">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 overflow-hidden flex items-center justify-center relative group-hover:border-blue-500/40 transition-colors">
                                <img
                                    src={person.photo ?? "/OIP.jpg"}
                                    alt={person.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-blue-500/50 pointer-events-none" />
                                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-blue-500/50 pointer-events-none" />
                            </div>
                        </div>
                    )}

                    <div className="flex-1 min-w-0">
                        <h4 className="text-[13px] md:text-[16px] font-black text-white italic uppercase tracking-tight truncate">
                            {person.name}
                        </h4>
                    </div>

                    {person.phone.match(/\d/) && (
                        <a
                            href={`tel:${person.phone.replace(/\s/g, '')}`}
                            className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group-hover:scale-105"
                        >
                            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500 group-hover:text-white" />
                        </a>
                    )}
                </div>
            </Card>
        </motion.div>
    );
}

export default function Coordinators() {
    return (
        <section id="coordinators" className="py-12 md:py-24 bg-transparent relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                        Event <span className="text-blue-500">Coordinators</span>
                    </h2>
                </motion.div>

                <div className="space-y-6 md:space-y-4">
                    {/* Staff Categories Section */}
                    {staffCategories.map((category, catIdx) => (
                        <div key={catIdx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-4 border-b border-white/5 last:border-0">
                            {/* Category Title - Left Side */}
                            <div className="md:w-1/3 lg:w-1/4 shrink-0">
                                <h3 className="text-sm md:text-xl font-black text-blue-500 uppercase tracking-wide italic leading-tight">
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
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-4 mt-8">
                        <div className="md:w-1/3 lg:w-1/4 shrink-0">
                            <h3 className="text-sm md:text-xl font-black text-slate-500 uppercase tracking-wide italic">
                                Student Coordinators
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
