export type Photo = { src: string; width: number; height: number; alt: string; position?: string };

type ListingBase = {
  slug: string;
  name: string;
  location: string;
  overview: string;
  description: string[];
  area: number;
  cover: Photo;
  gallery: Photo[];
};

export type Project = ListingBase & {
  kind: "project";
  buildingType: "Residential" | "Commercial" | "Mixed use";
  year: number;
  duration: number;
};

export type Property = ListingBase & {
  kind: "property";
  bedrooms: number;
  bathrooms: number;
  livingArea: number;
  bedroomArea: number;
  bathroomArea: number;
  outsideArea: number;
};

export type Listing = Project | Property;
