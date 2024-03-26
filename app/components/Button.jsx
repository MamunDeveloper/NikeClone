"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { tapAnimation } from "../constants/motion";

function Button({ label, icon, whiteBackground }) {
  return (
    <motion.button
      className={`font-montserrat flex items-center justify-between gap-2 border-2 bg-coral-red px-6 py-4 rounded-full  ${
        whiteBackground && "bg-white text-slate-gray border-slate-gray"
      } `}
      {...tapAnimation}
    >
      {label}
      {icon && <Image src={icon} alt={label} width={25} height={25} />}
    </motion.button>
  );
}

export default Button;
