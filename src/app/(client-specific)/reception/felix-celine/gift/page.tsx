"use client";

import Image from "next/image";
import bg1 from "../_images/bg-img-1.png";
import envelope from "../_images/envelope.png";

export default function Gift() {
  return (
    <div className="relative flex h-[320px] items-center justify-center overflow-hidden text-center text-[#F0F0F0]">
      <Image
        alt="Background"
        className="absolute inset-0 -z-10 h-[320px] w-full object-cover"
        priority
        quality={100}
        src={bg1}
      />
      <Image
        alt="Envelope"
        className="absolute top-12"
        height={200}
        priority
        quality={100}
        src={envelope}
        width={200}
      />
    </div>
  );
}
