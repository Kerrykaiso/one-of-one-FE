"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus, Ruler, ShoppingBag } from "lucide-react";
import { Product, shirtVariants } from "@/app/data/marketplace";
import { useCart } from "@/app/features/cart/CartContext";
import { Price } from "../ui/Primitives";
import { GarmentMockup } from "./GarmentMockup";

export function ProductDetail({product}:{product:Product}){
  const variants=shirtVariants.filter(v=>v.active&&v.inventory>0);
  const initialVariant=variants.find(v=>v.type===product.shirtType)||variants[0];
  const [variantId,setVariantId]=useState(initialVariant.id),[colorName,setColorName]=useState(initialVariant.availableColors[0].name),[side,setSide]=useState<"front"|"back">(product.placement==="back"?"back":"front"),[size,setSize]=useState("M"),[qty,setQty]=useState(1),[added,setAdded]=useState(false);
  const variant=variants.find(v=>v.id===variantId)||initialVariant; const color=variant.availableColors.find(c=>c.name===colorName)||variant.availableColors[0];
  const selectVariant=(id:string)=>{const v=variants.find(x=>x.id===id)!;setVariantId(id);setColorName(v.availableColors[0].name);if(!v.sizes.includes(size))setSize(v.sizes[0])};
  const cart=useCart(); const add=()=>{cart.add(product,size,color.name,qty,variant.type,product.placement);setAdded(true);setTimeout(()=>setAdded(false),2200)};
  return <div className="product-detail product-detail-mockup">
    <GarmentMockup artwork={product.images[1]} color={color} garment={variant.type} placement={product.placement} side={side} onSideChange={setSide}/>
    <div className="buy-panel"><p className="breadcrumbs"><Link href="/products">Shop</Link> / {product.category.replaceAll("-"," ")}</p><div className="title-row"><div><p className="eyebrow">Edition by <Link href={`/artists/${product.artist.id}`}>{product.artist.name}</Link></p><h1>{product.name}</h1></div><strong><Price value={product.price}/></strong></div><p className="description">{product.description}</p>
      <div className="selector garment-selector"><div><b>Garment type</b><span>{variant.name}</span></div><div className="garment-options">{variants.map(v=><button key={v.id} className={variantId===v.id?"active":""} onClick={()=>selectVariant(v.id)}><b>{v.type}</b><small>{v.inventory} available</small></button>)}</div></div>
      <div className="selector edition-placement"><div><b>This edition&apos;s artwork placement</b><span>Fixed by the artist</span></div><div className="placement-fixed"><b>{product.placement==="front-back"?"Front + back":product.placement==="front"?"Front only":"Back only"}</b><p>{product.placement==="front-back"?"Artwork is printed on both sides of this edition.":`Artwork is printed on the ${product.placement} of this edition only.`}</p></div></div>
      <div className="selector"><div><b>Garment color</b><span>{color.name}</span></div><div className="color-select">{variant.availableColors.map(c=><button key={c.name} aria-label={c.name} title={c.name} className={color.name===c.name?"active":""} style={{background:c.hex}} onClick={()=>setColorName(c.name)}/>)}</div></div>
      <div className="selector"><div><b>Size</b><button className="size-guide"><Ruler/> Size guide</button></div><div className="size-select">{variant.sizes.map(s=><button key={s} className={size===s?"active":""} onClick={()=>setSize(s)}>{s}</button>)}</div></div>
      <div className="purchase-row"><div className="quantity"><button onClick={()=>setQty(Math.max(1,qty-1))}><Minus/></button><span>{qty}</span><button onClick={()=>setQty(qty+1)}><Plus/></button></div><button className="add-button" onClick={add} disabled={product.stock===0}>{added?<><Check/> Added to cart</>:product.stock===0?"Edition sold out":<><ShoppingBag/> Add this edition</>}</button></div>
      <p className={`stock ${product.stock<6?"low":""}`}>{product.stock===0?"Archived — this edition is gone":product.stock<6?`Only ${product.stock} left in this edition`:`In stock · Ships in 2–4 days`}</p><div className="buy-notes"><span>Free delivery over ₦150,000</span><span>14-day returns</span><span>Certificate of authenticity</span></div>
    </div>
  </div>;
}
