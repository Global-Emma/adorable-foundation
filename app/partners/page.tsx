"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Easing, Transition } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herobanner from "@/components/Herobanner";
import { chaptersData, partnerBenefit, corperatePartners } from "@/utils/lib";

// --- ANIMATION TIMINGS & CURVES ---
const customBezier: Easing = [0.16, 1, 0.3, 1];

const cardHoverSpring: Transition = {
  type: "spring",
  stiffness: 350,
  damping: 25,
};

export default function DonorsPartnersPage() {
  const [donorType, setDonorType] = useState<"individual" | "corporate">(
    "corporate",
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State Handles
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    tierIntent: "Silver Partner",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    msg: string;
  } | null>(null);

  const handleSubmitRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);
    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          success: true,
          msg: "✓ Request transmitted successfully! Our team will get back to you as aoon as possible",
        });
        // Reset form fields
        setFormData({
          fullName: "",
          organization: "",
          email: "",
          phone: "",
          tierIntent: "Silver Partner",
          message: "",
        });
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
      setFormStatus(null);
      setIsSubmitted(true);
    }
    alert(`Partnership request submitted Successfully.`);
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-white dark:bg-zinc-950 font-sans text-[#171717] dark:text-zinc-50 selection:bg-red-600 selection:text-white min-h-screen overflow-x-hidden transition-colors duration-300">
        {/* =========================================================================
      1. HERO LAYER SECTION 
     ========================================================================= */}
        <Herobanner
          items={{
            image: "/images/gallery/gallery4.png",
            title: "Our Global Partners & Chapters",
          }}
        />

        <div className="w-full bg-gray-50/50 dark:bg-zinc-950/20 font-sans py-16 space-y-28 overflow-x-hidden transition-colors duration-300">
          {/* =========================================================================
        SECTION 1: REGIONAL CHAPTERS MATRIX
       ========================================================================= */}
          <section className="mx-auto max-w-7xl px-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 block">
                STATE CHAPTERS
              </span>
              <h2 className="font-heading font-black text-2xl text-gray-950 dark:text-white tracking-tight">
                Meet Our Regional Chapters
              </h2>
              <p className="text-xs text-gray-400 dark:text-zinc-500 leading-relaxed font-medium">
                {`Adorable Foundation International is powered on the ground by
            dedicated state chapters and coordinate committees across
            Nigeria's South-East region.`}
              </p>
            </div>

            {/* Chapters Cards Container Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {chaptersData.map((chapter) => (
                <motion.div
                  key={chapter.id}
                  whileHover={{ y: -6 }}
                  transition={cardHoverSpring}
                  className="bg-white dark:bg-zinc-900/40 rounded-xl border border-gray-100 dark:border-zinc-800/60 shadow-xs overflow-hidden flex flex-col justify-between group hover:shadow-md dark:hover:border-zinc-700/50 transition-all duration-300"
                >
                  <div>
                    {/* Visual Imagery Canvas */}
                    <div className="aspect-4/3 w-full bg-gray-100 dark:bg-zinc-900 relative overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-102"
                        style={{
                          backgroundImage: `url('${chapter.imagePlaceholder}')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-black-1" />
                    </div>

                    {/* Information Header Block */}
                    <div className="p-5 text-center space-y-1.5">
                      <h3 className="font-heading font-black text-base text-gray-900 dark:text-zinc-100 tracking-tight">
                        {chapter.name}
                      </h3>
                      <span className="text-[10px] font-black text-red-600 dark:text-red-500 uppercase tracking-wider block">
                        {chapter.role}
                      </span>
                      <div className="w-8 h-0.5 bg-red-100 dark:bg-red-950/40 mx-auto my-1 group-hover:w-12 transition-all duration-300" />
                      <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed font-medium pt-1">
                        {chapter.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Balance Segment */}
                  <div className="pb-4" />
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* =========================================================================
      2. RECOGNIZED DONOR BRANDS CAROUSEL/GRID
     ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <section className="bg-gray-50/70 dark:bg-zinc-900/20 border-y border-gray-100 dark:border-zinc-900 py-12 text-center overflow-hidden transition-colors duration-300 rounded-2xl">
            <div className="mx-auto max-w-7xl px-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 dark:text-red-500 block mb-1">
                Ecosystem Pillars
              </span>
              <h2 className="font-heading font-black text-xl md:text-2xl text-gray-900 dark:text-white tracking-tight">
                Our Corporate Partners
              </h2>

              {/* Smooth Continuous Ticker Flex Line */}
              <div className="flex overflow-hidden select-none group hover-pause border-y border-white/5 py-4 relative z-10">
                {/* Track 1 */}
                <div className="flex shrink-0 items-stretch gap-8 min-w-full animate-marquee pr-8">
                  {[
                    ...corperatePartners,
                    ...corperatePartners,
                    ...corperatePartners,
                  ].map((brand, idx) => (
                    <div
                      key={idx}
                      className="font-extrabold text-sm md:text-base lg:text-lg tracking-tighter text-gray-400 dark:text-zinc-600 select-none uppercase transition-colors"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* =========================================================================
      3. VALUE PROPOSITION SPLIT & REGISTRATION INTAKE FORM
     ========================================================================= */}
        <section className="bg-gray-50/40 dark:bg-zinc-900/10 border-t border-gray-100 dark:border-zinc-900 py-16 md:py-24 transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Context Callout Box */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
                  Join the Coalition
                </span>
                <h3 className="mt-1 font-heading font-black text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight leading-tight">
                  Partner With Us <br />
                  To Sponsor Our Initiatives
                </h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md">
                At AFI, we recognize that structural change requires sustained
                organizational partners. We invite corporate entities,
                international agencies, and philanthropic groups to partner with
                us.
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-200/60 dark:border-zinc-800/60">
                {partnerBenefit.map((benefit, i) => {
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-900 dark:text-zinc-200 uppercase tracking-wide">
                          {benefit.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 dark:text-zinc-500 mt-0.5">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Interactive Form Box Container */}
            <div className="lg:col-span-7 w-full">
              <motion.div
                layout
                className="bg-white dark:bg-zinc-900/40 rounded-2xl border border-gray-100 dark:border-zinc-800/60 shadow-xl p-6 md:p-10 relative overflow-hidden transition-colors duration-300"
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="donor-intake-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="font-heading font-black text-lg text-gray-900 dark:text-zinc-100 tracking-tight">
                          Partnership Intake Profile
                        </h4>
                        <p className="text-xs text-gray-400 dark:text-zinc-500 mt-0.5">
                          Provide details below to establish your donor pipeline
                          assignment.
                        </p>
                      </div>

                      {/* Onboarding Mode Selection Toggle */}
                      <div className="bg-gray-50 dark:bg-zinc-950 p-1 rounded-xl grid grid-cols-2 text-center text-xs font-bold border border-gray-100 dark:border-zinc-800/60 transition-colors duration-300">
                        <button
                          type="button"
                          onClick={() => setDonorType("corporate")}
                          className={`py-2.5 rounded-lg transition-all cursor-pointer ${donorType === "corporate" ? "bg-red-600 text-white shadow-xs" : "text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200"}`}
                        >
                          Corporate Donor / Partner
                        </button>
                        <button
                          type="button"
                          onClick={() => setDonorType("individual")}
                          className={`py-2.5 rounded-lg transition-all cursor-pointer ${donorType === "individual" ? "bg-red-600 text-white shadow-xs" : "text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200"}`}
                        >
                          Individual Patron
                        </button>
                      </div>

                      {/* Intake Inputs Stack */}
                      <form
                        onSubmit={handleSubmitRegistration}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-gray-400 dark:text-zinc-500 tracking-wider mb-1.5">
                              Contact Full Name
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="e.g. Dr. Jane Alao"
                              className="block w-full rounded-lg border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 px-3.5 py-2.5 text-xs font-medium text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-zinc-950 transition-all placeholder-gray-300 dark:placeholder-zinc-700"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase text-gray-400 dark:text-zinc-500 tracking-wider mb-1.5">
                              {donorType === "corporate"
                                ? "Organization Name"
                                : "Affiliation / Profession"}
                            </label>
                            <input
                              type="text"
                              name="organization"
                              required={donorType === "corporate"}
                              value={formData.organization}
                              onChange={handleInputChange}
                              placeholder={
                                donorType === "corporate"
                                  ? "e.g. Sterling Ventures"
                                  : "e.g. Independent Philanthropist"
                              }
                              className="block w-full rounded-lg border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 px-3.5 py-2.5 text-xs font-medium text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-zinc-950 transition-all placeholder-gray-300 dark:placeholder-zinc-700"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-gray-400 dark:text-zinc-500 tracking-wider mb-1.5">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="partner@domain.org"
                              className="block w-full rounded-lg border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 px-3.5 py-2.5 text-xs font-medium text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-zinc-950 transition-all placeholder-gray-300 dark:placeholder-zinc-700"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase text-gray-400 dark:text-zinc-500 tracking-wider mb-1.5">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+234..."
                              className="block w-full rounded-lg border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 px-3.5 py-2.5 text-xs font-medium text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-zinc-950 transition-all placeholder-gray-300 dark:placeholder-zinc-700"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase text-gray-400 dark:text-zinc-500 tracking-wider mb-1.5">
                            Desired Partnership Support Tier
                          </label>
                          <select
                            name="tierIntent"
                            value={formData.tierIntent}
                            onChange={handleInputChange}
                            className="block w-full rounded-lg border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 px-3 py-2.5 text-xs font-bold text-gray-800 dark:text-zinc-200 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-zinc-950 transition-all"
                          >
                            <option
                              value="Bronze Partner"
                              className="dark:bg-zinc-900"
                            >
                              Bronze Supporter Tier
                            </option>
                            <option
                              value="Silver Partner"
                              className="dark:bg-zinc-900"
                            >
                              Silver Program Partner
                            </option>
                            <option
                              value="Gold Partner"
                              className="dark:bg-zinc-900"
                            >
                              Gold Institutional Patron
                            </option>
                            <option
                              value="In-kind Expert"
                              className="dark:bg-zinc-900"
                            >
                              In-Kind Service/Expertise Donor
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase text-gray-400 dark:text-zinc-500 tracking-wider mb-1.5">
                            Message / Engagement Objectives
                          </label>
                          <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Briefly state your organization's corporate social responsibility vision or key target outreach regions..."
                            className="block w-full rounded-lg border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 px-3.5 py-2.5 text-xs font-medium text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-zinc-950 transition-all placeholder-gray-300 dark:placeholder-zinc-700 resize-none"
                          />
                        </div>

                        {/* Submit Activation Trigger Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 rounded-xl bg-red-600 hover:bg-red-700 py-3.5 px-4 font-heading font-black text-xs uppercase tracking-wider text-white shadow-md transition-colors cursor-pointer text-center"
                        >
                          {isSubmitting
                            ? "Submitting Submit Partnership Intent Form"
                            : "Submit Partnership Intent Form"}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="donor-success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ ease: customBezier, duration: 0.4 }}
                      className="text-center py-10 space-y-4 flex flex-col items-center justify-center"
                    >
                      <div className="h-14 w-14 rounded-full bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 flex items-center justify-center text-2xl font-bold border border-green-100 dark:border-green-900/50">
                        ✓
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-heading font-black text-xl text-gray-900 dark:text-white tracking-tight">
                          Intake Registration Received
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                          Thank you for your willingness to build a better
                          society. An AFI operations representative will email
                          you directly at{" "}
                          <span className="font-bold text-gray-900 dark:text-white">
                            {formData.email}
                          </span>{" "}
                          within 48 business hours to verify credentials and
                          share execution agreements.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: "",
                            organization: "",
                            email: "",
                            phone: "",
                            tierIntent: "Silver Partner",
                            message: "",
                          });
                        }}
                        className="mt-4 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 underline cursor-pointer"
                      >
                        {`<!-- Submit another inquiry -->`}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {formStatus?.success === true && (
                  <p className="text-red-600 font-semibold text-sm">
                    {formStatus.msg}
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
