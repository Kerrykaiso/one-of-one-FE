"use client";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Layers3, PackageCheck, PenTool, Shirt } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { artists, categories, fashionImages, products } from "@/app/data/marketplace";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "../ui/Primitives";
import { ProductGrid } from "../product/ProductCard";

const reveal = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true,margin:"-10%"}, transition:{duration:.65,ease:"easeOut" as const} };
export function Hero() { const reduce = useReducedMotion(); return <section className="home-hero">
  <ImageWithFallback src={fashionImages.hero} alt="Model wearing an artist edition" className="hero-media" sizes="100vw" priority/>
  <div className="hero-shade"/><Container className="hero-content">
    <motion.div initial={reduce?false:{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}}><Eyebrow>Drop 08 · Editions of 100</Eyebrow><h1>ART<br/><em>WORTH</em><br/>WEARING.</h1></motion.div>
    <motion.div className="hero-aside" initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}><p>Original work by independent artists, printed on premium garments in deliberately small runs.</p><div><ButtonLink href="/products" variant="light">Shop the collection</ButtonLink><Link href="/artist/signup">Become our artist <ArrowUpRight/></Link><Link href="/artists">Meet the artists</Link></div></motion.div>
    <a href="#collection" className="scroll-cue"><ArrowDown/> Scroll to discover</a>
  </Container></section>; }

export function CategorySection(){ return <motion.section id="collection" className="section" {...reveal}><Container><SectionHeading eyebrow="Find your form" title="SHOP BY SILHOUETTE"/><div className="category-grid">{categories.map((c,i)=><Link href={`/products?category=${c.slug}`} key={c.slug} className={i===0?"category-card wide":"category-card"}><ImageWithFallback src={c.image} alt={c.name}/><span><small>0{i+1}</small>{c.name}<ArrowUpRight/></span></Link>)}</div></Container></motion.section>; }
export function ProductSection(){ return <motion.section className="section cream" {...reveal}><Container><SectionHeading eyebrow="Curator's selection" title="THE PIECES PEOPLE KEEP" action={{label:"View all editions",href:"/products"}}/><ProductGrid products={products.filter(p=>p.isFeatured||p.isBestSeller).slice(0,8)}/></Container></motion.section>; }
export function DropBanner(){ return <section className="drop-banner"><ImageWithFallback src={fashionImages.editorial} alt="One of One recent drop"/><div className="drop-overlay"/><Container><div><Eyebrow>Fresh from the studio</Eyebrow><h2>DROP 08:<br/>NEW MYTHS</h2></div><div><p>Six artists. Twelve new works. Made once, then archived forever.</p><ButtonLink href="/products?sort=newest" variant="light">See the new drop</ButtonLink></div></Container></section>; }
export function ArtistFeature(){ const a=artists[0]; return <motion.section className="section artist-feature" {...reveal}><Container><div className="artist-copy"><Eyebrow>Artist in focus · Lagos</Eyebrow><h2>AMARA<br/><em>NWOSU</em></h2><blockquote>“I make images that feel like inherited memories — familiar, but impossible to place.”</blockquote><p>{a.bio}</p><ButtonLink href={`/artists/${a.id}`} variant="outline">Meet Amara</ButtonLink></div><div className="artist-visual"><ImageWithFallback src={a.avatar} alt={a.name}/><ImageWithFallback src={a.artwork} alt={`Artwork by ${a.name}`}/><span>01 / FEATURED ARTIST</span></div></Container></motion.section>; }
export function HowItWorks(){ const steps=[[PenTool,"Create","An artist submits an original work."],[Layers3,"Configure","They choose the garment and placement."],[Shirt,"Produce","We print, finish, and quality-check."],[PackageCheck,"Wear","You own a numbered artist edition."]]; return <section className="section how"><Container><SectionHeading eyebrow="From studio to street" title="HOW ONE BECOMES YOURS"/><div className="step-grid">{steps.map(([Icon,t,d],i)=><div key={String(t)}><span>0{i+1}</span><Icon/><h3>{String(t)}</h3><p>{String(d)}</p></div>)}</div></Container></section>; }
export function ArtistCta(){ return <section className="artist-cta"><Container><Eyebrow>Open call</Eyebrow><h2>YOUR ART.<br/>BEYOND THE WALL.</h2><div><p>Keep ownership. Reach new collectors. We handle the garment, production, and delivery.</p><ButtonLink href="/artist/signup" variant="light">Become an artist</ButtonLink></div></Container></section>; }
