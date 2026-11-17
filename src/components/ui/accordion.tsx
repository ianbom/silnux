"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("faq-item", className)} {...props} />;
}

export function AccordionTrigger({ children, className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return <AccordionPrimitive.Header><AccordionPrimitive.Trigger data-slot="accordion-trigger" className={cn("faq-trigger", className)} {...props}>{children}<Plus aria-hidden="true" size={18} strokeWidth={1.25} /></AccordionPrimitive.Trigger></AccordionPrimitive.Header>;
}

export function AccordionContent({ children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return <AccordionPrimitive.Content data-slot="accordion-content" className="faq-content" {...props}><div>{children}</div></AccordionPrimitive.Content>;
}
