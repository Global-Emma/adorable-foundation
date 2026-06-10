"use client";

import React, { useState, useMemo } from "react";
import { Easing, motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herobanner from "@/components/Herobanner";

import { MONTH_MAP, upcomingEvents } from "@/utils/lib"; // Ensure your updated schema array is here

import { CalendarDays, Sparkles } from "lucide-react";
import EventCard from "@/components/EventCard";
import Link from "next/link";

// --- ANIMATION DEFINITIONS ---
const easeQuintic: Easing = [0.22, 1, 0.36, 1];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    msg: string;
  } | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactName,
          orgName,
          email,
          phone,
          location,
          audienceSize,
          additionalDetails,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          success: true,
          msg: "✓ Request transmitted successfully!",
        });
        // Reset form fields
        setContactName("");
        setOrgName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setAudienceSize("");
        setAdditionalDetails("");
        setFormStatus({
          success: false,
          msg: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setFormStatus({
        success: false,
        msg: `Network failure. Please try again. ${error}`,
      });
    } finally {
      setIsSubmitting(false);
      setFormStatus(null);
    }
    alert(`Volunteer request submitted for: ${contactName}`);
    alert(
      `Seminar request logged successfully:\nInstitution: ${orgName}\nContact: ${contactName}`,
    );
  };

  // Chronological parsing engine splitter
  const { upcomingList, pastList } = useMemo(() => {
    const currentTimelineDate = new Date();

    const sortedEvents = [...upcomingEvents].map((event) => {
      const targetMonthIndex = MONTH_MAP[event.month.toUpperCase()] ?? 0;
      const parsedYear = parseInt(event.year || "2026", 10);
      const parsedDay = parseInt(event.day, 10);

      const absoluteEventDate = new Date(
        parsedYear,
        targetMonthIndex,
        parsedDay,
        23,
        59,
        59,
      );
      return { ...event, absoluteEventDate };
    });

    return {
      upcomingList: sortedEvents.filter(
        (e) => e.absoluteEventDate >= currentTimelineDate,
      ),
      pastList: sortedEvents.filter(
        (e) => e.absoluteEventDate < currentTimelineDate,
      ),
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full bg-white dark:bg-zinc-950 font-sans text-[#171717] dark:text-zinc-50 selection:bg-red-600 selection:text-white overflow-x-hidden transition-colors duration-300">
        {/* 1. HERO HEADER */}
        <Herobanner
          items={{
            image: "/images/gallery/gallery3.png",
            title: "Our Campaigns and Outings",
          }}
        />

        {/* 2. CORE CHRONOLOGICAL TIMELINE SECTIONS */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-20">
          {/* ================= UPCOMING EVENTS SECTION ================= */}
          <div className="space-y-8">
            <div className="border-b border-gray-100 dark:border-zinc-900 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 animate-pulse" /> Live &
                  Scheduled Actions
                </span>
                <h2 className="font-heading font-black text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight">
                  Upcoming Mobilizations
                </h2>
              </div>
              <p className="text-xs font-semibold text-gray-400 dark:text-zinc-500 max-w-md md:text-right">
                Direct public interventions scheduled across focal communities.
                Join our response framework teams on-ground.
              </p>
            </div>

            {upcomingList.length === 0 ? (
              /* Beautiful Empty State Display Component */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full border border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-3 bg-gray-50/30 dark:bg-zinc-900/10"
              >
                <div className="p-3 bg-gray-100 dark:bg-zinc-900 text-gray-400 dark:text-zinc-500 rounded-xl">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-zinc-300">
                  No Upcoming Events Scheduled
                </h3>
                <p className="text-xs text-gray-400 dark:text-zinc-500 max-w-xs leading-relaxed">
                  All active field campaigns have completed. Use the form layout
                  below to request or initiate an anti-drug seminar within your
                  local district.
                </p>
                <Link
                  href="#seminar"
                  className="sm:hidden text-center rounded-md bg-red-600 py-3 mt-4 font-bold text-xs uppercase tracking-wider text-white shadow-xs active:scale-98 transition-all"
                >
                  Request Seminar
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={staggerContainer}
              >
                {upcomingList.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </motion.div>
            )}
          </div>

          {/* ================= PAST EVENTS SECTION ================= */}
          <div className="space-y-8 pt-6">
            <div className="border-b border-gray-100 dark:border-zinc-900 pb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-zinc-500 block">
                COMPLETED ARCHIVES
              </span>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight">
                Past Outing History & Reports
              </h2>
            </div>

            {pastList.length === 0 ? (
              <p className="text-xs text-gray-400 dark:text-zinc-500">
                No past campaigns logged in database repositories.
              </p>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={staggerContainer}
              >
                {pastList.map((event) => (
                  <EventCard key={event.id} event={event} isPast />
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* 3. SEMINAR REQUEST FORM CONTAINER */}
        <div id="seminar" className="w-full bg-gray-50/50 dark:bg-zinc-900/20 py-16 px-6 overflow-x-hidden flex items-center justify-center border-t border-gray-100 dark:border-zinc-900 transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeQuintic }}
            className="w-full max-w-3xl bg-white dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/60 rounded-2xl p-6 md:p-12 shadow-sm space-y-8 transition-colors duration-300"
          >
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

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Contact Person Name"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                />
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="School / Organization Name"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City & State Location"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all"
                />
                <div className="relative">
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

              <textarea
                rows={4}
                required
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                placeholder="Tell us more about your target audience and proposed dates for the anti-drug walk or seminar..."
                className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-red-500 dark:focus:ring-red-500 transition-all resize-none leading-relaxed"
              />

              <div className="pt-2">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-lg bg-gray-950 hover:bg-gray-900 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-950 font-heading font-black text-xs uppercase tracking-wider py-3.5 px-4 shadow-xs transition-colors cursor-pointer text-center"
                >
                  {isSubmitting
                    ? "Submitting Seminar Request"
                    : "Submit Seminar Request"}
                </motion.button>
              </div>
            </form>
            {formStatus?.success === true && (
              <p className="text-red-600 font-semibold text-sm">
                {formStatus.msg}
              </p>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
