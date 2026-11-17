import { photo } from "./photos";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    kind: "project", slug: "solis-waterfront-residences", name: "Solis Waterfront Residences", location: "Azure Reach, Port Solenne",
    area: 14800, buildingType: "Residential", year: 2026, duration: 3,
    overview: "Solis imagines a quieter relationship between home and water. Within the fictional harbour of Port Solenne, generous terraces and low, horizontal forms frame the waterfront. Pale stone and deep shade create a calm setting for everyday life.",
    description: [
      "Light-filled homes gather around sheltered gardens and a shared waterfront promenade. Broad overhangs soften the afternoon sun, while sliding glass walls connect living spaces with private terraces. Limestone, timber, and brushed metal give each residence a tactile character. Flexible rooms and practical storage support the rhythms of everyday life.",
      "Planted paths lead to an imagined pavilion and swimming terrace. Solis is a fictional development study; its location, dimensions, and programme describe a design intention. Architectural reference photographs communicate its materials rather than a completed or available development.",
    ],
    cover: photo("projects/solis-waterfront", "Low contemporary waterfront residence with a pool and broad shaded terraces"),
    gallery: [photo("projects/solis-terrace", "Glass-fronted residence opening onto a landscaped pool terrace"), photo("projects/solis-pool", "Layered balconies reflected in a still blue swimming pool"), photo("projects/solis-garden", "Long pool beside a sheltered contemporary residential pavilion")],
  },
  {
    kind: "project", slug: "the-liora-business-centre", name: "The Liora Business Centre", location: "Foundry Quarter, Bellmere",
    area: 9200, buildingType: "Commercial", year: 2025, duration: 2,
    overview: "Liora explores a welcoming workplace in the fictional city of Bellmere. A sculptural entrance leads to bright shared spaces, adaptable offices, and a planted court. The concept pairs a clear commercial identity with a warm, human scale.",
    description: [
      "Adaptable work floors surround a naturally lit atrium. Meeting rooms, quiet libraries, and informal lounges offer different settings for concentration and conversation. Timber ceilings bring warmth beneath a precise glass envelope. At street level, a covered entrance and open reception create a generous transition from the surrounding quarter.",
      "An imagined garden terrace extends the workplace outdoors, with sheltered seating and seasonal planting. Liora is a fictional commercial study, with invented specifications and no leasing offer. Reference photographs express its proposed atmosphere and materials.",
    ],
    cover: photo("projects/liora-centre", "Illuminated sculptural civic entrance beneath a dramatic blue evening sky"),
    gallery: [photo("projects/liora-atrium", "Daylit multi-storey atrium with open walkways and a glass roof"), photo("projects/liora-facade", "Precise stone and glass commercial facade viewed from below"), photo("projects/liora-meeting-room", "Warm timber meeting space with a long table and filtered natural light")],
  },
  {
    kind: "project", slug: "veridian-urban-towers", name: "Veridian Urban Towers", location: "North Terrace, Veyra",
    area: 28000, buildingType: "Mixed use", year: 2026, duration: 4,
    overview: "Veridian is a mixed-use concept for the fictional North Terrace district of Veyra. Paired buildings bring homes, workspaces, and shared gardens together. Recessed balconies give the towers a distinct rhythm above a welcoming entrance court.",
    description: [
      "A strong structural grid frames softer spaces for planting and outdoor living. The imagined apartments offer long views and separate living and sleeping areas. Flexible work studios occupy the lower floors, while the entrance court connects to a pedestrian route. Brick, dark metal, and generous glazing ground the composition in its urban setting.",
      "The proposal considers everyday life between the buildings. A sheltered courtyard and planted roof terraces offer places to meet and retreat. Veridian, its city, and its specifications are fictional; reference photographs illustrate the intended facade and atmosphere.",
    ],
    cover: photo("projects/veridian-towers", "Modern residential tower with warm evening light and a repeated balcony rhythm"),
    gallery: [photo("projects/veridian-facade", "Contemporary apartments with a strong dark structural grid"), photo("projects/veridian-corner", "Layered glass and brick facade with generous window openings"), photo("projects/veridian-balconies", "Residential balconies framed against a bright blue sky")],
  },
  {
    kind: "project", slug: "caspia-garden-district", name: "Caspia Garden District", location: "Willow Basin, Caspia",
    area: 42000, buildingType: "Residential", year: 2025, duration: 4,
    overview: "Caspia imagines a neighbourhood organised around landscape in the fictional Willow Basin. Courtyards, paths, and gardens connect low-rise homes. Sheltered outdoor rooms and a calm architectural language keep daily life close to green space.",
    description: [
      "Each residence follows the changing light of a private garden. Open living spaces lead to sheltered terraces, while bedrooms face quieter planted edges. Pale walls and timber details give the neighbourhood a coherent identity. Shared walking routes connect small gardens, with places to sit and pause woven into the landscape between homes.",
      "An imagined pavilion and communal growing beds bring shared activities into the plan. Caspia is a fictional development vision, with invented locations and proposed specifications. Reference photographs describe architectural qualities rather than a built neighbourhood.",
    ],
    cover: photo("projects/caspia-white-villa", "Pale contemporary villa with a blue pool and sheltered outdoor living spaces"),
    gallery: [photo("projects/caspia-valley-house", "Low contemporary residence set within a generous green valley landscape"), photo("projects/caspia-villa", "White residential architecture framed by trees and a soft blue sky"), photo("projects/caspia-masterplan", "Aerial view of connected contemporary residences and landscaped gardens")],
  },
  {
    kind: "project", slug: "meridian-courtyard", name: "Meridian Courtyard", location: "Lantern Quarter, Orienne",
    area: 6800, buildingType: "Residential", year: 2026, duration: 2,
    overview: "Meridian is an intimate residential concept in the fictional Lantern Quarter of Orienne. A protected open-air court offers a quiet pause within the city. Solid walls, broad glazing, and warm materials create spaces that feel private and connected.",
    description: [
      "The homes form a collection of carefully proportioned volumes. Each entrance passes through a small garden into a bright living space. Courtyard-facing rooms offer privacy without losing daylight, while upper terraces create additional outdoor rooms. Textured brick, smooth concrete, and light timber give the scheme a restrained, tactile character.",
      "Planting and seating shape an informal place to meet within the court. Meridian is a fictional residential study; all locations, dimensions, and dates are imagined. Reference photographs illustrate the relationship between its materials, openings, and outdoor spaces.",
    ],
    cover: photo("projects/meridian-evening-pavilion", "Minimal concrete architecture silhouetted beneath a soft peach evening sky"),
    gallery: [photo("projects/meridian-residence", "Warm rendered residential volumes arranged around an open landscape"), photo("projects/meridian-glazing", "Quiet glazed interior with soft daylight and pale stone surfaces"), photo("projects/meridian-brick-court", "Private brick courtyard with layered planting and generous windows")],
  },
];
