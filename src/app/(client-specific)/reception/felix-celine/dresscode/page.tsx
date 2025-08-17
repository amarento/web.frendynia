"use client";

import Image from "next/image";
import bgcrop from "../_images/bg-crop.png";
import wine from "../_images/wine.png";
import crop2 from "../_images/crop-2.png";

export default function Dresscode() {
  return (
    <div className="relative flex w-screen justify-center overflow-hidden pb-12 pt-2 text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
        }}
      />
      <div className="flex flex-col items-center justify-center">
        <p className="w-[80vw] pb-12 font-apple text-[12px] text-[#222222]">
          Come in whatever you feel best in, we are truly just happy to have you
          celebrating with us.
        </p>
        <div className="flex flex-row items-center justify-center">
          <div className="pt-20">
            <Image
              alt="Crop image"
              priority
              height={140}
              quality={100}
              src={wine}
              width={80}
            />
          </div>
          <Image
            alt="Crop image"
            className="pb-8"
            priority
            height={220}
            quality={100}
            src={crop2}
            width={180}
          />
          <p className="-rotate-6 pt-24 font-beth text-[20px] text-[#222222]">
            semi-formal <br />
            attire
          </p>
        </div>
      </div>
    </div>
  );
}
