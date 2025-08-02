'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import brideGroomImage from '../_images/2.png';

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
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="flex flex-col bg-[#FCFCF8] text-center font-bodoni tracking-tight text-[#43423D]">
      <motion.h1
        className="mt-12 font-snell text-[25px] md:text-[39px]"
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        By the Grace of God,
      </motion.h1>
      <motion.p
        className="md:mb-18 mb-16 text-[14px] md:text-[16px] lg:mb-20 lg:text-[18px]"
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        We cordially invite you to the wedding of
      </motion.p>
      <div className="lg:flex lg:flex-row lg:justify-center lg:px-12">
        {/* Randy Block */}
        <motion.div
          className="mb-6 lg:mb-0 lg:mr-6 xl:mr-16"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <h2 className="mb-2 font-bodoni text-[24px] md:text-[31px] lg:mb-4">
            AARON RANDY KUNCORO
          </h2>
          <p className="mb-2 text-[14px] md:text-[16px] lg:text-[18px]">
            2<sup>nd</sup> child, only son of
          </p>
          <p className="mx-auto mb-4 w-[80vw] text-[16px] md:mb-8 md:text-[18px] lg:mb-20 lg:w-full">
            Mr. Kwe Hendro Kuncoro & <br className="md:hidden" /> Mrs. Jap Henny
            Kusuma Dewi
          </p>
        </motion.div>

        <motion.div
          className="mb-8"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <p className="mx-auto w-[70vw] text-[16px] italic md:mb-8 md:text-[18px] lg:mb-20 lg:mt-12 lg:w-full lg:text-[20px]">
            and
          </p>
        </motion.div>

        {/* Vio Block */}
        <motion.div
          className="lg:mb-0 lg:ml-6 xl:ml-16"
          custom={3}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <h2 className="mb-2 font-bodoni text-[24px] md:text-[31px] lg:mb-4">
            VIONITA HARTANTO
          </h2>
          <p className="mb-2 text-[14px] md:text-[16px] lg:text-[18px]">
            1<sup>st</sup> child, only daughter of
          </p>
          <p className="mx-auto mb-16 w-[70vw] text-[16px] md:text-[18px] lg:w-full">
            Mr. Wahjudi Hartanto & <br className="md:hidden" />
            Mrs. Kwee Vita Kwenandar
          </p>
        </motion.div>
      </div>
      <div className="relative flex h-[360px] items-end justify-center md:h-[420px] lg:h-[520px] xl:h-[600px]">
        {/* Bride & Groom Image */}
        <motion.div
          className="relative z-10 flex h-full justify-center"
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <Image
            alt="Bride and Groom"
            className="mx-auto h-full w-auto border-2 border-solid border-[#30302E] p-1"
            src={brideGroomImage}
          />
        </motion.div>
      </div>
    </div>
  );
}
