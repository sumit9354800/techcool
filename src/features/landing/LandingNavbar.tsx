
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="MRTECHYCOOL Home">
          <Image
            src="/logos/logo-navbar-v2.png"
            alt="MRTECHYCOOL"
            width={1110}
            height={269}
            priority
            className="h-12 w-auto sm:h-[60px]"
          />
        </Link>

        <Link
          href={`tel:${BUSINESS.phone}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-6"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Link>
      </nav>
    </header>
  );
}