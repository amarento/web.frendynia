'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import image10 from '../_images/2.png';
import image11 from '../_images/2.png';
import image12 from '../_images/2.png';
import image7 from '../_images/7.png';
import image8 from '../_images/8.png';
import image9 from '../_images/9.png';

export default function Photoalbumtwo() {
  // Child animation variant with custom delay
  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="flex flex-col justify-center gap-0 bg-[#EFEEEB] pt-16 pb-12 md:pt-18 md:pb-16 lg:flex-row ">
      {/* First column */}
      <div className="flex flex-row items-start lg:h-1/2 lg:w-1/3 lg:flex-col xl:w-[30%]">
        <motion.div
          className="mb-6 ml-2 flex justify-center md:ml-8 lg:mb-0 lg:ml-0"
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <Image
            alt="Image 7"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image7}
            width={600}
          />
        </motion.div>
        <motion.div
          className="mt-20 mr-2 mb-6 flex justify-center self-end md:mr-8 md:mb-12 lg:mx-0 lg:mb-0"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <Image
            alt="Image 8"
            className="h-auto w-[90%] md:w-[85%]"
            height={400}
            src={image8}
            width={600}
          />
        </motion.div>
      </div>
      {/* Second column */}
      <div className="-mt-20 flex flex-row items-start lg:mt-0 lg:h-1/2 lg:w-1/3 lg:flex-col xl:w-[30%]">
        <motion.div
          className="mb-6 ml-2 flex justify-center md:mb-12 md:ml-8 lg:mb-0 lg:ml-0"
          custom={2}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <Image
            alt="Image 9"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image9}
            width={600}
          />
        </motion.div>
        <motion.div
          className="mt-20 mr-2 mb-6 flex justify-center self-end md:mr-8 lg:mx-0 lg:mb-0"
          custom={3}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <Image
            alt="Image 10"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image10}
            width={600}
          />
        </motion.div>
      </div>
      {/* Third column */}
      <div className="-mt-16 md:-mt-14 flex flex-row items-start lg:mt-0 lg:h-1/2 lg:w-1/3 lg:flex-col xl:w-[30%]">
        <motion.div
          className="mb-6 ml-2 flex justify-center md:mb-12 md:ml-8 lg:mb-0 lg:ml-0"
          custom={4}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <Image
            alt="Image 11"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image11}
            width={600}
          />
        </motion.div>
        <motion.div
          className="mt-20 mr-2 flex justify-center self-end md:mr-8 lg:mx-0 lg:mb-0"
          custom={5}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <Image
            alt="Image 12"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image12}
            width={600}
          />
        </motion.div>
      </div>
    </div>
  );
}
