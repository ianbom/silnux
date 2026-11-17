import type { Metadata } from "next";
import { ListingPage } from "@/components/listing-page";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Explore five original architectural concepts by SOLVERRA ESTATES, from waterfront residences to garden neighbourhoods.", openGraph: { title: "Projects | SOLVERRA ESTATES", description: "Original concepts. Imagined places." } };
export default function Projects() { return <ListingPage title="Latest Projects" description="Original concepts. Imagined places." items={projects} />; }
