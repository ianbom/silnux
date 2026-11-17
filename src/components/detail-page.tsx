import { Bath, BedDouble, Building2, CalendarDays, Clock3, Expand, MapPin, Sofa, Trees } from "lucide-react";
import type { Listing } from "@/data/types";
import { Reveal } from "./animations";
import { Footer } from "./footer";
import { Photo } from "./photo";
import { RelatedListings } from "./sections";

export function DetailPage({ item, items }: { item: Listing; items: Listing[] }) {
  const specifications = item.kind === "project" ? [
    { label: "Total area", value: `${item.area.toLocaleString("en-US")} m²`, icon: Expand },
    { label: "Type", value: item.buildingType, icon: Building2 },
    { label: "Concept year", value: item.year, icon: CalendarDays },
    { label: "Proposed duration", value: `${item.duration} years`, icon: Clock3 },
  ] : [
    { label: "Total area", value: `${item.area} m²`, icon: Expand },
    { label: "Living room", value: `${item.livingArea} m²`, icon: Sofa },
    { label: "Bedrooms", value: `${item.bedroomArea} m² · ${item.bedrooms} rooms`, icon: BedDouble },
    { label: "Bathrooms", value: `${item.bathroomArea} m² · ${item.bathrooms} rooms`, icon: Bath },
    { label: "Outdoor area", value: `${item.outsideArea} m²`, icon: Trees },
  ];
  return <><main id="main"><article className="detail-layout"><div className="detail-hero"><Photo image={item.cover} priority sizes="(max-width: 1199px) 100vw, 60vw" /><div className="detail-shade" /><Reveal className="detail-title"><p><MapPin size={18} aria-hidden="true" />{item.location}</p><h1>{item.name}</h1></Reveal></div><div className="detail-content"><Reveal><h2>Overview</h2><p>{item.overview}</p><dl className="specifications">{specifications.map(({ label, value, icon: Icon }) => <div key={label}><dt><Icon size={18} aria-hidden="true" />{label}</dt><dd>{value}</dd></div>)}</dl></Reveal><Reveal className="detail-description"><h2>{item.kind === "project" ? "Project" : "Property"} Description</h2>{item.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</Reveal><section className="detail-gallery" aria-labelledby="gallery-heading"><h2 id="gallery-heading">Gallery</h2>{item.gallery.map(image => <Reveal key={image.src}><Photo image={image} sizes="(max-width: 1199px) 100vw, 40vw" /></Reveal>)}</section></div></article><RelatedListings item={item} items={items} /></main><Footer /></>;
}
