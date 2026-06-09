import Image from "next/image";
import Link from "next/link";
import {MapPin, Clock, ArrowRight} from "lucide-react"
import { Easing, motion, Transition, Variants } from "framer-motion";
import { EventCardProps } from "@/utils/lib";

const easeQuintic: Easing = [0.22, 1, 0.36, 1];

const cardHoverSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};
const scrollRevealUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeQuintic },
  },
};

function EventCard({ event, isPast }: EventCardProps) {
  return (
    <motion.div
      variants={scrollRevealUp}
      whileHover={{ y: -6, scale: 1.005 }}
      transition={cardHoverSpring}
      className={`bg-white dark:bg-zinc-900/40 rounded-2xl border border-gray-100 dark:border-zinc-800/80 p-5 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md relative overflow-hidden group 
        ${isPast ? "grayscale-30 hover:grayscale-0 opacity-90 hover:opacity-100" : ""}`}
    >
      <div className="space-y-4">
        {/* Date Matrix Frame Block */}
        <div className="flex items-center justify-between gap-4 border-b border-gray-50 dark:border-zinc-900/60 pb-3">
          <div className="inline-flex gap-2 items-center">
            <div className="flex flex-col items-center justify-center border border-red-100 dark:border-red-950/40 rounded-lg bg-red-50/60 dark:bg-red-950/20 h-11 w-12 text-center select-none">
              <span className="block font-heading font-black text-sm text-red-600 dark:text-red-500 leading-none">
                {event.day}
              </span>
              <span className="block font-sans font-bold text-[8px] text-red-700/80 dark:text-red-400 tracking-wider mt-0.5">
                {event.month}
              </span>
            </div>
            {event.year && (
              <span className="text-xs font-bold text-gray-400 dark:text-zinc-500 tracking-wider">
                {event.year}
              </span>
            )}
          </div>

          <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border
            ${isPast 
              ? "bg-gray-50 text-gray-500 border-gray-100 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800" 
              : "bg-red-50 text-red-600 border-red-100 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900/30 animate-pulse"
            }`}
          >
            {isPast ? "Archive Report" : "Active / Upcoming"}
          </span>
        </div>

        {/* Scaled Media Framework Parent Box */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800/40">
          <Image
            src={event.mainImage}
            alt={event.title}
            fill
            sizes="(max-w-7xl) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-103"
          />
        </div>

        {/* Narrative & Vector Information Layer */}
        <div className="space-y-2">
          <span className="inline-block text-[9px] font-black uppercase tracking-widest text-red-600 dark:text-red-500">
            {event.category || "Field Campaign"}
          </span>
          <h3 className="font-heading font-black text-base text-gray-900 dark:text-zinc-100 tracking-tight leading-snug line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
            {event.title}
          </h3>

          <div className="space-y-1.5 text-xs text-gray-500 dark:text-zinc-400 font-medium pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-red-500 shrink-0" />
              <span className="font-semibold text-gray-700 dark:text-zinc-300">{event.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="text-[11px] text-gray-400 dark:text-zinc-500">{event.time}</span>
            </div>
            <p className="text-gray-600 dark:text-zinc-400 font-normal leading-relaxed pt-2 line-clamp-3">
              {event.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <Link
          href={`/events/${event.id}`}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all border
            ${isPast
              ? "bg-gray-50 hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-gray-700 dark:text-zinc-300 border-gray-100 dark:border-zinc-800"
              : "bg-gray-100 dark:bg-zinc-800 hover:bg-red-600 dark:hover:bg-red-600 text-gray-900 dark:text-white hover:text-white dark:hover:text-white border-transparent"
            }`}
        >
          {isPast ? "View Campaign Report" : "View Event Details"} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default EventCard;