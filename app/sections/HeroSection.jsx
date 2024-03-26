"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import Image from "next/image";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

function HeroSection() {
  const [BigImage, setBigImage] = useState(bigShoe1);
  const changeBigShoeImage = (bigShoe) => {
    setBigImage(bigShoe);
  };
  return (
    <section id="home" className=" relative -top-12 w-full  px-8 py-8 md:px-12 flex flex-col lg:flex-row lg:justify-between max-container max-lg:px-0">
      <div className="lg:w-2/5 max-md:px-8">
        <div>
          <p className=" font-montserrat text-coral-red text-lg">
            Our Summer Collectionf
          </p>
          <h1 className=" font-palanquin text-4xl font-bold lg:text-8xl whitespace-nowrap relative z-40">
            <span className=" lg:bg-white">The New Arrival</span>
            <br />
            <span className=" text-coral-red">Nike</span> Shoes
          </h1>
          <p className="mt-5 mb-5 font-palanquin lg:max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, veritatis eveniet.
          </p>
          <Button label={"Shop Now"} icon={arrowRight} />
        </div>
        <div className=" flex gap-12 lg:gap-20 mt-16 lg:mt-8">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className=" text-3xl font-bold font-palanquin relative z-50">{stat.value}</p>
              <p className=" text-xl font-palanquin relative z-50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-hero bg-cover bg-center xl:min-h-screen lg:-top-16">
        <Image
          src={BigImage}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] xl:-bottom-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index + 1}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={changeBigShoeImage}
                BigImage={BigImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
