"use client";
import Link from "next/link";
import React from "react";
import { Shirt, Search } from "lucide-react";
export default function Navbar() {
  const navPath = [
    {
      name: "About us",
      path: "/About",
      icon: <Search className="w-4 h-4 mt-0.5" />,
    },
    {
      name: "Shirts",
      path: "/Products",
      icon: <Shirt className="w-4 h-4 mt-0.5" />,
    },
  ];
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-500 flex flex-row justify-between items-center p-4  h-[60px] w-full z-50 top-0 fixed ">
      <p>Logo</p>
      <div className="flex">
        {navPath.map((path) => (
          <div key={path.name}>
            <Link
              href={path.path}
              className="p-2 m-2 text-sm font-bold text-gray-700 hover:text-gray-900 bg-red-100 rounded-md flex gap-0.5"
            >
              {path.icon}
              {path.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
