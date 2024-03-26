import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

function PopularSection() {
  return (
    <section id="products" className="max-container max-sm:mt-12 px-8 md:px-12">
      <div className="flex flex-col gap-5">
        <h2 className=" text-4xl">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className=" font-montserrat text-slate-gray lg:max-w-lg mt-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className=" mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-14 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularSection;
