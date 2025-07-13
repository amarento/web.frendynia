'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import image1 from '../_images/1.png';
import image2 from '../_images/2.png';
import image3 from '../_images/3.jpg';
import image4 from '../_images/4.png';
import image5 from '../_images/5.png';
import image6 from '../_images/6.png';

export default function Photoalbumone() {
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
    <div className="flex flex-col justify-center gap-0 bg-[#EFEEEB] pt-8 pb-12 md:pt-10 md:pt-18 md:pb-16 lg:flex-row lg:pt-12 xl:pt-16 ">
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
            alt="Image 1"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image1}
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
            alt="Image 2"
            className="h-auto w-[90%] md:w-[85%]"
            height={400}
            src={image2}
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
            alt="Image 3"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image3}
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
            alt="Image 4"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image4}
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
            alt="Image 5"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image5}
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
            alt="Image 6"
            className="h-auto w-[90%] md:w-[85%] "
            height={400}
            src={image6}
            width={600}
          />
        </motion.div>
      </div>
    </div>
  );
}
