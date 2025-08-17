"use client";

import Image from "next/image";
import bgcrop from "../_images/bg-crop.png";
import bouquet from "../_images/bouquet.png";
import crop1 from "../_images/crop-1.png";

export default function Lovestory() {
  return (
    <div className="relative flex w-screen flex-col justify-center overflow-hidden pb-16 pt-16 text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
        }}
      />
      <div className="flex flex-row items-center justify-center gap-1 pb-8">
        <div className="pt-32">
          <Image
            alt="Bouquet"
            className="pb-4"
            priority
            height={120}
            quality={100}
            src={bouquet}
            width={75}
          />
        </div>
        <Image
          alt="Crop image"
          className="pb-8"
          priority
          height={300}
          quality={100}
          src={crop1}
          width={150}
        />
        <h3 className="-rotate-6 pt-28 font-beth text-[25px] text-[#222222]">
          our love <br />
          story
        </h3>
      </div>
      <div className="mx-auto w-[75vw]">
        <h6 className="font-schoolbell text-[16px] leading-[1.6] text-[#222222] mb-8">
          You know that person from middle school who you knew existed but never
          actually talked to?
        </h6>
        <p className="font-schoolbell text-[15px] italic leading-[1.6] text-[#222222]">
          Yeah, turns out they could end up being the love of your life. We
          spent years being complete strangers until 2017 hit and suddenly we
          couldn&apos;t stop talking. Classic us — finally realizing we actually
          really like each other right before Felix heads to Germany and Celine
          stays in Surabaya. Most people would call it terrible timing. We
          called it a challenge. Eight years, countless Sunday video dates, and
          way too much timezone drama later, we&apos;re still that annoyingly
          happy long-distance couple everyone secretly wants to be. The
          punchline? We&apos;re getting married in 2025 because apparently when
          the universe decides you belong together, not even living on different
          continents can mess with that plan.
        </p>
      </div>
    </div>
  );
}
