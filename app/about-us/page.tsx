"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { coreValues, programs } from "@/utils/lib";
import { BookOpenIcon, Play, X, Film } from "lucide-react";
import Herobanner from "@/components/Herobanner";
import Link from "next/link";

// --- ANIMATION DEFINITIONS ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

// --- MOCK VIDEO DATA SCHEMA ---
const institutionalVideos = [
  {
    id: "vid-1",
    title: "Pad The Girl Child Campaign",
    duration: "4:15",
    category: "Campaign Highlights",
    thumbnail: "/images/adorable/sch_nyanya/nyanya2.jpeg",
    videoUrl: "/videos/girl_child.mp4",
  },
  {
    id: "vid-2",
    title: "ASACADA Anti-Drug Campaign",
    duration: "6:42",
    category: "Field Impact",
    thumbnail: "/images/adorable/drug_camp/drug3.jpeg",
    videoUrl: "/videos/anthem_video.mp4",
  }
];

export default function AboutPage() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <div className="w-full bg-white dark:bg-zinc-950 font-sans text-[#171717] dark:text-zinc-50 selection:bg-red-600 selection:text-white overflow-x-hidden transition-colors duration-300">
        {/* =========================================================================
            1. BREADCRUMB HERO BANNER
           ========================================================================= */}
        <Herobanner
          items={{
            image: "/images/gallery/sch_outreach.png",
            title: "About Us",
          }}
        />

        {/* =========================================================================
            2. OUR STORY SECTION
           ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Frame: Context Imagery */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-4/5 rounded-2xl bg-gray-100 dark:bg-zinc-900 shadow-md border border-gray-100 dark:border-zinc-800/60 overflow-hidden group transition-colors duration-300">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-103"
                  style={{
                    backgroundImage: "url('/images/gallery/gallery1.png')",
                  }}
                >
                  <div className="w-full h-full bg-black/5 flex items-center justify-center p-4 text-center text-xs text-gray-400 dark:text-zinc-500 font-light backdrop-blur-[0.5px]">
                    <Image
                      src="/images/ascada_logo.png"
                      alt="Composition Placeholder"
                      width={150}
                      height={100}
                      className="mx-auto opacity-50"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Frame: Copy Writing Hook */}
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight"
              >
                Our Story
                <br />
                <motion.span
                  className="text-red-600 dark:text-red-500 mt-3 text-xl md:text-2xl block"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Over 7 Years of Active, On-the-Ground Social Service
                </motion.span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-gray-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed"
              >
                Founded to build bridges of survival in Nigeria, Adorable
                Foundation International (AFI) stands as a prominent shield for
                youth, widows, and children facing hardship. We realized early
                on that charity cannot simply be an annual donation—it must be
                an active, responsive institution rooted directly inside the
                communities it serves. From our head office in Abuja to our
                South East Regional Headquarters in Enugu, we organize daily
                outreaches and coordinate specialized volunteer nodes across
                Anranbra, Ebonyi, and Enugu states. Our most prominent
                mobilization, ASACADA (A Social Awareness Campaign Against Drug
                Abuse), was initiated in response to the devastating spread of
                chemical dependencies among teenagers. We partner directly with
                drug counselors, schools, and the NDLEA (National Drug Law
                Enforcement Agency) to drive awareness campaigns and finance
                intensive medical rehabilitation.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-gray-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed"
              >
                We are committed to providing a secure, supportive network to
                seek medical rehabilitation, vocational education, and basic
                necessities.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            3. MISSION & VISION SPLIT GRID
           ========================================================================= */}
        <section className="bg-gray-50/60 dark:bg-zinc-900/20 py-16 border-y border-gray-100 dark:border-zinc-900 transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {/* Mission Box */}
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800/60 p-8 shadow-sm flex flex-col sm:flex-row items-start gap-6 transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-500 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 15.75V18m-3-6.75v6.75m-3-3h.008v.008H9.75v-.008zm0 3h.008v.008H9.75v-.008zm3 0h.008v.008h-.008v-.008zm3 0h.008v.008h-.008v-.008zm3 0h.008v.008h-.008v-.008zm-6-6h.008v.008h-.008v-.008zm0-3h.008v.008h-.008v-.008zm3 3h.008v.008h-.008v-.008zM12 21a9 9 0 110-18 9 9 0 010 18z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-gray-900 dark:text-white tracking-tight">
                    Mission
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-zinc-400 leading-relaxed">
                    To mobilize resources, clinical expertise, and community
                    volunteers to execute impactful anti-drug campaigns, finance
                    clinical therapy for substance abuse victims, fund clean
                    nutrition and academic materials in public primary schools,
                    and provide interest-free starter capital to impoverished
                    widows.
                  </p>
                </div>
              </motion.div>

              {/* Vision Box */}
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800/60 p-8 shadow-sm flex flex-col sm:flex-row items-start gap-6 transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-500 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-gray-900 dark:text-white tracking-tight">
                    Vision
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-zinc-400 leading-relaxed">
                    To establish a drug-free, fully nourished African society
                    where teenagers are shielded from social vices, young
                    children have seamless access to standard basic education,
                    and vulnerable women are equipped with the economic tools to
                    build self-reliance and support their households.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            4. OUR CORE VALUES HORIZONTAL BLOCK
           ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl text-gray-900 dark:text-white tracking-tight"
          >
            Our Core Values
            <br />
            <motion.span
              className="text-red-600 dark:text-red-500 text-lg md:text-xl block"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Principles That Guide Us
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed"
          >
            AFI is defined by rigorous operational values that ensure maximum
            security, transparency, and dignity in all local outreach programs.
          </motion.p>

          <motion.div
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {coreValues.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl border border-gray-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/40 p-6 text-center shadow-sm transition-all duration-300"
              >
                <div className="mx-auto h-10 w-10 rounded-full bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-500 mb-4">
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white tracking-tight">
                  {item.val}
                </h3>
                <p className="mt-2 text-xs text-gray-400 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* =========================================================================
            5. WHAT WE DO MATRIX
           ========================================================================= */}
        <section className="bg-gray-50/50 dark:bg-zinc-900/20 py-16 md:py-24 border-y border-gray-100 dark:border-zinc-900 transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight">
                Our Programs
                <br />
                <span className="text-red-600 dark:text-red-500 text-xl block mt-1">
                  How We Serve The Community
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-zinc-400 text-sm md:text-base">
                Through strategic planning and active field deployment, we run
                specialized programs that address fundamental survival and
                developmental needs in our communities.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {programs.map((prog, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                  className="rounded-xl border border-gray-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/40 p-6 text-left shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-500 mb-5">
                      <BookOpenIcon size={18} />
                    </div>
                    <div className="w-full h-40 overflow-hidden rounded-lg mb-5 bg-gray-100 dark:bg-zinc-900">
                      <Image
                        src={prog.mainImage}
                        alt={prog.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">
                      {prog.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                  <Link
                    href={`/about-us/${prog.id}`}
                    className="mt-6 inline-flex items-center text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-widest hover:text-red-700 dark:hover:text-red-400 transition-colors"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            6. MULTIMEDIA DISPATCHES (VIDEO LOGS SECTION)
           ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="text-center space-y-3 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight">
                Media & Field Dispatches
              </h2>
              <span className="text-red-600 dark:text-red-500 text-lg md:text-xl block mt-1">
                AFI Actions in Motion
              </span>
              <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                Watch detailed coverages from our latest events and campaigns.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            {institutionalVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between bg-white dark:bg-zinc-900/40 rounded-2xl border border-gray-100 dark:border-zinc-800/60 p-4 transition-all duration-300 hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Interactive Thumbnail Component Frame */}
                  <div 
                    onClick={() => setActiveVideoUrl(video.videoUrl)}
                    className="relative aspect-video w-full rounded-xl bg-gray-100 dark:bg-zinc-900 overflow-hidden cursor-pointer shadow-xs group"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-w-7xl) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-102 brightness-90% group-hover:brightness-75%"  
                    />
                    
                    {/* Centered Trigger Interface Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-12 w-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transition-transform"
                      >
                        <Play size={18} fill="currentColor" className="ml-0.5" />
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
                    <h3 className="font-heading font-bold text-base text-gray-900 dark:text-zinc-100 tracking-tight leading-snug line-clamp-2 transition-colors duration-300">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* =========================================================================
            7. MODAL LIGHTBOX OVERLAY PLAYER FRAME
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
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
                  title="AFI Multimedia Dispatch Stream"
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