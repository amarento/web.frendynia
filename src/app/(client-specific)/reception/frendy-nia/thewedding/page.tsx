'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import castle from 'public/castle.png';
import dining from 'public/dining.png';
import { Button } from '~/components/ui/button';

export default function Thewedding() {
  const path = usePathname();

  // Animation variants with stagger delay
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const handleGoogleMapsHolmatClick: () => void = () => {
    setTimeout(() => {
      window.open('https://maps.app.goo.gl/YvGsbE2Tcsyrua5b8');
    }, 300);
  };

  const handleGoogleMapsReceptionClick = () => {
    setTimeout(() => {
      window.open('https://maps.app.goo.gl/1TQ35AcUKo6VdoZ68');
    }, 300);
  };

  return (
    <div className="bg-[#F8F8F7] pt-16 text-center font-lastik text-[#43423D]">
      {/* Title */}
      <motion.h1
        className="mb-8 text-[31px] md:text-[39px]"
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        The Wedding
      </motion.h1>

      {/* Holy Matrimony Section */}
      <motion.div
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <Image
          alt="Castle"
          className="mx-auto mb-5 h-auto w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
          src={castle}
        />
      </motion.div>

      <motion.h2
        className="mb-3 font-melodrame text-[25px] md:text-[31px] lg:text-[39px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        Holy Matrimony
      </motion.h2>

      {/* Grouped paragraphs */}
      <motion.div
        className="mb-5"
        custom={3}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <p className="mb-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          Saturday, 09 August 2025
        </p>
        <p className="mb-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          starts at 11:00
        </p>
        <p className="mb-2 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          GRII Graha Famili
        </p>
        <p className="mb-3 text-[10px] md:mb-5 md:text-[12px] lg:text-[14px] xl:text-[16px]">
          Ruko Plaza Graha Famili blok C1, Surabaya
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        custom={4}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <Button
          className={
            'mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20 lg:px-9 lg:py-4'
          }
          onClick={handleGoogleMapsHolmatClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* Wedding Reception Section */}
      {path.includes('holmat') ? null : (
        <>
          <motion.div
            custom={5}
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            <Image
              alt="Dining"
              className="mx-auto mb-5 h-auto w-[75vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
              src={dining}
            />
          </motion.div>
          <motion.h2
            className="mb-3 font-melodrame text-[25px] md:text-[31px] lg:text-[39px]"
            custom={6}
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            Wedding Reception
          </motion.h2>
          {/* Grouped paragraphs */}
          <motion.div
            className="mb-5"
            custom={7}
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            <p className="mb-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
              Saturday, 09 August 2025
            </p>
            <p className="mb-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
              starts at 18:00
            </p>
            <p className="mb-2 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
              X.O Palace Ballroom
            </p>
            <p className="mb-3 text-[10px] md:mb-5 md:text-[12px] lg:text-[14px] xl:text-[16px]">
              Jl. Raya Kupang Indah no. 15, Surabaya
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            custom={8}
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            <Button
              className="mb-10 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-12 md:px-8 md:py-3 lg:mb-16 lg:px-9 lg:py-4"
              onClick={handleGoogleMapsReceptionClick}
            >
              <p className="text-[12px] text-white md:text-[14px] lg:text-[16px] ">
                Open Maps
              </p>
            </Button>
          </motion.div>
        </>
      )}
    </div>
  );
}
