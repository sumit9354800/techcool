import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="MRTECHYCOOL Home"
              className="inline-flex"
            >
              <Image
                src="/logos/logo-dark-v2.png"
                alt="MRTECHYCOOL"
                width={1110}
                height={269}
                className="h-12 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Professional LED TV repair, Smart TV repair and LED panel
              repair services in Delhi. We also provide CCTV installation
              and AC services.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
              <Wrench className="h-4 w-4 text-blue-500" />
              LED TV Repair in Delhi
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3 text-sm">
              <Link
                href="#led-services"
                className="block transition-colors hover:text-blue-400"
              >
                LED TV Services
              </Link>

              <Link
                href="#booking"
                className="block transition-colors hover:text-blue-400"
              >
                Book LED TV Repair
              </Link>

              <Link
                href="tel:+919528013976"
                className="block transition-colors hover:text-blue-400"
              >
                Call Now
              </Link>

              <Link
                href="/"
                className="block transition-colors hover:text-blue-400"
              >
                Main Website
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">
              {/* Phone */}
              <a
                href="tel:+919528013976"
                className="group flex items-start gap-3"
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-500" />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Call for Service
                  </p>

                  <p className="mt-1 text-sm text-slate-400 transition-colors group-hover:text-blue-400">
                    +91 9528013976
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:mytechycoolservice@gmail.com"
                className="group flex items-start gap-3"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-500" />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-400 transition-colors group-hover:text-blue-400">
                    mytechycoolservice@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-500" />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Office No. 819, Mangla Heights App,
                    <br />
                    Near Palam Metro, Dwarka,
                    <br />
                    Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} MRTECHYCOOL. All rights reserved.
            </p>

            <p>
              Professional LED TV Repair Services in Delhi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}