"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";

export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div data-reveal className={className} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: .05 }} transition={{ duration: reduced ? 0 : .8, ease: [.16, 1, .3, 1], delay: reduced ? 0 : delay }}>{children}</motion.div>;
}

export function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const reduced = useReducedMotion();
  const count = useMotionValue(0);
  const display = useTransform(count, latest => String(Math.round(latest)).padStart(2, "0"));
  useEffect(() => {
    if (!inView) { count.set(0); return; }
    const controls = animate(count, value, { duration: reduced ? 0 : 2, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, reduced, count, value]);
  return <span ref={ref} aria-label={String(value)}><motion.span aria-hidden="true">{display}</motion.span></span>;
}
