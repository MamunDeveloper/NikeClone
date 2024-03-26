"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fromBottom, fromup } from "../constants/motion";

function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className=" flex flex-col flex-1 sm:mni-w-[350px] sm:w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <motion.div
        className=" w-11 h-11 rounded-full flex justify-center items-center bg-coral-red"
        {...fromup}
      >
        <Image src={imgURL} alt={label} width={24} height={24} />
      </motion.div>
      <h3 className=" mt-5 text-3xl font-palanquin font-bold leading-normal">
        {label}
      </h3>
      <motion.p
        className="mt-5 text-lg font-montserrat text-slate-gray leading-normal"
        {...fromBottom}
      >
        {subtext}
      </motion.p>
    </div>
  );
}

export default ServiceCard;
