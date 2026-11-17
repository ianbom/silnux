"use client";

import { useRef, useState } from "react";
import { formatEnquiry, validateEnquiry, type Enquiry, type EnquiryErrors } from "@/lib/enquiry";
import { Button } from "./ui/button";

export function ContactForm() {
  const [enquiry, setEnquiry] = useState<Enquiry>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [review, setReview] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const reviewRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEnquiry(enquiry);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) { document.getElementById(`contact-${firstError}`)?.focus(); return; }
    setReview(true);
    setCopyStatus("");
    requestAnimationFrame(() => reviewRef.current?.focus());
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(formatEnquiry(enquiry));
      setCopyStatus("Enquiry copied. Nothing has been sent.");
    } catch {
      textRef.current?.focus();
      textRef.current?.select();
      setCopyStatus("Copy is unavailable. Your enquiry is selected; copy it using your device's copy command.");
    }
  }

  return <div className="contact-form-content">
    <h2>Ready for your next chapter?</h2>
    {review ? <div className="enquiry-review" ref={reviewRef} tabIndex={-1}>
      <h3>Your enquiry, ready to copy</h3><p>Nothing has been sent. Online delivery is currently unavailable.</p>
      <label className="sr-only" htmlFor="enquiry-preview">Prepared enquiry</label><textarea id="enquiry-preview" ref={textRef} value={formatEnquiry(enquiry)} readOnly rows={8} />
      <div className="review-actions"><Button onClick={copy}>Copy enquiry</Button><button className="edit-enquiry" onClick={() => { setReview(false); requestAnimationFrame(() => document.getElementById("contact-name")?.focus()); }}>Edit enquiry</button></div><p className="form-status" role="status">{copyStatus}</p>
    </div> : <form onSubmit={submit} noValidate>
      {([{ key: "name", label: "Name", placeholder: "Your name", type: "text", autoComplete: "name", max: 100 }, { key: "email", label: "Email", placeholder: "you@example.com", type: "email", autoComplete: "email", max: 254 }, { key: "message", label: "Message", placeholder: "Tell us about the space you have in mind", type: "text", autoComplete: "off", max: 3000 }] as const).map(field => {
        const props = { id: `contact-${field.key}`, name: field.key, value: enquiry[field.key], placeholder: field.placeholder, autoComplete: field.autoComplete, maxLength: field.max, required: true, "aria-invalid": !!errors[field.key], "aria-describedby": errors[field.key] ? `${field.key}-error` : undefined, onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEnquiry({ ...enquiry, [field.key]: event.target.value }) };
        return <div className="form-field" key={field.key}><label htmlFor={props.id}>{field.label}</label>{field.key === "message" ? <textarea {...props} rows={4} /> : <input {...props} type={field.type} />}{errors[field.key] && <p id={`${field.key}-error`} className="field-error">{errors[field.key]}</p>}</div>;
      })}
      <Button type="submit">Review enquiry</Button>
    </form>}
  </div>;
}
