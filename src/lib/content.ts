/** Official purchased domain — update NEXT_PUBLIC_SITE_URL in .env.local if needed */
export const site = {
  name: "Word of God Almighty",
  domain: "wordofgodalmighty.store",
  url: "https://wordofgodalmighty.store",
  email: "wordofgodalmighty7@gmail.com",
  tagline: "Christ-centered digital experiences for a better life",
  missionStatement:
    "Building meaningful digital products that glorify God and help people walk closer with Christ.",
};

/** Formspree contact form endpoint */
export const FORMSPREE_FORM_URL = "https://formspree.io/f/xzdwglnn";

/** Set to true to show testimonials on the homepage and in nav */
export const SHOW_TESTIMONIALS = false;

export const navLinks = [
  { label: "Mission", href: "#about" },
  { label: "Projects", href: "#projects" },
  ...(SHOW_TESTIMONIALS ? [{ label: "Testimonials", href: "#testimonials" }] : []),
  { label: "Roadmap", href: "#roadmap" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
  { label: "Newsletter", href: "#newsletter" },
];

export const hero = {
  heading: "Building Christ-Centered Digital Experiences for a Better Life",
  subheading:
    "Word of God Almighty exists to create meaningful projects, products, and technology that help people grow spiritually, live purely, and walk closer with Christ.",
  ctas: [
    { label: "Explore Our Mission", href: "#about", variant: "primary" as const },
    { label: "View Projects", href: "#projects", variant: "secondary" as const },
    { label: "Contact Us", href: "#contact", variant: "outline" as const },
  ],
};

export const mission = {
  title: "Our Mission",
  subtitle: "Faith-driven innovation for eternal impact",
  headline: "Technology, creativity, and faith united for a greater purpose.",
  videoSrc: "" as string,
  spiritualPurpose:
    "We exist to build Christ-centered projects that help people spiritually, mentally, and morally — through technology, creativity, and purpose-driven products that draw hearts closer to God.",
  paragraphs: [
    "Word of God Almighty was created with a mission to build Christ-centered projects that help people spiritually, mentally, and morally through technology, creativity, faith, and purpose-driven products.",
    "This initiative was started to create projects for Christ and to help people through faith-driven innovation — building tools, brands, and experiences that glorify God and positively impact lives.",
    "Every endeavor under this name is rooted in authenticity, peace, and a desire to draw hearts closer to the Kingdom of God.",
  ],
  timeline: [
    { year: "2024", title: "Mission founded", description: "Word of God Almighty established with a Christ-centered vision." },
    { year: "2024", title: "Etsy brand live", description: "Faith-inspired apparel launched on Etsy — active 1+ year." },
    { year: "2025", title: "Purity Shield Pro", description: "Mobile app developed to help people pursue purity in Christ." },
    { year: "2025", title: "Global launch", description: "Official website and digital presence at wordofgodalmighty.store." },
  ],
  quote: {
    text: "Create meaningful projects that glorify God and positively impact people's lives.",
    attribution: "Word of God Almighty",
  },
};

/** @deprecated Use mission — kept for compatibility */
export const about = mission;

export const metrics = {
  title: "Our Journey",
  subtitle: "Growing with purpose",
  items: [
    { value: "1+", label: "Year on Etsy", description: "Active faith-inspired apparel brand" },
    { value: "830+", label: "Sites blocked", description: "DNS protection in Purity Shield Pro" },
    { value: "Global", label: "Website launch", description: "Official brand presence online" },
    { value: "Active", label: "Early access testing", description: "App testers helping refine the experience" },
  ],
};

export const founderStory = {
  title: "Why We Started",
  subtitle: "Purpose behind every project",
  paragraphs: [
    "Word of God Almighty began with a simple conviction: technology and creativity should serve something greater than profit — they should help people grow closer to Christ.",
    "We saw a need for faith-driven digital products that address real struggles — from wearing your faith boldly through apparel, to fighting addiction and impurity with tools rooted in Scripture and repentance.",
    "Every project we build is motivated by love for God and love for people. We are not building a corporation for fame; we are building a mission for eternal impact.",
  ],
  highlights: [
    "Helping people overcome sin and grow in discipline",
    "Spreading the Gospel through design and technology",
    "Creating authentic, Christ-honoring digital experiences",
  ],
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  source: string;
  avatarSrc?: string;
  isPlaceholder?: boolean;
};

/** Testimonials content — enable with SHOW_TESTIMONIALS when you have real quotes */
export const testimonials: {
  title: string;
  subtitle: string;
  disclaimer: string;
  items: Testimonial[];
} = {
  title: "What People Are Saying",
  subtitle: "Early feedback from our community",
  disclaimer: "Placeholder testimonials — replace with real quotes in content.ts when ready.",
  items: [
    {
      id: "1",
      name: "Sarah M.",
      role: "Etsy Customer",
      quote:
        "The designs are bold and meaningful. I love wearing faith on my sleeve — literally. Quality is great and the message always sparks conversation.",
      rating: 5,
      source: "Etsy Shop Review (placeholder)",
      isPlaceholder: true,
    },
    {
      id: "2",
      name: "James T.",
      role: "Early App Tester",
      quote:
        "Purity Shield Pro has been a game-changer for my daily walk with Christ. The prayer alarms and Bible content keep me grounded when temptation hits.",
      rating: 5,
      source: "Early Access Feedback (placeholder)",
      isPlaceholder: true,
    },
    {
      id: "3",
      name: "Maria L.",
      role: "Supporter & Friend",
      quote:
        "You can feel the heart behind this mission. It's not just another app or brand — it's built with real faith and a desire to help people.",
      rating: 5,
      source: "Community Feedback (placeholder)",
      isPlaceholder: true,
    },
    {
      id: "4",
      name: "David R.",
      role: "Etsy Customer",
      quote:
        "Ordered multiple shirts for my small group. Everyone loved the Philippians 4:13 design. Fast shipping and beautiful packaging.",
      rating: 5,
      source: "Etsy Shop Review (placeholder)",
      isPlaceholder: true,
    },
  ],
};

export const roadmap = {
  title: "Projects Roadmap",
  subtitle: "A growing ecosystem of Christ-centered work",
  items: [
    {
      id: "etsy",
      status: "live" as const,
      project: "Etsy Clothing Brand",
      description: "Word of God Almighty 7 — faith-inspired apparel on Etsy",
    },
    {
      id: "purity-shield",
      status: "launching" as const,
      project: "Purity Shield Pro",
      description: "Christian purity & discipline mobile app on Google Play",
    },
    {
      id: "future",
      status: "future" as const,
      project: "Christian Tools & Platforms",
      description: "Future apps, resources, and digital ministries under this mission",
    },
  ],
};

export const newsletter = {
  title: "Join Our Mission",
  subtitle: "Stay updated on future projects",
  description:
    "Be part of our growing community. Get updates on new releases, Christian tools, and mission-driven work from Word of God Almighty.",
  buttonLabel: "Subscribe",
  successMessage: "Thank you for joining! We'll keep you updated on our mission.",
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  enabled: boolean;
};

export const socialLinks: SocialLink[] = [
  { id: "etsy", label: "Etsy", href: "https://www.etsy.com/shop/WORDOFGODALMIGHTY", enabled: true },
  { id: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.purityshield.pro", enabled: true },
  { id: "github", label: "GitHub", href: "https://github.com", enabled: false },
  { id: "instagram", label: "Instagram", href: "#", enabled: false },
  { id: "facebook", label: "Facebook", href: "#", enabled: false },
];

export const footerProjects = [
  { label: "Etsy Store", href: "https://www.etsy.com/shop/WORDOFGODALMIGHTY", external: true },
  { label: "Purity Shield Pro", href: "https://play.google.com/store/apps/details?id=com.purityshield.pro", external: true },
];

export const team = {
  title: "Our Foundation",
  subtitle: "Spiritually led and Christ-centered",
  intro:
    "The mission of Word of God Almighty is spiritually led and Christ-centered. The Father, Son, and Holy Spirit are the true foundation and owners of this work. We serve alongside them with humility, purpose, and faith.",
  members: [
    {
      name: "Father",
      role: "Foundation of our mission",
      type: "trinity" as const,
      icon: "crown" as const,
      description: "The sovereign Creator and source of all we build.",
    },
    {
      name: "Son",
      role: "Foundation of our mission",
      type: "trinity" as const,
      icon: "cross" as const,
      description: "Jesus Christ — our Savior, example, and hope.",
    },
    {
      name: "Holy Spirit",
      role: "Foundation of our mission",
      type: "trinity" as const,
      icon: "dove" as const,
      description: "The Comforter who guides wisdom, purity, and purpose.",
    },
    {
      name: "Me",
      role: "Founder & Builder",
      type: "human" as const,
      icon: "user" as const,
      description: "Serving Christ through technology, creativity, and mission-driven work.",
    },
  ],
};

export const ETSY_SHOP_URL = "https://www.etsy.com/shop/WORDOFGODALMIGHTY";

/** Official Google Play listing — Purity Shield Pro */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.purityshield.pro";

export type BeforeAfterStory = {
  before: { title: string; description: string };
  after: { title: string; description: string };
};

export type AppScreenshot = {
  id: string;
  src: string;
  alt: string;
  label?: string;
};

export type AppProjectCta = {
  label: string;
  variant: "primary" | "secondary" | "outline";
  href?: string;
  external?: boolean;
};

export type AppProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  type: "app";
  purposeStatement: string;
  beforeAfter: BeforeAfterStory;
  playStore: {
    url: string;
    badgeLabel: string;
    status: "live" | "coming_soon";
    stats: { label: string; value: string }[];
  };
  galleryIntro: string;
  screenshots: AppScreenshot[];
  features: string[];
  status: { primary: string; secondary: string };
  ctas: AppProjectCta[];
};

export type EtsyProduct = {
  id: string;
  src: string;
  alt: string;
  label?: string;
};

export type ApparelProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  badge: string;
  type: "apparel";
  purposeStatement: string;
  beforeAfter: BeforeAfterStory;
  etsy: {
    shopUrl: string;
    shopName: string;
    collectionTagline: string;
    galleryIntro: string;
  };
  products: EtsyProduct[];
  ctas: { label: string; variant: "primary" | "secondary" | "outline" }[];
};

