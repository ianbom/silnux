import Link from "next/link";
import { photography } from "@/data/photos";
import { BrandLink, BrandMark } from "./brand";
import { Photo } from "./photo";

export function Marquee() {
  const text = "THOUGHTFUL DESIGN  •  DISTINCTIVE PLACES  •  LASTING POSSIBILITIES  •  ";
  return <div className="marquee" aria-label="Thoughtful design. Distinctive places. Lasting possibilities."><div className="marquee-track" aria-hidden="true"><span>{text}</span><span>{text}</span><span>{text}</span></div></div>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-information">
      <div className="footer-navigation"><BrandLink /><nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/properties">Properties</Link><Link href="/#contact">Book a call</Link><Link href="/#contact">Contact Us</Link></nav></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()}</span><span>SOLVERRA ESTATES</span></div>
    </div>
    <div className="footer-art"><Photo image={photography.footer} sizes="(max-width: 809px) 100vw, 50vw" /><div className="footer-wordmark"><BrandMark /><span>SOLVERRA<small>ESTATES</small></span></div></div>
  </footer>;
}
