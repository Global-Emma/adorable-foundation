export type Category =
  | "All"
  | "Outreach Programs"
  | "School Campaigns"
  | "Rehabilitation"
  | "Events"
  | "Community Support";

export interface GalleryItem {
  id: string;
  category: Category;
  title: string;
  image: string;
}

export const categories: Category[] = [
  "All",
  "Outreach Programs",
  "School Campaigns",
  "Rehabilitation",
  "Events",
  "Community Support",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    category: "Outreach Programs",
    title: "AFI Community Sensitization outreach",
    image: "/images/gallery/ascada_group_img.png"
  },
  {
    id: "gal-2",
    category: "Rehabilitation",
    title: "Medical Rehabilitation Session Support",
    image: "/images/gallery/ascada_group_img.png"
  },
  {
    id: "gal-3",
    category: "School Campaigns",
    title: "Drug Abuse Prevention Campaign in High Schools",
    image: "/images/gallery/ascada_group_img.png"
  },
  {
    id: "gal-4",
    category: "Events",
    title: "Youth Empowerment Workshop Checkpoint",
    image: "/images/gallery/ascada_group_img.png"

  },
  {
    id: "gal-5",
    category: "Community Support",
    title: "Food and Essential Relief Distribution",
    image: "/images/gallery/ascada_group_img.png"

  },
  {
    id: "gal-6",
    category: "School Campaigns",
    title: "Awareness Campaign Classroom Session",
    image: "/images/gallery/ascada_group_img.png"

  },
  {
    id: "gal-7",
    category: "Outreach Programs",
    title: "Youth Support Action Rally Network",
    image: "/images/gallery/ascada_group_img.png"

  },
  {
    id: "gal-8",
    category: "Rehabilitation",
    title: "Recovery Support Group Counseling Session",
    image: "/images/gallery/ascada_group_img.png"

  },
  {
    id: "gal-9",
    category: "Events",
    title: "Annual AFI Impact Seminar Panel Session", image: "/images/gallery/ascada_group_img.png"
  },
  {
    id: "gal-10",
    category: "Community Support",
    title: "Sustenance Materials Distribution Hub",
    image: "/images/gallery/ascada_group_img.png"

  },
];

export const coreValues = [
  // {
  //   val: "Compassion",
  //   desc: "We care deeply about people",
  //   icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  // },
  {
    val: "Integrity",
    desc: "We run our programs with maximum structural honesty, publishing exact operational summaries and audit reports for all donor activities.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0112 2.714z",
  },
  {
    val: "Solidarity",
    desc: "We forge strong alliances with public regulatory institutions, community chiefs, and clinical experts to deliver lasting structural solutions.",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.157-5.114-3.447-6.272-6.272l1.293-.97c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z",
  },
  {
    val: "Direct Action",
    desc: "We avoid distant theories. Our team operates directly inside the neighborhoods, high schools, and rural villages where intervention is needed.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    val: "Empathy",
    desc: "We protect the absolute dignity of every child, widow, and drug abuse victim under our care, shielding them from stigma or display.",
    icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h.01a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664m-1.31 0A5.959 5.959 0 0112 3c1.169 0 2.252.335 3.16.914m-6.32 0A5.953 5.953 0 003 9c0 2.62 1.679 4.848 4.02 5.66M15 15.75a3 3 0 11-6 0 3 3 0 016 0z",
  },
]

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "The Founder", href: "/founder" },
  { label: "Donations", href: "/donations" },
  { label: "Partners", href: "/partners" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
];

export const works = [
  { val: 7, label: "Years of Good Works" },
  { val: 10000, label: "Restored Lives" },
  { val: 480, label: "Satisfied Donors" },
  { val: 2068, label: "Happy Volunteers" },
];

export const programs = [
  {
    title: "ASACADA (Drug Rehab & Abuse Awareness)",
    desc: "A Social Awareness Campaign Against Drug Abuse. We partner directly with institutions like the NDLEA to conduct rehabilitation programs and raise awareness to guide youth away from chemical addictions",
    image: "/images/gallery/ascada_group_img.png",
  },
  {
    title: "Child Nutrition & Food Security",
    desc: "We provide healthy hot meals and supply vital academic textbooks and learning kits to children in local public primary schools.",
    image: "/images/gallery/ascada_group_img.png",
  },
  {
    title: "Free Medical Services",
    desc: "Our volunteer medical professionals set up mobile outreach units inside rural communities to distribute life-saving medicine, screen health risks, and treat minor ailments.",
    image: "/images/gallery/ascada_group_img.png",
  },
  {
    title: "Widow & Female Empowerment",
    desc: "We supply food materials, grant vocational starter kits (sewing machines, hairdressing setups, food trading scales), and offer quick interest-free small scale loans to vulnerable widows to reclaim self-reliance.",
    image: "/images/gallery/ascada_women.png",
  },
];

export const events = [
  {
    day: "12",
    month: "NOV",
    title: "Solidarity Campaign Partnering With Enugu NDLEA",
    loc: "NDLEA HQ, Enugu, Nigeria",
    image: "/images/gallery/ascada_group_img.png",
    desc: "Establishing solidarity to push WADA (War Against Drug Abuse) campaigns into rural communities and secondary schools.",
  },
  {
    day: "26",
    month: "JUN",
    title: "Annual Outreach Outing & Orphanage Aid",
    loc: "Abuja FCT, Nigeria",
    image: "/images/gallery/ascada_group_img.png",
    desc: "Providing food rations, clothing bags, and textbooks to vulnerable street kids and local child support organizations.",
  },
  {
    day: "23",
    month: "JUN",
    title: "Community Health Outreach & Counseling",
    loc: "Enugu SouthEast, Nigeria",
    image: "/images/gallery/ascada_group_img.png",
    desc: "Providing drug rehabilitation screening sessions, counseling, and immediate community first-aid distribution.",
  },
];

