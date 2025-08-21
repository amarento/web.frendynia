"use client";

import Image from "next/image";
import { motion } from "motion/react";
import bgcrop from "../_images/bg-crop.png";
import bouquet from "../_images/bouquet.png";
import crop1 from "../_images/crop-1.png";

export default function Lovestory() {
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
    <div className="relative flex w-screen flex-col justify-center overflow-hidden pb-12 pt-16 text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      <motion.div
        className="mx-auto w-[75vw] font-schoolbell text-[16px] italic leading-[1.6] text-[#222222]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          className="mb-6"
          variants={fadeInFromTop}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          You know that person from middle school who you knew existed but never
          actually talked to?
        </motion.p>
        <motion.p
          className="mb-6"
          variants={fadeInFromBottom}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Yeah, turns out they could end up being the love of your life. We
          spent years being complete strangers until 2017 hit and suddenly we
          couldn&apos;t stop talking. Classic us — finally realizing we actually
          really like each other right before Felix heads to Germany and Celine
          stays in Surabaya. Most people would call it terrible timing. We
          called it a challenge. Eight years, countless Sunday video dates, and
          way too much timezone drama later, we&apos;re still that annoyingly
          happy long-distance couple everyone secretly wants to be.
        </motion.p>
        <motion.p
          variants={fadeInFromTop}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          The punchline? We&apos;re getting married in 2025 because apparently
          when the universe decides you belong together, not even living on
          different continents can mess with that plan.
        </motion.p>
      </motion.div>
      <motion.div
        className="mt-12 flex flex-row items-center justify-center gap-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="pb-4 pt-32"
          variants={fadeInFromLeft}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
        >
          <Image
            alt="Bouquet"
            priority
            height={120}
            quality={100}
            src={bouquet}
            width={75}
          />
        </motion.div>
        <motion.div
          className="pb-8"
          variants={scaleIn}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
        >
          <Image
            alt="Crop image"
            priority
            height={300}
            quality={100}
            src={crop1}
            width={150}
          />
        </motion.div>
        <motion.h3
          className="-rotate-6 pt-28 font-beth text-[25px] text-[#222222]"
          variants={fadeInFromRight}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          our love <br />
          story
        </motion.h3>
      </motion.div>
    </div>
  );
}
