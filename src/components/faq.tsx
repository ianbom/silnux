"use client";

import { faqs } from "@/data/site-config";
import { Reveal } from "./animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function Faq() {
  return <section className="section faq-section" aria-labelledby="faq-heading"><Reveal className="section-heading"><h2 id="faq-heading">Frequently Asked Questions</h2><p>A little clarity before your next chapter</p></Reveal><Reveal><Accordion type="multiple">{faqs.map((faq, index) => <AccordionItem key={faq.question} value={String(index)}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent><p>{faq.answer}</p></AccordionContent></AccordionItem>)}</Accordion></Reveal></section>;
}
