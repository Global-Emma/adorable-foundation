export type Category =
  | "All"
  | "School Outreach"
  | "Medical Outreach"
  | "ASACADA Campaign"
  | "Birthday Special"
  | "Widows Outreach";

export interface GalleryItem {
  id: string;
  category: Category;
  title: string;
  image: string;
}

export type EventCardData = {
  id: string | number;
  day: string;
  month: string;
  year?: string;
  mainImage: string;
  title: string;
  category?: string;
  location: string;
  time: string;
  desc: string;
};

export type EventCardProps = {
  event: EventCardData;
  isPast?: boolean;
};

export const categories: Category[] = [
  "All",
  "School Outreach",
  "Medical Outreach",
  "ASACADA Campaign",
  "Birthday Special",
  "Widows Outreach",
];

export const galleryItems: GalleryItem[] = [
  // army(sch outreach)
  {
    id: "gal-1",
    category: "School Outreach",
    title: "Army school outreach",
    image: "/images/adorable/sch_army/sch1.jpeg"
  },
  {
    id: "gal-2",
    category: "School Outreach",
    title: "Army school outreach",
    image: "/images/adorable/sch_army/sch2.jpeg"
  },
  {
    id: "gal-3",
    category: "School Outreach",
    title: "Army school outreach",
    image: "/images/adorable/sch_army/sch3.jpeg"
  },
  {
    id: "gal-4",
    category: "School Outreach",
    title: "Army school outreach",
    image: "/images/adorable/sch_army/sch4.jpeg"
  },
  {
    id: "gal-5",
    category: "School Outreach",
    title: "Army school outreach",
    image: "/images/adorable/sch_army/sch5.jpeg"
  },
  {
    id: "gal-6",
    category: "School Outreach",
    title: "Army school outreach",
    image: "/images/adorable/sch_army/sch6.jpeg"
  },

  // nyanya (sch outreach) 
  {
    id: "gal-7",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya1.jpeg"
  },
  {
    id: "gal-8",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya2.jpeg"
  },
  {
    id: "gal-9",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya3.jpeg"
  },
  {
    id: "gal-10",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya4.jpeg"
  },
  {
    id: "gal-11",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya5.jpeg"
  },
  {
    id: "gal-12",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya6.jpeg"
  },
  {
    id: "gal-13",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya7.jpeg"
  },
  {
    id: "gal-14",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya8.jpeg"
  },
  {
    id: "gal-15",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya9.jpeg"
  },
  {
    id: "gal-16",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya10.jpeg"
  },
  {
    id: "gal-17",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya11.jpeg"
  },
  {
    id: "gal-18",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya12.jpeg"
  },
  {
    id: "gal-19",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya13.jpeg"
  },
  {
    id: "gal-20",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya14.jpeg"
  },
  {
    id: "gal-21",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya15.jpeg"
  },
  {
    id: "gal-22",
    category: "School Outreach",
    title: "Nyanya school outreach",
    image: "/images/adorable/sch_nyanya/nyanya16.jpeg"
  },

  // medical outreach
  {
    id: "gal-23",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja",
    image: "/images/adorable/med_outreach/med1.jpeg"
  },
  {
    id: "gal-24",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja",
    image: "/images/adorable/med_outreach/med2.jpeg"
  },
  {
    id: "gal-25",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja",
    image: "/images/adorable/med_outreach/med3.jpeg"
  },
  {
    id: "gal-26",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja",
    image: "/images/adorable/med_outreach/med4.jpeg"
  },
  {
    id: "gal-27",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja",
    image: "/images/adorable/med_outreach/med5.jpeg"
  },
  {
    id: "gal-28",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja",
    image: "/images/adorable/med_outreach/med6.jpeg"
  },
  {
    id: "gal-29",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja",
    image: "/images/adorable/med_outreach/med7.jpeg"
  },
  {
    id: "gal-30",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja",
    image: "/images/adorable/med_outreach/med8.jpeg"
  },

  // DRUG GHANA
  {
    id: "gal-31",
    category: "ASACADA Campaign",
    title: "Ghana Drug Awareness Campaign",
    image: "/images/adorable/ghana_camp/ghana1.jpeg"
  },
  {
    id: "gal-32",
    category: "ASACADA Campaign",
    title: "Ghana Drug Awareness Campaign",
    image: "/images/adorable/ghana_camp/ghana2.jpeg"
  },
  {
    id: "gal-33",
    category: "ASACADA Campaign",
    title: "Ghana Drug Awareness Campaign",
    image: "/images/adorable/ghana_camp/ghana3.jpeg"
  },
  {
    id: "gal-34",
    category: "ASACADA Campaign",
    title: "Ghana Drug Awareness Campaign",
    image: "/images/adorable/ghana_camp/ghana4.jpeg"
  },
  {
    id: "gal-35",
    category: "ASACADA Campaign",
    title: "Ghana Drug Awareness Campaign",
    image: "/images/adorable/ghana_camp/ghana5.jpeg"
  },
  {
    id: "gal-36",
    category: "ASACADA Campaign",
    title: "Ghana Drug Awareness Campaign",
    image: "/images/adorable/ghana_camp/ghana6.jpeg"
  },
  {
    id: "gal-37",
    category: "ASACADA Campaign",
    title: "Ghana Drug Awareness Campaign",
    image: "/images/adorable/ghana_camp/ghana7.jpeg"
  },
  {
    id: "gal-38",
    category: "ASACADA Campaign",
    title: "Ghana Drug Awareness Campaign",
    image: "/images/adorable/ghana_camp/ghana8.jpeg"
  },
  
  // DRUG CAMP
  {
    id: "gal-39",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug1.jpeg"
  },
  {
    id: "gal-40",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug2.jpeg"
  },
  {
    id: "gal-41",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug3.jpeg"
  },
  {
    id: "gal-42",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug4.jpeg"
  },
  {
    id: "gal-43",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug5.jpeg"
  },
  {
    id: "gal-44",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug6.jpeg"
  },
  {
    id: "gal-45",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug7.jpeg"
  },
  {
    id: "gal-46",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug8.jpeg"
  },
  {
    id: "gal-47",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug9.jpeg"
  },
  {
    id: "gal-48",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug10.jpeg"
  },
  {
    id: "gal-49",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    image: "/images/adorable/drug_camp/drug11.jpeg"
  },

  // Hospital Visit
  {
    id: "gal-50",
    category: "Birthday Special",
    title: "Hospital Visit",
    image: "/images/adorable/hospital_visit/hospital1.jpeg"
  },
  {
    id: "gal-51",
    category: "Birthday Special",
    title: "Hospital Visit",
    image: "/images/adorable/hospital_visit/hospital2.jpeg"
  },
  {
    id: "gal-52",
    category: "Birthday Special",
    title: "Hospital Visit",
    image: "/images/adorable/hospital_visit/hospital3.jpeg"
  },
  {
    id: "gal-53",
    category: "Birthday Special",
    title: "Hospital Visit",
    image: "/images/adorable/hospital_visit/hospital4.jpeg"
  },

  // Widows Outreach
  {
    id: "gal-54",
    category: "Widows Outreach",
    title: "End of the year widow and less privileged outreach.",
    image: "/images/adorable/widow_outreach/widow1.jpeg"
  },
  {
    id: "gal-55",
    category: "Widows Outreach",
    title: "End of the year widow and less privileged outreach.",
    image: "/images/adorable/widow_outreach/widow2.jpeg"
  },
  {
    id: "gal-56",
    category: "Widows Outreach",
    title: "End of the year widow and less privileged outreach.",
    image: "/images/adorable/widow_outreach/widow3.jpeg"
  },
  {
    id: "gal-57",
    category: "Widows Outreach",
    title: "End of the year widow and less privileged outreach.",
    image: "/images/adorable/widow_outreach/widow4.jpeg"
  },

  // EXTRAS

  // FACE OF ASACADA
  {
    id: "gal-58",
    category: "ASACADA Campaign",
    title: "Face of ASACADA",
    image: "/images/adorable/face_of_asacada/face1.jpeg"
  },
  {
    id: "gal-59",
    category: "ASACADA Campaign",
    title: "Face of ASACADA",
    image: "/images/adorable/face_of_asacada/face2.jpeg"
  },
  {
    id: "gal-60",
    category: "ASACADA Campaign",
    title: "Face of ASACADA",
    image: "/images/adorable/face_of_asacada/face3.jpeg"
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


export interface ProgramSchema {
  id: string; // URL-safe identifier (e.g., "asacada")
  title: string;
  tagline: string;
  desc: string;
  longDesc: string;
  mainImage: string;
  eventCategory: string; // Connects program to event.category
  keyObjectives: string[];
}

export const programs: ProgramSchema[] = [
  {
    id: "asacada",
    title: "ASACADA (Drug Rehab & Abuse Awareness) Campaign",
    tagline: "A Social Awareness Campaign Against Drug Abuse",
    desc: "We partner directly with institutions like the NDLEA to conduct rehabilitation programs and raise awareness to guide youth away from chemical addictions.",
    longDesc: "ASACADA is our flagship institutional intervention initiative. By collaborating closely with the National Drug Law Enforcement Agency (NDLEA), educational boards, and healthcare practitioners, we deploy comprehensive sensitization exercises directly into communities. Our framework targets early-stage teenage exposure, local cultism groups, and high-risk dependencies, providing structured paths to recovery and mental health rehabilitation.",
    mainImage: "/images/adorable/drug_camp/drug2.jpeg",
    eventCategory: "ASACADA Campaign",
    keyObjectives: [
      "Launch anti-drug counseling modules within secondary schools",
      "Offer community rehabilitation sponsorship pathways",
      "Build operational synergy with local law enforcement entities",
    ]
  },
  {
    id: "child-nutrition",
    title: "Child Nutrition & Food Security",
    tagline: "Fueling Healthy Minds and Academic Progress",
    desc: "We provide healthy hot meals and supply vital academic textbooks and learning kits to children in local public primary schools.",
    longDesc: "Economic barriers should never stifle a child's right to learn. Our Child Nutrition & Food Security program addresses chronic classroom hunger by matching baseline dietary supplements with core academic tools. Through periodic food aid disbursements and institutional textbook installations, we remove obstacles keeping vulnerable children out of the classroom.",
    mainImage: "/images/adorable/sch_army/sch2.jpeg",
    eventCategory: "School Outreach",
    keyObjectives: [
      "Distribute fortified meal kits to rural primary institutions",
      "Provide complete core curriculum textbooks to underprivileged children",
      "Track baseline physical development metrics within target communities",
    ]
  },
  {
    id: "free-medical",
    title: "Free Medical Services",
    tagline: "Bringing Life-Saving Diagnostics to Under-Served Communities",
    desc: "Our volunteer medical professionals set up mobile outreach units inside rural communities to distribute life-saving medicine, screen health risks, and treat minor ailments.",
    longDesc: "Access to quality clinical guidance is critically limited in remote suburbs. Our medical wing brings emergency diagnostic testing, preventive health checkups, and standard pharmaceutical allocations right to the doorsteps of rural families. Run entirely by volunteer clinical practitioners, we offer specialized testing loops completely free of charge.",
    mainImage: "/images/adorable/med_outreach/med2.jpeg",
    eventCategory: "Medical Outreach",
    keyObjectives: [
      "Perform free cardiovascular and diabetic screening tests",
      "Distribute baseline pharmaceutical and first aid stock directly to families",
      "Conduct prenatal health guidance forums for young mothers",
    ]
  },
  {
    id: "female-empowerment",
    title: "Widows day (Hand of Hope)",
    tagline: "Restoring Dignity Through Financial and Vocational Independence",
    desc: "We supply food materials, grant vocational starter kits (sewing machines, hairdressing setups, food trading scales), and offer quick interest-free small scale loans to vulnerable widows to reclaim self-reliance.",
    longDesc: "Widows and marginalized women face steep systemic obstacles toward economic survival. This initiative transforms dependency into self-sustaining small-scale businesses. By supplying industrial equipment assets alongside interest-free micro-seed funding capital, we empower mothers to establish stable income loops to independently feed and educate their households.",
    mainImage: "/images/adorable/widow_outreach/widow2.jpeg",
    eventCategory: "Widows Outreach",
    keyObjectives: [
      "Allocate vocational machines (tailoring, processing, cosmetics setups)",
      "Issue interest-free microfinance business capital grants",
      "Deliver local basic financial management and bookkeeping training",
    ]
  },
  {
    id: "birthday-special",
    title: "Birthday Special",
    tagline: "Made in commemoration of the founder’s birthday",
    desc: "We visit either a hospital, disabled home or motherless home in commemoration of the founder’s birthday",
    longDesc: "",
    mainImage: "/images/adorable/hospital_visit/hospital2.jpeg",
    eventCategory: "Birthday Special",
    keyObjectives: [
      "Allocate vocational machines (tailoring, processing, cosmetics setups)",
      "Issue interest-free microfinance business capital grants",
      "Deliver local basic financial management and bookkeeping training",
    ]
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

export interface EventSchema {
  id: string;
  day: string;
  month: string;
  year: string;
  category: string;
  title: string;
  location: string;
  time: string;
  desc: string;
  mainImage: string;
  gallery: string[];
  videos: {
    title: string;
    embedUrl: string;
    thumbnail: string;
  }[];
}

export const upcomingEvents: EventSchema[] = [
  {
    id: "evt-1",
    day: "12",
    month: "NOV",
    year: "2025",
    category: "School Outreach",
    title: "School Outreach at Army Day Secondary School Abuja with the Founder and Barrister",
    location: "Abuja, Nigeria",
    time: "8:00 AM - 10:00 AM",
    desc: "",
    mainImage: "/images/adorable/sch_army/sch1.jpeg",
    gallery: [
      "/images/adorable/sch_army/sch2.jpeg",
      "/images/adorable/sch_army/sch3.jpeg",
      "/images/adorable/sch_army/sch4.jpeg",
      "/images/adorable/sch_army/sch5.jpeg",
      "/images/adorable/sch_army/sch6.jpeg",
    ],
    videos: [
      {
        title: "Campaign Kickoff & High School Outreach Highlights",
        embedUrl: "/videos/anthem_video.mp4",
        thumbnail: "/images/gallery/gallery1.png"
      }
    ]
  },
  {
    id: "evt-2",
    day: "26",
    month: "JUN",
    year: "2025",
    category: "Widows Outreach",
    title: "End of the year widow and less privileged outreach.",
    location: "Abuja FCT, Nigeria",
    time: "9:00 AM — 4:00 PM",
    desc: "",
    mainImage: "/images/adorable/widow_outreach/widow1.jpeg",
    gallery: [
      "/images/adorable/widow_outreach/widow2.jpeg",
      "/images/adorable/widow_outreach/widow3.jpeg",
      "/images/adorable/widow_outreach/widow4.jpeg",
    ],
    videos: [
      {
        title: "Abuja Humanitarian Distribution Overview",
        embedUrl: "/videos/girl_child.mp4",
        thumbnail: "/images/gallery/gallery6.png"
      }
    ]
  },
  {
    id: "evt-3",
    day: "23",
    month: "JUN",
    year: "2025",
    category: "Birthday Special",
    title: "Hospital Visit",
    location: "Abuja, Nigeria", // Fixed spelling from 'Nigera'
    time: "8:00 AM — 3:00 PM",
    desc: "We visit either a hospital, disabled home or motherless home in commemoration of the founder’s birthday",
    mainImage: "/images/adorable/hospital_visit/hospital1.jpeg",
    gallery: [
      "/images/adorable/hospital_visit/hospital2.jpeg",
      "/images/adorable/hospital_visit/hospital3.jpeg",
      "/images/adorable/hospital_visit/hospital4.jpeg",
    ],
    videos: [
      {
        title: "Hospital Visit Highlights",
        embedUrl: "/videos/anthem_video.mp4",
        thumbnail: "/images/gallery/gallery8.png"
      }
    ]
  },
  {
    id: "evt-4",
    day: "15",
    month: "MAR",
    year: "2026",
    category: "Medical Outreach",
    title: "Impactful outreach at Buzunkure Kuje Abuja for widows, disabled and less privileged",
    location: "Kuje, Abuja, Nigeria",
    time: "10:00 AM — 5:00 PM",
    desc: "Lives were touched with free medical treatments and food items",
    mainImage: "/images/adorable/med_outreach/med1.jpeg",
    gallery: [
      "/images/adorable/med_outreach/med2.jpeg",
      "/images/adorable/med_outreach/med3.jpeg",
      "/images/adorable/med_outreach/med4.jpeg",
      "/images/adorable/med_outreach/med5.jpeg",
      "/images/adorable/med_outreach/med6.jpeg",
      "/images/adorable/med_outreach/med7.jpeg",
      "/images/adorable/med_outreach/med8.jpeg",
    ],
    videos: [
      {
        title: "Anambra Mobile Medical Clinic Highlights",
        embedUrl: "/videos/anthem_video.mp4",
        thumbnail: "/images/gallery/gallery11.png"
      }
    ]
  },
  {
    id: "evt-5",
    day: "15",
    month: "MAR",
    year: "2026",
    category: "ASACADA Campaign",
    title: "Awareness campaign on World Drug Day Tour in Ghana 2025",
    location: "Ghana",
    time: "10:00 AM — 5:00 PM",
    desc: "",
    mainImage: "/images/adorable/ghana_camp/ghana1.jpeg",
    gallery: [
      "/images/adorable/ghana_camp/ghana2.jpeg",
      "/images/adorable/ghana_camp/ghana3.jpeg",
      "/images/adorable/ghana_camp/ghana4.jpeg",
      "/images/adorable/ghana_camp/ghana5.jpeg",
      "/images/adorable/ghana_camp/ghana6.jpeg",
      "/images/adorable/ghana_camp/ghana7.jpeg",
      "/images/adorable/ghana_camp/ghana8.jpeg",
    ],
    videos: [
      {
        title: "Ghana Tour Highlights",
        embedUrl: "/videos/anthem_video.mp4",
        thumbnail: "/images/gallery/gallery11.png"
      }
    ]
  },
  {
    id: "evt-6",
    day: "15",
    month: "JUN",
    year: "2025",
    category: "School Outreach",
    title: "School outreach in Government secondary school Nyanya and Tudun Wada Abuja",
    location: "Nyanya and Tudun Wada, Abuja, Nigeria",
    time: "10:00 AM — 5:00 PM",
    desc: "We spoke on the dangers of drug abuse and cultism among our young ones in the society",
    mainImage: "/images/adorable/sch_nyanya/nyanya1.jpeg",
    gallery: [
      "/images/adorable/sch_nyanya/nyanya2.jpeg",
      "/images/adorable/sch_nyanya/nyanya3.jpeg",
      "/images/adorable/sch_nyanya/nyanya4.jpeg",
      "/images/adorable/sch_nyanya/nyanya5.jpeg",
      "/images/adorable/sch_nyanya/nyanya6.jpeg",
      "/images/adorable/sch_nyanya/nyanya7.jpeg",
      "/images/adorable/sch_nyanya/nyanya8.jpeg",
      "/images/adorable/sch_nyanya/nyanya9.jpeg",
      "/images/adorable/sch_nyanya/nyanya10.jpeg",
      "/images/adorable/sch_nyanya/nyanya11.jpeg",
      "/images/adorable/sch_nyanya/nyanya12.jpeg",
      "/images/adorable/sch_nyanya/nyanya13.jpeg",
      "/images/adorable/sch_nyanya/nyanya14.jpeg",
      "/images/adorable/sch_nyanya/nyanya15.jpeg",
      "/images/adorable/sch_nyanya/nyanya16.jpeg",
    ],
    videos: [
      {
        title: "Video Highlights",
        embedUrl: "/videos/anthem_video.mp4",
        thumbnail: "/images/gallery/gallery11.png"
      }
    ]
  },
  {
    id: "evt-7",
    day: "15",
    month: "MAR",
    year: "2025",
    category: "ASACADA Campaign",
    title: "World Drug Day Campaign Courtsey Visit by AFI delegates",
    location: "4 Shaw road Ikoyi Lagos",
    time: "10:00 AM — 5:00 PM",
    desc: "World Drug Day Campaign Courtsey Visit by AFI delegates to the Lagos State Ndlea Commander.",
    mainImage: "/images/adorable/drug_camp/drug1.jpeg",
    gallery: [
      "/images/adorable/drug_camp/drug2.jpeg",
      "/images/adorable/drug_camp/drug3.jpeg",
      "/images/adorable/drug_camp/drug4.jpeg",
      "/images/adorable/drug_camp/drug5.jpeg",
      "/images/adorable/drug_camp/drug6.jpeg",
      "/images/adorable/drug_camp/drug7.jpeg",
      "/images/adorable/drug_camp/drug8.jpeg",
      "/images/adorable/drug_camp/drug9.jpeg",
      "/images/adorable/drug_camp/drug10.jpeg",
      "/images/adorable/drug_camp/drug11.jpeg",
    ],
    videos: [
      {
        title: "Video Highlights",
        embedUrl: "/videos/anthem_video.mp4",
        thumbnail: "/images/gallery/gallery11.png"
      }
    ]
  },
  {
    id: "evt-8",
    day: "15",
    month: "JUL",
    year: "2026",
    category: "ASACADA Campaign",
    title: "Queen ASACADA Campaign",
    location: "Nigeria",
    time: "10:00 AM — 5:00 PM",
    desc: `Queen ASACADA is a drug abuse awareness and advocacy programme that uses pageantry to engage young women aged 18–30 to compete for the titles of ASACADA Queen and ASACADA Ambassadors as champions against drug abuse. The initiative promotes education, sensitization, and community outreach campaigns aimed at discouraging drug abuse and encouraging healthy lifestyles among youths. 

Do you have what it takes to shine on a global stage?
Register for Queen ASACADA 4.0 and stand a chance to be an instrument for change on the dangers of drug abuse and cultism in schools across the world. Live in Maitama, Abuja

Registration fee is 10,000 Naira only with Regional Auditions nation wide 
+2347036145725
info2adorablefoundatiom@gmail.com`,
    mainImage: "/images/adorable/face_of_asacada/face1.jpeg",
    gallery: [
      "/images/adorable/face_of_asacada/face2.jpeg",
      "/images/adorable/face_of_asacada/face3.jpeg",
    ],
    videos: [
      {
        title: "Video Highlights",
        embedUrl: "/videos/girl_child.mp4",
        thumbnail: "/images/adorable/face_of_asacada/face1.jpeg",
      }
    ]
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