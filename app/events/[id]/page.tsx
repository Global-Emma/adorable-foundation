"use client";

import { useState, FormEvent, use } from "react"; // Added "use" hook for modern Next.js params
import { upcomingEvents } from "@/utils/lib"; // Import your upgraded schema array
import {
  Calendar,
  MapPin,
  Clock,
  Video,
  Image as ImageIcon,
  Send,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function SingleEventPage({ params }: PageProps) {
  // 1. Safely unwrap the async route parameters
  const { id } = use(params);

  // 2. Locate the corresponding data object inside your custom schema array
  const event = upcomingEvents.find((evt) => evt.id === id);

  // Form handling states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    event: event?.title
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "failed"
  >("idle");

  // 3. Render an elegant 404 fallback shell if an invalid ID is requested
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-2xl font-black text-gray-950 dark:text-white">
          Event Not Found
        </h1>
        <p className="text-sm text-gray-500 mt-2 mb-6">
          The requested campaign archive does not exist or has been shifted.
        </p>
        <a
          href="/events"
          className="rounded-md bg-red-600 px-5 py-2.5 font-bold text-xs uppercase tracking-wider text-white shadow-xs"
        >
          Return to Events List
        </a>
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setFormStatus("success");

        setFormData({ name: "", email: "", message: "", event: event?.title });
      } else {
        setFormStatus("failed");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("failed");
    } finally {
      setFormStatus("success");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50/50 mt-[-50px] dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 pt-24 pb-16 transition-colors duration-300">
        {/* 1. Header Hero Panel */}
        <section className="relative w-full border-b border-gray-100 dark:border-zinc-900/60 bg-white dark:bg-zinc-900/40 backdrop-blur-md px-6 py-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <a
              href="/events"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />{" "}
              Back to events
            </a>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Elegant Calendar Badge Layout Component */}
              <div className="flex flex-col items-center justify-center h-20 w-20 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 rounded-xl px-4 text-center shrink-0">
                <span className="block text-2xl font-black text-red-600 dark:text-red-500 leading-none">
                  {event.day}
                </span>
                <span className="block text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400 mt-1">
                  {event.month}
                </span>
              </div>

              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-red-600 text-white rounded-full mb-3 shadow-xs">
                  {event.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-black tracking-tight text-gray-950 dark:text-white leading-tight">
                  {event.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Primary Layout Split Engine */}
        <section className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Left Side Column: Media Content Stream */}
          <div className="lg:col-span-2 space-y-12">
            {/* Detailed Narrative Section */}
            <article className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-900 p-6 md:p-8 rounded-2xl shadow-xs">
              <h2 className="text-lg font-black uppercase tracking-wider border-b border-gray-100 dark:border-zinc-800 pb-3 text-gray-950 dark:text-white">
                About the Event
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 text-base leading-relaxed mt-4 whitespace-pre-line">
                {event.desc}
              </p>
            </article>

            {/* Videos Integration Grid */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-gray-950 dark:text-white">
                <Video className="h-5 w-5 text-red-600 dark:text-red-500" />
                <h2 className="text-xl font-black tracking-tight uppercase text-xs tracking-wider">
                  Video Coverage
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {event.videos.map((vid, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-900 rounded-xl overflow-hidden shadow-xs group"
                  >
                    <div className="relative aspect-video w-full bg-zinc-950">
                      <iframe
                        src={vid.embedUrl}
                        title={vid.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm text-gray-900 dark:text-zinc-200 line-clamp-2 leading-snug group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                        {vid.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upgraded Multi-Image Gallery Sub-System */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-gray-950 dark:text-white">
                <ImageIcon className="h-5 w-5 text-red-600 dark:text-red-500" />
                <h2 className="text-xl font-black tracking-tight uppercase text-xs tracking-wider">
                  Photo Gallery
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {event.gallery.map((imgUrl, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-xl border border-gray-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 cursor-zoom-in group
                    ${index === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-video" : "aspect-square"}`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Event capture ${index + 1}`}
                      fill
                      sizes="(max-w-7xl) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Side Column: Logistics Summary & Sticky Write Us Action Widget */}
          <div className="space-y-6 lg:h-fit lg:sticky lg:top-28">
            {/* Logistics Summary Information Card */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-900 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-gray-950 dark:text-white border-b border-gray-100 dark:border-zinc-800 pb-2">
                Event Details
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider leading-none">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-zinc-300">
                      {event.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider leading-none">
                      Time schedule
                    </span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-zinc-300">
                      {event.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider leading-none">
                      Full Date
                    </span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-zinc-300">
                      {event.day} {event.month}, {event.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* "Write Us" Engagement Form */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-900 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-gray-950 dark:text-white">
                Inquire About This Event
              </h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 mb-4">
                Have questions or want to partner on similar campaigns? Send a
                message directly to our local organizers.
              </p>

              {formStatus === "success" ? (
                <div className="flex flex-col items-center text-center p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 rounded-xl transition-all animate-in fade-in zoom-in-95">
                  <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-500 mb-2" />
                  <h4 className="font-bold text-sm text-emerald-950 dark:text-emerald-400">
                    Message Delivered Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-500/80 mt-1">
                    Our execution framework team will follow up shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 dark:focus:border-red-500 transition-all text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 dark:focus:border-red-500 transition-all text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 dark:focus:border-red-500 transition-all text-gray-900 dark:text-white resize-none"
                      placeholder="Inquire about sponsorship, school invitations, etc..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-3 shadow-xs hover:bg-red-700 active:scale-98 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {formStatus === "submitting" ? (
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Inquiry <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
