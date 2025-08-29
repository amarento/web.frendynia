'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import bgcrop from '../_images/bg-crop.png';
import crop2 from '../_images/crop-2.png';
import wine from '../_images/wine.png';

export default function Dresscode() {
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

  return (
    <div className="relative flex w-screen justify-center overflow-hidden px-4 pt-2 pb-12 text-center text-[#F0F0F0]">
      <div
        className="-z-10 absolute inset-0"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={containerVariants}
      >
        <motion.p
          className="w-[80vw] pb-12 font-apple text-[#222222] text-[12px]"
          initial="hidden"
          transition={{ duration: 0.4, ease: 'easeOut' }}
          variants={fadeInFromBottom}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          Come in whatever you feel best in, we are truly just happy to have you
          celebrating with us.
        </motion.p>
        <motion.div
          className="flex flex-row items-center justify-center"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <motion.div
            className="h-auto w-[80px] pt-20"
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0 }}
            variants={fadeInFromLeft}
          >
            <Image alt="Crop image" priority src={wine} />
          </motion.div>
          <motion.div
            className="h-auto w-[190px] pb-8"
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
            variants={fadeInFromBottom}
          >
            <Image alt="Crop image" priority src={crop2} />
          </motion.div>
          <motion.p
            className="-rotate-6 pt-24 font-beth text-[#222222] text-[20px]"
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
            variants={fadeInFromRight}
          >
            semi-formal <br />
            attire
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
