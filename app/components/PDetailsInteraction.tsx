"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Productlist } from "../types/productTypes";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PDetailsInteraction = ({ product }: { product: Productlist }) => {
  const [defaultImage, setDefaultImage] = useState("F");
  const fallbackImage = "/image3.webp";
  const imageUrl = product.images[defaultImage] ?? fallbackImage;
  return (
    <div className="w-full bg-blue-900 aspect-auto ">
      <div className=" relative aspect-[3/2] bg-red-700">
        <Image
          src={imageUrl}
          fill
          className="object-contain transition-all duration-75"
          alt="shirts"
        />
      </div>
      <div className="flex justify-center pt-2 gap-3">
        <button
          className="w-4 h-4 md:w-8 md:h-8 bg-white rounded-2xl shadow-lg flex justify-center items-center"
          onClick={() => setDefaultImage("F")}
        >
          <ArrowLeft className="text-black" />
        </button>
        <button
          className="w-4 h-4 md:w-8 md:h-8 bg-white rounded-2xl shadow-lg flex justify-center items-center"
          onClick={() => setDefaultImage("B")}
        >
          <ArrowRight className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default PDetailsInteraction;
