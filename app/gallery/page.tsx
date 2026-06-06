"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Easing } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herobanner from "@/components/Herobanner";
import Image from "next/image";
import { categories, Category, GalleryItem, galleryItems } from "@/utils/lib";

// --- ANIMATION CONFIGS ---
const smoothCubic: Easing = [0.25, 1, 0.5, 1];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  // State to track the currently viewed image item for the overlay
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory,
  );

  // Lock body scroll when overlay portal is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeImage]);

  return (
    <>
      <Navbar />
      <div className="w-full bg-white dark:bg-zinc-950 font-sans text-[#171717] dark:text-zinc-50 selection:bg-red-600 selection:text-white min-h-screen relative transition-colors duration-300 overflow-x-hidden">
        <Herobanner
          items={{
            image: "/images/gallery/gallery4.png",
            title: "Our Visual Portfolio",
          }}
        />

        {/* =========================================================================
      1. CATEGORY FILTER NAVIGATION
     ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 pt-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-red-600 border-red-600 text-white shadow-md shadow-red-600/20"
                    : "bg-white dark:bg-zinc-900 border-gray-100 dark:border-zinc-800/80 text-gray-400 dark:text-zinc-500 hover:border-gray-200 dark:hover:border-zinc-700 hover:text-gray-900 dark:hover:text-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* =========================================================================
      2. DYNAMIC MEDIA MESH GRID
     ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: smoothCubic }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  onClick={() => setActiveImage(item)}
                  className="aspect-4/3 rounded-xl bg-gray-50 dark:bg-zinc-900/40 border border-gray-200/50 dark:border-zinc-800/60 overflow-hidden relative group cursor-zoom-in shadow-xs transition-colors duration-300"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  >
                    <div className="absolute inset-0 bg-black/2 dark:bg-white/1" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-red-500 mb-1">
                      {item.category}
                    </span>
                    <p className="text-white text-[11px] font-bold tracking-normal leading-snug line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* =========================================================================
      3. LIGHTBOX MEDIA OVERLAY COMPONENT
     ========================================================================= */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-100 bg-gray-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            >
              {/* Top-Right Absolute Control Hook */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 text-white/75 hover:text-white text-[10px] font-black uppercase tracking-widest cursor-pointer bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full border border-white/10 transition-all z-50"
              >
                ✕ Close
              </button>

              {/* Central Dynamic Card Structure Container */}
              <motion.div
                initial={{ scale: 0.96, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: smoothCubic }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default border border-gray-100 dark:border-zinc-800/80 transition-colors duration-300"
              >
                {/* Media Stage Canvas Row */}
                <div className="relative w-full overflow-hidden flex items-center justify-center bg-gray-900 dark:bg-zinc-950 flex-1 min-h-0 aspect-16/10">
                  <Image
                    src={activeImage.image}
                    alt={activeImage.title}
                    width={100}
                    height={100}
                    className="w-full max-h-[60vh] object-contain select-none"
                  />
                </div>

                {/* Typography Metadata Footer Block */}
                <div className="p-6 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800/60 space-y-1 transition-colors duration-300">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-red-600 dark:text-red-500 block">
                    {activeImage.category}
                  </span>
                  <h3 className="font-heading font-black text-sm md:text-base text-gray-950 dark:text-zinc-50 tracking-tight leading-snug">
                    {activeImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
