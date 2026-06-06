import { MoonIcon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Toggle = () => {
  // 1. Initialize with a static fallback so Server and Client match exactly on first render
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // 2. Read local storage ONLY after mounting on the client side
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const mount = () => {
      setTheme(savedTheme);
      setMounted(true);
    };
    mount();
  }, []);

  // 3. Keep DOM class synchronized with the state changes
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 4. Render an invisible skeleton layout match until mounting is complete
  if (!mounted) {
    return (
      <button className="p-2 rounded-full border border-gray-100 dark:border-zinc-800/60 opacity-0 pointer-events-none">
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 cursor-pointer rounded-full border border-gray-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-all duration-200 ease-in-out"
      aria-label="Toggle display theme"
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
};

export default Toggle;