const etsyProducts: EtsyProduct[] = [
  {
    id: "1",
    src: "/images/etsy/product-1.png",
    alt: "Navy tee — Know Jesus, Know Salvation design",
    label: "Know Jesus · Know Salvation",
  },
  {
    id: "2",
    src: "/images/etsy/product-2.png",
    alt: "Oatmeal tri-blend tee — Jesus Loves You To The Grave And Back",
    label: "Jesus Loves You",
  },
  {
    id: "3",
    src: "/images/etsy/product-3.png",
    alt: "Mauve tri-blend tee back — Life isn't fair; we would be on the cross",
    label: "Life Isn't Fair",
  },
  {
    id: "4",
    src: "/images/etsy/product-4.png",
    alt: "White Comfort Colors tee — Philippians 4:13 strength through Christ",
    label: "Philippians 4:13",
  },
  {
    id: "5",
    src: "/images/etsy/product-5.png",
    alt: "Coyote brown tee back — Jesus is still doing the impossible",
    label: "Still Doing the Impossible",
  },
  {
    id: "6",
    src: "/images/etsy/product-6.png",
    alt: "Stone oversized tee — The highest place I'll ever be",
    label: "The Highest Place",
  },
  {
    id: "7",
    src: "/images/etsy/product-7.png",
    alt: "Vintage white tee back — Born, died, resurrected, He will come",
    label: "He Will Come",
  },
];

