import { Suspense } from "react";
import { Catalog } from "../components/product/Catalog";
import { Container, Eyebrow } from "../components/ui/Primitives";
export default function ProductsPage(){return <><section className="page-hero"><Container><Eyebrow>The full archive · 42 editions</Eyebrow><h1>WEAR THE<br/>UNREPEATABLE.</h1><p>Original works. Premium garments. Small runs that disappear when they&apos;re gone.</p></Container></section><Container><Suspense><Catalog/></Suspense></Container></>}
