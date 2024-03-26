"use client";
import Image from "next/image";
import { star } from "../assets/icons";
import { motion } from "framer-motion";
import { popUp } from "../constants/motion";

function PopularProductCard({ imgURL, name, price }) {
  return (
    <motion.div
      className="flex flex-1 flex-col justify-center max-sm:w-full gap-2"
      {...popUp}
    >
      <Image src={imgURL} alt={name} width={282} height={282} />
      <div className="flex gap-2 items-center">
        <Image src={star} alt="icon" width={24} height={24} />
        <p className="leading-normal text-slate-gray font-montserrat ">(4.7)</p>
      </div>
      <p className=" font-semibold font-palanquin text-2xl leading-normal">
        {name}
      </p>
      <p className=" leading-normal font-montserrat font-semibold text-coral-red text-2xl">
        {price}
      </p>
    </motion.div>
  );
}

export default PopularProductCard;
