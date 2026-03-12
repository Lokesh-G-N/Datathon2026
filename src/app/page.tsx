import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import dynamic from "next/dynamic";
const ProblemStatements = dynamic(() => import("@/components/landing/ProblemStatements"), { ssr: false });
import Guidelines from "@/components/landing/Guidelines";
import Prizes from "@/components/landing/Prizes";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/Footer";
import Sponsors from "@/components/landing/Sponsors";
import Coordinators from "@/components/landing/Coordinators";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <ProblemStatements />
      <Prizes />
      <Guidelines />
      <Coordinators />
      <FAQ />
      <Footer />
    </main>
  );
}
