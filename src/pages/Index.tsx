import { useState } from "react"
import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { AboutSection } from "@/components/about-section"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DemoModal } from "@/components/demo-modal"

export default function Index() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <div className="dark">
      <Navbar onDemoClick={() => setIsDemoOpen(true)} />
      <main>
        <Hero3D />
        <FeaturesSection />
        <section id="technology">
          <TechnologySection />
        </section>
        <ApplicationsTimeline />
        <AboutSection />
        <section id="safety">
          <SafetySection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection onDemoClick={() => setIsDemoOpen(true)} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  )
}
