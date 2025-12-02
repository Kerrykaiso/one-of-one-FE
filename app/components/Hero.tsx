"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import bg from "../../public/black-gradient.jpg";
import shirt2 from "../../public/shirt2.jpg";
import Button from "./Button";
const Hero = () => {
  const images = [shirt2, shirt2, shirt2, shirt2, shirt2];

  useGSAP(() => {
    gsap.from([".header", ".paragraph", ".box", ".buttons"], {
      y: 50,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });
  });
  return (
    <section className=" h-screen relative">
      <div>
        <Image src={bg} alt="shirt" fill className="relative" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col justify-center items-center">
          <p className="header text-3xl md:text-5xl text-center font-zala mb-1">
            WELCOME TO ONE <span className="text-yellow-600">OF</span> ONE
          </p>
          <p className=" paragraph text-center text-gray-300 mt-6 md:text-3xl font-bold font-zala ">
            Designs made just for you
          </p>
          <div className="hidden md:flex justify-center items-center mt-8 gap-2 ">
            {new Array(5).fill(0).map((_, index) => (
              <div
                key={index}
                className="box  md:w-[150px] md:h-[150px]  rounded-xl overflow-hidden"
              >
                <Image src={images[index]} fill alt="shirts" />{" "}
              </div>
            ))}
          </div>
          <Button>Shop now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
