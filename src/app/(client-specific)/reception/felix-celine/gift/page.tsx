"use client";

import Image from "next/image";
import { motion } from "motion/react";
import bgcrop from "../_images/bg-crop.png";
import bg1 from "../_images/bg-img-1.png";
import envelope from "../_images/envelope.png";

export default function Gift() {
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
    <div className="relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      <motion.div
        className="relative flex h-[320px] items-center justify-center overflow-hidden text-center text-[#F0F0F0]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="absolute inset-0 -z-10"
          variants={fadeIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            alt="Background"
            className="h-[320px] w-full object-cover"
            priority
            quality={100}
            src={bg1}
          />
        </motion.div>
        <motion.div
          className="absolute top-12"
          variants={fadeInFromLeft}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            alt="Envelope"
            height={200}
            priority
            quality={100}
            src={envelope}
            width={200}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
