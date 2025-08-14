"use client";

import Image from "next/image";
import bgcrop from "../_images/bg-crop.png";
import bouquet from "../_images/bouquet.png";
import crop1 from "../_images/crop-1.png";

export default function Lovestory() {
  return (
    <div className="relative flex justify-center overflow-hidden text-center text-[#F0F0F0] py-8">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
        }}
      />
      <div className="flex flex-row items-center justify-center gap-2">
        <Image
          alt="Bouquet"
          className="pb-8"
          priority
          height={120}
          quality={100}
          src={bouquet}
          width={80}
        />
        <Image
          alt="Crop image"
          className="pb-8"
          priority
          height={300}
          quality={100}
          src={crop1}
          width={150}
        />
        <h3 className="font-beth text-[25px] text-[#222222]">our love <br />story</h3>
      </div>
    </div>
  );
}
