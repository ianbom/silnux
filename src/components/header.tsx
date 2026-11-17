"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { BrandLink } from "./brand";
import { Dialog, DialogTrigger, DialogClose, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

const links = [["Home", "/"], ["About", "/about"], ["Projects", "/projects"], ["Properties", "/properties"]] as const;

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return links.map(([label, href]) => <Link key={href} href={href} onClick={onNavigate} aria-current={pathname === href || (href !== "/" && pathname.startsWith(href + "/")) ? "page" : undefined}>{label}</Link>);
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger className="menu-trigger" aria-label="Open navigation"><span /><span /></DialogTrigger>
    <DialogContent>
      <DialogTitle className="sr-only">Navigation</DialogTitle>
      <DialogDescription className="sr-only">SOLVERRA ESTATES pages and contact.</DialogDescription>
      <div className="menu-top"><BrandLink onClick={() => setOpen(false)} /><DialogClose className="menu-trigger" aria-label="Close navigation"><X size={24} strokeWidth={1.5} /></DialogClose></div>
      <nav aria-label="Mobile navigation" className="menu-links"><NavigationLinks onNavigate={() => setOpen(false)} /></nav>
      <div className="menu-contact"><Link href="/#contact" onClick={() => setOpen(false)}>Book a call</Link><Link href="/#contact" onClick={() => setOpen(false)}>Contact Us</Link></div>
    </DialogContent>
  </Dialog>;
}

export function Header() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let previous = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - previous) < 8 && current > 64) return;
      setHidden(current > previous && current > 64);
      previous = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.header className="site-header" initial={false} animate={{ y: hidden ? "-100%" : 0 }} transition={{ duration: reduced ? 0 : .25 }}>
    <nav className="desktop-navigation" aria-label="Main navigation"><NavigationLinks /></nav>
    <BrandLink />
    <div className="header-contact"><Link href="/#contact">Book a call</Link><Link href="/#contact">Contact Us</Link></div>
    <MobileMenu key={pathname} />
  </motion.header>;
}
