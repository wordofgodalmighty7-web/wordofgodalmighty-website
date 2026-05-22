import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Projects } from "@/components/sections/Projects";
import { Vision } from "@/components/sections/Vision";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: getSiteUrl(),
  email: site.email,
  description: site.tagline,
};

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
        <About />
        <div className="section-divider mx-auto max-w-6xl" />
        <Team />
        <div className="section-divider mx-auto max-w-6xl" />
        <Projects />
        <div className="section-divider mx-auto max-w-6xl" />
        <Vision />
        <div className="section-divider mx-auto max-w-6xl" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
