"use client";

import { Phone, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/common/Motion";
import Link from "next/link";

export function HeroButtons() {
  return (
    <FadeUp delay={0.25}>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/#contact">
          <Button
            size="lg"
            className="
      group
      w-full
      rounded-full
      px-8
      sm:w-auto
      shadow-lg
      shadow-blue-500/20
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:shadow-blue-500/30
      active:scale-95
    "
          >
            <CalendarDays className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Book Service
          </Button>
        </Link>

        <Link href="tel:+919528013976">
          <Button
            variant="outline"
            size="lg"
            className="
      group
      w-full
      rounded-full
      border-2
      px-8
      sm:w-auto
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-600
      hover:bg-blue-50
      active:scale-95
    "
          >
            <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Call Now
          </Button>
        </Link>
      </div>
    </FadeUp>
  );
}
