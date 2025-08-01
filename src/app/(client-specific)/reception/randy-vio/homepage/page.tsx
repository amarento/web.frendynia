/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useMediaCaption: <explanation> */
/** biome-ignore-all lint/nursery/noNoninteractiveElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import { Button } from "~/components/ui/button";
import backgroundImage from "../_images/1.png";
import backgroundImageMobile from "../_images/1mobile.png";
import overlayImage from "../_images/2.png";

const music = "/music-randy-vio.mp3";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}

export default function Homepage() {
  const targetDate = new Date("2025-09-19T06:30:00Z").getTime();

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
      className="flex justify-center gap-4 lg:-mb-2 text-[#F0F0F0] drop-shadow-2xl"
      custom={6}
      initial="hidden"
      variants={fadeIn}
      viewport={{ once: true, margin: "-100px" }}
      whileInView="visible"
    >
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item) => (
        <span className="flex flex-col items-center" key={item.label}>
          <span className="text-[14px] mb-1">{item.label}</span>
          <span className="flex h-[42px] w-[44px] items-center justify-center rounded-2xl bg-[#88888850] pt-1 text-[20px]">
            {String(item.value).padStart(2, "0")}
          </span>
        </span>
      ))}
    </motion.div>
  );

  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageSrc = isMobile ? backgroundImageMobile : backgroundImage;

  return (
    <div className="relative min-h-screen overflow-hidden text-center font-bodoni text-[#F0F0F0]">
      <div className="relative flex min-h-screen flex-col items-center">
        <Image
          src={imageSrc}
          alt="Wedding background"
          fill
          priority
          quality={100}
          className="inset-0 z-0"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <motion.h4
          className="mb-1 mt-20 text-[20px] drop-shadow-2xl lg:-mb-1 lg:text-[25px]"
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          The Wedding of
        </motion.h4>

        <motion.h1
          className="mb-1 font-snell text-[39px] font-medium drop-shadow-2xl lg:text-[49px]"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          Aaron Randy Kuncoro
        </motion.h1>

        <motion.h5
          className="mb-1 text-[20px] font-medium italic drop-shadow-2xl lg:-mt-1 lg:text-[25px]"
          custom={2}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          and
        </motion.h5>

        <motion.h1
          className="mb-1 font-snell text-[39px] font-medium drop-shadow-2xl lg:-mt-1 lg:text-[49px]"
          custom={3}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          Vionita Hartanto
        </motion.h1>

        <motion.h5
          className="mb-3 text-[18px] drop-shadow-2xl"
          custom={4}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <span className="text-[20px] italic">Friday</span>, 19<sup>th</sup> of
          September 2025
        </motion.h5>

        {mounted && <Countdown date={targetDate} renderer={renderer} />}

        <motion.h5
          className="mt-4 text-[16px] italic drop-shadow-2xl"
          custom={5}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          #VIORANtothealtar
        </motion.h5>

        {/* Overlay for user interaction to enable autoplay */}
        {showOverlay && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleEnter}
          >
            <div
              className="xl:pt-18 relative flex w-[85%] flex-col items-center rounded-2xl bg-white px-4 pb-8 pt-12 shadow-2xl sm:w-[70%] md:w-[55%] md:px-5 md:pt-14 lg:w-[40%] lg:px-6 lg:pt-16 xl:w-[30%] xl:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* X Button at top right inside the pop-up */}
              <Button
                aria-label="Close overlay"
                className="absolute right-1 top-1 z-[1000] p-2 text-[#43423D] hover:text-[#444444] focus:outline-none md:right-2 md:top-2"
                onClick={handleEnter}
                size="icon"
                type="button"
                variant="ghost"
              >
                <IoCloseSharp className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16" />
              </Button>
              <h2 className="mb-6 font-bodoni text-[25px] text-[#43423D]">
                Wedding Invitation
              </h2>
              <Image
                alt="Bride and Groom"
                className="mx-auto mb-6 h-full w-[55%] border-2 border-solid border-[#30302E] p-1 sm:w-[50%] md:w-[45%] lg:w-[40%]"
                loading="eager"
                priority
                src={overlayImage}
                sizes="(max-width: 640px) 55vw, (max-width: 768px) 50vw, (max-width: 1024px) 45vw, 40vw"
                style={{ height: "auto" }}
                width={600}
                quality={90}
              />
              <p className="mb-4 w-4/5 font-bodoni text-[14px] tracking-tight text-[#43423D] md:text-[16px]">
                By the grace of God, we cordially invite you to witness the
                marriage of
              </p>
              <h2 className="mb-2 font-snell text-[25px] text-[#43423D] md:text-[25px] lg:text-[31px]">
                Aaron Randy Kuncoro
              </h2>
              <p className="mb-2 font-bodoni text-[16px] italic text-[#43423D] lg:text-[18px]">
                and
              </p>
              <h2 className="mb-6 font-snell text-[25px] text-[#43423D] md:text-[25px] lg:text-[31px]">
                Vionita Hartanto
              </h2>
              <Button
                className="rounded-lg bg-[#AAA9A1] px-7 py-3 text-[14px] shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892]"
                onClick={handleEnter}
              >
                Open Invitation
              </Button>
            </div>
          </div>
        )}

        {/* Music player button */}
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
    </div>
  );
}
