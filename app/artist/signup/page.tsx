import { ArtistSignupForm } from "@/app/components/forms/ArtistSignupForm";
import { Container, Eyebrow } from "@/app/components/ui/Primitives";
import Link from "next/link";
export default function ArtistSignupPage(){return <><section className="page-hero signup-hero"><Container><div><Eyebrow>Artist open call · 2026</Eyebrow><h1>PUT YOUR WORK<br/>INTO THE WORLD.</h1><p>Apply to release your art on a One of One edition. You create—we make and ship.</p></div><div className="signup-signin"><span>ALREADY AN ARTIST?</span><Link className="button button-dark" href="/artist/login">Sign in to your studio <b>↗</b></Link></div></Container></section><Container><ArtistSignupForm/></Container></>}
