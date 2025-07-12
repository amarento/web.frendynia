"use client";

import React, { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

import backgroundImage from "../_images/homepage.jpg";
import overlayImage from "../_images/overlay.jpg";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";

const music = "./music.mp3";

export default function Homepage() {
  const targetDate = new Date("2025-08-09T18:00:00").getTime();

  // fadeIn variant with custom delay
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Only render countdown on client to avoid hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Music player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play music after user interaction
  const handleEnter = async () => {
    setShowOverlay(false);
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio playback failed:", err);
        setIsPlaying(false);
      }
    }
  };

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
        // Optionally, show a message to the user
        console.error("Audio playback failed:", err);
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      custom={4}
      className="flex justify-center gap-4 text-xl text-[#E0E0E0] drop-shadow-2xl"
    >
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item) => (
        <span key={item.label} className="flex flex-col items-center">
          <span className="text-[14px]">{item.label}</span>
          <span className="flex h-[44px] w-[46px] items-center justify-center rounded-2xl bg-[#88888850] pt-1 text-[25px]">
            {String(item.value).padStart(2, "0")}
          </span>
        </span>
      ))}
    </motion.div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden text-center font-lastik">
      <div className="relative flex min-h-screen flex-col items-center">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          aria-hidden="true"
          sizes="100vw"
          className="inset-0 z-0 h-full w-full object-contain object-bottom transition-all duration-300"
          style={{
            objectFit: "cover",
            objectPosition: "center bottom",
          }}
          loading="eager"
        />
        <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0}
          className="mt-20 font-cormorant text-[25px] font-semibold text-[#E0E0E0] drop-shadow-2xl lg:-mb-1 lg:text-[31px]"
        >
          THE WEDDING
        </motion.h4>

        <motion.h6
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
          className="-mb-4 font-beau text-[25px] text-[#E0E0E0] drop-shadow-2xl lg:-mb-6 lg:text-[31px]"
        >
          of
        </motion.h6>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={2}
          className="mb-5 font-cormorant text-[61px] font-medium text-[#E0E0E0] drop-shadow-2xl lg:mb-2 lg:text-[76px]"
        >
          Frendy <span className="italic">&</span> Nia
        </motion.h1>

        <motion.h5
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={3}
          className="mb-3 text-[20px] text-[#E0E0E0] drop-shadow-2xl"
        >
          09 AUGUST 2025
        </motion.h5>

        {mounted && <Countdown date={targetDate} renderer={renderer} />}

        {/* Overlay for user interaction to enable autoplay */}
        {showOverlay && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleEnter}
          >
            <div
              className="relative flex w-[75%] sm:w-[65%] flex-col items-center rounded-2xl bg-white py-12 px-4 shadow-2xl md:w-[55%] lg:w-[40%] xl:w-[30%]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* X Button at top right inside the pop-up */}
              <Button
                type="button"
                aria-label="Close overlay"
                onClick={handleEnter}
                className="absolute right-1 top-1 z-[1000] p-2 text-[#43423D] hover:text-[#444444] focus:outline-none md:right-2 md:top-2 "
                variant="ghost"
                size="icon"
              >
                <IoCloseSharp className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16" />
              </Button>
              <h2 className="mb-6 font-cormorant text-[25px] font-bold text-[#43423D] ">
                WEDDING INVITATION
              </h2>
              <Image
                src={overlayImage}
                alt="Bride and Groom"
                width={600}
                height={400}
                className="mx-auto mb-6 h-full w-[55%] sm:w-[50%] border-2 border-solid border-[#B29234] p-1 md:w-[45%] lg:w-[40%]"
                // Remove blur placeholder for instant render
                loading="eager"
              />
              <p className="mb-4 w-4/5 text-[14px] text-gray-700 md:text-[16px] ">
                By the grace of God, we cordially invite you to witness the
                marriage of
              </p>
              <h2 className="mb-6 font-queensila text-[18px] font-semibold tracking-[0.08em] text-[#B29234] md:text-[20px]">
                FRENDY MIKTAM <span className="font-cormorant italic">&</span>{" "}
                NATHANIA VERINA
              </h2>
              <Button
                onClick={handleEnter}
                className="rounded-lg bg-[#AAA9A1] px-7 py-2 text-[14px] shadow md:text-[16px] "
              >
                Open invitation
              </Button>
            </div>
          </div>
        )}
        {/* Music player button */}
        <audio ref={audioRef} src={music} loop preload="auto" />
        <button
          type="button"
          aria-label={isPlaying ? "Mute music" : "Play music"}
          onClick={toggleMusic}
          className="fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#333333] text-white shadow-lg transition hover:bg-[#444] focus:outline-none"
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
    </div>
  );
}
