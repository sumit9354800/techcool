/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { NavLogo } from "./NavLogo";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
        className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
      >
        <Menu className="h-7 w-7" />
      </button>

      {mounted &&
        open &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <aside
              className="
                      fixed
                      top-0
                      right-0
                      z-[9999]
                      h-screen
                      w-[320px]
                      max-w-[85vw]
                      bg-white
                      shadow-2xl
                      transition-transform
                      duration-300
                      ease-out
                      animate-in
                      slide-in-from-right"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <NavLogo mobile />

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close Menu"
                  className="rounded-lg p-2 transition hover:bg-slate-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col p-6">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
                              block
                              rounded-xl
                              px-4
                              py-3
                              text-[15px]
                              font-medium
                              text-slate-700
                              transition-all
                              duration-200
                              hover:bg-blue-50
                              hover:text-blue-600
                              "
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <Button size="lg" className="mt-8 w-full rounded-full shadow-lg">
                  Schedule Service
                </Button>
              </nav>
            </aside>
          </>,
          document.body,
        )}
    </>
  );
}
