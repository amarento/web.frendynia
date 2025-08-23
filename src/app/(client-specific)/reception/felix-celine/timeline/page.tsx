"use client";

import Image from "next/image";
import { motion } from "motion/react";
import bgcrop from "../_images/bg-crop.png";
// import timeline from "../_images/timeline.png";
import timeline from "../_images/pita.png";
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
          className="ml-[2px]"
          variants={scaleIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            alt="Timeline"
            priority
            height={120}
            quality={100}
            src={timeline}
            width={350}
          />
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
            className="absolute left-[35px] top-[35px]"
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
            delay: 2.5,
          }}
        >
          <Image
            src={star}
            alt="star2"
            width={24}
            height={24}
            className="absolute left-[180px] top-0"
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
            className="absolute right-[55px] top-[30px]"
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
            alt="star4"
            width={24}
            height={24}
            className="absolute left-[15px] top-[180px]"
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
            className="absolute right-[20px] top-[140px]"
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
            alt="star6"
            width={24}
            height={24}
            className="absolute left-[25px] top-[320px]"
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
            className="absolute right-[15px] top-[280px]"
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
            delay: 2.2,
          }}
        >
          <Image
            src={star}
            alt="star8"
            width={24}
            height={24}
            className="absolute left-[15px] top-[450px]"
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
            alt="star9"
            width={22}
            height={22}
            className="absolute right-[35px] top-[430px]"
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
            alt="star10"
            width={24}
            height={24}
            className="absolute left-[25px] top-[580px]"
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
            className="absolute right-[20px] top-[580px]"
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
            delay: 2.5,
          }}
        >
          <Image
            src={star}
            alt="star12"
            width={24}
            height={24}
            className="absolute left-[35px] top-[700px]"
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
            alt="star13"
            width={22}
            height={22}
            className="absolute right-[27px] top-[730px]"
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
            alt="star14"
            width={24}
            height={24}
            className="absolute left-[25px] top-[810px]"
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
            alt="star15"
            width={22}
            height={22}
            className="absolute right-[110px] top-[830px]"
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
            alt="star16"
            width={24}
            height={24}
            className="absolute left-[140px] top-[850px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
