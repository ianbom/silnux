import Link from "next/link";
import { BedDouble, Expand, MapPin, ShowerHead } from "lucide-react";
import type { Listing } from "@/data/types";
import { Photo } from "./photo";
import { Reveal } from "./animations";

export function ListingCard({ item, index = 0 }: { item: Listing; index?: number }) {
  const href = `/${item.kind === "project" ? "projects" : "properties"}/${item.slug}`;
  return <Reveal delay={(index % 3) * .06}>
    <Link href={href} className={`listing-card ${item.kind}-card`}>
      <Photo image={item.cover} sizes="(max-width: 809px) calc(100vw - 32px), (max-width: 1199px) 50vw, 33vw" />
      <h3>{item.name}</h3>
      {item.kind === "project" ? <p className="card-location"><MapPin aria-hidden="true" /><span>{item.location}</span></p> : <div className="card-specifications"><span><Expand aria-hidden="true" />{item.area} m²</span><span aria-label={`${item.bedrooms} bedrooms`}><BedDouble aria-hidden="true" />{item.bedrooms}</span><span aria-label={`${item.bathrooms} bathrooms`}><ShowerHead aria-hidden="true" />{item.bathrooms}</span></div>}
    </Link>
  </Reveal>;
}

export function ListingGrid({ items, featured = false }: { items: Listing[]; featured?: boolean }) {
  return <div className={`listing-grid ${featured ? "featured-grid" : ""}`}>{items.map((item, index) => <ListingCard key={item.slug} item={item} index={index} />)}</div>;
}
