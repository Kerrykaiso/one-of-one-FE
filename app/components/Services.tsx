import React from "react";
import Button from "./Button";
import Video from "./Video";
const Services = () => {
  return (
    <div className="w-full h-screen relative">
      <Video />
      <div className="w-full h-screen absolute bg-black/50">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col justify-center items-center">
          <h6 className="text-2xl md:text-6xl text-center">
            Every shirt is a canvas,{" "}
            <span className="text-yellow-600">every design is a voice,</span>{" "}
            every wearer is a story
          </h6>
          <Button>Shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
