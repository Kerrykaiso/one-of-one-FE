"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/app/data/marketplace";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Price } from "../ui/Primitives";
export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return <motion.article className="product-card" whileHover={{y:-4}} transition={{duration:.25}}>
    <Link href={`/products/${product.id}`} className="product-image-link">
      <div className="card-image-stack">
        <ImageWithFallback src={product.images[0]} alt={`${product.name} by ${product.artist.name}`} className="ratio-product card-model" sizes="(max-width: 640px) 50vw, 25vw" priority={priority} />
        <ImageWithFallback src={product.images[1]} alt={`Original artwork for ${product.name}`} className="ratio-product card-art" sizes="(max-width: 640px) 50vw, 25vw" />
      </div>
      <div className="product-badges">{product.isNew && <span>New</span>}{product.isBestSeller && <span>Best seller</span>}{product.stock === 0 && <span>Sold out</span>}</div>
      <span className="edition-number">ED. {product.id.slice(-3)} / 100</span>
      <span className="quick-view">View edition ↗</span>
    </Link>
    <div className="product-meta"><div><Link href={`/products/${product.id}`}>{product.name}</Link><p>Artwork by {product.artist.name}</p><small>{product.placement==="front-back"?"Front + back print":`${product.placement} print`}</small></div><strong><Price value={product.price}/></strong></div>
    <div className="swatches" aria-label="Available colors">{product.colors.map(c=><i key={c.name} title={c.name} style={{background:c.hex}}/>)}</div>
  </motion.article>;
}
export function ProductGrid({ products }: { products: Product[] }) { return <div className="product-grid">{products.map((p,i)=><ProductCard key={p.id} product={p} priority={i<4}/>)}</div>; }
