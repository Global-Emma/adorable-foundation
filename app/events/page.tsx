"use client";

import React, { useState } from "react";
import { Easing, motion, Transition, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herobanner from "@/components/Herobanner";
import Image from "next/image";
import { upcomingEvents } from "@/utils/lib";

// --- ANIMATION DEFINITIONS ---
const easeQuintic: Easing = [0.22, 1, 0.36, 1];

const cardHoverSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

const slideUpReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeQuintic },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const scrollRevealUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeQuintic },
  },
};

export default function EventsPage() {
  const [contactName, setContactName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [audienceSize, setAudienceSize] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Seminar request logged successfully:\nInstitution: ${orgName}\nContact: ${contactName}`,
    );
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-white dark:bg-zinc-950 font-sans text-[#171717] dark:text-zinc-50 selection:bg-red-600 selection:text-white overflow-x-hidden transition-colors duration-300">
        {/* =========================================================================
      1. HERO HEADER WITH FADED BACKGROUND MASK
     ========================================================================= */}
        <Herobanner
          items={{
            image: "/images/gallery/gallery3.png",
            title: "Our Campaigns and Outings",
          }}
        />

        {/* =========================================================================
      2. UPCOMING EVENTS GRID SYSTEM
     ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="text-center flex flex-col items-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading font-black text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight"
            >
              On - Field Mobilizations
              <br />
              <motion.span
                variants={slideUpReveal}
                className="inline-block text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500"
              >
                On-The-Ground Campaign History
              </motion.span>
            </motion.h2>

            <motion.p
              variants={slideUpReveal}
              className="text-gray-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed font-medium max-w-2xl mt-2"
            >
              AFI believes in direct community contact. Explore our list of
              scheduled awareness rallies, health walks, and child aid programs.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={scrollRevealUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={cardHoverSpring}
                className="bg-white dark:bg-zinc-900/40 rounded-xl border border-gray-100 dark:border-zinc-800/60 p-5 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md relative overflow-hidden group"
              >
                {/* Event Content Segment */}
                <div className="space-y-4">
                  {/* Embedded Minimal Left-Aligned Date Box Frame */}
                  <div className="inline-flex flex-col items-center justify-center border border-gray-200 dark:border-zinc-800 rounded-lg p-2.5 w-full bg-gray-100 dark:bg-zinc-900 h-14 shrink-0 text-center select-none transition-colors duration-300">
                    <span className="block font-heading font-black text-lg text-gray-900 dark:text-zinc-100 leading-none">
                      {event.day}
                    </span>
                    <span className="block font-sans font-bold text-[10px] text-gray-400 dark:text-zinc-500 tracking-wider mt-0.5">
                      {event.month}
                    </span>
                  </div>

                  <div className="w-full h-70 overflow-hidden rounded-lg">
                    <Image
                      src={event.image}
                      alt="event image"
                      width={200}
                      height={150}
                      className="mx-auto mb-4 w-full h-full rounded-lg rounded-b-none object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-base text-gray-900 dark:text-zinc-100 tracking-tight leading-snug group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Metadata Indicators Layer */}
                    <div className="space-y-1 text-xs text-gray-500 dark:text-zinc-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 pl-5 text-gray-400 dark:text-zinc-500 text-[11px]">
                        <span>🕒 {event.time}</span>
                      </div>
                      <p className="text-gray-600 dark:text-zinc-400 font-normal leading-relaxed pt-1">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* =========================================================================
      3. SEMINAR REQUEST FORM CONTAINER
     ========================================================================= */}
        <div className="w-full bg-gray-50/50 dark:bg-zinc-900/20 py-16 px-6 overflow-x-hidden flex items-center justify-center border-t border-gray-100 dark:border-zinc-900 transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeQuintic }}
            className="w-full max-w-3xl bg-white dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/60 rounded-2xl p-6 md:p-12 shadow-sm space-y-8 transition-colors duration-300"
          >
            {/* Header Layout Mapping */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 block">
                HOST A SEMINAR
              </span>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-gray-950 dark:text-white tracking-tight leading-tight">
                Request an ASACADA Anti-Drug Seminar
              </h2>
              <p className="text-xs text-gray-400 dark:text-zinc-400 leading-relaxed font-medium pt-1">
                Are you a school principal, community leader, or church
                coordinator? Request our ASACADA team to host a free,
                professional anti-drug awareness seminar in your institution.
              </p>
            </div>

            {/* Form Fields Architecture */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Row 1: Contact Name & School Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Contact Person Name"
                    className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="School / Organization Name"
                    className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                  />
                </div>
              </div>

              {/* Row 3: City & State Location & Estimated Audience Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City & State Location"
                    className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <select
                    required
                    value={audienceSize}
                    onChange={(e) => setAudienceSize(e.target.value)}
                    className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-700 focus:outline-none focus:border-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-red-500 transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1em",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <option value="" disabled hidden>
                      Estimated Audience Size
                    </option>
                    <option value="Under 100">Under 100 participants</option>
                    <option value="100 - 300">100 - 300 participants</option>
                    <option value="300 - 500">300 - 500 participants</option>
                    <option value="500+">500+ participants</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Detailed Textarea Block */}
              <div className="space-y-1">
                <textarea
                  rows={4}
                  required
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  placeholder="Tell us more about your target audience and proposed dates for the anti-drug walk or seminar..."
                  className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Complete Form Execution Trigger Button */}
              <div className="pt-2">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-lg bg-gray-950 hover:bg-gray-900 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-950 font-heading font-black text-xs uppercase tracking-wider py-3.5 px-4 shadow-xs transition-colors cursor-pointer text-center"
                >
                  Submit Seminar Request
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
