import Link from "next/link";

export function BrandMark({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 40 36" fill="none" className={className} aria-hidden="true"><path d="M4 0h32v8H12v6h24v22H4v-8h24v-6H4V0Z" fill="currentColor" /></svg>;
}

export function BrandLink({ onClick }: { onClick?: () => void }) {
  return <Link className="brand-link" href="/" onClick={onClick} aria-label="SOLVERRA ESTATES home"><BrandMark /></Link>;
}
