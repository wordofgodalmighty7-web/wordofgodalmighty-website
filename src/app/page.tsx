import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MissionCinematic } from "@/components/sections/MissionCinematic";
import { Metrics } from "@/components/sections/Metrics";
import { FounderStory } from "@/components/sections/FounderStory";
import { Team } from "@/components/sections/Team";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Roadmap } from "@/components/sections/Roadmap";
import { Vision } from "@/components/sections/Vision";
import { Newsletter } from "@/components/sections/Newsletter";
import { Contact } from "@/components/sections/Contact";
import { site, projects, PLAY_STORE_URL, SHOW_TESTIMONIALS } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const purityShield = projects.items.find((p) => p.id === "purity-shield");

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    email: site.email,
    description: site.tagline,
    sameAs: [
      "https://www.etsy.com/shop/WORDOFGODALMIGHTY",
      PLAY_STORE_URL,
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl,
    description: site.tagline,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  },
  ...(purityShield && purityShield.type === "app"
    ? [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: purityShield.name,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Android",
          description: purityShield.description,
          url: PLAY_STORE_URL,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        },
      ]
    : []),
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <div className="section-divider mx-auto max-w-6xl" />
        <MissionCinematic />
        <div className="section-divider mx-auto max-w-6xl" />
        <Metrics />
        <div className="section-divider mx-auto max-w-6xl" />
        <FounderStory />
        <div className="section-divider mx-auto max-w-6xl" />
        <Team />
        <div className="section-divider mx-auto max-w-6xl" />
        <Projects />
        {SHOW_TESTIMONIALS && (
          <>
            <div className="section-divider mx-auto max-w-6xl" />
            <Testimonials />
          </>
        )}
        <div className="section-divider mx-auto max-w-6xl" />
        <Roadmap />
        <div className="section-divider mx-auto max-w-6xl" />
        <Vision />
        <div className="section-divider mx-auto max-w-6xl" />
        <Newsletter />
        <div className="section-divider mx-auto max-w-6xl" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
