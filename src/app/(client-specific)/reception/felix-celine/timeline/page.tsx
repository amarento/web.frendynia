"use client";

import Image from "next/image";
import { motion } from "motion/react";
import bgcrop from "../_images/bg-crop.png";
import timeline from "../_images/timeline.png";
import star from "../_images/star-3.png";
import star2 from "../_images/star-4.png";

export default function Timeline() {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="relative flex w-screen justify-center overflow-hidden pb-20 pt-8 text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="ml-[2px] h-auto w-[80vw]"
          variants={scaleIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image alt="Timeline" priority src={timeline} />
        </motion.div>
        
        {/* Decorative Stars */}
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 1,
          }}
        >
          <Image
            src={star}
            alt="star1"
            width={24}
            height={24}
            className="absolute left-[9%] top-[5%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 3.6,
          }}
        >
          <Image
            src={star}
            alt="star2"
            width={24}
            height={24}
            className="absolute left-[45%] top-0"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 1.8,
          }}
        >
          <Image
            src={star2}
            alt="star3"
            width={22}
            height={22}
            className="absolute right-[10%] top-[4%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 1.8,
          }}
        >
          <Image
            src={star}
            alt="star4"
            width={24}
            height={24}
            className="absolute left-[3%] top-[22%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 2.8,
          }}
        >
          <Image
            src={star2}
            alt="star5"
            width={22}
            height={22}
            className="absolute right-[22%] top-[16%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 3,
          }}
        >
          <Image
            src={star}
            alt="star6"
            width={24}
            height={24}
            className="absolute left-[6%] top-[40%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 1,
          }}
        >
          <Image
            src={star2}
            alt="star7"
            width={22}
            height={22}
            className="absolute right-[5%] top-[24%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 1,
          }}
        >
          <Image
            src={star}
            alt="star8"
            width={24}
            height={24}
            className="absolute bottom-[39%] left-[3%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 3.6,
          }}
        >
          <Image
            src={star2}
            alt="star9"
            width={22}
            height={22}
            className="absolute right-[7%] top-[41%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 1.8,
          }}
        >
          <Image
            src={star}
            alt="star10"
            width={24}
            height={24}
            className="absolute bottom-[22%] left-[6%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 2.8,
          }}
        >
          <Image
            src={star2}
            alt="star11"
            width={22}
            height={22}
            className="absolute bottom-[40%] right-[4%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 3.6,
          }}
        >
          <Image
            src={star2}
            alt="star12"
            width={22}
            height={22}
            className="absolute bottom-[22%] right-[6%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 2.8,
          }}
        >
          <Image
            src={star}
            alt="star13"
            width={24}
            height={24}
            className="absolute bottom-[8%] left-[12%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 1,
          }}
        >
          <Image
            src={star}
            alt="star14"
            width={24}
            height={24}
            className="absolute bottom-[5%] left-[43%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 1],
            delay: 2,
          }}
        >
          <Image
            src={star}
            alt="star15"
            width={24}
            height={24}
            className="absolute bottom-[8%] right-[20%]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
