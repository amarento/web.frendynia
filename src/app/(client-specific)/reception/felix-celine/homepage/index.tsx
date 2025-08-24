"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

import homepage from "../_images/homepage.png";
import paper from "../_images/bg-paper.png";
import table from "../_images/table.png";
import clip from "../_images/clip.png";
import decoframe from "../_images/deco-frame.png";

const music = "/music-felix-celine.mp3";

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

  // Music player state

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();

      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();

        setIsPlaying(true);
      } catch (err) {
        // Optionally, surface a non-blocking UI message here
        setIsPlaying(false);
      }
    }
  };

  // Pause music when unmounting

  useEffect(() => {
    const audioElement = audioRef.current;

    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  const targetDate = new Date("2025-10-03T04:00:00Z").getTime();

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
          src={paper}
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

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 40) {
        setShowScrollIndicator(false);
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <div
      className="relative flex flex-col items-center justify-center overflow-hidden text-center text-[#F0F0F0]"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <Image
        alt="Wedding background"
        className="absolute inset-0 -z-10"
        fill
        priority
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
          <div className="h-auto w-[280px] object-cover md:w-[320px]">
            <Image alt="Paper background" priority src={paper} />
          </div>
          <motion.div
            className="absolute left-0 z-20 -ml-[52px] h-auto w-[120px] md:w-[136px]"
            variants={fadeInFromLeft}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image alt="Movie Clip" priority src={clip} />
          </motion.div>
          <motion.div
            className="absolute z-10 h-auto w-[278px] md:w-[312px]"
            variants={fadeInFromRight}
            initial="hidden"
            animate={showAnimations ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          >
            <Image alt="Frame Deco" priority src={decoframe} />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate={showAnimations ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          >
            <motion.h5
              className="pb-5 pt-12 font-beth text-[20px] text-[#222222] md:pt-16 md:text-[25px]"
              variants={fadeIn}
            >
              We&apos;re getting <br />
              married
            </motion.h5>
            <motion.div
              className="h-auto w-[128px] object-cover pb-5 md:w-[140px]"
              variants={scaleIn}
            >
              <Image alt="Table" priority src={table} />
            </motion.div>
            <motion.h5
              className="pb-2 font-beth text-[18px] text-[#222222] md:text-[20px]"
              variants={fadeIn}
            >
              Felix & Celine
            </motion.h5>
            <motion.h5
              className="font-beth text-[16px] text-[#222222] md:text-[18px]"
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
      {/* Music player button */}
      <motion.div
        className="absolute bottom-3 flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={showAnimations ? "visible" : "hidden"}
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="font-schoolbell text-[16px]"
            variants={fadeInFromBottom}
          >
            Scroll down
          </motion.p>
          <motion.div variants={fadeInFromBottom}>
            <FaChevronDown />
          </motion.div>
        </motion.div>
      </motion.div>
      <audio loop preload="auto" ref={audioRef} src={music} />

      <button
        aria-label={isPlaying ? "Mute music" : "Play music"}
        className="fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#333333] shadow-lg transition hover:bg-[#444] focus:outline-none"
        onClick={toggleMusic}
        type="button"
      >
        {isPlaying ? (
          // Mute icon (simple SVG)
          <MdOutlineMusicNote className="h-6 w-6" />
        ) : (
          // Play icon (simple SVG)
          <MdOutlineMusicOff className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
