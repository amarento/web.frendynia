'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import image3 from '../_images/3.png';

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
    <div className="md:pt-18 flex flex-col justify-center gap-0 bg-[#FCFCF8] pt-12 md:pb-16 md:pt-10 lg:flex-row lg:pt-12 xl:pt-16">
      <motion.div
        className="mb-6 ml-2  flex justify-center md:mb-12 md:ml-8 lg:mb-0 lg:ml-0"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Image
          alt="Image 3"
          className="h-auto w-[85%]"
          height={400}
          src={image3}
          width={600}
        />
      </motion.div>
    </div>
  );
}
