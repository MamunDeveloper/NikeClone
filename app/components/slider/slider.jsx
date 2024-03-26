"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { star } from "@/app/assets/icons";

function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className="w-full flex relative overflow-hidden">
      {data.map((card) => (
        <div
          key={card.customerName}
          style={{ translate: `${-100 * currentIndex}%` }}
          class="w-full flex flex-col justify-center items-center gap-2 flex-grow-0 flex-shrink-0 transition-all duration-700 ease-in-out"
        >
          <div>
            <Image
              src={card.imgURL}
              alt="customer"
              width={120}
              height={120}
              className=" rounded-full object-cover "
            />
          </div>
          <p className=" info-text text-center max-w-sm ">{card.feedback}</p>
          <div className="flex gap-2 justify-center items-center">
            <Image src={star} alt="start" width={24} height={24} />
            <p className="info-text">({card.rating})</p>
          </div>
          <h3 className=" font-bold text-3xl">{card.customerName}</h3>
        </div>
      ))}
    </div>
  );
}

export default Slider;
