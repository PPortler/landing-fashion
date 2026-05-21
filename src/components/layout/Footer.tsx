import { NAV_LINKS } from "@/constants";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-20">

        {/* Top */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <h2 className="text-2xl md:text-3xl mb-4 text-stone-100 tracking-wide font-display">
              MAISON
            </h2>

            <p className="text-sm text-stone-500 leading-relaxed">
              Minimal luxury. Enduring design.
              Crafted in Europe, worn worldwide.
            </p>

            <button
              aria-label="Email us"
              className="mt-6 flex items-center justify-center size-10 rounded-full border border-stone-700 transition-all duration-300 hover:border-stone-100 hover:text-stone-100 cursor-pointer"
            >
              <Mail size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3 items-start">
            <Link
              href="/"
              className="text-lg md:text-xl text-stone-400 transition-colors hover:text-stone-100 link-underline-light"
            >
              Home
            </Link>

            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-lg md:text-xl text-stone-400 transition-colors hover:text-stone-100 link-underline-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-14 md:mt-16 pt-6 border-t border-stone-800 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} MAISON. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-stone-600">
            <button className="hover:text-stone-300 transition-colors">Privacy</button>
            <button className="hover:text-stone-300 transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}