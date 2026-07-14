import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/common/Container";
import { FooterLogo } from "./FooterLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <Container>
          <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}

            <div>
              <FooterLogo />

              <p className="leading-7 text-slate-400">
                Professional LED TV repair, CCTV installation and AC services with experienced technicians, same-day doorstep support and transparent pricing.
              </p>
            </div>

            {/* Quick Links */}

            <div>
              <h4 className="mb-5 text-lg font-semibold text-white">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {[
                  ["Home", "/"],
                  ["Services", "#services"],
                  ["About", "#about"],
                  ["Gallery", "#gallery"],
                  ["FAQ", "#faq"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="
                        text-slate-400
                        transition-colors
                        duration-300
                        hover:text-blue-400
                      "
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}

            <div>
              <h4 className="mb-5 text-lg font-semibold text-white">
                Services
              </h4>

              <ul className="space-y-3 text-slate-400">
                <li>AC Repair</li>
                <li>LED TV Repair</li>
                <li>AC Installation</li>
                <li>Gas Refilling</li>
                <li>Maintenance</li>
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h4 className="mb-5 text-lg font-semibold text-white">
                Contact
              </h4>

              <div className="space-y-5">
                <div className="flex items-start gap-3 text-slate-400">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span>+91 9528013976</span>
                </div>

                <div className="flex items-start gap-3 text-slate-400">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="break-all">
                    mytechycoolservice@gmail.com
                  </span>
                </div>

                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                  <span>
                    Office No. 819, Mangla Heights App,
                    <br />
                    Near Palam Metro, Dwarka,
                    <br />
                    Delhi
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row">
            <p>
              © {currentYear} MRTECHYCOOL. All rights reserved.
            </p>

            <p>
              Designed & Developed with ❤️ using Next.js
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}