"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/utils/lib";
import Toggle from "./Toggle";
import { Menu, X } from "lucide-react"; // Premium clean iconography
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 dark:border-zinc-900/80 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
        {/* Logo & Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-50/50 dark:bg-white p-1 border border-transparent dark:border-white transition-colors">
            <Image
              src="/images/ascada_logo.png"
              alt="AFI Logo"
              width={24}
              height={24}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <span className="block font-black tracking-tight text-xs md:text-sm uppercase leading-none text-gray-950 dark:text-white transition-colors">
              Adorable Foundation
            </span>
            <span className="text-[10px] tracking-widest text-gray-500 dark:text-zinc-400 uppercase font-bold transition-colors">
              International
            </span>
          </div>
        </div>

        {/* Desktop Nav Links (Hidden on mobile/tablet) */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-600 dark:text-zinc-400">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 hover:text-red-600 dark:hover:text-red-500 relative py-1 font-semibold
                  ${isActive ? "text-red-600 dark:text-red-500 after:w-full" : "text-gray-600 dark:text-zinc-400 after:w-0"} 
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-600 dark:after:bg-red-500 after:transition-all hover:after:w-full`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Utilities Wrapper */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Hidden on ultra-small mobile screens to prevent squishing layout */}
          <a
            href="/donations"
            className="hidden sm:inline-block rounded-md bg-red-600 px-5 py-2.5 font-bold text-xs uppercase tracking-wider text-white shadow-xs hover:shadow-md dark:shadow-red-950/20 transition-all hover:bg-red-700 active:scale-98 cursor-pointer"
          >
            Donate Now
          </a>

          <Toggle />

          {/* Mobile Hamburger Trigger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full border border-gray-100 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/50 text-gray-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-colors cursor-pointer"
            aria-label="Toggle responsive navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Drawer Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-gray-100 dark:border-zinc-900/80 transition-all duration-300 ease-in-out lg:hidden shadow-lg
          ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col p-6 gap-2 font-medium text-base">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)} // Gracefully auto-close panel on selection
                className={`transition-colors duration-200 py-3 px-4 rounded-md font-semibold text-sm
                  ${isActive 
                    ? "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-500" 
                    : "text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-900/40 hover:text-red-600 dark:hover:text-red-500"
                  }`}
              >
                {link.label}
              </a>
            );
          })}

          <Link
            href="/donations"
            onClick={() => setIsOpen(false)}
            className="sm:hidden text-center rounded-md bg-red-600 py-3 mt-4 font-bold text-xs uppercase tracking-wider text-white shadow-xs active:scale-98 transition-all"
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;