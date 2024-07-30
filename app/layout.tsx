import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Background3D from "@/components/main/3Dback";

import Contact from "@/components/sub/Contact";
import CustomCursor from "@/components/CustomCursor";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "True Tech Hub",
  description: "This is Our portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <CustomCursor />

        <Background3D />
        
        <StarsCanvas />
       
        <Navbar />

        {children}

        <Contact />

        <Footer />

      </body>
    </html>
  );
}
