import Link from "next/link";
import { Easing, motion } from "framer-motion";


const Herobanner = ({items}: {items: {image: string; title: string}}) => {

  const easeQuint: Easing = [0.22, 1, 0.36, 1];

  return (
    <>
      <section className="relative w-full mt-20 bg-gray-900 h-60 md:h-80 flex items-center overflow-hidden">
        {/* Visual Background Pattern matching about_page.jpg overlay style */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: `url(${items.image})` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl w-full px-6 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeQuint }}
            className="font-heading font-black text-white text-4xl md:text-5xl tracking-tight"
          >
            {items.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 flex items-center gap-2 text-sm text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">{items.title}</span>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Herobanner;
