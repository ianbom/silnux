import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/animations";
import { Footer } from "@/components/footer";
import { Photo } from "@/components/photo";
import { Results, SectionHeading } from "@/components/sections";
import { photography } from "@/data/photos";
import { site } from "@/data/site-config";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "About us", description: "Meet the ideas and creative disciplines behind SOLVERRA ESTATES, an original architectural property portfolio.", openGraph: { title: "About us | SOLVERRA ESTATES", description: "Architecture shaped around everyday life." } };
export default function About() {
  return <><main id="main">
    <section className="about-intro page-intro">
      <Reveal className="about-intro-copy"><h1>About us</h1><div className="prose">
        <p>{site.about} We begin with daylight, useful rooms, and the quiet connection between home and garden.</p>
        <p>Our approach begins with listening, observation, and a clear architectural idea. We explore how materials, landscape, and practical layouts can work together. Each study connects a practical plan with a clear sense of place. {site.disclosure}</p>
      </div></Reveal>
      <Photo image={photography.about} className="about-hero" priority />
      <Reveal className="founding-year"><p>Our story begins</p><span>2021</span><p className="sr-only">The imagined founding year of SOLVERRA ESTATES.</p></Reveal>
    </section>
    <section className="section about-story">
      <Reveal><h2>Who we are</h2></Reveal>
      <Reveal className="prose">
        <p>We bring four creative perspectives to one shared question: what makes a place feel right? Architecture establishes the framework. Interior design brings it closer to daily life. Development considers the wider setting, while property consultancy helps connect individual needs with spatial possibilities. Each discipline looks at the same spaces from a different angle, then brings those observations back to the table.</p>
        <p>Our fictional story begins in 2021 with a simple courtyard sketch. A room, a tree, and a sheltered place to sit became the starting point for a broader collection of homes and neighbourhoods. That first idea still guides the portfolio: make room for the things that matter. We keep returning to that drawing when considering how a new space should work.</p>
        <p>Each concept looks at a different way of living. Some turn towards the water; others find a quieter space within the city. Across them, we return to generous daylight, useful outdoor space, and a restrained palette of materials that feel good to live with.</p>
        <p>The profiles below represent the disciplines within this imagined practice. Together, they give the portfolio a consistent voice while leaving space for each residence to have its own character, setting, and rhythm. That shared attention connects each home to the wider collection.</p>
      </Reveal>
    </section>
    <section className="about-philosophy" aria-label="Our philosophy">
      <Photo image={photography.philosophy} sizes="(max-width: 809px) calc(100vw - 32px), calc(60vw - 112px)" />
      <Reveal className="prose">
        <p>Good architecture starts with ordinary moments: opening a window, sharing a meal, finding a quiet corner. We explore spaces that make those moments easier, with clear proportions and a natural connection between inside and out.</p>
        <p>Our concepts pair precise forms with tactile materials and planted spaces. Each study asks how a home can offer both privacy and connection, with enough flexibility for the way life changes.</p>
      </Reveal>
    </section>
    <Results />
    <section className="section team-section" aria-labelledby="team-heading">
      <SectionHeading id="team-heading" title="Our Team" description="Four disciplines. One considered perspective." centered />
      <div className="team-grid">{team.map(person => <Reveal key={person.name}>
        <div className="team-portrait"><Image src={person.image} alt={person.alt} width={400} height={500} sizes="(max-width: 809px) 50vw, 25vw" /></div>
        <h3>{person.name}</h3><p>{person.role}</p>
      </Reveal>)}</div>
    </section>
  </main><Footer /></>;
}
