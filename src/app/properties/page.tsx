import type { Metadata } from "next";
import { ListingPage } from "@/components/listing-page";
import { properties } from "@/data/properties";

export const metadata: Metadata = { title: "Properties", description: "Discover four fictional residences by SOLVERRA ESTATES, each exploring a considered approach to contemporary living.", openGraph: { title: "Properties | SOLVERRA ESTATES", description: "Considered spaces. A different way to live." } };
export default function Properties() { return <ListingPage title="Explore Our Properties" description="Considered spaces. A different way to live." items={properties} />; }
