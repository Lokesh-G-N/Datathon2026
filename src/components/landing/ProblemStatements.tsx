"use client";

import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Shield, FileText, X, ChevronRight, Loader2, Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ProblemStatements() {
    const [showPdf, setShowPdf] = useState(false);
    const [numPages, setNumPages] = useState<number>(0);

    // Lock scroll when PDF is open
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowPdf(false);
        };

        if (showPdf) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscape);
        } else {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEscape);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [showPdf]);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

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

                <div className="flex flex-col items-center justify-center min-h-[400px] relative gpu">
                    <Card className="w-full max-w-2xl bg-black/40 border border-white/5 backdrop-blur-md md:backdrop-blur-2xl rounded-[1.5rem] md:rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group gpu">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 z-10" />

                        <motion.div
                            animate={{ y: ["-100%", "600%"] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[50px] md:h-[100px] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none z-0 hidden md:block gpu"
                        />

                        <div className="relative z-10 flex flex-col items-center gap-8">
                            <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500">
                                <FileText className="w-12 h-12" />
                            </div>

                            <div className="space-y-4 max-w-lg mx-auto py-8">
                                <p className="text-sm md:text-xl text-slate-300 font-medium leading-relaxed italic">
                                    Expected deliverables and submission requirements will be shared on the day of the hackathon
                                </p>
                                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mt-6" />
                            </div>

                            <button
                                onClick={() => setShowPdf(true)}
                                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic tracking-tighter rounded-full transition-all duration-300 flex items-center gap-3 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                                <span>View Problem Statements</span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
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

            {/* Fullscreen PDF Viewer */}
            <AnimatePresence mode="wait">
                {showPdf && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPdf(false)}
                        className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-8 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full h-full max-w-5xl bg-[#1a1c1e] rounded-none md:rounded-[2rem] border-0 md:border md:border-white/10 flex flex-col overflow-hidden cursor-default relative"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 bg-[#25282c] border-b border-white/5 shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="hidden md:flex p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm md:text-base font-black text-white uppercase italic tracking-wider leading-none">Problem Statements</h4>
                                        <p className="text-[10px] text-blue-400/60 uppercase font-bold tracking-widest mt-1">Hackathon 2026 Official</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="/problem-statements.pdf"
                                        download
                                        className="p-2 md:px-4 md:py-2 rounded-full md:rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition-all flex items-center gap-2 group"
                                    >
                                        <Download className="w-4 h-4 md:w-5 md:h-5" />
                                        <span className="hidden md:inline text-sm font-black uppercase italic tracking-tighter">Download</span>
                                    </a>
                                    <button
                                        onClick={() => setShowPdf(false)}
                                        className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* PDF Container */}
                            <div
                                className="flex-1 overflow-y-auto bg-[#0a0a0b] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                                data-lenis-prevent
                            >
                                <div className="min-h-full py-4 md:py-12 flex flex-col items-center">
                                    <Document
                                        file="/problem-statements.pdf"
                                        onLoadSuccess={onDocumentLoadSuccess}
                                        loading={
                                            <div className="flex flex-col items-center gap-4 py-32">
                                                <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                                                <p className="text-xs font-black text-blue-500 uppercase tracking-widest animate-pulse italic">Initializing View...</p>
                                            </div>
                                        }
                                        className="flex flex-col gap-4 md:gap-8"
                                    >
                                        {Array.from(new Array(numPages), (el, index) => (
                                            <div key={`page_${index + 1}`} className="shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                                <Page
                                                    pageNumber={index + 1}
                                                    loading=""
                                                    renderAnnotationLayer={false}
                                                    renderTextLayer={false}
                                                    width={typeof window !== 'undefined' ? (window.innerWidth < 768 ? window.innerWidth - 32 : 800) : 800}
                                                    className="rounded-lg overflow-hidden"
                                                />
                                            </div>
                                        ))}
                                    </Document>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
}
