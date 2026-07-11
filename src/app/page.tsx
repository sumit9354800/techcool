// src/app/page.tsx
import { Navbar } from "@/component/layout/Navbar";
import { Hero } from "@/features/hero/Hero";
import { Services } from "@/features/services/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
