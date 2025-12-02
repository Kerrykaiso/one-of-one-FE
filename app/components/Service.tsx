"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "./Button";
import tshirt from "../../public/t-shirt-9611374.webp";

const Service = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contain",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true, // keeps section pinned while scrolling
      },
    });
    tl.fromTo(
      ".blue",
      { xPercent: -100 }, // starting state
      { xPercent: 0, ease: "power2.out" }
    ).fromTo(
      ".yellow",
      { xPercent: 100 }, // starting state
      { xPercent: 0, ease: "power2.out" } // ending state
    );
  });
  return (
    <div className='contain relative w-full h-screen overflow-x-hidden bg-[url("/black-gradient.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className="white h-screen  absolute w-full bg-black/50">
        <div className=" h-full w-full flex">
          {/* <Image src={tshirt} fill alt='shirt' /> */}
          <div className="  items-center flex justify-around w-full gap-2 p-2">
            <div className="rounded-2xl w-full max-w-[500px] h-[500px] md:max-w-[400px] md:h-[400px] overflow-hidden relative">
              <Image src="/image6.webp" alt="shirt" fill objectFit="cover" />
              <div className="absolute rounded-2xl w-full max-w-[500px] h-[500px] md:hidden bg-black/50">
                <div className="absolute bottom-0 right-0  p-2">
                  <p className=" text-5xl font-zala">
                    Each shirt is the only version that exists on the planet
                  </p>
                  <Button>Visit store</Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:max-w-3xl">
              <p className="  md:text-6xl">
                Each shirt is the only version that exists on the planet
              </p>
              <Button>Visit store</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="blue h-screen bg-blue-500  absolute w-full"></div>
      <div className="yellow h-screen bg-yellow-500  absolute w-full"></div>
    </div>
  );
};

export default Service;
