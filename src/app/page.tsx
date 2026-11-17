import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { Reveal } from "@/components/animations";
import { ContactForm } from "@/components/contact-form";
import { Faq } from "@/components/faq";
import { Footer, Marquee } from "@/components/footer";
import { Photo } from "@/components/photo";
import { FeaturedListings, Results } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { photography } from "@/data/photos";
import { site } from "@/data/site-config";

export default function Home() {
  return <><main id="main">
    <section className="home-hero" aria-labelledby="home-heading"><Reveal className="hero-copy"><h1 id="home-heading">{site.headline}</h1><div className="hero-support"><p className="hero-tagline">{site.tagline}</p><p>{site.introduction}</p></div></Reveal><Photo image={photography.hero} className="hero-photograph" priority /></section>
    <section className="home-introduction" aria-labelledby="introduction-heading"><Photo image={photography.introduction} /><div className="image-shade" /><BrandMark className="introduction-mark" /><Reveal className="introduction-title"><h2 id="introduction-heading">Who We Are</h2></Reveal><Reveal className="introduction-copy"><p>{site.about}</p><Button asChild><Link href="/about">About Us</Link></Button></Reveal></section>
    <FeaturedListings kind="project" /><FeaturedListings kind="property" /><Results />
    <section id="contact" className="contact-section" aria-label="Contact SOLVERRA ESTATES"><Photo image={photography.contact} sizes="(max-width: 809px) 100vw, 50vw" /><div className="contact-panel"><Reveal><ContactForm /></Reveal></div></section>
    <Faq /><Marquee />
  </main><Footer /></>;
}