interface CauseCard {
  id: string;
  title: string;
  description: string;
  raised: string;
  goal: string;
  progressPercent: number; // For clean modern progress rendering
  imagePlaceholder: string;
}

export const causesData: CauseCard[] = [
  {
    id: "cause-1",
    title: "ASACADA (Anti-Drug Rehabilitation)",
    description: "Supports school counseling workshops, anti-drug walks, and finances clinical therapy for teenagers recovering from substance addiction.",
    raised: "₦185,000+",
    goal: "Continuous Goal",
    progressPercent: 100,
    imagePlaceholder: "/images/gallery/gallery9.png"
  },
  {
    id: "cause-2",
    title: "Child Nutrition & Textbooks",
    description: "Provides hot healthy school meals to street kids and primary school children, alongside educational textbooks and writing kits.",
    raised: "₦900,000",
    goal: "₦2,000,000",
    progressPercent: 45,
    imagePlaceholder: "/images/gallery/gallery10.png"
  },
  {
    id: "cause-3",
    title: "Widows Vocational capital & Kits",
    description: "Procures vocational setups (sewing machines, hairdressing dryers) and grants interest-free small-scale trading capital for poor widows.",
    raised: "₦3,000,000",
    goal: "₦5,000,000",
    progressPercent: 60,
    imagePlaceholder: "/images/gallery/gallery11.png"
  }
];

interface RegionalChapter {
  id: string;
  name: string;
  role: string;
  description: string;
  imagePlaceholder: string;
}

export const chaptersData: RegionalChapter[] = [
  {
    id: "chapter-enugu",
    name: "Enugu State Chapter",
    role: "REGIONAL HEADQUARTERS",
    description: "Coordinates anti-drug campaigns in partnership with local schools and the state NDLEA command.",
    imagePlaceholder: "/images/gallery/gallery6.png"
  },
  {
    id: "chapter-anambra",
    name: "Anambra State Chapter",
    role: "ADVOCACY COMMITTEE",
    description: "Organizes village outreaches, textbook distributions, and coordinates small-scale microfinance initiatives.",
    imagePlaceholder: "/images/gallery/gallery7.png"
  },
  {
    id: "chapter-ebonyi",
    name: "Ebonyi State Chapter",
    role: "HEALTH OUTREACH COMMITTEE",
    description: "Coordinates with clinical volunteers to set up free mobile medical screening booths in rural areas.",
    imagePlaceholder: "/images/gallery/gallery8.png"
  }
];

export const partnerBenefit = [
  {
    title: "Transparent Auditing:",
    desc: "Get quarterly financial reports detailing the exact deployment of your grants."
  },
  {
    title: "CSR Recognition:",
    desc: "Official logo placement across AFI public walks, press statements, and digital galleries."
  },
  {
    title: "State Impact Tours:",
    desc: "Opportunity to delegate company members to participate in state outreaches and see impact first-hand."
  },

]

interface UpcomingEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
  desc: string;
  image: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "evt-1",
    day: "12",
    month: "NOV",
    title: "Enugu NDLEA Solidarity WADA Campaign",
    location: "Enugu, Nigeria",
    time: "8.00AM - 10:00 AM",
    desc: "Under our ASACADA initiative, our South East branch visited the Enugu NDLEA Command to build active solidarity. We coordinated efforts to launch the War Against Drug Abuse (WADA) campaign directly inside high schools, combating chemical dependencies and local cultism among teenagers.",
    image: "/images/gallery/gallery9.png"
  },
  {
    id: "evt-2",
    day: "26",
    month: "JUN",
    title: "Annual AFI Outing & Orphanage Aid",
    location: "Abuja FCT, Nigeria",
    time: "9:00 AM — 4:00 PM",
    desc: "Our global team gathered in Abuja for our annual humanitarian outing. We packaged and distributed hundreds of clothing bags, child nutrition boxes, and academic textbooks to orphanage groups and vulnerable street children in rural FCT neighborhoods.",
    image: "/images/gallery/gallery2.png"
  },
  {
    id: "evt-3",
    day: "23",
    month: "JUN",
    title: "Annual South East Chapter Rally & Outreach",
    location: "Enugu, Nigera",
    time: "8:00 AM — 3:00 PM",
    desc: "A major regional campaign held in Enugu, bringing together state representatives from Anambra and Ebonyi. The outing focused on distributing food rations, conducting anti-drug counseling walks in markets, and distributing school supplies to vulnerable primary school kids.",
    image: "/images/gallery/gallery3.png"
  },
  {
    id: "evt-4",
    day: "15",
    month: "MAR",
    title: "Community Health & First Aid Outreach",
    location: "Anambra, Nigeria",
    time: "10:00 AM — 5:00 PM",
    desc: "A specialized health campaign deploying mobile medical booths in rural Anambra markets. AFI volunteer nurses and clinical counselors delivered free physical diagnostic screening, blood pressure monitoring, first aid supplies, and child vaccination guidance.",
    image: "/images/gallery/gallery12.png"
  },
];

export const corperatePartners = [
  "MTN Foundation",
  "Zenith Bank",
  "Access Bank",
  "Feco",
  "FirstBank",
  "UBA",
]