import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import { shoe8 } from "../assets/images";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="max-container mt-36 px-8 md:px-12 flex justify-between gap-10 w-full max-lg:flex-col"
    >
      <div className=" flex flex-col flex-1">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className=" mt-11">
          <Button label={"View details"} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <Image
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className=" object-contain"
        />
      </div>
    </section>
  );
}

export default AboutUs;
