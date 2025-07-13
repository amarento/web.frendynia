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
import backgroundImage from "../_images/homepage.png";
import backgroundImageMobile from "../_images/homepage-mobile.png";
import overlayImage from "../_images/overlay.jpg";

const music = "/music.mp3";

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
  const targetDate = new Date("2025-08-09T04:00:00Z").getTime();

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
      className="flex justify-center gap-4 text-xl text-[#E0E0E0] drop-shadow-2xl"
      custom={4}
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
          <span className="text-[14px]">{item.label}</span>
          <span className="flex h-[44px] w-[46px] items-center justify-center rounded-2xl bg-[#88888850] pt-1 text-[25px]">
            {String(item.value).padStart(2, "0")}
          </span>
        </span>
      ))}
    </motion.div>
  );

  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageSrc = isMobile ? backgroundImageMobile : backgroundImage;

  return (
    <div className="relative min-h-screen overflow-hidden text-center font-lastik">
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
          className="mt-20 font-cormorant text-[25px] font-semibold text-[#E0E0E0] drop-shadow-2xl lg:-mb-1 lg:text-[31px]"
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          THE WEDDING
        </motion.h4>

        <motion.h6
          className="-mb-4 font-beau text-[25px] text-[#E0E0E0] drop-shadow-2xl lg:-mb-6 lg:text-[31px]"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          of
        </motion.h6>

        <motion.h1
          className="mb-2 font-cormorant text-[61px] font-medium text-[#E0E0E0] drop-shadow-2xl lg:text-[76px]"
          custom={2}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          Frendy <span className="italic">&</span> Nia
        </motion.h1>

        <motion.h5
          className="mb-3 text-[20px] text-[#E0E0E0] drop-shadow-2xl"
          custom={3}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
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
              className="xl:pt-18 relative flex w-[80%] flex-col items-center rounded-2xl bg-white px-4 pb-8 pt-12 shadow-2xl sm:w-[70%] md:w-[55%] md:px-5 md:pt-14 lg:w-[40%] lg:px-6 lg:pt-16 xl:w-[30%] xl:px-8"
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
              <h2 className="mb-6 font-cormorant text-[25px] font-bold text-[#43423D]">
                WEDDING INVITATION
              </h2>
              <Image
                alt="Bride and Groom"
                className="mx-auto mb-6 h-full w-[55%] border-2 border-solid border-[#B29234] p-1 sm:w-[50%] md:w-[45%] lg:w-[40%]"
                loading="eager"
                priority
                src={overlayImage}
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 50vw, 45vw"
                style={{ height: 'auto' }}
                width={600}
                height={0}
              />
              <p className="mb-4 w-4/5 text-[14px] text-gray-700 md:text-[16px]">
                By the grace of God, we cordially invite you to witness the
                marriage of
              </p>
              <h2 className="mb-6 font-queensila text-[20px] font-semibold tracking-[0.08em] text-[#B29234] md:text-[25px]">
                FRENDY <span className="font-cormorant italic">&</span> NIA
              </h2>
              <Button
                className="rounded-lg bg-[#AAA9A1] px-7 py-3 text-[14px] shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:px-8 md:text-[16px] lg:px-9 lg:py-4"
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
          className="fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#333333] text-white shadow-lg transition hover:bg-[#444] focus:outline-none"
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
