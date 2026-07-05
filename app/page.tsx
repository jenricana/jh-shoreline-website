import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorkingProcess } from "@/components/sections/working-process";
import { ServicesSection } from "@/components/sections/services-section";
import { ServicesDetail } from "@/components/sections/services-detail";
import { RecentProjects } from "@/components/sections/recent-projects";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ServicesDetail />
        <RecentProjects />
        <WorkingProcess />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
