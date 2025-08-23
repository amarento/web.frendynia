"use client";

import Image from "next/image";
import { motion } from "motion/react";
import bgcrop from "../_images/bg-crop.png";
import wine from "../_images/wine.png";
import crop2 from "../_images/crop-2.png";

export default function Dresscode() {
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
    <div className="relative flex w-screen justify-center overflow-hidden pb-12 pt-2 text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          className="w-[80vw] pb-12 font-apple text-[12px] text-[#222222]"
          variants={fadeInFromBottom}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Come in whatever you feel best in, we are truly just happy to have you
          celebrating with us.
        </motion.p>
        <motion.div
          className="flex flex-row items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="pt-20"
            variants={fadeInFromLeft}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
          >
            <Image
              alt="Crop image"
              priority
              height={140}
              quality={100}
              src={wine}
              width={80}
            />
          </motion.div>
          <motion.div
            className="pb-8"
            variants={fadeInFromBottom}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
          >
            <Image
              alt="Crop image"
              priority
              height={300}
              quality={100}
              src={crop2}
              width={190}
            />
          </motion.div>
          <motion.p
            className="-rotate-6 pt-24 font-beth text-[20px] text-[#222222]"
            variants={fadeInFromRight}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            semi-formal <br />
            attire
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
