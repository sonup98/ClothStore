import React from "react";
import ClothImgCard from "./ui/ClothImgCard";

const Features = () => {
  const getImgSrc = (index) => `images/cloth-${index}.png`;
  return (
    <div className="h-screen px-6">
      {/* Header section with title and "See All" button */}
      <div className="flex justify-between items-start mb-10">
        <h1 className="w-1/3 mt-20 text-5xl font-black leading-tight tracking-tight">
          NEW <br /> This Week
        </h1>
        <button className="mb-4 px-4 py-2 bg-black text-white rounded">
          See All
        </button>
      </div>

      {/* Card Grid */}
      <div className="flex space-x-4 mb-10">
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

      {/* Pagination buttons */}
      <div className="flex justify-center gap-4">
        <button className="p-2 bg-gray-300 rounded">◀</button>
        <button className="p-2 bg-gray-300 rounded">▶</button>
      </div>
    </div>
  );
};

export default Features;
