import { notFound } from "next/navigation";
import { products } from "@/app/data/marketplace";
import { ProductDetail } from "@/app/components/product/ProductDetail";
import { Container, SectionHeading } from "@/app/components/ui/Primitives";
import { ProductGrid } from "@/app/components/product/ProductCard";
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = products.find((x) => x.id === id);
  if (!p) notFound();
  const related = products
    .filter(
      (x) =>
        x.id !== p.id &&
        (x.artist.id === p.artist.id || x.category === p.category),
    )
    .slice(0, 4);
  return (
    <>
      <Container>
        <ProductDetail product={p} />
      </Container>
      <section className="section related">
        <Container>
          <SectionHeading
            eyebrow="Keep looking"
            title={`MORE FROM ${p.artist.name.toUpperCase()}`}
            action={{
              label: "View all",
              href: `/products?artist=${p.artist.handle}`,
            }}
          />
          <ProductGrid products={related} />
        </Container>
      </section>
    </>
  );
}
