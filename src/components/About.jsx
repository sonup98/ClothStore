import React from "react";
import ClothImgCard from "./ui/ClothImgCard";

const About = () => {
  const getImgSrc = (index) => `images/cloth-${index}.png`;
  return (
    <section className="m-40 py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-wide uppercase mb-4">
          Our Approach to Fashion Design
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Elegant Vogue, we blend creativity with craftsmanship to create
          fashion that transcends trends and stands the test of time. Each
          design is meticulously crafted, ensuring the highest quality and
          exquisite finish.
        </p>
      </div>

      {/* Image Row */}
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
    </section>
  );
};

export default About;
