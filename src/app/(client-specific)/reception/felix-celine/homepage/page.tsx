"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

import homepage from "../_images/homepage.png";
import paper from "../_images/bg-paper.png";
import table from "../_images/table.png";
import clip from "../_images/clip.png";
import decoframe from "../_images/deco-frame.png";

export default function Homepage({
  showAnimations = true,
}: {
  showAnimations?: boolean;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.7, // 0.5s delay + 0.2s original delay
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
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

  const fadeInFromTop = {
    hidden: { opacity: 0, x: 0, y: -20 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const targetDate = new Date("2025-09-19T06:30:00Z").getTime();

  // Only render countdown on client to avoid hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => (
    <motion.div
      className="relative flex rotate-2 justify-center text-[#F0F0F0] drop-shadow-2xl lg:-mb-2"
      variants={containerVariants}
      initial="hidden"
      animate={showAnimations ? "visible" : "hidden"}
    >
      <motion.div
        className="absolute inset-0"
        variants={fadeInFromBottom}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          alt="Countdown background"
          className="h-[78px] w-full object-cover"
          height={78}
          src={paper}
          width={400}
        />
      </motion.div>
      <motion.div
        className="relative flex gap-4 px-6 py-4"
        variants={fadeInFromLeft}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-[#222222]"
          >
            <span className="mb-2 font-beth text-[12px]">{item.label}</span>
            <span className="font-apple text-[20px] font-medium">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden text-center text-[#F0F0F0]">
      <Image
        alt="Wedding background"
        className="absolute inset-0 -z-10"
        fill
        priority
        quality={100}
        src={homepage}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={showAnimations ? "visible" : "hidden"}
      >
        <div className="relative z-10 flex rotate-2 items-center justify-center">
          <div className="object-cover">
            <Image
              alt="Paper background"
              height={450}
              priority
              quality={100}
              src={paper}
              width={280}
            />
          </div>
          <motion.div
            className="absolute left-0 z-20 -ml-[52px]"
            variants={fadeInFromLeft}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              alt="Movie Clip"
              height={300}
              priority
              quality={100}
              src={clip}
              width={120}
            />
          </motion.div>
          <motion.div
            className="absolute z-10"
            variants={fadeInFromRight}
            initial="hidden"
            animate={showAnimations ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              alt="Frame Deco"
              height={450}
              priority
              quality={100}
              src={decoframe}
              width={278}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate={showAnimations ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          >
            <motion.h5
              className="pb-5 pt-12 font-beth text-[20px] text-[#222222] md:text-[39px]"
              variants={fadeIn}
            >
              We&apos;re getting <br />
              married
            </motion.h5>
            <motion.div className="object-cover pb-5" variants={scaleIn}>
              <Image
                alt="Paper background"
                height={128}
                priority
                quality={100}
                src={table}
                width={128}
              />
            </motion.div>
            <motion.h5
              className="pb-2 font-beth text-[18px] text-[#222222] md:text-[39px]"
              variants={fadeIn}
            >
              Felix & Celine
            </motion.h5>
            <motion.h5
              className="font-beth text-[16px] text-[#222222] md:text-[39px]"
              variants={fadeIn}
            >
              Oct, 3 2025
            </motion.h5>
          </motion.div>
        </div>
        <div className="w-[280px] -translate-x-2 translate-y-4">
          {mounted && <Countdown date={targetDate} renderer={renderer} />}
        </div>
      </motion.div>
    </div>
  );
}
