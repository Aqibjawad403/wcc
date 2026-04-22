import type { Metadata } from "next";
import { DM_Sans, Gabarito, Fustat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
  weight: ["600"],
});

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
  weight: ["400", "700", "800"], // Support various weights
});

export const metadata: Metadata = {
  title: "World Citizen Consultants",
  description: "World Citizen Consultants is a leading educational and immigration consultancy firm based in Lahore, Pakistan. We specialize in providing comprehensive guidance and support to students and individuals seeking international education, citizenship, and residency opportunities.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${gabarito.variable} ${fustat.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
