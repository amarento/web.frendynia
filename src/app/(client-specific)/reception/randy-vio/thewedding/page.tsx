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
    <div className="bg-[#F4EFE9] pt-16 text-center font-bodoni tracking-tight text-[#30302E]">
      {/* Title */}
      <motion.h1
        className="mb-8 font-snell text-[31px] tracking-normal md:text-[39px]"
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        The Wedding Itinerary
      </motion.h1>

      {/* Tea Pai Ceremony Section */}
      <motion.div
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Image
          alt="Castle"
          className="mx-auto mb-5 h-auto w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
          src={castle}
        />
      </motion.div>

      <motion.h2
        className="mb-5 font-bodoni text-[25px] leading-tight md:text-[31px] lg:text-[39px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        Tea Pai Ceremony
        <div className="mt-1 text-[16px] italic">(Family Only)</div>
      </motion.h2>
      {/* Grouped paragraphs */}
      <motion.div
        className="mb-5"
        custom={3}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-1 text-[18px] font-semibold md:text-[16px] lg:text-[18px] xl:text-[20px]">
          14.00 WITA
        </p>
        <p className="text-[14px] font-bold italic md:mb-5 md:text-[14px] lg:text-[16px] xl:text-[18px]">
          Meeting Room{" "}
          <span className="font-normal"> at AYANA Resort, Jimbaran, Bali </span>
        </p>
      </motion.div>
      {/* Button */}
      <motion.div
        custom={4}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20 lg:px-9 lg:py-4"
          }
          onClick={handleGoogleMapsHolmatClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* Holy Matrimony Section */}
      <motion.div
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Image
          alt="Castle"
          className="mx-auto mb-5 h-auto w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
          src={castle}
        />
      </motion.div>
      <motion.h2
        className="mb-5 font-bodoni text-[25px] leading-tight md:text-[31px] lg:text-[39px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
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
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-1 text-[18px] font-semibold md:text-[16px] lg:text-[18px] xl:text-[20px]">
          15.30 WITA
        </p>
        <p className="text-[14px] font-bold italic md:mb-5 md:text-[14px] lg:text-[16px] xl:text-[18px]">
          SKY Ampitheatre{" "}
          <span className="font-normal"> at AYANA Resort, Jimbaran, Bali </span>
        </p>
      </motion.div>
      {/* Button */}
      <motion.div
        custom={4}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20 lg:px-9 lg:py-4"
          }
          onClick={handleGoogleMapsHolmatClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* Cocktail Hour Section */}
      <motion.div
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Image
          alt="Castle"
          className="mx-auto mb-5 h-auto w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
          src={castle}
        />
      </motion.div>
      <motion.h2
        className="mb-5 font-bodoni text-[25px] leading-tight md:text-[31px] lg:text-[39px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        Cocktail Hour
      </motion.h2>
      {/* Grouped paragraphs */}
      <motion.div
        className="mb-5"
        custom={3}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-1 text-[18px] font-semibold md:text-[16px] lg:text-[18px] xl:text-[20px]">
          17.30 WITA
        </p>
        <p className="text-[14px] font-bold italic md:mb-5 md:text-[14px] lg:text-[16px] xl:text-[18px]">
          SKY Lawn{" "}
          <span className="font-normal"> at AYANA Resort, Jimbaran, Bali </span>
        </p>
      </motion.div>
      {/* Button */}
      <motion.div
        custom={4}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20 lg:px-9 lg:py-4"
          }
          onClick={handleGoogleMapsHolmatClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* Dinner Reception Section */}
      <motion.div
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Image
          alt="Castle"
          className="mx-auto mb-5 h-auto w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
          src={castle}
        />
      </motion.div>
      <motion.h2
        className="mb-5 font-bodoni text-[25px] leading-tight md:text-[31px] lg:text-[39px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        Dinner Reception
      </motion.h2>
      {/* Grouped paragraphs */}
      <motion.div
        className="mb-5"
        custom={3}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-1 text-[18px] font-semibold md:text-[16px] lg:text-[18px] xl:text-[20px]">
          18.30 WITA
        </p>
        <p className="text-[14px] font-bold italic md:mb-5 md:text-[14px] lg:text-[16px] xl:text-[18px]">
          SKY Lawn{" "}
          <span className="font-normal"> at AYANA Resort, Jimbaran, Bali </span>
        </p>
      </motion.div>
      {/* Button */}
      <motion.div
        custom={4}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20 lg:px-9 lg:py-4"
          }
          onClick={handleGoogleMapsHolmatClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* After Party Section */}
      <motion.div
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Image
          alt="Castle"
          className="mx-auto mb-5 h-auto w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[20vw]"
          src={castle}
        />
      </motion.div>
      <motion.h2
        className="mb-5 font-bodoni text-[25px] leading-tight md:text-[31px] lg:text-[39px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        After Party
      </motion.h2>
      {/* Grouped paragraphs */}
      <motion.div
        className="mb-5"
        custom={3}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-1 text-[18px] font-semibold md:text-[16px] lg:text-[18px] xl:text-[20px]">
          21.30 WITA
        </p>
        <p className="text-[14px] font-bold italic md:mb-5 md:text-[14px] lg:text-[16px] xl:text-[18px]">
          After Rock{" "}
          <span className="font-normal"> at AYANA Resort, Jimbaran, Bali </span>
        </p>
      </motion.div>
      {/* Button */}
      <motion.div
        custom={4}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20 lg:px-9 lg:py-4"
          }
          onClick={handleGoogleMapsHolmatClick}
        >
          <p className="text-[14px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>
    </div>
  );
}
