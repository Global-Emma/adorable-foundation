import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/utils/lib";
import Toggle from "./Toggle";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-gray-100 dark:border-zinc-900/80 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-50/50 dark:bg-white p-1 border border-transparent transition-colors">
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

          {/* Nav Links */}
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

          {/* Action Utilities wrapper to keep layout cohesive */}
          <div className="flex items-center gap-4">
            <a
              href="/donations"
              className="rounded-md bg-red-600 dark:bg-red-600 px-5 py-2.5 font-bold text-xs uppercase tracking-wider text-white shadow-xs hover:shadow-md dark:shadow-red-950/20 transition-all hover:bg-red-700 dark:hover:bg-red-700 active:scale-98 cursor-pointer"
            >
              Donate Now
            </a>

            <Toggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
