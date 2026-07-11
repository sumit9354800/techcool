// 📄 File: src/components/layout/Navbar.tsx

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "../common/Container";
import { navigation } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MRTECHYCOOL
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button>Book Now</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}