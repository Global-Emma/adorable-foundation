"use client";

// import React, { useState } from "react";
import { Easing, motion, Transition } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herobanner from "@/components/Herobanner";
import Image from "next/image";
import { causesData } from "@/utils/lib";
import Link from "next/link";

// --- ANIMATION CURVES ---
const customBezier: Easing = [0.16, 1, 0.3, 1];

const cardHoverSpring: Transition = {
  type: "spring",
  stiffness: 350,
  damping: 25,
};

export default function DonationsPage() {
  // const [selectedAmount, setSelectedAmount] = useState<number | "Custom">(5000);
  // const [inputValue, setInputValue] = useState<string>("5000");
  // const [selectedCause, setSelectedCause] = useState<string>(
  //   "ASACADA Anti-Drug & Rehab Campaign",
  // );
  // const [donorName, setDonorName] = useState<string>("");
  // const [donorEmail, setDonorEmail] = useState<string>("");

  // const presetAmounts = [5000, 10000, 25000, 50000];

  // const handleAmountClick = (amount: number | "Custom") => {
  //   setSelectedAmount(amount);
  //   if (amount !== "Custom") {
  //     setInputValue(amount.toString());
  //   } else {
  //     setInputValue("");
  //   }
  // };

  // const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert(
  //     `Routing token check for execution:\nProject: ${selectedCause}\nValue: ₦${parseFloat(inputValue || "0").toLocaleString()}`,
  //   );
  // };

  return (
    <>
      <Navbar />
      <div className="w-full bg-white dark:bg-zinc-950 font-sans text-[#171717] dark:text-zinc-50 selection:bg-red-600 selection:text-white overflow-x-hidden transition-colors duration-300">
        {/* =========================================================================
      1. HERO HEADER WITH MASKED BACKGROUND
     ========================================================================= */}
        <Herobanner
          items={{ image: "/images/gallery/gallery4.png", title: "Donations" }}
        />

        {/* =========================================================================
      2. INTRO SPLIT: YOUR SUPPORT CHANGES LIVES
     ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: customBezier }}
            >
              <h2 className="font-heading font-black text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight leading-tight">
                Your Support <br />
                <span className="text-red-600 dark:text-red-500">
                  Changes Lives
                </span>
              </h2>
              <p className="text-gray-600 dark:text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl">
                Every donation, no matter how small, directly impacts the lives
                of individuals and communities in need.
              </p>

              <Link
                href="#donations"
                className="rounded-md bg-red-600 px-6 py-3.5 font-bold text-xs uppercase tracking-wider text-white shadow-md hover:bg-red-700 shrink-0"
              >
                Donate Now
              </Link>
            </motion.div>

            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: customBezier }}
            >
              <div className="w-full max-w-sm aspect-square rounded-2xl bg-gray-50 dark:bg-zinc-900/50 overflow-hidden shadow-sm border border-gray-100 dark:border-zinc-800/60 flex items-center justify-center transition-colors duration-300">
                <div
                  className="w-full h-full bg-cover bg-start"
                  style={{
                    backgroundImage: "url('/images/support_hands.png')",
                  }}
                >
                  <div className="w-full h-full bg-black/1 flex items-center justify-center text-xs text-gray-400 p-4 text-center">
                    <Image
                      src="/images/ascada_logo.png"
                      alt="Composition Placeholder"
                      width={150}
                      height={100}
                      className="mx-auto mb-4 opacity-50"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="w-full bg-gray-50/50 dark:bg-zinc-900/20 py-16 space-y-24 overflow-x-hidden border-t border-gray-100 dark:border-zinc-900 transition-colors duration-300">
          {/* =========================================================================
        3. CAUSES LIST / METRIC CARDS GRID
       ========================================================================= */}
          <section className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {causesData.map((cause) => (
                <motion.div
                  key={cause.id}
                  whileHover={{ y: -6 }}
                  transition={cardHoverSpring}
                  className="bg-white dark:bg-zinc-900/40 rounded-xl border border-gray-100 dark:border-zinc-800/60 shadow-xs overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Media Presentation Cover */}
                    <div className="aspect-16/10 w-full bg-gray-100 dark:bg-zinc-900 relative overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-102"
                        style={{
                          backgroundImage: `url('${cause.imagePlaceholder}')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-black/2" />
                    </div>

                    {/* Content Details Block */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-heading font-black text-base text-gray-900 dark:text-zinc-100 tracking-tight leading-snug group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                        {cause.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
                        {cause.description}
                      </p>
                    </div>
                  </div>

                  {/* Functional Meter Metrics Block */}
                  <div className="p-5 pt-0 space-y-3">
                    <div className="w-full bg-gray-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-red-600 dark:bg-red-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cause.progressPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: customBezier }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-[11px] font-bold tracking-tight">
                      <span className="text-gray-900 dark:text-zinc-200">
                        {cause.raised}{" "}
                        <span className="text-gray-400 dark:text-zinc-500 font-medium">
                          Raised
                        </span>
                      </span>
                      <span className="text-gray-400 dark:text-zinc-500 font-medium">
                        {cause.goal === "Continuous Goal"
                          ? "Continuous Goal"
                          : `Raised of ${cause.goal}`}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =========================================================================
        4. ONLINE PAYMENT PLATFORM INTEGRATED FORM CONTAINER
       ========================================================================= */}
          {/* <section className="mx-auto max-w-2xl px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.99 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/60 rounded-2xl p-6 md:p-8 shadow-sm space-y-6 transition-colors duration-300"
            >
              Header Layout Mapping
              <div className="text-center space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 block">
                  ONLINE PAYMENT PLATFORM
                </span>
                <h2 className="font-heading font-black text-xl text-gray-950 dark:text-white tracking-tight">
                  Donate Online Instantly
                </h2>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                1. Preset Pick Grid Row
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-gray-900 dark:text-zinc-200 uppercase tracking-wide">
                    1. Select Donation Amount (NGN):
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handleAmountClick(amt)}
                        className={`py-2 px-1 text-xs font-bold border rounded-lg transition-all cursor-pointer ${
                          selectedAmount === amt
                            ? "bg-red-600 border-red-600 text-white shadow-xs dark:bg-red-500 dark:border-red-500"
                            : "bg-white border-gray-200 text-gray-700 hover:border-gray-400 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600"
                        }`}
                      >
                        ₦{amt.toLocaleString()}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAmountClick("Custom")}
                      className={`py-2 px-1 text-xs font-bold border rounded-lg transition-all cursor-pointer ${
                        selectedAmount === "Custom"
                          ? "bg-red-600 border-red-600 text-white shadow-xs dark:bg-red-500 dark:border-red-500"
                          : "bg-white border-gray-200 text-gray-700 hover:border-gray-400 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600"
                      }`}
                    >
                      Custom
                    </button>
                  </div>

                  Standalone Input Box synced to presets matching screenshot state
                  <div className="relative mt-2 rounded-lg shadow-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <span className="text-gray-400 dark:text-zinc-500 font-bold text-xs">
                        ₦
                      </span>
                    </div>
                    <input
                      type="number"
                      min="1"
                      required
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        setSelectedAmount("Custom");
                      }}
                      placeholder="Enter custom configuration value"
                      className="block w-full rounded-lg border border-gray-200 bg-white pl-8 pr-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-red-500 dark:focus:ring-red-500"
                    />
                  </div>
                </div>

                2. Cause Dropdown Select Block
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-gray-900 dark:text-zinc-200 uppercase tracking-wide">
                    2. Choose Cause / Project:
                  </label>
                  <select
                    value={selectedCause}
                    onChange={(e) => setSelectedCause(e.target.value)}
                    className="block w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-bold text-gray-800 focus:outline-none focus:border-red-600 transition-all dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:focus:border-red-500"
                  >
                    <option value="ASACADA Anti-Drug & Rehab Campaign">
                      ASACADA Anti-Drug & Rehab Campaign
                    </option>
                    <option value="Child Nutrition & Textbooks Initiative">
                      Child Nutrition & Textbooks Initiative
                    </option>
                    <option value="Widows Vocational Empowerment Track">
                      Widows Vocational Empowerment Track
                    </option>
                  </select>
                </div>

                Identity Text Inputs Frame
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-gray-400 dark:text-zinc-400 uppercase tracking-wide">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Enter Full Name"
                      className="block w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-xs font-medium text-gray-900 focus:outline-none focus:border-red-600 transition-all dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-red-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-gray-400 dark:text-zinc-400 uppercase tracking-wide">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="Enter Email"
                      className="block w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-xs font-medium text-gray-900 focus:outline-none focus:border-red-600 transition-all dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-red-500"
                    />
                  </div>
                </div>

                Complete Execution Button
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-lg bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-wider py-3.5 px-4 shadow-xs transition-colors cursor-pointer text-center mt-2 dark:bg-red-500 dark:hover:bg-red-600"
                >
                  Proceed to Secure Transfer
                </motion.button>
              </form>
            </motion.div>
          </section> */}

          {/* =========================================================================
        5. DIRECT WIRE / OFFICIAL BANK ACCOUNTS BLOCK
       ========================================================================= */}
          <section id="donations" className="mx-auto max-w-2xl px-6">
            <div className="bg-white dark:bg-zinc-950 rounded-2xl border-2 border-dashed border-gray-200 dark:border-zinc-800 p-6 md:p-10 space-y-8 relative transition-colors duration-300">
              <div className="text-center space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 block">
                  DIRECT BANK WIRE
                </span>
                <h2 className="font-heading font-black text-xl text-gray-950 dark:text-white tracking-tight">
                  Official Bank Account
                </h2>
                <p className="text-xs text-gray-400 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
                  For electronic bank transfers, cash deposits, or international
                  wire transfers, please use the official corporate bank account
                  below.
                </p>
              </div>

              {/* Target Split Columns */}
              <div className="grid grid-cols-1 items-center md:grid-cols-1 gap-6">
                {/* Account Block 1 */}
                <div className="bg-gray-50/60 dark:bg-zinc-900/40 rounded-xl border border-gray-100 dark:border-zinc-800/60 p-5 space-y-3 text-center relative group hover:border-gray-200 dark:hover:border-zinc-700 transition-all">
                  <div className="flex justify-between items-center border-b border-gray-200/60 dark:border-zinc-800 pb-2">
                    <span className="text-xs font-black tracking-tight text-red-700 dark:text-red-400 font-serif italic">
                      Zenith Bank PLC
                    </span>
                    <span className="text-[9px] bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 font-extrabold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                      Primary NGN
                    </span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-zinc-500 tracking-wider">
                        Account Name
                      </span>
                      <span className="font-bold text-gray-900 dark:text-zinc-200">
                        Adorable Foundation International
                      </span>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-zinc-500 tracking-wider">
                        Account Number
                      </span>
                      <span
                        className="font-mono font-black text-base text-gray-950 dark:text-white tracking-wide select-all cursor-pointer"
                        title="Click to select"
                      >
                        1310006982
                      </span>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-zinc-500 tracking-wider">
                        Branch / Country
                      </span>
                      <span className="font-medium text-gray-500 dark:text-zinc-400">
                        Abuja, Nigeria — Local NGN Account
                      </span>
                    </div>
                  </div>
                </div>

                {/* Account Block 2 */}
                {/* <div className="bg-gray-50/60 dark:bg-zinc-900/40 rounded-xl border border-gray-100 dark:border-zinc-800/60 p-5 space-y-3 relative group hover:border-gray-200 dark:hover:border-zinc-700 transition-all">
                  <div className="flex justify-between items-center border-b border-gray-200/60 dark:border-zinc-800 pb-2">
                    <span className="text-xs font-black tracking-tight text-orange-600 dark:text-orange-400 font-sans">
                      Guaranty Trust Bank (GTB)
                    </span>
                    <span className="text-[9px] bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 font-extrabold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                      Chapter NGN
                    </span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-zinc-500 tracking-wider">
                        Account Name
                      </span>
                      <span className="font-bold text-gray-900 dark:text-zinc-200">
                        Adorable Foundation International
                      </span>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-zinc-500 tracking-wider">
                        Account Number
                      </span>
                      <span
                        className="font-mono font-black text-base text-gray-950 dark:text-white tracking-wide select-all cursor-pointer"
                        title="Click to select"
                      >
                        0128392839
                      </span>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-zinc-500 tracking-wider">
                        Branch / Country
                      </span>
                      <span className="font-medium text-gray-500 dark:text-zinc-400">
                        Enugu Chapter — Local NGN Account
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Fineprint Text Guidelines & Action Buttons Block */}
              <div className="pt-6 border-t border-gray-100 dark:border-zinc-900 space-y-4">
                {/* Action Redirection Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                  <a
                    href="mailto:info2adorablefoundation@gmail.com?subject=Donation%20Receipt%20Submission"
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white hover:border-gray-300 px-4 py-2.5 text-xs font-bold text-gray-700 shadow-xs transition-colors cursor-pointer dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700"
                  >
                    📧 Submit Via Email
                  </a>
                  <a
                    href="https://wa.me/2347013777177?text=Hello%20AFI%2C%20I%20have%20just%20made%20a%20direct%20bank%20transfer%20donation%20and%20would%20like%20to%20submit%20my%20receipt%20for%20verification."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-colors cursor-pointer dark:bg-red-500 dark:hover:bg-red-600"
                  >
                    💬 Submit Via WhatsApp
                  </a>
                </div>
                <p className="text-[11px] text-gray-400 dark:text-zinc-400 leading-relaxed font-medium italic text-center max-w-2xl mx-auto">
                  * After transferring, please email a screenshot of your
                  receipt to{" "}
                  <span className="text-gray-900 dark:text-zinc-200 font-bold not-italic">
                    receipts@adorablefoundation.com
                  </span>{" "}
                  or WhatsApp to{" "}
                  <span className="text-gray-900 dark:text-zinc-200 font-bold not-italic">
                    +234 701 277 7177
                  </span>{" "}
                  so we can issue an official tax-exempt acknowledgement
                  receipt.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* =========================================================================
      6. WHY DONATE TO AFI? SPLIT VALUE PROPOSITION
     ========================================================================= */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 border-t border-gray-50 dark:border-zinc-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Checklist Block */}
            <div className="space-y-6">
              <h3 className="font-heading font-black text-2xl text-gray-900 dark:text-white tracking-tight">
                Why Donate to AFI?
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Transparency in the use of funds",
                  "100% commitment to our cause",
                  "Real impact in communities",
                  "Regular updates and reports",
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-zinc-300"
                  >
                    <span className="text-red-600 dark:text-red-500 shrink-0 mt-0.5 font-bold">
                      ✓
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Context Image Grid Block */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-zinc-800/60 shadow-sm aspect-video">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/gallery/gallery4.png')",
                }}
              >
                <div className="w-full h-full bg-black/1 flex items-center justify-center text-xs text-gray-400 p-4 text-center">
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
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
