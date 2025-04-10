import React from "react";
import ClothImgCard from "./ui/ClothImgCard";

const Collection = () => {
  const getImgSrc = (index) => `images/cloth-${index}.png`;
  return (
    <div className="h-screen mt-40">
      <div className="flex justify-between">
        <h1 class="w-1/3 mt-20 text-5xl font-black leading-tight tracking-tight">
          XIV <br /> Collections <br />
          23-24
        </h1>
      </div>
      <div>
        <div className="flex mt-10 justify-between items-center mb-10">
          <div className="flex gap-4">
            <button>(ALL)</button>
            <button>Men</button>
            <button>Women</button>
            <button>Kid</button>
          </div>
          <div className="flex gap-4">
            <button>Filter</button>
            <button>Sorts</button>
          </div>
        </div>

        <div className="flex justify-between space-x-3">
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
        </div>
      </div>
      <div className="flex my-5 justify-center gap-4 ">
        <button className="justify-center mb-10">More</button>
        <button className="justify-center rotate-90 mb-10">▶</button>
      </div>
    </div>
  );
};

export default Collection;
