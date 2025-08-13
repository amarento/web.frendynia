"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import deco from "public/decoration.png";

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
    <div className="bg-[#FCFCF9] pt-8 text-center font-bodoni tracking-tight text-[#43423D] md:pt-8 lg:pt-10 xl:pt-12">
      <motion.div
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <hr
          className="mx-auto mb-4 w-6 border-t-2 border-[#333333] md:w-32 lg:w-40"
          aria-hidden="true"
        />
      </motion.div>

      <motion.p
        className="mx-auto mb-1 w-[90%] text-[16px] italic md:text-[18px] xl:text-[20px]"
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        “ We love because He first loved us. ”
      </motion.p>

      <motion.p
        className="text-[14px] md:text-[16px] xl:text-[20px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        1 John 4:19
      </motion.p>
    </div>
  );
}
