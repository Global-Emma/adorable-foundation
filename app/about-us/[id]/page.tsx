"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Bookmark,
  MapPin,
  ExternalLink,
  HeartHandshake,
} from "lucide-react";
import { programs } from "@/utils/lib";
import { upcomingEvents } from "@/utils/lib";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function SingleProgramPage({ params }: PageProps) {
  const { id } = use(params);

  // 1. Fetch matching program scope data
  const program = programs.find((prog) => prog.id === id);

  // 2. Perform cross-linking filter to fetch events associated with this program
  const associatedEvents = upcomingEvents.filter(
    (event) => event.category === program?.eventCategory,
  );

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50 dark:bg-zinc-950">
        <h1 className="text-2xl font-black text-gray-950 dark:text-white">
          Program Module Not Found
        </h1>
        <p className="text-sm text-gray-500 mt-2 mb-6">
          The specified foundation division profile does not exist.
        </p>
        <Link
          href="/"
          className="rounded-md bg-red-600 px-5 py-2.5 font-bold text-xs uppercase tracking-wider text-white shadow-xs"
        >
          Return to Hub
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50/50 -mt-12.5 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 pt-24 pb-16 transition-colors duration-300">
        {/* Hero Header Section */}
        <section className="relative w-full border-b border-gray-100 dark:border-zinc-900/60 bg-white dark:bg-zinc-900/40 backdrop-blur-md px-6 py-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/#programs"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />{" "}
              View All Programs
            </Link>

            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/40 rounded-full mb-4">
                <Bookmark className="h-3 w-3" /> Core Foundation Program
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-950 dark:text-white leading-none">
                {program.title}
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-zinc-400 mt-4 leading-relaxed">
                {program.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Main Structural Grid Split */}
        <section className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Left Side Column: Narrative Content & History Timeline */}
          <div className="lg:col-span-2 space-y-12">
            {/* Main Showcase Image Banner */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-900 shadow-xs bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={program.mainImage}
                alt={program.title}
                fill
                priority
                className="object-cover"
                sizes="(max-w-7xl) 66vw, 100vw"
              />
            </div>

            {/* Deep Scope Description Narrative */}
            <article className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-900 p-6 md:p-8 rounded-2xl shadow-xs">
              <h2 className="text-base font-black uppercase tracking-wider border-b border-gray-100 dark:border-zinc-800 pb-3 text-gray-950 dark:text-white">
                Program Operation Scope
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 text-base leading-relaxed mt-4 whitespace-pre-line">
                {program.longDesc}
              </p>
            </article>

            {/* Strategic Objectives List Checkbox Matrix */}
            <section className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-900 p-6 md:p-8 rounded-2xl shadow-xs space-y-4">
              <h2 className="text-base font-black uppercase tracking-wider text-gray-950 dark:text-white">
                Key Strategic Deliverables
              </h2>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {program.keyObjectives.map((objective, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-zinc-950/40 border border-gray-100 dark:border-zinc-850"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-zinc-300">
                      {objective}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Dynamic Cross-Linked History List (Hosted Campaigns Stack) */}
            <section className="space-y-4">
              <div className="border-b border-gray-200 dark:border-zinc-900 pb-2">
                <h2 className="text-base font-black uppercase tracking-wider text-gray-950 dark:text-white">
                  Campaigns Run Under This Program
                </h2>
              </div>

              {associatedEvents.length === 0 ? (
                <div className="text-center p-8 border border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl text-gray-400">
                  <p className="text-sm font-medium">
                    No external campaigns logged under this sector layout yet.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {associatedEvents.map((event) => (
                    <div
                      key={event.id}
                      className="group bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-900 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
                    >
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-2 text-xs font-bold text-red-600 dark:text-red-400 mb-2">
                          <span className="uppercase tracking-widest bg-red-50 dark:bg-red-950/40 px-2.5 py-1 rounded-md text-[10px]">
                            {event.day} {event.month} {event.year}
                          </span>
                          <span className="inline-flex items-center gap-1 text-gray-400 dark:text-zinc-500 font-semibold">
                            <MapPin className="h-3 w-3" />{" "}
                            {event.location.split(",")[0]}
                          </span>
                        </div>
                        <h3 className="font-black text-base text-gray-950 dark:text-white line-clamp-1 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-2 mt-2 leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                      <div className="px-5 pb-5">
                        <Link
                          href={`/events/${event.id}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gray-50 dark:bg-zinc-950/60 hover:bg-red-600 dark:hover:bg-red-600 text-gray-700 dark:text-zinc-300 hover:text-white dark:hover:text-white text-xs font-bold uppercase tracking-wider border border-gray-100 dark:border-zinc-850/80 transition-all cursor-pointer"
                        >
                          Read Event Report{" "}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Right Side Column: Sticky Action & Call-To-Action Box */}
          <div className="space-y-6 lg:h-fit lg:sticky lg:top-28">
            <div className="bg-linear-to-br from-gray-900 to-black dark:from-zinc-900 dark:to-zinc-950 text-white p-6 md:p-8 rounded-2xl shadow-xl text-center relative overflow-hidden border border-zinc-800">
              <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 transform translate-x-4 -translate-y-4">
                <HeartHandshake className="h-32 w-32" />
              </div>

              <h3 className="text-lg font-black uppercase tracking-wider mb-2">
                Support This Mission
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Your donations directly fund food purchasing, diagnostic kits,
                legal advocacy representation, and community starter setups.
              </p>

              <div className="space-y-3">
                <Link
                  href="/donations"
                  className="block w-full text-center rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-3.5 shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  Donate Direct Capital
                </Link>
                <Link
                  href="/#volunteer"
                  className="block w-full text-center rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-widest py-3.5 border border-zinc-700/60 transition-all cursor-pointer"
                >
                  Volunteer / Partner
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
