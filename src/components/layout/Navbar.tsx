import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { Container } from "../common/Container";
import { MobileNav } from "./MobileNav";
import { NavLogo } from "./NavLogo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLogo />

          {/* Navigation */}
         <div className="hidden min-[1024px]:flex min-[1024px]:items-center min-[1024px]:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="relative text-[15px] font-medium text-slate-700 transition-all duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* CTA */}
         <div className="hidden min-[1024px]:block">
            <Button
              size="lg"
              className="
                    rounded-full
                    px-7
                    shadow-lg
                    shadow-black/10
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-xl"
            >
              Book Repair
            </Button>
          </div>
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
