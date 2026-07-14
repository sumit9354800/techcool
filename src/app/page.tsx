// src/app/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/features/hero/Hero";
import { WhyChooseUs } from "@/features/why-choose-us/WhyChooseUs";
import { HowItWorks } from "@/features/how-it-works/HowItWorks";
import { Gallery } from "@/features/gallery/Gallery";
import { FAQ } from "@/features/faq/FAQ";
import { Contact } from "@/features/contact/Contact";
import { Footer } from "@/components/layout/Footer";
import { Testimonials } from "@/features/testimonials/Testimonials";
import { Services } from "@/features/services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <HowItWorks />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
