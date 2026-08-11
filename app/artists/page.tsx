"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { artists, products } from "../data/marketplace";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "../components/ui/Primitives";

export default function ArtistsPage(){
  const [q,setQ]=useState(""); const featured=artists[0]; const list=artists.filter(a=>a.name.toLowerCase().includes(q.toLowerCase())||a.location.toLowerCase().includes(q.toLowerCase()));
  return <>
    <section className="artists-featured-hero"><Container><div className="featured-artist-copy"><Eyebrow>Top artist · August 2026</Eyebrow><h1>{featured.name}</h1><blockquote>“Art carries memory. Clothing lets that memory move.”</blockquote><p>{featured.bio} Her newest numbered editions translate personal symbols into vivid, wearable compositions.</p><div className="featured-actions"><ButtonLink href={`/artists/${featured.id}`} variant="light">Explore her work</ButtonLink><Link href="/artist/signup">Become an artist <ArrowUpRight/></Link></div></div><div className="featured-artist-media"><ImageWithFallback src={featured.avatar} alt={featured.name}/><ImageWithFallback src={featured.artwork} alt={`Original artwork by ${featured.name}`}/><span>ARTIST 01 / 06</span></div></Container></section>
    <section className="artist-community-strip"><Container><p>CREATE WITH US</p><h2>YOUR WORK COULD<br/>BE THE NEXT EDITION.</h2><div><ButtonLink href="/artist/signup" variant="dark">Apply as an artist</ButtonLink><Link href="/artist/login">Artist login →</Link></div></Container></section>
    <section className="section artist-directory"><Container><SectionHeading eyebrow="The current roster" title="MEET THE ARTISTS"/><div className="artist-search"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by artist or city" aria-label="Search artists"/></div><div className="artist-card-grid">{list.map((a,i)=><Link href={`/artists/${a.id}`} className="artist-discovery-card" key={a.id}><div className="artist-card-art"><ImageWithFallback src={a.artwork} alt={`Original artwork by ${a.name}`}/><span>0{i+1}</span></div><div className="artist-card-profile"><ImageWithFallback src={a.avatar} alt={a.name}/><div><p>{a.location}</p><h3>{a.name}</h3><small>{products.filter(p=>p.artist.id===a.id).length} available editions</small></div><ArrowUpRight/></div></Link>)}</div></Container></section>
    <section className="artist-cta"><Container><Eyebrow>Artist membership</Eyebrow><h2>KEEP THE ART.<br/>GROW THE REACH.</h2><div><p>Your work stays yours. We turn approved pieces into garments, manage production, and introduce them to new collectors.</p><ButtonLink href="/artist/signup" variant="light">Become our next artist</ButtonLink><Link href="/artist/login" className="artist-login-link">Already an artist? Sign in →</Link></div></Container></section>
  </>;
}
