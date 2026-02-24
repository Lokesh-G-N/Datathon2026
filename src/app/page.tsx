import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import ProblemStatements from "@/components/landing/ProblemStatements";
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
      <Coordinators />
      <Guidelines />
      <FAQ />
      <Footer />
    </main>
  );
}
