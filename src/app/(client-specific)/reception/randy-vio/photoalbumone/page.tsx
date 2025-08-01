"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image3 from "../_images/3.png";

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
    <div className="flex flex-col justify-center gap-0 bg-[#FCFCF8] pb-4 pt-12 lg:flex-row lg:pt-16 lg:pb-8">
      <motion.div
        className="ml-2 flex justify-center md:mb-12 md:ml-8 lg:mb-0 lg:ml-0"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Image
          alt="Image 3"
          className="h-auto w-[85%] lg:w-[75%]"
          height={600}
          src={image3}
          width={1000}
        />
      </motion.div>
    </div>
  );
}
