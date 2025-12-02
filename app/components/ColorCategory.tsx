"use client";
import React from "react";
import { Color } from "../types/color";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
const colors: Color = [
  "red",
  "blue",
  "green",
  "yellow",
  "white",
  "army",
  "grey",
];
const ColorCategory = () => {
  const searchParams = useSearchParams();
  const active = searchParams.get("color");
  const url = new URLSearchParams(searchParams);
  const router = useRouter();
  const pathname = usePathname();
  console.log(active);
  const handleColorPick = (color: string) => {
    url.set("color", color);
    const newUrl = `${pathname}?${url.toString()}`;
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex gap-4 p-4 bg-white justify-around items-center cursor-pointer">
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleColorPick(color)}
          className={clsx(
            " px-2 py-4 w-3xs text-center rounded-2xl ring ring-white shadow-md",
            color === active ? "text-black bg-blue-900" : "text-black"
          )}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorCategory;
