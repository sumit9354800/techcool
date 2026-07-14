import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/floating/FloatingActions";
import { Toaster } from "sonner";
import { LocalBusinessSchema } from "./seo/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrtechycool.in"),

  title: {
    default:
      "MRTECHYCOOL | AC Repair, AC Installation & LED TV Repair Services in Delhi",
    template: "%s | MRTECHYCOOL",
  },

  description:
    "Professional AC Repair, AC Installation, Gas Refilling, LED TV Repair and Home Appliance Repair Services in Delhi. Same-day doorstep service by certified technicians at affordable prices.",

  keywords: [
    "AC Repair Delhi",
    "AC Installation Delhi",
    "AC Service Delhi",
    "AC Gas Refilling",
    "LED TV Repair Delhi",
    "Home Appliance Repair",
    "Split AC Repair",
    "Window AC Repair",
    "MRTECHYCOOL",
    "AC Technician Near Me",
  ],

  authors: [
    {
      name: "MRTECHYCOOL",
    },
  ],

  creator: "MRTECHYCOOL",

  publisher: "MRTECHYCOOL",

  category: "Home Services",

  openGraph: {
    title: "MRTECHYCOOL | AC Repair & LED TV Repair Services in Delhi",

    description:
      "Fast, reliable and affordable AC & LED TV repair services in Delhi with same-day doorstep support.",

    url: "https://mrtechycool.in",

    siteName: "MRTECHYCOOL",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MRTECHYCOOL",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "MRTECHYCOOL | AC Repair & LED TV Repair Services",

    description: "Professional AC & LED TV Repair Services in Delhi.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://mrtechycool.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <LocalBusinessSchema />
        <FloatingActions />

        <Toaster position="top-right" richColors closeButton duration={3000} />
      </body>
    </html>
  );
}
