import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail-page";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = projects.find(project => project.slug === slug);
  if (!item) notFound();
  return { title: item.name, description: item.overview, openGraph: { title: `${item.name} | SOLVERRA ESTATES`, description: item.overview } };
}
export default async function Project({ params }: Props) {
  const { slug } = await params;
  const item = projects.find(project => project.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} items={projects} />;
}
