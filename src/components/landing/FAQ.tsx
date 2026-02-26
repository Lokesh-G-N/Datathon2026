"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronRight } from "lucide-react";
import { useState } from "react";

const faqs = [
    { q: "What is DATATHON 2K26?", a: "DATATHON 2K26 is a national-level 24-hour hackathon where students build data-driven solutions to real-world, industry-defined problems using data science concepts." },
    { q: "When and where will the event be held?", a: "The event will be conducted on 14th & 15th March 2026 at Coimbatore Institute of Technology (CIT), Coimbatore." },
    { q: "Who can participate?", a: "Undergraduate and postgraduate students from recognized institutions can participate. Students from any department or discipline are welcome." },
    { q: "What is the team size?", a: "Teams can have 2 to 4 members." },
    { q: "How and when will problem statements be released?", a: "Problem statements will be released a week before the event on the official website." },
    { q: "Are food and other facilities provided?", a: "Yes. Lunch, refreshments, dinner, and breakfast will be provided. Participant kits and internet access will also be sustained." },
    { q: "Will participants receive certificates?", a: "Yes, participation certificates will be provided to all teams." },
];

function FAQItem({ faq, i, activeItem, setActiveItem }: { faq: typeof faqs[0], i: number, activeItem: string | undefined, setActiveItem: (v: string | undefined) => void }) {
    const isActive = activeItem === `item-${i}`;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
        >
            <AccordionItem
                value={`item-${i}`}
                className={`border border-white/5 bg-black/40 backdrop-blur-md md:backdrop-blur-xl px-4 md:px-10 rounded-2xl md:rounded-[2rem] transition-all duration-700 mb-4 md:mb-6 overflow-hidden relative group ${isActive ? 'border-blue-500/30' : 'hover:border-white/20'}`}
            >
                {/* Active Item Glow */}
                <div className={`absolute inset-0 bg-blue-500/5 transition-opacity duration-1000 blur-3xl ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                <AccordionTrigger
                    className="text-sm md:text-xl font-bold text-slate-200 hover:text-white hover:no-underline py-4 md:py-8 text-left relative z-10 flex gap-3 md:gap-6"
                    onClick={() => setActiveItem(isActive ? undefined : `item-${i}`)}
                >
                    <div className={`p-1.5 md:p-2 rounded-lg transition-all duration-500 ${isActive ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'}`}>
                        <HelpCircle className="w-3 h-3 md:w-5 md:h-5" />
                    </div>
                    <span className="flex-1">{faq.q}</span>
                </AccordionTrigger>

                <AccordionContent className="text-slate-400 text-sm md:text-lg leading-relaxed pb-6 md:pb-10 pl-8 md:pl-14 relative z-10 font-light border-l border-blue-500/20 ml-[18px] md:ml-[26px]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {faq.a}

                        <div className="mt-4 md:mt-8 flex items-center gap-3">
                            <div className="h-[1px] w-4 md:w-8 bg-blue-500/30" />
                            <span className="text-[8px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest">Data Decoded</span>
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                    </motion.div>
                </AccordionContent>

                {/* Scan line effect on hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/20 transition-all duration-700" />
            </AccordionItem>
        </motion.div>
    );
}

export default function FAQ() {
    const [activeItem, setActiveItem] = useState<string | undefined>();

    return (
        <section id="faq" className="py-6 md:py-32 bg-transparent relative">
            <div className="container max-w-4xl px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-2xl md:text-7xl font-black mb-4 md:mb-6 text-white tracking-tighter uppercase italic">
                        <span className="text-blue-500">FAQ</span>
                    </h2>
                </motion.div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} faq={faq} i={i} activeItem={activeItem} setActiveItem={setActiveItem} />
                    ))}
                </Accordion>
            </div>

        </section>
    );
}
