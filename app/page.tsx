"use client";

import { Easing, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Counter from "@/components/Counter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpenIcon, ChevronLeft, ChevronRight, Play } from "lucide-react";
import {
  galleryItems,
  programs,
  works,
  corperatePartners,
  upcomingEvents,
  MONTH_MAP,
} from "@/utils/lib";
import { useState, useEffect } from "react";
import Link from "next/link";
import EventCard from "@/components/EventCard";

export default function HomePage() {
  // --- ANIMATION CONFIGURATIONS ---
  const cubicBezierEase: Easing = [0.25, 1, 0.5, 1];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Form & Newsletter States
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [volunteerLocation, setVolunteerLocation] = useState("");
  const [volunteerReason, setVolunteerReason] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    msg: string;
  } | null>(null);

  const [subscriberEmail, setSubscriberEmail] = useState("");

  // States for Features
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Auto-slide effect for the Top Image Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
    }, 4500); // Changes images smoothly every 4.5 seconds

    return () => clearInterval(timer);
  }, []);

  // Manual Navigation Handlers for Slider
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: volunteerName,
          phone: volunteerPhone,
          email: volunteerEmail,
          location: volunteerLocation,
          reason: volunteerReason,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          success: true,
          msg: "✓ Request transmitted successfully!",
        });
        setVolunteerName("");
        setVolunteerPhone("");
        setVolunteerEmail("");
        setVolunteerLocation("");
        setVolunteerReason("");
      } else {
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
    }
    alert(`Volunteer request submitted for: ${volunteerName}`);
  };

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: subscriberEmail,
        }),
      });

      if (response.ok) {
        setSubscriberEmail("");
      }
    } catch (error) {
      console.error(error);
    }
    alert(`Subscribed successfully with: ${subscriberEmail}`);
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-950 font-sans text-[#171717] dark:text-zinc-50 selection:bg-red-600 selection:text-white overflow-x-hidden transition-colors duration-300">
      {/* =========================================================================
          1. NAVIGATION BAR
         ========================================================================= */}
      <Navbar />
      <audio
        src="/audio/asacada_anthem.mp3"
        autoPlay
        className="hidden"
      ></audio>

      {/* =========================================================================
          2. HERO SECTION
         ========================================================================= */}
      <section className="relative mt-20 w-full mx-auto px-6 py-12 md:py-20 lg:py-24 bg-[url('/images/adorable/drug_camp/drug5.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-[#000000d6] overflow-hidden">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-6 aspect-4/3 w-full"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="font-extrabold tracking-tight text-center lg:text-start text-3xl md:text-4xl lg:text-5xl text-gray-100 leading-[1.1]"
            >
              Giving a Helping Hand
              <br />
              Building a Brighter Future
              <br />
              <span className="text-red-600 dark:text-red-500">
                Transforming Lives.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-gray-300 text-center lg:text-start text-base md:text-lg leading-relaxed"
            >
              Adorable Foundation International (AFI) is dedicated to helping
              drug abuse victims, nourishing children, uplifting vulnerable
              widows, and conducting healthcare outreaches across underserved
              regions of Africa.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="/donations"
                className="rounded-md bg-red-600 px-6 py-3 font-bold text-xs uppercase tracking-wider text-white shadow-md transition-all hover:bg-red-700 hover:shadow-xl"
              >
                Donate Now
              </a>
              <a
                href="#volunteer"
                className="rounded-md border border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-3 font-bold text-xs uppercase tracking-wider text-gray-700 dark:text-zinc-300 transition-all hover:bg-gray-50 dark:hover:bg-zinc-800 hover:border-gray-400 dark:hover:border-zinc-700"
              >
                Become a Volunteer
              </a>
            </motion.div>
          </motion.div>

          {/* Image Canvas Panel */}
          <motion.div
            className="relative lg:col-span-6 flex w-full justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="aspect-4/3 w-full rounded-2xl bg-gray-100 dark:bg-zinc-900 shadow-xl overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
                style={{
                  backgroundImage: "url('/images/adorable/drug_camp/drug5.jpeg')",
                }}
              >
                <div className="w-full h-full flex items-center justify-center bg-black/10 text-white font-medium p-6 text-center text-xs backdrop-blur-[1px]">
                  [
                  <Image
                    src="/images/ascada_logo.png"
                    alt="Composition Placeholder"
                    width={200}
                    height={150}
                    className="mx-auto mb-4 opacity-50"
                  />
                  ]
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          3. STATS BAND
         ========================================================================= */}
      <section className="bg-gray-50 dark:bg-zinc-900/40 border-y border-gray-100 dark:border-zinc-900 py-10 shadow-sm transition-colors duration-300">
        <div className="mx-auto w-full px-6">
          <motion.div
            className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {works.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center border-r border-r-gray-300 dark:border-r-zinc-800 last:border-r-0"
              >
                <span className="block font-black text-2xl md:text-3xl lg:text-4xl text-red-600 dark:text-red-500 tracking-tight">
                  <Counter number={stat.val} />
                </span>
                <span className="mt-1 text-xs md:text-sm font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          1.5 AUTOPLAYING FEATURED HIGHLIGHTS SLIDER (At the Beginning)
         ========================================================================= */}
      <section className="w-full bg-gray-900 dark:bg-zinc-950 relative overflow-hidden h-85 md:h-125 lg:h-125">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0.8, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.9, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center flex flex-col justify-end p-8 md:p-16 text-left text-white"
            style={{
              backgroundImage: `url(${galleryItems[currentSlide]?.image})`,
            }}
          >
            {/* Dark Linear Underlay Overlay Layout Mask for Scannability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto w-full mb-4">
              <span className="text-[10px] md:text-xs tracking-widest font-black uppercase bg-red-600 px-3 py-1 rounded-sm inline-block mb-3 shadow-md">
                AFI Field Archive Presence
              </span>
              <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-white tracking-tight drop-shadow-md leading-tight">
                Our Outreaches In Action
              </h2>
              <p className="mt-2 text-xs md:text-sm text-gray-200 font-medium max-w-xl drop-shadow-sm line-clamp-2">
                Real time frame data captured directly during global
                humanitarian outreach campaigns and drug eradication setups.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Manual Controller Navigation Overlays */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-red-600 transition-colors cursor-pointer border border-white/10"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-red-600 transition-colors cursor-pointer border border-white/10"
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Bottom Pagination Metric Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {galleryItems.slice(0, 6).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? "w-8 bg-red-600"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. ABOUT AFI SUMMARY SECTION
         ========================================================================= */}
      <section className="mx-auto w-full px-6 pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
              Who We Are
            </span>
            <h2 className="mt-2 font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight">
              About AFI
              <br />
              <span className="text-red-600 dark:text-red-500 text-xl block mt-1">
                Uplifting & Restoring Dignity To Lives
              </span>
            </h2>
            <p className="mt-6 text-gray-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
              Adorable Foundation International (AFI) recognizes the critical
              need for robust, compassionate support systems across Nigeria.
              Drug abuse and structural hardship devastate countless youths and
              families each day. We are committed to providing a secure,
              supportive network to seek medical rehabilitation, vocational
              education, and basic necessities. Under our flagship campaign
              ASACADA, we drive strong drug prevention programs in high schools,
              local governments, and cities to educate and salvage our youth.
            </p>
            <div className="mt-8">
              <Link
                href="/about-us"
                className="inline-flex items-center rounded-md border border-red-600 dark:border-red-500 px-5 py-2.5 font-bold text-xs uppercase tracking-wider text-red-600 dark:text-red-500 transition-all hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-gray-100 dark:bg-zinc-900 aspect-10/10 overflow-hidden shadow-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: "url('/images/adorable/sch_nyanya/nyanya4.jpeg')",
              }}
            >
              <div className="w-full h-full bg-black/5 flex items-end p-6 text-white text-xs font-light tracking-wide bg-linear-to-t from-black/40 to-transparent">
                <Image
                  src="/images/ascada_logo.png"
                  alt="Composition Placeholder"
                  width={150}
                  height={100}
                  className="mx-auto mb-[25%] opacity-50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          4.5 IMPACT VIDEO SHOWCASE
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          className="w-full rounded-2xl h-100 md:125 lg:h-150 bg-gray-50 dark:bg-zinc-900/30 border border-gray-100 dark:border-zinc-900 p-4 md:p-8 shadow-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-video h-full w-full rounded-xl overflow-hidden bg-zinc-950 shadow-2xl border border-gray-200/10 group">
            {!isVideoPlaying ? (
              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat transition-transform duration-700"
                style={{
                  backgroundImage: "url('/images/adorable/face_of_asacada/face1.jpeg')",
                }}
              >
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/60 transition-colors" />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoPlaying(true)}
                  className="relative z-20 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-red-600 text-white shadow-xl hover:bg-red-700 cursor-pointer transition-colors"
                >
                  <Play size={32} className="ml-1 fill-white" />
                </motion.button>

                <p className="relative z-20 mt-4 font-bold text-sm md:text-base text-gray-100 tracking-wide uppercase px-4 text-center">
                  Watch Our Latest Community Outreach Campaign
                </p>
              </div>
            ) : (
              <iframe
                src="/videos/queen_asacada2.mp4"
                title="AFI Outreach Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          5. OUR PROGRAMS CARD GRID
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
                whileHover="hover"
                className="rounded-xl border border-gray-100 dark:border-zinc-900/60 bg-white dark:bg-zinc-900/50 p-6 text-left shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-lg bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-500 mb-5">
                    <BookOpenIcon size={18} />
                  </div>
                  <Image
                    src={prog.mainImage}
                    alt={prog.title}
                    width={400}
                    height={250}
                    className="w-full h-40 hover:scale-105 transition-transform rounded-lg mb-5"
                  />
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
          6. WHY DRUG PREVENTION MATTERS BANNER
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <motion.div
          className="relative rounded-2xl bg-gray-900 dark:bg-zinc-900 text-white p-8 md:p-12 lg:p-16 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute bg-center bg-blend-overlay bg-cover bg-[#000000cf] inset-0 bg-[radial-gradient(circle_at_left,rgba(220,38,38,0.15),transparent_50%)]"
            style={{
              backgroundImage: "url('/images/adorable/sch_nyanya/nyanya9.jpeg')",
            }}
          />

          <div className="lg:col-span-7 relative z-10">
            <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Why Drug Prevention Matters
            </h2>
            <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
              Drug abuse destroys families and limits generational futures.
              Through ASACADA (Drug Rehab & Abuse Awareness) Campaign, we break
              processing loops to build a healthy ecosystem.
            </p>
            <div className="mt-8">
              <a
                href="/donations"
                className="rounded-md bg-red-600 px-5 py-3 font-bold text-xs uppercase tracking-wider text-white shadow-md transition-all hover:bg-red-700"
              >
                Support Our Cause
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-16/10 lg:aspect-auto lg:h-full rounded-xl bg-gray-800/50 dark:bg-zinc-950/50 overflow-hidden relative z-10 border border-white/5">
            <div
              className="w-full h-full bg-cover bg-center mix-blend-luminosity transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: "url('/images/adorable/sch_nyanya/nyanya9.jpeg')",
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-xs text-white/30 p-4 text-center backdrop-blur-[0.5px]">
                <Image
                  src="/images/ascada_logo.png"
                  alt="Composition Placeholder"
                  width={100}
                  height={50}
                  className="mx-auto mb-4 opacity-50"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          7. RECENT EVENTS
         ========================================================================= */}
      <section className="bg-gray-50 dark:bg-zinc-900/20 py-16 md:py-24 border-y border-gray-100 dark:border-zinc-900 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight">
              Recent Events
              <br />
              <span className="text-red-600 dark:text-red-500 text-xl block mt-1">
                Our Latest Mobilizations
              </span>
            </h2>
            <p className="mt-3 text-gray-500 dark:text-zinc-400 text-sm md:text-base">
              We believe in on-the-ground transparency. Check out some of our
              recent community outings and upcoming awareness campaign
              schedules.
            </p>
          </div>
          <Link
            href={`/events`}
            className="mt-6 w-full inline-flex items-center text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-widest hover:text-red-700 dark:hover:text-red-400 transition-colors"
          >
            View All Events <span className="ml-1">→</span>
          </Link>
          <motion.div
            className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[...upcomingEvents]
              .reverse()
              .slice(0, 3)
              .map((ev) => {
                const date = new Date();
                const month = MONTH_MAP[ev.month.toUpperCase()] ?? 0;
                const compMonth = month < date.getMonth();
                const compYear = Number(ev.year) < date.getFullYear()
                const compared = compMonth || compYear
                return <EventCard key={ev.id} event={ev} isPast={compared} />;
              })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          8. GALLERY PREVIEW (Reverted to Original Clean Static Grid)
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
        <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight">
          Gallery Preview
        </h2>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {galleryItems.slice(0, 6).map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="aspect-square rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm overflow-hidden relative cursor-pointer group"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider">
                  View
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <a
            href="/gallery"
            className="inline-flex items-center rounded-md bg-red-600 px-6 py-3 font-bold text-xs uppercase tracking-wider text-white shadow-md hover:bg-red-700"
          >
            View Gallery
          </a>
        </div>
      </section>

      {/* =========================================================================
          9. DONORS & PARTNERS BRAND WALL
         ========================================================================= */}
      <section className="bg-gray-50/70 dark:bg-zinc-900/40 border-y border-gray-100 dark:border-zinc-900 py-12 text-center overflow-hidden transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-500">
            Trusted By & Associated With
          </span>

          <div className="flex overflow-hidden select-none group hover-pause border-y border-white/5 py-4 relative z-10">
            <div className="flex shrink-0 items-stretch gap-8 min-w-full animate-marquee pr-8">
              {[
                ...corperatePartners,
                ...corperatePartners,
                ...corperatePartners,
                ...corperatePartners,
              ].map((brand, idx) => (
                <div
                  key={idx}
                  className="font-extrabold text-sm md:text-base lg:text-lg tracking-tighter text-gray-400 dark:text-zinc-500 select-none uppercase"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FINAL BOTTOM CTA BANNER
         ========================================================================= */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <motion.div
          className="rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight">
              Your Support Can Change Lives
            </h2>
            <p className="mt-2 text-gray-500 dark:text-zinc-400 text-sm md:text-base">
              Every donation, every volunteer, brings us one step closer to a
              better tomorrow.
            </p>
          </div>
          <Link
            href="/donations"
            className="rounded-md bg-red-600 px-6 py-3.5 font-bold text-xs uppercase tracking-wider text-white shadow-md hover:bg-red-700 shrink-0"
          >
            Donate Now
          </Link>
        </motion.div>
      </section>

      {/* =========================================================================
          11. VOLUNTEER & SUBSCRIPTION HUB SECTION
         ========================================================================= */}
      <div
        id="volunteer"
        className="w-full bg-gray-50/50 dark:bg-zinc-950/20 font-sans text-[#171717] dark:text-zinc-50 py-16 px-6 overflow-x-hidden transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT BLOCK: BECOME A VOLUNTEER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: cubicBezierEase }}
            className="bg-white dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-sm flex flex-col justify-between transition-colors duration-300"
          >
            <div className="space-y-6">
              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 block">
                  MAKE AN IMPACT
                </span>
                <h2 className="font-heading font-black text-2xl text-gray-950 dark:text-white tracking-tight">
                  Become a Volunteer
                </h2>
                <p className="text-xs text-gray-400 dark:text-zinc-400 font-medium leading-relaxed max-w-md">
                  Your little can change lives. Every volunteer hour counts.
                  Join our team of passionate field organizers today.
                </p>
              </div>

              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={volunteerName}
                    onChange={(e) => setVolunteerName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-gray-50/50 dark:bg-zinc-950/40 border border-gray-200/60 dark:border-zinc-800/60 rounded-xl px-4 py-3 text-xs font-medium text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 dark:focus:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 transition-all"
                  />
                  <input
                    type="tel"
                    required
                    value={volunteerPhone}
                    onChange={(e) => setVolunteerPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full bg-gray-50/50 dark:bg-zinc-950/40 border border-gray-200/60 dark:border-zinc-800/60 rounded-xl px-4 py-3 text-xs font-medium text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 dark:focus:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    value={volunteerEmail}
                    onChange={(e) => setVolunteerEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-gray-50/50 dark:bg-zinc-950/40 border border-gray-200/60 dark:border-zinc-800/60 rounded-xl px-4 py-3 text-xs font-medium text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 dark:focus:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 transition-all"
                  />
                  <input
                    type="text"
                    required
                    value={volunteerLocation}
                    onChange={(e) => setVolunteerLocation(e.target.value)}
                    placeholder="Subject / State Location"
                    className="w-full bg-gray-50/50 dark:bg-zinc-950/40 border border-gray-200/60 dark:border-zinc-800/60 rounded-xl px-4 py-3 text-xs font-medium text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 dark:focus:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 transition-all"
                  />
                </div>

                <textarea
                  rows={4}
                  required
                  value={volunteerReason}
                  onChange={(e) => setVolunteerReason(e.target.value)}
                  placeholder="Why do you want to join our outreach efforts?"
                  className="w-full bg-gray-50/50 dark:bg-zinc-950/40 border border-gray-200/60 dark:border-zinc-800/60 rounded-xl px-4 py-3 text-xs font-medium text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-600 dark:focus:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 transition-all resize-none leading-relaxed"
                />

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-xl bg-gray-950 dark:bg-red-600 hover:bg-gray-900 dark:hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-wider py-3.5 px-4 transition-colors cursor-pointer text-center mt-2"
                >
                  {isSubmitting ? "Submitting Request" : "Submit Request"}
                </motion.button>
              </form>

              {formStatus?.success === true && (
                <p className="text-green-600 font-semibold text-sm">
                  {formStatus.msg}
                </p>
              )}
            </div>
          </motion.div>

          {/* RIGHT BLOCK: SUBSCRIBE TO OUR NEWSLETTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: cubicBezierEase }}
            className="bg-[#0b1120] dark:bg-zinc-900/20 rounded-3xl p-6 md:p-10 shadow-lg flex flex-col justify-between border border-gray-900 dark:border-zinc-800/60 text-white relative overflow-hidden transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 z-10">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500 block">
                  STAY UPDATED
                </span>
                <h2 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight leading-tight">
                  Subscribe to Our
                  <br />
                  Newsletter
                </h2>
                <p className="text-xs text-gray-400 font-medium leading-relaxed pt-1">
                  Get immediate access to reports on our local campaigns, video
                  releases of outings, and general financial transparency
                  audits.
                </p>
              </div>

              <form
                onSubmit={handleSubscribeSubmit}
                className="flex flex-col sm:flex-row items-center gap-2 pt-2"
              >
                <input
                  type="email"
                  required
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full sm:flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs font-medium text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 flex items-center gap-3.5 z-10">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-white/10">
                <Image
                  src="/images/ascada_logo.png"
                  alt="AFI Logo Seal"
                  className="w-auto h-auto object-contain"
                  width={100}
                  height={100}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed italic">
                {`"A Social Awareness Campaign Against Drug Abuse (ASACADA) — `}
                <span className="text-gray-200 not-italic font-bold">
                  Save our tomorrow, today.
                </span>
                {`"`}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          12. REGISTRATION & CONTEXT FOOTER
         ========================================================================= */}
      <Footer />
    </div>
  );
}
