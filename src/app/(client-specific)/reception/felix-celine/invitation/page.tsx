"use client";

import Image from "next/image";
import bgcrop from "../_images/bg-crop.png";
import lamp from "../_images/lamp.png";
import tabledeco from "../_images/table-deco.png";

export default function Invitation() {
  return (
    <div className="relative flex h-screen justify-center overflow-hidden text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
        }}
      />
      <div className="flex flex-col items-center pt-16 font-beth text-[25px] text-[#222222]">
        <h3 className="pb-8">
          You&apos;re <br />
          invited !
        </h3>
        <p className="font-schoolbell w-[70vw] pb-8 text-[16px] font-medium">
          We will exchange vows in MDC Church, on October 3, 2025 at 11 am.
        </p>
        <Image
          alt="Lamp deco"
          className="pb-8"
          height={300}
          priority
          quality={100}
          src={lamp}
          width={150}
        />
        <p className="font-schoolbell w-[70vw] pb-8 text-[16px] font-medium">
          We will exchange vows in GKPB Masa Depan Cerah Putat Gede Selatan, on
          October 2, 2025 at 11 am.
        </p>
        <h3 className="pb-8">
          So see you <br />
          there !
        </h3>
        <Image
          alt="Table deco"
          className="w-[95vw]"
          height={300}
          priority
          quality={100}
          src={tabledeco}
          width={400}
        />
      </div>
    </div>
  );
}
