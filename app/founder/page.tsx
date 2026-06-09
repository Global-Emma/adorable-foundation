"use client";

import React, { useState } from "react";
import { Easing, motion, Variants, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Herobanner from "@/components/Herobanner";
import Image from "next/image";
import { Play, X, Film } from "lucide-react";

// --- ANIMATION INTERFOLDS ---
const customBezier: Easing = [0.16, 1, 0.3, 1];

const slideUpReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: customBezier },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

// --- MOCK FOUNDER VIDEO DATA ---
const founderVideos = [
  {
    id: "f-vid-1",
    title:
      "Princess Ada Okeke Amam Keynote Address",
    duration: "5:20",
    category: "Keynote Address",
    thumbnail: "/images/adorable/founder/founder3.jpeg",
    videoUrl: "/videos/founder_video.mp4", 
  }
  
];

export default function FounderPage() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <div className="w-full bg-white dark:bg-zinc-950 font-sans text-[#171717] dark:text-zinc-50 selection:bg-red-600 selection:text-white overflow-x-hidden transition-colors duration-300">
        {/* =========================================================================
          1. HEADER / BREADCRUMB
         ========================================================================= */}
        <Herobanner
          items={{ image: "/images/gallery/founder.png", title: "Our Founder" }}
        />

        {/* =========================================================================
          2. MEET OUR FOUNDER HERO SPLIT
         ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Premium Portrait Framework */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: customBezier }}
            >
              <div className="aspect-4/5 w-full max-w-md rounded-2xl bg-gray-50 dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/60 shadow-lg overflow-hidden relative group transition-colors duration-300">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
                  style={{
                    backgroundImage: "url('/images/adorable/founder/founder2.jpeg')",
                  }}
                >
                  {/* Fallback layout card matching the visual template */}
                  <div className="w-full h-full flex items-center justify-center text-center p-6 text-xs text-gray-400 dark:text-zinc-500 bg-black/2 dark:bg-white/2">
                    <Image
                      src="/images/ascada_logo.png"
                      alt="Composition Placeholder"
                      width={100}
                      height={50}
                      className="mx-auto mb-4 opacity-50 block dark:hidden"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Block: Core Definition Statement */}
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={slideUpReveal}
                className="inline-block text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500"
              >
                Meet Our Founder
              </motion.span>
              <motion.h2
                variants={slideUpReveal}
                className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight"
              >
                Princess Ada Okeke Amam
                <br />
                <motion.span
                  variants={slideUpReveal}
                  className="text-gray-400 dark:text-zinc-500 mt-3 text-md md:text-lg block"
                >
                  Philanthropist & Campaigner
                </motion.span>
              </motion.h2>
              <motion.p
                variants={slideUpReveal}
                className="text-gray-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed font-medium max-w-2xl"
              >
                Dr. Princess Ada Okeke Amam is a widely acclaimed Nigerian
                philanthropist, social reformer, and vocal advocate for the
                protection of marginalized families. Rooted in deep compassion,
                she has spent over a decade leading structural interventions
                across Africa, focusing primarily on youth rehabilitation and
                women empowerment. Her philanthropic journey gained
                institutional strength through the establishment of the Adorable
                Social Club of Nigeria (ASCON), a close-knit group of social
                change leaders. Under her visionary presidency, the club
                officially metamorphosed in 2015 into the registered non-profit
                organization we know today: Adorable Foundation International
                (AFI).
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
          3. HER STORY SECTION
         ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 border-t border-gray-50 dark:border-zinc-900 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Content Loop */}
            <motion.div
              className="lg:col-span-7 space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={slideUpReveal}
                className="font-heading font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-zinc-100 tracking-tight"
              >
                Her Story
              </motion.h3>
              <motion.p
                variants={slideUpReveal}
                className="text-gray-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed"
              >
                Dr. Princess Ada Okeke Amam Recognizing that substance abuse is
                a major plague targeting Nigerian teenagers, Princess Ada
                pioneered the Societal Awareness Campaign Against Drug Abuse
                (ASACADA). Through this initiative, she drives a powerful
                advocacy structure, collaborating with the NDLEA (National Drug
                Law Enforcement Agency) and the Nigeria Police to implement high
                school drug awareness walks, counselor training, and
                rehabilitation funding. To make anti-drug campaigns relatable
                and inspiring to teenagers, she created the annual Queen ASACADA
                Ambassador Pageantry. Rather than a standard beauty competition,
                this select event crowns a brilliant female youth ambassador who
                is sponsored by AFI to tour schools and deliver crucial
                peer-to-peer anti-drug counseling across Nigeria.
              </motion.p>
              <motion.p
                variants={slideUpReveal}
                className="text-gray-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed"
              >
                Today, through her leadership, AFI continues to touch lives and
                restore hope.
              </motion.p>
            </motion.div>

            {/* Right Block: Speaking Imagery Canvas */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: customBezier }}
            >
              <div className="aspect-10/10 rounded-xl bg-gray-50 dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/60 shadow-md overflow-hidden transition-colors duration-300">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/adorable/founder/founder1.jpeg')",
                  }}
                >
                  <div className="w-full h-full bg-black/1 dark:bg-white/1 flex items-center justify-center p-4 text-center text-xs text-gray-400"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
          4. PREMIUM CENTRAL QUOTE BLOCK
         ========================================================================= */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <motion.div
            className="relative rounded-2xl bg-gray-50/60 dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/60 p-8 md:p-12 text-center overflow-hidden shadow-sm transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Left Quote SVG Marker matching red styling */}
            <div className="absolute top-6 left-6 text-red-600/10 dark:text-red-500/10 font-serif text-7xl font-black select-none pointer-events-none leading-none">
              “
            </div>

            <p className="font-heading font-bold text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-zinc-100 leading-relaxed max-w-3xl mx-auto relative z-10 px-4">
              {
                "We cannot stand idle while drug abuse destroys the beautiful minds of our teenagers. We must build bridges of medical therapy, clean child feeding, and widows empowerment to restore the structural strength of our society, one family at a time."
              }
            </p>

            {/* Bottom Right Quote SVG Marker */}
            <div className="absolute bottom-2 right-6 text-red-600/10 dark:text-red-500/10 font-serif text-7xl font-black select-none pointer-events-none leading-none">
              ”
            </div>

            {/* Signature Block Component */}
            <motion.div variants={slideUpReveal} className="pt-4">
              <span className="block font-serif italic text-xl md:text-2xl text-gray-600 dark:text-zinc-400 tracking-wide select-none">
                - Dr. Princess Ada Okeke Amam
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* =========================================================================
          5. VISION FOR NIGERIA SECTION
         ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Narrative Copy */}
            <motion.div
              className="lg:col-span-7 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={slideUpReveal}
                className="font-heading font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-zinc-100 tracking-tight"
              >
                Vision
              </motion.h3>
              <motion.p
                variants={slideUpReveal}
                className="text-gray-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed"
              >
                To establish a drug-free, fully nourished African society where
                teenagers are shielded from social vices, young children have
                seamless access to standard basic education, and vulnerable
                women are equipped with the economic tools to build
                self-reliance and support their households.
              </motion.p>
            </motion.div>

            {/* Right Block: Community Impact Row Mosaic Layout */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: customBezier }}
            >
              <div className="aspect-video rounded-xl bg-gray-50 dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/60 shadow-md overflow-hidden transition-colors duration-300">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/gallery/gallery5.png')",
                  }}
                >
                  <div className="w-full h-full bg-black/1 dark:bg-white/1 flex items-center justify-center p-4 text-center text-xs text-gray-400"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
          6. KEYNOTE ADDRESSES & MEDIA APPEARANCES (NEW VIDEO SECTION)
         ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-gray-50 dark:border-zinc-900 transition-colors duration-300">
          <div className="text-center space-y-3 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpReveal}
              className="flex flex-col items-center"
            >
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight">
                Keynote Addresses & Media
              </h3>
              <span className="text-red-600 dark:text-red-500 text-sm md:text-base font-semibold uppercase tracking-wider block mt-1">
                Advocacy In Motion
              </span>
              <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                Explore original broadcasts, field documentation logs, and
                public addresses delivered directly by Dr. Princess Ada Okeke
                Amam.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            {founderVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={slideUpReveal}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between bg-white dark:bg-zinc-900/40 rounded-2xl border border-gray-100 dark:border-zinc-800/60 p-4 transition-all duration-300 hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Interactive Visual Playback Context Frame */}
                  <div
                    onClick={() => setActiveVideoUrl(video.videoUrl)}
                    className="relative aspect-video w-full rounded-xl bg-gray-100 dark:bg-zinc-900 overflow-hidden cursor-pointer shadow-xs group"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-w-7xl) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-102 brightness-90 group-hover:brightness-75"
                    />

                    {/* Centered Trigger Interface Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-12 w-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transition-transform"
                      >
                        <Play
                          size={18}
                          fill="currentColor"
                          className="ml-0.5"
                        />
                      </motion.div>
                    </div>

                    {/* Timestamp Matrix Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold text-white tracking-wide">
                      {video.duration}
                    </div>
                  </div>

                  {/* Metadata Descriptive Layout */}
                  <div className="space-y-1.5 px-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 flex items-center gap-1">
                      <Film size={10} /> {video.category}
                    </span>
                    <h4 className="font-heading font-bold text-base text-gray-900 dark:text-zinc-100 tracking-tight leading-snug line-clamp-2 transition-colors duration-300">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* =========================================================================
          7. ACHIEVEMENTS SYSTEM GRID
         ========================================================================= */}
        <section className="bg-gray-50/50 dark:bg-zinc-900/20 border-t border-gray-100 dark:border-zinc-900 py-16 md:py-20 transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight"
              >
                Achievements
              </motion.h3>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              {[
                {
                  val: "10+",
                  label: "Years of Service",
                  icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  val: "100+",
                  label: "Projects Executed",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                },
                {
                  val: "10,000+",
                  label: "Lives Impacted",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                },
                {
                  val: "Numerous",
                  label: "Awards & Recognitions",
                  icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                },
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  variants={slideUpReveal}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-zinc-900/40 rounded-xl border border-gray-100 dark:border-zinc-800/60 p-6 text-center shadow-sm flex flex-col items-center justify-center relative group transition-all duration-300 hover:shadow-md"
                >
                  {/* Performance Optimized SVG Badge */}
                  <div className="h-10 w-10 rounded-full bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400 mb-4 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={metric.icon}
                      />
                    </svg>
                  </div>
                  <span className="block font-heading font-black text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-zinc-100 tracking-tight">
                    {metric.val}
                  </span>
                  <span className="mt-1 text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
          8. MODAL LIGHTBOX OVERLAY PLAYER FRAME
         ========================================================================= */}
        <AnimatePresence>
          {activeVideoUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
              onClick={() => setActiveVideoUrl(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: customBezier }}
                className="relative w-full max-w-4xl aspect-video rounded-2xl bg-zinc-950 overflow-hidden shadow-2xl border border-zinc-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button UI Layer */}
                <button
                  onClick={() => setActiveVideoUrl(null)}
                  className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/70 text-zinc-300 hover:text-white p-2 rounded-full border border-zinc-800/40 backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Embedded Video Player Screen Frame */}
                <iframe
                  src={`${activeVideoUrl}?autoplay=1`}
                  title="Founder Keynote Dispatch Stream"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
