import Image from "next/image";
import type { Photo as PhotoType } from "@/data/types";

export function Photo({ image, className = "", sizes = "100vw", priority = false }: { image: PhotoType; className?: string; sizes?: string; priority?: boolean }) {
  return <div className={`photograph ${className}`}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} preload={priority} style={{ objectPosition: image.position }} /></div>;
}
