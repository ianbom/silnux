import { photo } from "./photos";
import type { Property } from "./types";

export const properties: Property[] = [
  {
    kind: "property", slug: "the-arlo-penthouse", name: "The Arlo Penthouse", location: "Aster Promenade, Arlowen",
    area: 240, livingArea: 100, bedroomArea: 80, bathroomArea: 30, outsideArea: 30, bedrooms: 3, bathrooms: 3,
    overview: "The Arlo Penthouse imagines an elevated home in the fictional city of Arlowen. A generous living room opens towards a planted terrace, bringing daylight and distant views into the centre of the plan. Warm oak, quiet stone, and carefully chosen dark accents give the interiors a relaxed architectural character. Three bedrooms sit within a private wing, allowing the main living space to remain open and welcoming. This is a fictional residence with illustrative specifications; its photographs are selected architectural references rather than images of a property offered for sale.",
    description: [
      "An open kitchen, dining space, and lounge form the heart of the imagined penthouse. The layout gives each activity its own place while preserving a sense of connection across the room. Full-height glazing brings light deep into the interior, and sliding doors make the terrace feel like a natural extension of the living area. Built-in joinery keeps everyday objects close at hand without competing with the architecture. The material palette combines pale upholstery, textured stone, and warm timber with a few carefully chosen metal details.",
      "The private rooms are conceived as quieter retreats, with generous storage and softly filtered light. A principal suite includes a dressing area and an en-suite bathroom, while two further bedrooms offer room for family, guests, or focused work. The terrace is designed for small gatherings and unhurried mornings. Arlo's name, location, floor areas, and layout are fictional. The curated reference photography expresses an intended atmosphere and does not document a real listing, a completed interior, or an available home.",
    ],
    cover: photo("properties/arlo-living", "Warm double-height living room with dark furniture, extensive glazing, and a fireplace"),
    gallery: [photo("properties/arlo-terrace", "Light-filled contemporary lounge opening towards a green garden"), photo("properties/arlo-lounge", "Refined neutral living room with a broad window and sculptural furniture"), photo("properties/arlo-evening", "Quiet evening interior with warm lamps, timber walls, and deep seating")],
  },
  {
    kind: "property", slug: "sienna-contemporary-villa", name: "Sienna Contemporary Villa", location: "Ochre Ridge, Sienvale",
    area: 310, livingArea: 125, bedroomArea: 100, bathroomArea: 35, outsideArea: 50, bedrooms: 4, bathrooms: 3,
    overview: "Sienna Contemporary Villa is a fictional retreat imagined for the gentle landscape of Ochre Ridge. Its interior study centres on natural materials, warm light, and a comfortable connection between rooms. A timber-lined living area opens into a generous kitchen and dining space, while four bedrooms offer a quieter side of the home. Sheltered outdoor areas extend the plan into the garden. The location and specifications describe an original residential concept; the selected photographs illustrate its design language and are not evidence of an available villa.",
    description: [
      "The proposed plan follows a simple sequence from entrance to courtyard to garden. Shared rooms sit along the brightest edge, with broad openings and deep overhangs balancing sunlight and shade. Oak cabinetry and pale stone surfaces provide a restrained backdrop for everyday life. A fireplace anchors the main lounge, while a long kitchen counter creates a practical place to cook, gather, and work. Changes in ceiling height give the open plan a sense of rhythm without dividing it into enclosed rooms.",
      "The bedroom wing is arranged around a sheltered passage, keeping private rooms away from the main gathering spaces. Bathrooms use a calm palette of stone, timber, and softly reflected light. Outside, a covered terrace offers space for dining beside a planted court. Sienna is entirely fictional: its name, setting, dimensions, and room arrangement belong to the design study. Architectural reference photographs communicate the proposed materials and atmosphere, rather than showing an actual property that can be purchased or visited.",
    ],
    cover: photo("properties/sienna-living", "Minimal living room with warm timber wall panels, pale seating, and soft natural light"),
    gallery: [photo("properties/sienna-fireplace", "Airy living room with a white fireplace, natural timber beams, and arched windows"), photo("properties/sienna-bedroom", "Warm timber doorway framing a softly lit bedroom"), photo("properties/sienna-kitchen", "Minimal timber kitchen with clean cabinetry and warm neutral finishes")],
  },
  {
    kind: "property", slug: "the-cove-residence", name: "The Cove Residence", location: "Seagrass Walk, Covelle",
    area: 185, livingArea: 80, bedroomArea: 60, bathroomArea: 25, outsideArea: 20, bedrooms: 2, bathrooms: 2,
    overview: "The Cove Residence imagines a light-filled coastal home within the fictional town of Covelle. An open living area brings together soft textures, natural wood, and views towards a sheltered garden. Two bedrooms sit beyond the shared rooms, providing a measured balance of openness and privacy. The concept favours useful space and comfortable proportions over unnecessary complexity. All locations, areas, and specifications are fictional, with carefully selected reference photographs illustrating the character of the imagined home rather than documenting a live property listing.",
    description: [
      "The living space is conceived as a generous room with several distinct places to sit, read, and gather. Low furniture keeps views open, while a broad window draws natural light across the floor. The kitchen and dining area sit close to the garden, making outdoor meals and quiet afternoons part of the same daily routine. Warm timber, woven fabrics, and a few sculptural pieces introduce texture without overwhelming the simple architectural setting. Storage is integrated into the plan to keep the shared spaces calm.",
      "Both bedrooms are designed with soft light and direct access to practical storage. The principal room includes an en-suite bathroom, while a second bathroom serves the guest room and shared spaces. A modest terrace offers a sheltered place to enjoy the imagined coastal setting. The Cove Residence is a fictional architectural concept, not a home offered for sale or rent. Its photography represents selected spatial and material references; dimensions and descriptions are part of an original, invented design narrative.",
    ],
    cover: photo("properties/cove-living", "Welcoming contemporary lounge with timber accents and a large garden-facing window"),
    gallery: [photo("properties/cove-open-plan", "Bright open-plan living and dining area with a relaxed neutral palette"), photo("properties/cove-lounge", "Warm contemporary lounge with plants and comfortable seating"), photo("properties/cove-reading-room", "Quiet reading corner with a plant, pale upholstery, and natural wood")],
  },
  {
    kind: "property", slug: "oakline-modern-loft", name: "Oakline Modern Loft", location: "Timber Lane, Oakmere",
    area: 145, livingArea: 65, bedroomArea: 45, bathroomArea: 20, outsideArea: 15, bedrooms: 2, bathrooms: 2,
    overview: "Oakline Modern Loft is a fictional home imagined for a converted workshop in Oakmere. A tall living space, expressive structure, and open mezzanine give the concept its generous character. Pale walls and warm timber balance the industrial details, creating a home that feels composed rather than austere. Two bedrooms are placed away from the main gathering area, with room for both privacy and flexible working. The location, room arrangement, and specifications are invented; reference photographs illustrate an architectural direction rather than an available apartment.",
    description: [
      "The proposed loft keeps the main volume open, allowing daylight to move through the kitchen, dining area, and lounge. A light stair connects the lower floor with a quiet mezzanine, while the retained structural rhythm gives the interior a sense of history. Timber joinery introduces warmth against pale surfaces and dark metal details. Furniture is arranged to define smaller places within the large room, providing settings for conversation, reading, and everyday work without enclosing the plan.",
      "Private rooms sit within a quieter part of the layout, with built-in storage and a restrained palette. A small outdoor terrace adds a place to pause beyond the main living space. The concept explores how a generous existing volume could accommodate a comfortable contemporary home. Oakline's name, address, areas, and design details are entirely fictional. Curated interior photographs serve as spatial references and do not represent a completed conversion, a verified floor plan, or a property offered to the market.",
    ],
    cover: photo("properties/oakline-loft", "Bright contemporary loft with a light mezzanine staircase and generous open living space"),
    gallery: [photo("properties/oakline-living", "Open-plan loft interior with exposed structure and white contemporary seating"), photo("properties/oakline-studio", "Industrial loft lounge with timber flooring and generous windows"), photo("properties/oakline-dining", "Timber-lined loft dining space with a warm, lived-in architectural character")],
  },
];
