import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail-page";
import { properties } from "@/data/properties";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return properties.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = properties.find(property => property.slug === slug);
  if (!item) notFound();
  return { title: item.name, description: item.overview, openGraph: { title: `${item.name} | SOLVERRA ESTATES`, description: item.overview } };
}
export default async function Property({ params }: Props) {
  const { slug } = await params;
  const item = properties.find(property => property.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} items={properties} />;
}
