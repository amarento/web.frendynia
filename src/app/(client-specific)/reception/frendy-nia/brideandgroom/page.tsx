'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import blueDeco from '../_images/blue.png';
import brideGroomImage from '../_images/brideandgroom.jpg';
import pinkDeco from '../_images/pink.png';

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
    <div className="flex flex-col bg-[#EFEEEB] text-center font-lastik text-[#43423D]">
      <motion.h1
        className="mt-12 font-beau text-[#B29234] text-[25px] md:text-[39px]"
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        By the Grace of God,
      </motion.h1>
      <motion.p
        className="mb-16 text-[14px] italic md:mb-18 md:text-[16px] lg:mb-20 lg:text-[18px]"
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        we cordially invite you to be witness of our unity
      </motion.p>
      <div className="lg:flex lg:flex-row lg:justify-center lg:px-12">
        {/* Frendy Block */}
        <motion.div
          className="lg:mr-6 lg:mb-0 xl:mr-16"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h2 className="mb-2 font-queensila font-semibold text-[#B29234] text-[31px] tracking-[0.08em] md:text-[39px] lg:mb-4">
            FRENDY MIKTAM
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            The son of
          </p>
          <p className="mx-auto mb-6 w-[90vw] text-[16px] md:mb-8 md:text-[18px] lg:mb-20 lg:w-full lg:text-[20px]">
            Mr. Wong Sioeng Foek{' '}
            <span className="font-cormorant italic">&</span> Mrs. Margaretha
            Emmy
          </p>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h2 className="mb-6 text-[16px] italic md:mb-8 md:text-[20px] lg:mt-10 lg:mb-0 lg:flex lg:items-center lg:justify-center xl:text-[25px]">
            and
          </h2>
        </motion.div>

        {/* Nathania Block */}
        <motion.div
          className="lg:mb-0 lg:ml-6 xl:ml-16"
          custom={3}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h2 className="mb-2 font-queensila font-semibold text-[#B29234] text-[31px] tracking-[0.08em] md:text-[39px] lg:mb-4">
            NATHANIA VERINA
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            The daughter of
          </p>
          <p className="mx-auto mb-24 w-[90vw] text-[16px] md:text-[18px] lg:w-full lg:text-[20px]">
            Mr. Herman Tjandramulia{' '}
            <span className="font-cormorant italic">&</span> Mrs. Lili Mitra
            Lazarus
          </p>
        </motion.div>
      </div>
      <div className="relative flex h-[320px] items-end justify-center md:h-[420px] lg:h-[520px] xl:h-[600px]">
        {/* Pink Decoration */}
        <Image
          alt="Blue Flower Decoration"
          className="-bottom-12 -rotate-3 -right-16 lg:-right-20 absolute w-40 object-cover md:w-48 lg:w-56 xl:w-64"
          src={blueDeco}
        />
        {/* Bride & Groom Image */}
        <motion.div
          className="relative z-10 flex h-full justify-center"
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <Image
            alt="Bride and Groom"
            className="mx-auto h-full w-auto rounded-t-[900px] border-2 border-[#B29234] border-solid p-1"
            src={brideGroomImage}
          />
        </motion.div>
        {/* Blue Decoration */}
        <Image
          alt="Pink Flower Decoration"
          className="-bottom-16 -left-[72px] lg:-left-20 absolute w-[180px] rotate-3 object-cover md:w-[210px] lg:w-[244px] xl:w-[286px]"
          src={pinkDeco}
        />
      </div>
    </div>
  );
}
