import React from "react";

const ClothImgCard = ({ path, title, description }) => {
  return (
    <div class="gap-2  ">
      <div>
        <img src={path} class=" h-[350px] w-[366] object-cover" />
      </div>
      <div>
        <p className="text-gray-500 ">{description}</p>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default ClothImgCard;
