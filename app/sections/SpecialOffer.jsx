import Image from "next/image";
import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

function SpecialOffer() {
  return (
    <section className="w-full max-container mt-36 px-4 md:px-12 flex flex-wrap justify-center items-center max-xl:flex-col-reverse max-xl:gap-5">
      <div>
        <Image
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className=" object-contain w-full"
        />
      </div>
      <div className=" flex flex-col flex-1 w-full justify-center">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-6 xl:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 xl:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className=" mt-11 flex gap-5">
          <Button label={"Shop Now"} icon={arrowRight} />
          <Button label={"Shop Now"} icon={arrowRight} whiteBackground={true} />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
