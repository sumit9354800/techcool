// src/app/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/features/hero/Hero";
import { Services } from "@/features/services/Services";
import { WhyChooseUs } from "@/features/why-choose-us/WhyChooseUs";
import { HowItWorks } from "@/features/how-it-works/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <HowItWorks />
      </main>
    </>
  );
}
