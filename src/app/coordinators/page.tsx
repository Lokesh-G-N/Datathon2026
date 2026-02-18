"use client";

import Navbar from "@/components/Navbar";
import Coordinators from "@/components/landing/Coordinators";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CoordinatorsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Page Header Detail */}
            <div className="pt-32 pb-10 border-b border-white/5 bg-black/40 backdrop-blur-3xl">
            </div>

            <Coordinators />
            <Footer />
        </main>
    );
}
