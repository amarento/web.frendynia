"use client";

import Image from "next/image";
import { motion } from "motion/react";
import bgcrop from "../_images/bg-crop.png";
import ending from "../_images/ending.jpg";
import tabledeco from "../_images/table-deco.png";

export default function Ending() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, x: 0, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const fadeInFromTop = {
    hidden: { opacity: 0, x: 0, y: -20 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="relative w-screen overflow-hidden text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      <motion.div
        className="flex flex-col items-center overflow-hidden pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="pb-6 pt-12"
          variants={fadeInFromTop}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image alt="Background Image" src={ending} />
        </motion.div>
        <motion.h5
          className="-rotate-3 pb-4 font-beth text-[25px] text-[#333333]"
          variants={fadeInFromTop}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          forever <br />
          and always
        </motion.h5>
        <motion.div
          className="w-[90vw]"
          variants={fadeInFromBottom}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image alt="Table deco" src={tabledeco} />
        </motion.div>
      </motion.div>
    </div>
  );
}
