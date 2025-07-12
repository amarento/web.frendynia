"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import castle from "../../../../../public/castle.png";
import dining from "../../../../../public/dining.png";
import { Button } from "~/components/ui/button";

export default function Thewedding() {
  // Animation variants with stagger delay
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const handleGoogleMapsHolmatClick: () => void = () => {
    setTimeout(() => {
      window.open("https://maps.app.goo.gl/YvGsbE2Tcsyrua5b8");
    }, 300);
  };

  const handleGoogleMapsReceptionClick = () => {
    setTimeout(() => {
      window.open("https://maps.app.goo.gl/1TQ35AcUKo6VdoZ68");
    }, 300);
  };

  return (
    <div className="bg-[#F8F8F7] pt-16 pb-10 md:pb-12 lg:pb-16 text-center font-lastik text-[#43423D]">
      {/* Title */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={0}
        className="mb-8 text-[31px] md:text-[39px]"
      >
        The Wedding
      </motion.h1>

      {/* Holy Matrimony Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={1}
      >
        <Image
          src={castle}
          alt="Castle"
          className="mx-auto mb-5 h-auto w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
        />
      </motion.div>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={2}
        className="mb-3 font-melodrame text-[25px] md:text-[31px] lg:text-[39px]"
      >
        Holy Matrimony
      </motion.h2>

      {/* Grouped paragraphs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={3}
        className="mb-5"
      >
        <p className="mb-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          Saturday, 09 August 2025
        </p>
        <p className="mb-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          starts at 11:00
        </p>
        <p className="mb-2 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          GRII Graha Famili
        </p>
        <p className="mb-3 text-[10px] md:mb-5 md:text-[12px] lg:text-[14px] xl:text-[16px]">
          Ruko Plaza Graha Famili blok C1, Surabaya
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={4}
      >
        <Button
          onClick={handleGoogleMapsHolmatClick}
          className="rounded-lg mb-12 md:mb-16 lg:mb-20 bg-[#AAA9A1] px-7 py-2 lg:px-8 lg:py-3 shadow"
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* Wedding Reception Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={5}
      >
        <Image
          src={dining}
          alt="Dining"
          className="mx-auto mb-5 h-auto w-[75vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
        />
      </motion.div>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={6}
        className="mb-3 font-melodrame text-[25px] md:text-[31px] lg:text-[39px]"
      >
        Wedding Reception
      </motion.h2>

      {/* Grouped paragraphs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={7}
        className="mb-5"
      >
        <p className="mb-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          Saturday, 09 August 2025
        </p>
        <p className="mb-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          starts at 18:00
        </p>
        <p className="mb-2 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          X.O Palace Ballroom
        </p>
        <p className="mb-3 text-[10px] md:mb-5 md:text-[12px] lg:text-[14px] xl:text-[16px]">
          Jl. Raya Kupang Indah no. 15, Surabaya
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={8}
      >
        <Button
          onClick={handleGoogleMapsReceptionClick}
          className="rounded-lg bg-[#AAA9A1] px-6 py-2 lg:px-7 lg:py-3 shadow"
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>
    </div>
  );
}
