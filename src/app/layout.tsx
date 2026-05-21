import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Landing Page - Premium Fashion",
  description:
    "Landing page for a premium fashion brand showcasing the latest trends and exclusive collections. Discover our curated selection of high-end clothing, accessories, and footwear designed to elevate your style. Experience luxury shopping with us and stay ahead in the fashion world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
