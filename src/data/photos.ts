import images from "./images.json";
import type { Photo } from "./types";

export function photo(key: keyof typeof images, alt: string, position = "50% 50%"): Photo {
  return { ...images[key], alt, position };
}

export const photography = {
  hero: photo("general/hillside-sunset-pool", "Contemporary hillside house and infinity pool beneath a vivid sunset sky", "50% 43%"),
  introduction: photo("general/sculpted-glass", "Sweeping contemporary glass facade against a pale blue sky"),
  about: photo("general/sunset-architecture", "Sculpted concrete architecture framed by the soft colours of dusk"),
  philosophy: photo("general/water-and-stone", "Quiet contemporary residence with reflective water and pale stone finishes"),
  contact: photo("general/civic-entrance", "Layered glass and steel architecture with generous public walkways"),
  footer: photo("general/curved-facade", "Curving glass architecture with a calm blue and charcoal palette"),
};
