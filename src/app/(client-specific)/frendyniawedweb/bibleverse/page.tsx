"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import deco from "../../../../../public/decoration.png";

export default function Bibleverse() {
  // Child animation variant with custom delay
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
    <div className="bg-[#EFEEEB] pt-6 md:pt-8 lg:pt-10 xl:pt-12 text-center font-lastik text-[#43423D]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={0}
      >
        <Image
          src={deco}
          alt="Leaf decoration"
          className="mx-auto w-[12vw] md:w-[10vw] lg:w-[8vw] mb-4"
        />
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={1}
        className="mx-auto mb-2 w-[90%] italic text-[14px] md:mb-3 md:text-[16px] xl:text-[20px]"
      >
        ““ So they are no longer two, but one flesh. Therefore what God has
        joined together, let no one separate. ””
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={2}
        className="text-[14px] md:text-[16px] xl:text-[20px]"
      >
        Matthew 19:6
      </motion.p>
    </div>
  );
}
