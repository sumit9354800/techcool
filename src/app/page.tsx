// src/app/page.tsx

import { Container } from "@/component/common/Container";
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
    </>
  );
}