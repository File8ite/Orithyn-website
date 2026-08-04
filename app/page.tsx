import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import AtAGlance from "@/components/sections/AtAGlance";
import Trust from "@/components/trust/Trust";
import Services from "@/components/services/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import WhyOrythyn from "@/components/sections/WhyOrythyn";
import ProjectEstimator from "@/components/estimator/ProjectEstimator";
import FaqSection from "@/components/sections/FaqSection";
import CaseStudiesGallery from "@/components/sections/CaseStudiesGallery";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AtAGlance />
        <Trust />
        <Services />
        <Industries />
        <Process />
        <WhyOrythyn />
        <ProjectEstimator />
        <FaqSection />
        <CaseStudiesGallery />
        <FeaturedProduct />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}