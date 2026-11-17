import type { Listing } from "@/data/types";
import { Reveal } from "./animations";
import { ListingGrid } from "./cards";
import { Footer } from "./footer";

export function ListingPage({ title, description, items }: { title: string; description: string; items: Listing[] }) {
  return <><main id="main" className="section page-intro listing-page"><Reveal className="section-heading centered"><h1>{title}</h1><p>{description}</p></Reveal><ListingGrid items={items} /></main><Footer /></>;
}
