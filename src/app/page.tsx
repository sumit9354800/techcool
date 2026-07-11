// src/app/page.tsx

import { Container } from "@/component/common/Container";
import { Footer } from "@/component/layout/Footer";
import { Navbar } from "@/component/layout/Navbar";



export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Container>
          Home Page
        </Container>
      </main>

      <Footer />
    </>
  );
}