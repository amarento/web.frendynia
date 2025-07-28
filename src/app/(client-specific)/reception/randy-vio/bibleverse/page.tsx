'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import deco from 'public/decoration.png';

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
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="bg-[#EFEEEB] pt-6 text-center font-lastik text-[#43423D] md:pt-8 lg:pt-10 xl:pt-12">
      <motion.div
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <Image
          alt="Leaf decoration"
          className="mx-auto mb-4 w-[12vw] md:w-[10vw] lg:w-[8vw]"
          src={deco}
        />
      </motion.div>

      <motion.p
        className="mx-auto mb-2 w-[90%] text-[14px] italic md:mb-3 md:text-[16px] xl:text-[20px]"
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        ““ So they are no longer two, but one flesh. Therefore what God has
        joined together, let no one separate. ””
      </motion.p>

      <motion.p
        className="text-[14px] md:text-[16px] xl:text-[20px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        Matthew 19:6
      </motion.p>
    </div>
  );
}
