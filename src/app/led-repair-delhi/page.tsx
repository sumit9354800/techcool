import type { Metadata } from "next";

import { LandingHero } from "@/features/landing/LandingHero";
import { LandingNavbar } from "@/features/landing/LandingNavbar";
import { LandingFooter } from "@/features/landing/LandingFooter";
import { WhyChooseUs } from "@/features/landing/WhyChooseUs";
import { HowItWorks } from "@/features/landing/HowItWorks";
import { ServiceAreas } from "@/features/landing/ServiceAreas";
import { FAQ } from "@/features/landing/FAQ";
import { FinalCTA } from "@/features/landing/FinalCTA";
import { LEDServices } from "@/features/landing/LEDServices";

export const metadata: Metadata = {
  title: "AC Repair Services in Delhi | MRTECHYCOOL",
  description:
    "Book AC repair, installation, servicing and gas refilling assistance in Delhi with MRTECHYCOOL.",

  alternates: {
    canonical: "https://mrtechycool.in/led-repair-delhi",
  },
};

export default function ACRepairDelhiPage() {
  return (
    <>
      <LandingNavbar />

      <main>
        <LandingHero />
        <LEDServices />
        <WhyChooseUs />
        <HowItWorks />
        <ServiceAreas />
        <FAQ/>
        <FinalCTA />
      </main>

      <LandingFooter />
    </>
  );
}
