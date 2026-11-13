import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import BusinessChallenges from "@/components/sections/BusinessChallenges";
import Services from "@/components/services/Services";
import Industries from "@/components/sections/Industries";
import SelectedProjects from "@/components/sections/SelectedProjects";
import WhyOrythyn from "@/components/sections/WhyOrythyn";
import Process from "@/components/sections/Process";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Section A: Hero */}
        <Hero />

        {/* Section B: Business Challenges We Solve */}
        <BusinessChallenges />

        {/* Section C: Our Services */}
        <Services />

        {/* Section D: Industries We Serve */}
        <Industries />

        {/* Section E: Selected Projects and Technical Work */}
        <SelectedProjects />

        {/* Section F: Why Choose Orithyn? */}
        <WhyOrythyn />

        {/* Section G: How We Work */}
        <Process />

        {/* Section H: Final CTA */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}