import React from "react";
import ClothImgCard from "./ui/ClothImgCard";

const Features = () => {
  const getImgSrc = (index) => `images/cloth-${index}.png`;
  return (
    <div className="h-screen">
      <div className="flex justify-between">
        <h1 class="w-1/3 mt-20 text-5xl font-black leading-tight tracking-tight">
          NEW <br /> This Week
        </h1>
      </div>
      <div>
        <div className="grid justify-items-stretch">
          <button className="justify-self-end mb-10">See All</button>
        </div>

        <div className="flex space-x-4">
          <ClothImgCard
            path={getImgSrc(3)}
            title="V-Neck T-Shirt"
            description="Embroidered Seersucker Shirt"
          />
          <ClothImgCard
            path={getImgSrc(4)}
            title="V-Neck T-Shirt"
            description="Embroidered Seersucker Shirt"
          />
          <ClothImgCard
            path={getImgSrc(5)}
            title="V-Neck T-Shirt"
            description="Embroidered Seersucker Shirt"
          />
          <ClothImgCard
            path={getImgSrc(6)}
            title="V-Neck T-Shirt"
            description="Embroidered Seersucker Shirt"
          />
        </div>
      </div>
      <div className="my-10 flex justify-items-center">
        <button class="p-2 bg-gray-300">◀</button>
        <button class="p-2 bg-gray-300">▶</button>
      </div>
    </div>
  );
};

export default Features;
