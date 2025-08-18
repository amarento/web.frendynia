"use client";

import Image from "next/image";
import motion from "motion/react";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

import homepage from "../_images/homepage.png";
import bgsquare from "../_images/bg-paper.png";
import table from "../_images/table.png";
import clip from "../_images/clip.png";
import decoframe from "../_images/deco-frame.png";

import square from "../_images/square.png";
import daysImg from "../_images/days.png";
import hoursImg from "../_images/hours.png";
import minutesImg from "../_images/minutes.png";
import secondsImg from "../_images/seconds.png";
import { Square } from "lucide-react";

export default function Homepage() {
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
    <div className="relative flex rotate-2 justify-center text-[#F0F0F0] drop-shadow-2xl lg:-mb-2">
      <Image
        alt="Countdown background"
        className="absolute inset-0 h-[76px] w-full object-cover"
        height={76}
        src={bgsquare}
        width={400}
      />
      <div className="relative flex gap-4 px-6 py-4">
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
            <span className="font-medium font-apple text-[20px]">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
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
      <div className="relative z-10 flex rotate-2 items-center justify-center">
        <Image
          alt="Movie Clip"
          className="absolute left-0 z-20 -ml-[52px]"
          height={300}
          priority
          quality={100}
          src={clip}
          width={120}
        />
        <Image
          alt="Frame Deco"
          className="absolute z-10"
          height={450}
          priority
          quality={100}
          src={decoframe}
          width={278}
        />
        <Image
          alt="Paper background"
          className="object-cover"
          height={450}
          priority
          quality={100}
          src={bgsquare}
          width={280}
        />
        <div className="absolute inset-0 flex flex-col items-center">
          <h5 className="pb-5 pt-12 font-beth text-[20px] text-[#222222] md:text-[39px]">
            We&apos;re getting <br />
            married
          </h5>
          <div className="pb-5">
            <Image
              alt="Paper background"
              className="object-cover"
              height={128}
              priority
              quality={100}
              src={table}
              width={128}
            />
          </div>
          <h5 className="pb-2 font-beth text-[18px] text-[#222222] md:text-[39px]">
            Felix & Celine
          </h5>
          <h5 className="font-beth text-[16px] text-[#222222] md:text-[39px]">
            Oct, 3 2025
          </h5>
        </div>
      </div>
      <div className="w-[280px] translate-y-4 -translate-x-2">
        {mounted && <Countdown date={targetDate} renderer={renderer} />}
      </div>
    </div>
  );
}
