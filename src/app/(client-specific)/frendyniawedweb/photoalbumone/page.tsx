"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image1 from "../_images/1.png";
import image2 from "../_images/2.png";
import image3 from "../_images/3.png";
import image4 from "../_images/4.png";
import image5 from "../_images/5.png";
import image6 from "../_images/6.png";

export default function Photoalbumone() {
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
          <Image src={image1} alt="Image 1" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
          className="mb-6 md:mb-12 flex justify-center mr-2 md:mr-8 mt-20 self-end lg:mb-0 lg:mx-0"
        >
          <Image src={image2} alt="Image 2" width={600} height={400} className="w-[90%] md:w-[85%] h-auto" />
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
          <Image src={image3} alt="Image 3" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={3}
          className="mb-6 flex justify-center mr-2 md:mr-8 mt-20 self-end lg:mb-0 lg:mx-0"
        >
          <Image src={image4} alt="Image 4" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
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
          <Image src={image5} alt="Image 5" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={5}
          className="flex justify-center mr-2 md:mr-8 mt-20 self-end lg:mb-0 lg:mx-0"
        >
          <Image src={image6} alt="Image 6" width={600} height={400} className="w-[90%] md:w-[85%] h-auto " />
        </motion.div>
      </div>
    </div>
  );
}
