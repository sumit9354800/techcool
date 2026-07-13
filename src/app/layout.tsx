import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/floating/FloatingActions";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MRTECHYCOOL | AC & LED Repair Services",
    template: "%s | MRTECHYCOOL",
  },
  description:
    "Professional AC & LED Repair Services at your doorstep. Fast, reliable, and affordable home services.",
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

        <FloatingActions />

        <Toaster position="top-right" richColors closeButton duration={3000} />
      </body>
    </html>
  );
}
