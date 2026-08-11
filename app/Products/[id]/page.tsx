import PDetailsInteraction from "@/app/components/PDetailsInteraction";
//import ProductSteps from "@/app/components/ProductSteps";
import { Productlist } from "@/app/types/productTypes";
import React from "react";

const ProductDetail = () => {
  const singleProduct: Productlist = {
    id: 8,
    name: "Levi’s Classic Denim",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { F: "/image2.webp", B: "/image4.webp" },
  };
  return (
    <div className=" justify-center items-center h-screen mt-12 px-32 flex flex-col md:flex-row  md:px-10 gap-3 md:gap-8  md:items-center md:justify-center rounded-2xl bg-amber-200">
      <PDetailsInteraction product={singleProduct} />
    </div>
  );
};

export default ProductDetail;
