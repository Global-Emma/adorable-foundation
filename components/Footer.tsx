import { navLinks } from "@/utils/lib";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#171717] text-gray-400 text-xs py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-10 gap-8">
          {/* Col 1: Identity */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-full border-2 border-red-600 flex items-center justify-center font-bold text-[10px] text-red-500">
                AFI
              </div>
              <span className="font-bold tracking-tight uppercase text-xs">
                Adorable Foundation International
              </span>
            </div>
            <h6 className="text-gray-500 pr-4 leading-relaxed">
              We build robust systems of compassion to support lives struggling
              with chemical dependencies, feed children in primary schools, and
              empower poor widows towards self-sustenance.
              <br />
              <br />
              <p>
                <span className="font-bold">Dual Branch Structure:</span> Head
                Office in Abuja, South East Regional HQ in Enugu.
              </p>
            </h6>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-500">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          {/* <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Programs
            </h4>
            <ul className="space-y-2 text-gray-500">
              {[
                "Drug Rehabilitation Services",
                "ASACADA High School Walks",
                "Volunteer & Partnerships",
                "School Textbook Grants",
                "Widows Micro-Loans",
                "Community Health Outreach",
              ].map((p) => (
                <li key={p}>
                  <Link
                    href="/about-us"
                    className="hover:text-white transition-colors"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Col 4: Support */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Support
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link
                  href="/donations"
                  className="hover:text-white transition-colors"
                >
                  Donate Now
                </Link>
              </li>
              <li>
                <Link href="/#volunteer" className="hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="hover:text-white transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Line */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <p className="text-gray-400">Email Address:</p>
                <Link
                  className="hover:text-white transition-colors"
                  href={"mailto:info2@adorablefoundation.com"}
                >
                  info2adorablefoundation@gmail.com
                </Link>
              </li>
              <li>
                <p className="text-gray-400">Phone/Whatsapp:</p>
                <Link
                  className="hover:text-white transition-colors"
                  href={"https://wa.me/2347013777177"}
                >
                  +234 701 377 7177
                </Link>
              </li>
              <li>
                <p className="text-gray-400">Headquarters:</p>7 Adedotun Dina
                Crescent, Mende, Maryland
              </li>
              <li>
                <p className="text-gray-400">Lagos Instagram: </p>
                <Link
                  className="hover:text-white transition-colors"
                  href={"https://instagram.com/adorablefoundationhq"}
                >
                  adorablefoundationhq{" "}
                </Link>
              </li>
              <li>
                <p className="text-gray-400">Facebook:</p>
                <Link
                  className="hover:text-white transition-colors"
                  href={"https://facebook.com/adorablefoundationinternational"}
                >
                  adorable foundation international
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-gray-800/60 text-center text-[11px] text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            &copy; {new Date().getFullYear()} Adorable Foundation International.
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
