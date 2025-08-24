"use client";

import Image from "next/image";
import bgcrop from "../_images/bg-crop.png";
import lamp from "../_images/lamp.png";
import tabledeco from "../_images/table-deco.png";
import { motion } from "motion/react";

export default function Invitation() {
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
    <div className="relative flex w-screen justify-center overflow-hidden text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      <motion.div
        className="flex flex-col items-center pt-16 font-beth text-[25px] text-[#222222]"
        variants={containerVariants}
      >
        <motion.h3
          className="pb-8"
          variants={fadeInFromTop}
          transition={{ duration: 0.4, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          You&apos;re <br />
          invited !
        </motion.h3>
        <motion.p
          className="w-[75vw] pb-8 font-schoolbell text-[16px] font-medium"
          variants={fadeInFromLeft}
          transition={{ duration: 0.4, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          We will exchange vows in GKBP Masa Depan Cerah, on October 3, 2025 at
          11 am.
        </motion.p>
        <motion.div
          className="h-auto w-[150px] pb-8"
          variants={scaleIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image alt="Lamp deco" priority src={lamp} />
        </motion.div>
        <motion.p
          className="w-[80vw] pb-8 font-schoolbell text-[16px] font-medium"
          variants={fadeInFromRight}
          transition={{ duration: 0.4, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          GKPB Masa Depan Cerah <br />
          Putat Gede Selatan <br />
          Jl. Raya Putat Gede Selatan No. 2, Surabaya
        </motion.p>
        <motion.h3
          className="pb-8"
          variants={fadeInFromTop}
          transition={{ duration: 0.4, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          So see you <br />
          there !
        </motion.h3>
        <motion.div
          variants={fadeInFromBottom}
          transition={{ duration: 0.4, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            alt="Table deco"
            className="w-[90vw] md:w-[70vw]"
            priority
            src={tabledeco}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
