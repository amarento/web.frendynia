"use client";

import Image from "next/image";
import homepage from "../_images/homepage.png";
import bgsquare from "../_images/bg-paper.png";
import table from "../_images/table.png";
import clip from "../_images/clip.png";
import decoframe from "../_images/deco-frame.png";

export default function Homepage() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden text-center text-[#F0F0F0]">
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
    </div>
  );
}
