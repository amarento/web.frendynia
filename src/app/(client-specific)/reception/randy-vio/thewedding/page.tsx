"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";

import teaPai from "../_images/teapot.png";
import holmat from "../_images/ring.png";
import cocktail from "../_images/cocktail.png";
import reception from "../_images/dining.png";
import afterParty from "../_images/bottle.png";

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
        className="mb-8 pl-4 font-snell text-[31px] tracking-normal md:text-[39px]"
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
          alt="Tea Pai"
          className="mx-auto md:-mb-3 h-auto w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw]"
          src={teaPai}
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
          15.00 WITA
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
            "mb-14 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
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
          alt="Holy Matrimony"
          className="mx-auto mb-7 md:mb-9 h-auto w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[15vw]"
          src={holmat}
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
          16.30 WITA
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
            "mb-14 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
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
          alt="Cocktail"
          className="mx-auto mb-7 md:mb-9 h-auto w-[55vw] md:w-[47vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[15vw]"
          src={cocktail}
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
            "mb-10 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
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
          alt="Reception"
          className="mx-auto mb-1 md:-mb-1 h-auto w-[50vw] md:w-[37vw] lg:w-[35vw] xl:w-[22vw] 2xl:w-[20vw]"
          src={reception}
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
          18.30 WITA
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
            "mb-14 rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:mb-16 md:px-8 md:py-3 lg:mb-20"
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
          alt="After Party"
          className="mx-auto mb-7 md:mb-8 h-auto w-[50vw] md:w-[40vw] lg:w-[37vw] xl:w-[22vw] 2xl:w-[15vw]"
          src={afterParty}
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
