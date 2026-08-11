"use client";
import { useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { artists, colors, products } from "@/app/data/marketplace";
import { ProductGrid } from "./ProductCard";

const pageSize=12;
export function Catalog(){
  const search=useSearchParams(); const router=useRouter(); const top=useRef<HTMLDivElement>(null); const [drawer,setDrawer]=useState(false); const [page,setPage]=useState(1);
  const current=Object.fromEntries(search.entries());
  const set=(key:string,value:string)=>{const p=new URLSearchParams(search.toString());if(value)p.set(key,value);else p.delete(key);router.replace(`/products?${p.toString()}`,{scroll:false});setPage(1)};
  const filtered=useMemo(()=>{
    const list=products.filter(p=>(!current.category||p.category===current.category)&&(!current.artist||p.artist.handle===current.artist)&&(!current.color||p.colors.some(c=>c.name.toLowerCase()===current.color))&&(!current.placement||p.placement===current.placement)&&(!current.stock||p.stock>0)&&(!current.badge||(current.badge==="new"?p.isNew:current.badge==="featured"?p.isFeatured:p.isBestSeller))&&(!current.q||`${p.name} ${p.artist.name}`.toLowerCase().includes(current.q.toLowerCase())));
    return [...list].sort((a,b)=>current.sort==="newest"?+new Date(b.createdAt)-+new Date(a.createdAt):current.sort==="price-low"?a.price-b.price:current.sort==="price-high"?b.price-a.price:current.sort==="best"?Number(b.isBestSeller)-Number(a.isBestSeller):Number(b.isFeatured)-Number(a.isFeatured));
  },[search]);
  const pages=Math.ceil(filtered.length/pageSize); const shown=filtered.slice((page-1)*pageSize,page*pageSize);
  const Filter=()=> <div className="filters">
    <div className="filter-head"><b>Filters</b><button onClick={()=>router.replace("/products")}>Clear all</button></div>
    <FilterGroup title="Category" options={[["All",""],["T-Shirts","t-shirts"],["Hoodies","hoodies"],["Oversized","oversized-tees"],["Heavyweight","heavyweight"],["Limited","limited-editions"]]} value={current.category||""} onChange={v=>set("category",v)}/>
    <FilterGroup title="Artist" options={[["All artists",""],...artists.map(a=>[a.name,a.handle])]} value={current.artist||""} onChange={v=>set("artist",v)}/>
    <FilterGroup title="Placement" options={[["Any",""],["Front","front"],["Back","back"],["Front & back","front-back"]]} value={current.placement||""} onChange={v=>set("placement",v)}/>
    <FilterGroup title="Editions" options={[["All",""],["New arrivals","new"],["Featured","featured"],["Best sellers","best"]]} value={current.badge||""} onChange={v=>set("badge",v)}/>
    <div className="filter-group"><b>Color</b><div className="color-filters">{colors.map(c=><button className={current.color===c.name.toLowerCase()?"active":""} key={c.name} onClick={()=>set("color",current.color===c.name.toLowerCase()?"":c.name.toLowerCase())}><i style={{background:c.hex}}/>{c.name}</button>)}</div></div>
    <label className="check"><input type="checkbox" checked={current.stock==="1"} onChange={e=>set("stock",e.target.checked?"1":"")}/> In stock only</label>
  </div>;
  return <div className="catalog" ref={top}><aside><Filter/></aside><div className="catalog-main">
    <div className="catalog-toolbar"><p>{filtered.length} editions</p><div><button className="mobile-filter" onClick={()=>setDrawer(true)}><SlidersHorizontal/> Filters</button><label>Sort <select value={current.sort||"featured"} onChange={e=>set("sort",e.target.value)}><option value="featured">Featured</option><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="best">Best selling</option></select></label></div></div>
    {shown.length?<ProductGrid products={shown}/>:<div className="empty-state"><span>0 results</span><h2>NOTHING IN THIS EDITION.</h2><p>Try removing a filter or exploring the full collection.</p><button className="button button-dark" onClick={()=>router.replace("/products")}>Clear filters</button></div>}
    {pages>1&&<nav className="pagination" aria-label="Product pages"><button disabled={page===1} onClick={()=>{setPage(page-1);top.current?.scrollIntoView()}}>← Prev</button>{Array.from({length:pages},(_,i)=><button key={i} className={page===i+1?"active":""} onClick={()=>{setPage(i+1);top.current?.scrollIntoView()}}>{i+1}</button>)}<button disabled={page===pages} onClick={()=>{setPage(page+1);top.current?.scrollIntoView()}}>Next →</button></nav>}
  </div><AnimatePresence>{drawer&&<><motion.div className="drawer-backdrop" onClick={()=>setDrawer(false)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/><motion.div className="filter-drawer" initial={{y:"100%"}} animate={{y:0}} exit={{y:"100%"}}><button className="drawer-close" onClick={()=>setDrawer(false)}><X/></button><Filter/><button className="button button-dark drawer-apply" onClick={()=>setDrawer(false)}>Show {filtered.length} editions</button></motion.div></>}</AnimatePresence></div>;
}
function FilterGroup({title,options,value,onChange}:{title:string;options:string[][];value:string;onChange:(v:string)=>void}){return <fieldset className="filter-group"><legend>{title}</legend>{options.map(([n,v])=><label key={v}><input type="radio" name={title} checked={value===v} onChange={()=>onChange(v)}/><span>{n}</span></label>)}</fieldset>}
