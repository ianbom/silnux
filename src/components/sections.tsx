import Link from "next/link";
import { projects } from "@/data/projects";
import { properties } from "@/data/properties";
import { team } from "@/data/team";
import type { Listing } from "@/data/types";
import { Counter, Reveal } from "./animations";
import { ListingGrid } from "./cards";
import { Button } from "./ui/button";

export function SectionHeading({ title, description, href, action, centered = false, id }: { title: string; description?: string; href?: string; action?: string; centered?: boolean; id?: string }) {
  return <Reveal className={`section-heading ${centered ? "centered" : ""}`}>
    <h2 id={id}>{title}</h2>{description && <p>{description}</p>}{href && <Button asChild variant="outline"><Link href={href}>{action}</Link></Button>}
  </Reveal>;
}

export function FeaturedListings({ kind }: { kind: "project" | "property" }) {
  const isProject = kind === "project";
  return <section className="section featured-section" aria-labelledby={`${kind}-heading`}>
    <SectionHeading id={`${kind}-heading`} title={isProject ? "Latest Projects" : "Explore Our Properties"} description={isProject ? "New perspectives on the places we share" : "A considered collection of places to call home"} href={isProject ? "/projects" : "/properties"} action={isProject ? "View All Projects" : "View All Properties"} centered />
    <ListingGrid items={(isProject ? projects : properties).slice(0, 3)} featured />
  </section>;
}

export function Results() {
  const metrics = [
    { value: projects.length, title: "Concept Projects", text: "Original development ideas, from waterfront homes to connected neighbourhoods." },
    { value: properties.length, title: "Considered Residences", text: "Individual home concepts exploring light, proportion, and everyday comfort." },
    { value: team.length, title: "Creative Disciplines", text: "Architecture, interiors, development, and property consultancy brought together." },
    { value: new Set(projects.map(project => project.buildingType)).size, title: "Building Typologies", text: "Residential, commercial, and mixed-use ideas within our imagined portfolio." },
  ];
  return <section className="section results-section" aria-labelledby="results-heading"><SectionHeading id="results-heading" title="Our Portfolio" description="An architectural practice in numbers" /><div className="results-grid">{metrics.map(metric => <div className="metric" key={metric.title}><div className="metric-number"><Counter value={metric.value} /></div><h3>{metric.title}</h3><p>{metric.text}</p></div>)}</div></section>;
}

export function RelatedListings({ item, items }: { item: Listing; items: Listing[] }) {
  const isProject = item.kind === "project";
  return <section className="section related-section" aria-labelledby="related-heading"><SectionHeading id="related-heading" title={isProject ? "More like this" : "Explore our properties"} description={isProject ? undefined : "More perspectives on a considered home"} /><ListingGrid items={items.filter(other => other.slug !== item.slug).slice(0, 3)} featured /></section>;
}
