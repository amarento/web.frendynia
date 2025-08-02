"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import castle from "public/castle.png";
import dining from "public/dining.png";
import { Button } from "~/components/ui/button";

export default function Thewedding() {
  const path = usePathname();

  // Animation variants with stagger delay
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const handleTeaPaiClick = () => {
    setTimeout(() => {
      window.open("https://maps.app.goo.gl/xfqEXFbeS3PLYWBr6?g_st=ipc");
    }, 300);
  };

  const handleMainEventClick = () => {
    setTimeout(() => {
      window.open("https://maps.app.goo.gl/e6BLyBGBbn979x6h8?g_st=ipc");
    }, 300);
  };

  const handleAfterPartyClick = () => {
    setTimeout(() => {
      window.open("https://maps.app.goo.gl/toEfdyvyzDXMsSAZ9?g_st=ipc");
    }, 300);
  };


  return (
    <div className="bg-[#FCFCF8] pt-12 text-center font-bodoni tracking-tight text-[#43423D]">
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
        className="mb-4 font-bodoni text-[20px] leading-tight md:mb-5 md:text-[25px] lg:text-[31px]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        Tea Pai Ceremony
        <div className="mt-1 text-[16px] italic">(Family Only)</div>
      </motion.h2>
      <motion.div
        className="mb-4 md:mb-5"
        custom={3}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-2 text-[18px] font-semibold md:mb-3 md:text-[16px] lg:text-[18px] xl:text-[20px]">
          14.30 WITA
        </p>
        <p className="text-[16px] font-semibold italic md:text-[14px] lg:text-[16px] xl:text-[18px]">
          Cendana Conference Room
        </p>
        <p className="text-[14px] font-normal">
          at AYANA Resort, Jimbaran, Bali
        </p>
      </motion.div>
      <motion.div
        custom={4}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
          }
          onClick={handleTeaPaiClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* Holy Matrimony Section */}
      <motion.div
        custom={5}
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
        className="mb-4 font-bodoni text-[20px] leading-tight md:mb-5 md:text-[25px] lg:text-[31px]"
        custom={6}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        Holy Matrimony
      </motion.h2>
      <motion.div
        className="mb-4 md:mb-5"
        custom={7}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-2 text-[18px] font-semibold md:mb-3 md:text-[16px] lg:text-[18px] xl:text-[20px]">
          16.00 WITA
        </p>
        <p className="text-[16px] font-semibold italic md:text-[14px] lg:text-[16px] xl:text-[18px]">
          SKY Ampitheatre
        </p>
        <p className="text-[14px] font-normal">
          at AYANA Resort, Jimbaran, Bali
        </p>
      </motion.div>
      <motion.div
        custom={8}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
          }
          onClick={handleMainEventClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* Cocktail Hour Section */}
      <motion.div
        custom={9}
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
        className="mb-4 font-bodoni text-[20px] leading-tight md:mb-5 md:text-[25px] lg:text-[31px]"
        custom={10}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        Cocktail Hour
      </motion.h2>
      <motion.div
        className="mb-4 md:mb-5"
        custom={11}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-2 text-[18px] font-semibold md:mb-3 md:text-[16px] lg:text-[18px] xl:text-[20px]">
          17.30 WITA
        </p>
        <p className="text-[16px] font-semibold italic md:text-[14px] lg:text-[16px] xl:text-[18px]">
          SKY Lawn
        </p>
        <p className="text-[14px] font-normal">
          at AYANA Resort, Jimbaran, Bali
        </p>
      </motion.div>
      <motion.div
        custom={12}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
          }
          onClick={handleMainEventClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* Dinner Reception Section */}
      <motion.div
        custom={13}
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
        className="mb-4 font-bodoni text-[20px] leading-tight md:mb-5 md:text-[25px] lg:text-[31px]"
        custom={14}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        Dinner Reception
      </motion.h2>
      <motion.div
        className="mb-4 md:mb-5"
        custom={15}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-2 text-[18px] font-semibold md:mb-3 md:text-[16px] lg:text-[18px] xl:text-[20px]">
          18.00 WITA
        </p>
        <p className="text-[16px] font-semibold italic md:text-[14px] lg:text-[16px] xl:text-[18px]">
          SKY Lawn
        </p>
        <p className="text-[14px] font-normal">
          at AYANA Resort, Jimbaran, Bali
        </p>
      </motion.div>
      <motion.div
        custom={16}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
          }
          onClick={handleMainEventClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>

      {/* After Party Section */}
      <motion.div
        custom={17}
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
        className="mb-4 font-bodoni text-[20px] leading-tight md:mb-5 md:text-[25px] lg:text-[31px]"
        custom={18}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        After Party
      </motion.h2>
      <motion.div
        className="mb-4 md:mb-5"
        custom={19}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <p className="mb-2 text-[18px] font-semibold md:mb-3 md:text-[16px] lg:text-[18px] xl:text-[20px]">
          21.30 WITA
        </p>
        <p className="text-[16px] font-semibold italic md:text-[14px] lg:text-[16px] xl:text-[18px]">
          After Rock
        </p>
        <p className="text-[14px] font-normal">
          at AYANA Resort, Jimbaran, Bali
        </p>
      </motion.div>
      <motion.div
        custom={20}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <Button
          className={
            "mb-12 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
          }
          onClick={handleAfterPartyClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px]">
            Open Maps
          </p>
        </Button>
      </motion.div>
    </div>
  );
}
