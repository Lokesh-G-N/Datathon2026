import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import ProblemStatements from "@/components/landing/ProblemStatements";
import Guidelines from "@/components/landing/Guidelines";
import Prizes from "@/components/landing/Prizes";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProblemStatements />
      <Prizes />
      <Guidelines />
      <FAQ />
      <Footer />
    </main>
  );
}
