"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6 pointer-events-none">
            <div className="pointer-events-auto w-full max-w-md bg-[#0a0f1e] border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <h2 className="text-sm font-black text-white uppercase tracking-widest">{title}</h2>
                    <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                </div>
                <div className="px-5 py-4 text-sm text-slate-400 space-y-3 max-h-72 overflow-y-auto leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function Footer() {
    const [modal, setModal] = useState<"privacy" | "terms" | null>(null);

    return (
        <>
            <footer className="py-12 relative z-10 border-t border-white/5 bg-transparent">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
                                DATATHON 2026
                            </Link>
                            <p className="mt-4 text-slate-400 max-w-sm">
                                Forging the next generation of tech legends. Join us for 24 hours of innovation, code, and caffeine.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-200 mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">About</Link></li>
                                <li><Link href="#problems" className="text-slate-400 hover:text-blue-400 transition-colors">Tracks</Link></li>
                                <li><Link href="#timeline" className="text-slate-400 hover:text-blue-400 transition-colors">Schedule</Link></li>
                                <li><Link href="#prizes" className="text-slate-400 hover:text-blue-400 transition-colors">Prizes</Link></li>
                                <li><Link href="/coordinators" className="text-slate-400 hover:text-blue-400 transition-colors">Coordinators</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">
                            © 2026 Datathon CIT. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-slate-500">
                            <button onClick={() => setModal("privacy")} className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</button>
                            <button onClick={() => setModal("terms")} className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</button>
                        </div>
                    </div>
                </div>
            </footer>

            {modal === "privacy" && (
                <Modal title="Privacy Policy" onClose={() => setModal(null)}>
                    <p><strong className="text-white">Effective Date:</strong> February 2026</p>
                    <p>We collect only the information necessary to process your registration for Datathon 2026, including your name, email, institution, and team details.</p>
                    <p>Your data will not be sold or shared with third parties outside of event operations. All submitted information is used solely for communication, coordination, and event management purposes.</p>
                    <p>By registering, you consent to receiving event-related communications via email or phone.</p>
                    <p>For any privacy concerns, contact the organizing committee at the provided contact numbers on the Coordinators page.</p>
                </Modal>
            )}

            {modal === "terms" && (
                <Modal title="Terms of Service" onClose={() => setModal(null)}>
                    <p><strong className="text-white">Effective Date:</strong> February 2026</p>
                    <p>By participating in Datathon 2026, you agree to abide by the rules and code of conduct set by the organizing committee of the Department of Computer Science and Engineering, CIT.</p>
                    <p>All submitted projects must be original work. Plagiarism or use of pre-built solutions will result in immediate disqualification.</p>
                    <p>The organizing committee reserves the right to modify event rules, schedule, or prizes at any time without prior notice.</p>
                    <p>Participants are responsible for their own equipment, data, and conduct during the event.</p>
                    <p className="text-slate-500 text-xs pt-2 border-t border-white/5">
                        This website was designed and developed by <span className="text-blue-400 font-semibold">Lokesh G N</span>.
                    </p>
                </Modal>
            )}
        </>
    );
}
