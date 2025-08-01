"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image4 from "../_images/4.png";
import image5 from "../_images/5.png";
import image6 from "../_images/6.png";
import image7 from "../_images/7.png";
import image8 from "../_images/8.png";
import image9 from "../_images/9.png";

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
    <div className="md:pt-18 flex flex-col justify-center gap-0 bg-[#FAFAF8] pb-12 pt-16 md:pb-16 lg:flex-row">
      {/* First column */}
      <div className="flex flex-row items-start lg:h-1/2 lg:w-1/3 lg:flex-col xl:w-[30%]">
        <motion.div
          className="mb-6 ml-2 flex justify-center md:ml-8 lg:mb-0 lg:ml-0"
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <Image
            alt="Image 4"
            className="h-auto w-[90%] md:w-[85%]"
            height={400}
            src={image4}
            width={600}
          />
        </motion.div>
        <motion.div
          className="mb-6 mr-2 mt-20 flex justify-center self-end md:mb-12 md:mr-8 lg:mx-0 lg:mb-0"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <Image
            alt="Image 5"
            className="h-auto w-[90%] md:w-[85%]"
            height={400}
            src={image5}
            width={600}
          />
        </motion.div>
      </div>
      {/* Second column */}
      <div className="-mt-20 flex flex-row items-start lg:mt-0 lg:h-1/2 lg:w-1/3 lg:flex-col xl:w-[30%]">
        <motion.div
          className="mb-6 ml-2 flex justify-center md:mb-12 md:ml-8 lg:mb-0 lg:ml-0"
          custom={2}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <Image
            alt="Image 6"
            className="h-auto w-[90%] md:w-[85%]"
            height={400}
            src={image6}
            width={600}
          />
        </motion.div>
        <motion.div
          className="mb-6 mr-2 mt-20 flex justify-center self-end md:mr-8 lg:mx-0 lg:mb-0"
          custom={3}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <Image
            alt="Image 7"
            className="h-auto w-[90%] md:w-[85%]"
            height={400}
            src={image7}
            width={600}
          />
        </motion.div>
      </div>
      {/* Third column */}
      <div className="-mt-20 flex flex-row items-start md:-mt-14 lg:mt-0 lg:h-1/2 lg:w-1/3 lg:flex-col xl:w-[30%]">
        <motion.div
          className="mb-6 ml-2 flex justify-center md:mb-12 md:ml-8 lg:mb-0 lg:ml-0"
          custom={4}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <Image
            alt="Image 8"
            className="h-auto w-[90%] md:w-[85%]"
            height={400}
            src={image8}
            width={600}
          />
        </motion.div>
        <motion.div
          className="mr-2 mt-20 flex justify-center self-end md:mr-8 lg:mx-0 lg:mb-0"
          custom={5}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <Image
            alt="Image 9"
            className="h-auto w-[90%] md:w-[85%]"
            height={400}
            src={image9}
            width={600}
          />
        </motion.div>
      </div>
    </div>
  );
}
