import Link from "next/link";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() { return <><main id="main" className="not-found"><p>404</p><h1>A place yet to be found.</h1><p>Explore the portfolio to find your next perspective.</p><Button asChild variant="outline"><Link href="/">Back to home</Link></Button></main><Footer /></>; }
