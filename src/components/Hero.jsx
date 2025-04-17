import React from "react";
import ClothImgCard from "./ui/ClothImgCard";

const Hero = () => {
  const getImgSrc = (index) => `images/cloth-${index}.png`;
  return (
    <div class="flex gap-8 items-start mt-10">
      <div class="w-1/3 ">
        <h1 class="text-5xl font-black leading-tight tracking-tight">
          NEW <br /> COLLECTION
        </h1>
        <p class=" text-sm text-gray-700 mt-20">
          Summer
          <br />
          2024
        </p>

        <div class="flex gap-2 mt-5">
          <button class="bg-gray-300 text-black px-4 py-2 text-sm flex items-center gap-2">
            Go To Shop
            <span class="text-xl">→</span>
          </button>
          <button class="p-2 bg-gray-300">◀</button>
          <button class="p-2 bg-gray-300">▶</button>
        </div>
      </div>

      <div class="flex mx-20 gap-10">
        <img src={getImgSrc(1)} class="w-64 h-[350px] object-cover" />
        <img src={getImgSrc(2)} class="w-64 h-[350px] object-cover" />
      </div>
    </div>
  );
};

export default Hero;
