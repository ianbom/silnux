export type Enquiry = { name: string; email: string; message: string };
export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

export function validateEnquiry(enquiry: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!enquiry.name.trim()) errors.name = "Please enter your name.";
  else if (enquiry.name.length > 100) errors.name = "Use 100 characters or fewer.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email.trim())) errors.email = "Please enter a valid email address.";
  else if (enquiry.email.length > 254) errors.email = "Use 254 characters or fewer.";
  if (!enquiry.message.trim()) errors.message = "Please tell us a little about your enquiry.";
  else if (enquiry.message.length > 3000) errors.message = "Use 3,000 characters or fewer.";
  return errors;
}

export function formatEnquiry(enquiry: Enquiry) {
  return `Enquiry for SOLVERRA ESTATES\n\nName: ${enquiry.name.trim()}\nEmail: ${enquiry.email.trim()}\n\n${enquiry.message.trim()}`;
}
