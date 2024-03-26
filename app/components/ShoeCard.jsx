import { motion } from "framer-motion";
import Image from "next/image";
import { hoverAnimation } from "../constants/motion";

function ShoeCard({ imgURL, changeBigShoeImage, BigImage }) {
  return (
    <motion.div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 bg-primary 
          ${BigImage === imgURL.bigShoe && `border-3 border-coral-red`}
      `}
      {...hoverAnimation}
    >
      <div
        className={` flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4`}
      >
        <Image
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-contain"
          onClick={() => changeBigShoeImage(imgURL.bigShoe)}
        />
      </div>
    </motion.div>
  );
}

export default ShoeCard;
