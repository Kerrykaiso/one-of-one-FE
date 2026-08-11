"use client";
import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/app/features/cart/CartContext";
import { usePathname } from "next/navigation";

const links = [["Shop","/products"],["Artists","/artists"],["About","/about"],["Contact","/contact"]];
export function SiteHeader() {
  const [menu, setMenu] = useState(false); const [search, setSearch] = useState(false); const { count } = useCart(); const pathname=usePathname().toLowerCase();
  const isActive=(href:string)=>pathname===href||pathname.startsWith(`${href}/`);
  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menu]);
  return <>
    <div className="announcement"><span>Worldwide shipping</span><strong>Small-run artist editions · Never mass produced</strong><span>New drop: 08.18</span></div>
    <header className="site-header"><Link href="/" className="wordmark" aria-label="One of One home">ONE / ONE</Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([n,h]) => <Link key={h} href={h} className={isActive(h)?"active":""} aria-current={isActive(h)?"page":undefined}><span>{n}</span><i/></Link>)}</nav>
      <div className="header-actions">
        <button aria-label="Search" onClick={() => setSearch(v=>!v)}><Search/></button><Link aria-label="Account" href="/login" className={pathname==="/login"||pathname==="/signup"?"active-action":""}><UserRound/></Link>
        <Link aria-label={`Cart with ${count} items`} href="/cart" className={`cart-icon ${pathname==="/cart"?"active-action":""}`}><ShoppingBag/>{count > 0 && <b>{count}</b>}</Link>
        <button className="menu-button" aria-label="Open menu" onClick={() => setMenu(true)}><Menu/></button>
      </div>
      <AnimatePresence>{search && <motion.form initial={{height:0,opacity:0}} animate={{height:72,opacity:1}} exit={{height:0,opacity:0}} className="search-panel" action="/products"><Search/><input name="q" autoFocus placeholder="Search artists, editions, stories…" aria-label="Search products"/><button type="button" onClick={()=>setSearch(false)}><X/></button></motion.form>}</AnimatePresence>
    </header>
    <AnimatePresence>{menu && <motion.div className="mobile-menu" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{type:"spring", damping:28, stiffness:240}}>
      <div><Link href="/" className="wordmark" onClick={()=>setMenu(false)} aria-label="One of One home">ONE / ONE</Link><button onClick={()=>setMenu(false)} aria-label="Close menu"><X/></button></div>
      <nav>{links.map(([n,h], i)=><motion.div key={h} initial={{x:40,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:.05*i}}><Link href={h} className={isActive(h)?"active":""} aria-current={isActive(h)?"page":undefined} onClick={()=>setMenu(false)}><small>0{i+1}</small><span>{n}</span><i/></Link></motion.div>)}</nav>
      <div className="mobile-account-links"><Link href="/login" onClick={()=>setMenu(false)}>Customer sign in</Link><Link href="/artist/login" onClick={()=>setMenu(false)}>Artist sign in</Link></div>
      <p>ART WORTH WEARING.<br/>MADE IN SMALL NUMBERS.</p>
    </motion.div>}</AnimatePresence>
  </>;
}
