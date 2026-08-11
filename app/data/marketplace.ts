export type Artist = {
  id: string; name: string; handle: string; bio: string; location: string;
  avatar: string; artwork: string; featured?: boolean;
};

export type ProductColor = { name: string; hex: string };
export type Product = {
  id: string; name: string; slug: string; description: string; price: number;
  category: string; shirtType: string; colors: ProductColor[]; artist: Artist;
  images: string[]; placement: "front" | "back" | "front-back"; stock: number;
  isNew: boolean; isFeatured: boolean; isBestSeller: boolean; createdAt: string;
};

export type ShirtVariant = {
  id: string; name: string; type: string; availableColors: ProductColor[];
  sizes: string[]; basePrice: number; inventory: number; active: boolean;
};

export const fashionImages = {
  hero: "/images/editorial/neon-black-tee.jpg",
  editorial: "/images/editorial/pink-dream-tee.jpg",
  products: [
    "/images/editorial/colorblock-tee.jpg",
    "/images/editorial/parrot-tee.jpg",
    "/images/editorial/neon-black-tee.jpg",
    "/images/editorial/pink-dream-tee.jpg",
    "/images/editorial/red-studio-tee.jpg",
  ],
  artworks: [
    "/images/artworks/line-portrait.jpg",
    "/images/artworks/city-collage.jpg",
    "/images/artworks/ancestral-mask.jpg",
    "/images/artworks/black-cockatoo.jpg",
  ],
  artists: [
    "/images/artists/amara.jpg",
    "/images/artists/jon.jpg",
    "/images/artists/mika.jpg",
    "/images/artists/darius.jpg",
    "/images/artists/lea.jpg",
    "/images/artists/kofi.jpg",
  ],
};

export const colors: ProductColor[] = [
  { name: "Black", hex: "#171717" }, { name: "White", hex: "#f5f3ee" },
  { name: "Cream", hex: "#d9d0bb" }, { name: "Slate", hex: "#667085" },
  { name: "Cobalt", hex: "#2146f3" }, { name: "Forest", hex: "#214132" },
];

const artistSeed = [
  ["Amara Nwosu", "amaraworks", "Abstract symbols shaped by Lagos energy and old family photographs.", "Lagos, NG"],
  ["Jon Bell", "jonbell", "Bold typographic studies with a dry, subversive sense of humor.", "London, UK"],
  ["Mika Tanaka", "mikatanaka", "Dreamlike linework exploring nature, memory, and quiet transformation.", "Kyoto, JP"],
  ["Darius Cole", "dariuscole", "Graphic compositions drawn from sound systems and city architecture.", "Brooklyn, US"],
  ["Léa Moreau", "leamoreau", "Soft surrealism and found textures assembled into wearable stories.", "Paris, FR"],
  ["Kofi Mensah", "kofimakes", "Color-rich marks celebrating movement, ritual, and contemporary Accra.", "Accra, GH"],
] as const;

export const artists: Artist[] = artistSeed.map((a, i) => ({
  id: `artist-${i + 1}`, name: a[0], handle: a[1], bio: a[2], location: a[3],
  avatar: fashionImages.artists[i], artwork: fashionImages.artworks[i % fashionImages.artworks.length], featured: i < 2,
}));

export const shirtVariants: ShirtVariant[] = [
  { id: "v1", name: "Essential Tee", type: "Regular T-Shirt", availableColors: colors.slice(0, 5), sizes: ["XS","S","M","L","XL","2XL"], basePrice: 38, inventory: 120, active: true },
  { id: "v2", name: "Studio Oversized", type: "Oversized T-Shirt", availableColors: colors, sizes: ["S","M","L","XL"], basePrice: 48, inventory: 76, active: true },
  { id: "v3", name: "Archive Heavyweight", type: "Heavyweight T-Shirt", availableColors: colors.slice(0, 4), sizes: ["S","M","L","XL","2XL"], basePrice: 56, inventory: 42, active: true },
  { id: "v4", name: "Gallery Hoodie", type: "Hoodie", availableColors: [colors[0], colors[2], colors[3], colors[5]], sizes: ["S","M","L","XL"], basePrice: 88, inventory: 54, active: true },
  { id: "v5", name: "After Hours Long Sleeve", type: "Long Sleeve", availableColors: colors.slice(0, 5), sizes: ["S","M","L","XL"], basePrice: 64, inventory: 38, active: true },
  { id: "v6", name: "Studio Polo", type: "Polo", availableColors: [colors[0], colors[1], colors[2], colors[4], colors[5]], sizes: ["S","M","L","XL","2XL"], basePrice: 72, inventory: 46, active: true },
];

const names = ["Afterimage", "Static Bloom", "No Fixed Address", "Blue Hour", "Soft Power", "Night Transit", "Human Error", "New Myth", "Common Ground", "Elsewhere", "Signal Loss", "Second Sun"];
const cats = ["t-shirts", "hoodies", "oversized-tees", "heavyweight", "limited-editions"];
const placements: Product["placement"][] = ["front", "back", "front-back"];
export const products: Product[] = Array.from({ length: 42 }, (_, i) => {
  const artist = artists[i % artists.length];
  const category = cats[i % cats.length];
  const base = category === "hoodies" ? 88 : category === "limited-editions" ? 110 : 52;
  const name = `${names[i % names.length]} ${i > 11 ? String(Math.floor(i / 12) + 1).padStart(2, "0") : ""}`.trim();
  return {
    id: `p-${String(i + 1).padStart(3, "0")}`, slug: name.toLowerCase().replace(/\s+/g, "-"), name,
    description: `A limited artist edition by ${artist.name}, printed in small runs on premium responsibly sourced cotton. Designed to soften with wear, never fade into the background.`,
    price: base + (i % 4) * 7, category,
    shirtType: category === "hoodies" ? "Hoodie" : category === "oversized-tees" ? "Oversized T-Shirt" : category === "heavyweight" ? "Heavyweight T-Shirt" : "Regular T-Shirt",
    colors: [colors[i % colors.length], colors[(i + 1) % colors.length], colors[(i + 2) % colors.length]], artist,
    images: [fashionImages.products[i % fashionImages.products.length], fashionImages.artworks[i % fashionImages.artworks.length]],
    placement: placements[i % 3], stock: i % 13 === 0 ? 0 : 4 + (i * 7) % 28,
    isNew: i < 10, isFeatured: i % 5 === 0, isBestSeller: i % 7 === 0,
    createdAt: new Date(2026, 7, 1 - i).toISOString(),
  };
});

export const categories = [
  { name: "T-Shirts", slug: "t-shirts", image: fashionImages.products[1] },
  { name: "Hoodies", slug: "hoodies", image: fashionImages.products[2] },
  { name: "Oversized", slug: "oversized-tees", image: fashionImages.products[3] },
  { name: "Limited Editions", slug: "limited-editions", image: fashionImages.products[4] },
];
