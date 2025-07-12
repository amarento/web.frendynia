"use client";

import { motion } from "framer-motion";

import brideGroomImage from "../_images/brideandgroom.jpg";
import pinkDeco from "../_images/pink.png";
import blueDeco from "../_images/blue.png";
import Image from "next/image";

export default function Brideandgroom() {
  // Child animation variant
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col bg-[#EFEEEB] text-center font-lastik text-[#43423D]">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={0}
        className="mb-1 mt-12 font-beau text-[25px] text-[#B29234] md:text-[39px]"
      >
        By the Grace of God,
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={0}
        className="md:mb-18 mb-16 text-[14px] md:text-[16px] lg:mb-20 lg:text-[18px]"
      >
        we cordially invite you to be witness of our unity
      </motion.p>
      <div className="lg:flex lg:flex-row lg:justify-center lg:px-12">
        {/* Frendy Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
          className="lg:mb-0 lg:mr-6 xl:mr-16"
        >
          <h2 className="mb-2 font-queensila font-semibold tracking-[0.08em] text-[31px] text-[#B29234] md:text-[39px] lg:mb-4">
            FRENDY MIKTAM
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            The son of
          </p>
          <p className="mx-auto mb-6 w-[90vw] text-[16px] md:mb-8 md:text-[18px] lg:mb-20 lg:w-full lg:text-[20px]">
            Mr. Wong Sioeng Foek{" "}
            <span className="font-cormorant italic">&</span> Mrs. Margaretha
            Emmy
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={2}
        >
          <h2 className="mb-6 italic text-[16px] md:mb-8 lg:mb-0 lg:mt-10 md:text-[20px] lg:flex lg:items-center lg:justify-center lg:text-[25px] xl:text-[31px]">
            and
          </h2>
        </motion.div>

        {/* Nathania Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={3}
          className="lg:mb-0 lg:ml-6 xl:ml-16"
        >
          <h2 className="mb-2 font-queensila font-semibold tracking-[0.08em] text-[31px] text-[#B29234] md:text-[39px] lg:mb-4">
            NATHANIA VERINA
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            The daughter of
          </p>
          <p className="mx-auto mb-24 w-[90vw] text-[16px] md:text-[18px] lg:w-full lg:text-[20px]">
            Mr. Herman Tjandramulia{" "}
            <span className="font-cormorant italic">&</span> Mrs. Lili Mitra
            Lazarus
          </p>
        </motion.div>
      </div>
      <div className="relative flex h-[320px] items-end justify-center md:h-[420px] lg:h-[520px] xl:h-[600px]">
        {/* Pink Decoration */}
        <Image
          src={blueDeco}
          alt="Blue Flower Decoration"
          className="absolute -bottom-12 -rotate-3 -right-16 w-40 object-cover md:w-48 lg:-right-20 lg:w-56 xl:w-64"
        />
        {/* Bride & Groom Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0}
          className="relative z-10 flex h-full justify-center"
        >
          <Image
            src={brideGroomImage}
            alt="Bride and Groom"
            className="mx-auto h-full w-auto rounded-t-[900px] border-x-2 border-t-2 border-solid border-[#B29234] px-1 pt-1"
          />
        </motion.div>
        {/* Blue Decoration */}
        <Image
          src={pinkDeco}
          alt="Pink Flower Decoration"
          className="absolute -bottom-16 rotate-3 -left-[72px] w-[180px] object-cover md:w-[210px] lg:-left-20 lg:w-[244px] xl:w-[286px]"
        />
      </div>
    </div>
  );
}
