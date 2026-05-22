/** Official purchased domain — update NEXT_PUBLIC_SITE_URL in .env.local if needed */
export const site = {
  name: "Word of God Almighty",
  domain: "wordofgodalmighty.store",
  url: "https://wordofgodalmighty.store",
  email: "wordofgodalmighty7@gmail.com",
  tagline: "Christ-centered digital experiences for a better life",
};

export const navLinks = [
  { label: "Mission", href: "#about" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
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

export const about = {
  title: "Our Mission",
  subtitle: "Faith-driven innovation for eternal impact",
  paragraphs: [
    "Word of God Almighty was created with a mission to build Christ-centered projects that help people spiritually, mentally, and morally through technology, creativity, faith, and purpose-driven products.",
    "This initiative was started to create projects for Christ and to help people through faith-driven innovation — building tools, brands, and experiences that glorify God and positively impact lives.",
    "Every endeavor under this name is rooted in authenticity, peace, and a desire to draw hearts closer to the Kingdom of God.",
  ],
  quote: {
    text: "Create meaningful projects that glorify God and positively impact people's lives.",
    attribution: "Word of God Almighty",
  },
};

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
    {
      name: "Samuel",
      role: "Team Member",
      type: "human" as const,
      icon: "user" as const,
      description: "Contributing to Christ-centered projects with dedication and faith.",
    },
  ],
};

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
      cta: { label: "View on Etsy", href: "#" },
      badge: "Etsy Brand",
      type: "apparel" as const,
    },
    {
      id: "purity-shield",
      name: "Purity Shield Pro",
      tagline: "Christian-focused purity & discipline app",
      description:
        "A Christian-focused mobile application designed to help people avoid adult content and pornography by guiding them toward repentance, discipline, healing, and spiritual growth in Christ.",
      features: [
        "Block harmful adult websites",
        "Strengthen self-control",
        "Build spiritual discipline",
        "Restore purity through Christ",
        "Faith-based motivation and guidance",
      ],
      status: {
        primary: "Launching soon on Google Play",
        secondary: "Early access available now",
      },
      ctas: [
        { label: "Learn More", href: "#contact", variant: "secondary" as const },
        { label: "Get Early Access", href: "#contact", variant: "primary" as const },
      ],
      badge: "Mobile App",
      type: "app" as const,
    },
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
