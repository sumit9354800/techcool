import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { Container } from "../common/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-blue-600 transition-colors hover:text-blue-700"
          >
            MRTECHYCOOL
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-[15px] font-medium text-slate-600 transition-all duration-200 hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              size="lg"
              className="rounded-full px-6 shadow-sm transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}