export const projects = {
  title: "Our Projects",
  subtitle: "Purpose-driven brands and applications",
  items: [
    {
      id: "woga7",
      name: "Word of God Almighty 7",
      tagline: "Faith-inspired Christian apparel",
      description:
        "A Christian clothing brand available on Etsy, active for over one year. The brand creates faith-inspired apparel designed to spread positivity, belief, and the message of Christ.",
      highlights: [
        "Premium faith-inspired designs",
        "Spreading positivity and belief in Christ",
        "Active Etsy storefront for 1+ year",
      ],
      badge: "Etsy Brand",
      type: "apparel" as const,
      purposeStatement:
        "Built with purpose — every design is crafted to spark faith conversations and spread the Gospel through what you wear.",
      beforeAfter: {
        before: {
          title: "Before",
          description: "Faith kept private — hard to share Christ boldly in everyday life.",
        },
        after: {
          title: "After",
          description: "Wear your faith daily — premium designs that open doors to Gospel conversations.",
        },
      },
      etsy: {
        shopUrl: ETSY_SHOP_URL,
        shopName: "WORDOFGODALMIGHTY",
        collectionTagline: "Faith-inspired Christian apparel",
        galleryIntro:
          "Each design reflects our mission to spread positivity, belief, and the message of Christ through premium Christian streetwear.",
      },
      products: etsyProducts,
      ctas: [
        { label: "Visit Our Etsy Store", variant: "primary" as const },
        { label: "Explore the Collection", variant: "secondary" as const },
        { label: "Shop on Etsy", variant: "outline" as const },
      ],
    } satisfies ApparelProject,
    {
      id: "purity-shield",
      name: "Purity Shield Pro",
      tagline: "Christian-focused purity & discipline app",
      description:
        "A Christian-focused mobile application designed to help people avoid adult content and pornography by guiding them toward repentance, discipline, healing, and spiritual growth in Christ.",
      badge: "Mobile App",
      type: "app" as const,
      purposeStatement:
        "Built to help people overcome addiction and walk closer with Christ — through blocking, discipline, prayer, and Scripture-centered guidance.",
      beforeAfter: {
        before: {
          title: "Struggle",
          description: "Trapped in cycles of sin, shame, and isolation — feeling far from God.",
        },
        after: {
          title: "Growth in Christ",
          description: "Repentance, discipline, prayer, and daily Scripture — walking in freedom and purity.",
        },
      },
      playStore: {
        url: PLAY_STORE_URL,
        badgeLabel: "Get it on Google Play",
        status: "live" as const,
        stats: [
          { label: "Sites blocked", value: "830+" },
          { label: "Daily tools", value: "Bible · Prayer · Quiz" },
          { label: "Focus", value: "Purity in Christ" },
          { label: "Platform", value: "Android" },
        ],
      },
      galleryIntro:
        "Walk through the app experience — blocking harmful content, building discipline, and staying anchored in Christ-centered guidance every day.",
      screenshots: [
        {
          id: "1",
          src: "/images/purity-shield/screenshot-1.png",
          alt: "Purity Shield Pro — Stay strong in faith with daily spiritual growth and DNS protection",
          label: "Stay Strong in Faith",
        },
        {
          id: "2",
          src: "/images/purity-shield/screenshot-2.png",
          alt: "Purity Shield Pro — Prayer alarms to build a daily routine with God",
          label: "Prayer Alarms",
        },
        {
          id: "3",
          src: "/images/purity-shield/screenshot-3.png",
          alt: "Purity Shield Pro — Personalized faith journey and motivational Bible messages",
          label: "Your Faith Journey",
        },
        {
          id: "4",
          src: "/images/purity-shield/screenshot-4.png",
          alt: "Purity Shield Pro — Daily Bible quiz and spiritual challenges",
          label: "Daily Bible Quiz",
        },
        {
          id: "5",
          src: "/images/purity-shield/screenshot-5.png",
          alt: "Purity Shield Pro — App Shield blocks distracting apps for spiritual focus",
          label: "App Shield",
        },
        {
          id: "6",
          src: "/images/purity-shield/screenshot-6.png",
          alt: "Purity Shield Pro — Track weekly spiritual progress and build lasting habits",
          label: "Spiritual Progress",
        },
        {
          id: "7",
          src: "/images/purity-shield/screenshot-7.png",
          alt: "Purity Shield Pro — Weekly miracle journey to reflect on God's grace daily",
          label: "Miracle Journey",
        },
      ],
      features: [
        "Block harmful adult websites and distracting apps",
        "DNS protection with 830+ sites blocked",
        "Daily Bible verses, quizzes, and spiritual search",
        "Prayer alarms and weekly miracle reflections",
        "Track spiritual progress and build lasting habits",
        "Personalized profile with motivational Bible messages",
        "Restore purity and grow closer to Christ",
      ],
      status: {
        primary: "Now Live on Google Play",
        secondary: "Early access & testing builds available",
      },
      ctas: [
        { label: "Get on Google Play", variant: "primary" as const },
        { label: "View on Play Store", variant: "secondary" as const },
        { label: "Learn More", variant: "outline" as const, href: "#contact", external: false },
      ],
    } satisfies AppProject,
  ],
};

export const vision = {
  title: "Our Vision",
  theme: "This is only the beginning.",
  paragraphs: [
    "Word of God Almighty plans to continue building future projects, brands, applications, and Christ-centered innovations under this mission.",
    "From apparel to mobile apps and beyond, we are committed to creating technology and creativity that uplifts souls, strengthens faith, and honors God in every detail.",
  ],
};

export const contact = {
  title: "Get in Touch",
  subtitle: "We would love to hear from you",
  description:
    "Whether you have questions about our projects, want to collaborate, or need support — reach out. Every message is received with gratitude and purpose.",
};
