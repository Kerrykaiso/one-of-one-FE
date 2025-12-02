import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { Productlist } from "../types/productTypes";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Productlist }) => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="relative aspect-[3/3] w-full rounded-2xl overflow-hidden">
        <Image src="/image2.webp" fill alt="shirt" className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 text-center text-black font-zala font-medium">
        {product.name}
      </div>
      <div className="flex justify-center pt-2 gap-3">
        <button className="w-8 h-8 bg-white rounded-2xl shadow-lg flex justify-center items-center">
          <ArrowLeft className="text-black" />
        </button>
        <button className="w-8 h-8 bg-white rounded-2xl shadow-lg flex justify-center items-center">
          <ArrowRight className="text-black" />
        </button>
      </div>
      <div className="flex justify-between mx-3 mt-3">
        <p className="text-black font-zala font-bold text-xs">
          {" "}
          ${product.price}
        </p>
        <p className="text-black font-zala text-xs">
          <span className="mr-1  font-bold text-xs">Designer:</span>Pedroy
        </p>
      </div>
      <div className="flex justify-between mx-3 my-3">
        <Link href={`/Products/${product.id}`}>
          <button className=" rounded-md bg-black text-white pt-1 px-2 font-zala">
            Details
          </button>
        </Link>
        <button className="  rounded-md bg-black text-white py-2 px-3 font-zala text-xs  shadow-lg w-auto">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
