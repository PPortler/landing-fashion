"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          scrolled
            ? "bg-stone-50/95 backdrop-blur-sm border-b border-stone-200"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-screen-xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="font-display text-xl tracking-[0.15em] text-stone-900 cursor-pointer " 
          >
            MAISON
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-label text-stone-600 hover:text-stone-900 transition-colors link-underline cursor-pointer" 
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-8">
            <button className="text-label hover:text-stone-900 transition-colors cursor-pointer">
              Search
            </button>
            <button className="text-label hover:text-stone-900 transition-colors cursor-pointer">
              Bag (0)
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={cn(
                "block w-6 h-px bg-stone-800 transition-transform duration-300",
                menuOpen && "translate-y-2.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "block w-6 h-px bg-stone-800 transition-opacity duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-px bg-stone-800 transition-transform duration-300",
                menuOpen && "-translate-y-2.5 -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-stone-50 flex flex-col justify-center px-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl text-stone-900 font-light link-underline tracking-[0.10em]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
