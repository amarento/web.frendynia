"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image7 from "../_images/7.png";
import image8 from "../_images/8.png";
import image9 from "../_images/9.png";
import image10 from "../_images/10.png";
import image11 from "../_images/11.png";
import image12 from "../_images/12.png";

export default function Photoalbumtwo() {
  // Child animation variant with custom delay
  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col justify-center bg-[#EFEEEB] pt-16 pb-12 md:pt-18 md:pb-16 gap-0 lg:flex-row ">
      {/* First column */}
      <div className="flex flex-row items-start lg:flex-col lg:w-1/3 xl:w-[30%] lg:h-1/2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0}
          className="mb-6 flex justify-center ml-2 md:ml-8 lg:mb-0 lg:ml-0"
        >
          <Image src={image7} alt="Image 7" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
          className="mb-6 md:mb-12 flex justify-center mr-2 md:mr-8 mt-20 self-end lg:mb-0 lg:mx-0"
        >
          <Image src={image8} alt="Image 8" width={600} height={400} className="w-[90%] md:w-[85%] h-auto" />
        </motion.div>
      </div>
      {/* Second column */}
      <div className="flex flex-row items-start -mt-20 lg:flex-col lg:w-1/3 xl:w-[30%] lg:h-1/2 lg:mt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={2}
          className="mb-6 md:mb-12 flex justify-center ml-2 md:ml-8 lg:mb-0 lg:ml-0" 
        >
          <Image src={image9} alt="Image 9" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={3}
          className="mb-6 flex justify-center mr-2 md:mr-8 mt-20 self-end lg:mb-0 lg:mx-0"
        >
          <Image src={image10} alt="Image 10" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
      </div>
      {/* Third column */}
      <div className="flex flex-row items-start -mt-16 md:-mt-14 lg:flex-col lg:w-1/3 xl:w-[30%] lg:h-1/2 lg:mt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={4}
          className="mb-6 md:mb-12 flex justify-center ml-2 md:ml-8 lg:mb-0 lg:ml-0"
        >
          <Image src={image11} alt="Image 11" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={5}
          className="flex justify-center mr-2 md:mr-8 mt-20 self-end lg:mb-0 lg:mx-0"
        >
          <Image src={image12} alt="Image 12" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
      </div>
    </div>
  );
}
