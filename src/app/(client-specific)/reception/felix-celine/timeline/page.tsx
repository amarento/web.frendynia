"use client";

import Image from "next/image";
import bgcrop from "../_images/bg-crop.png";
// import timeline from "../_images/timeline.png";
import pita from "../_images/pita.png";
import star3 from "../_images/star-3.png";
import star4 from "../_images/star-4.png";

export default function Timeline() {
  return (
    <div className="relative flex w-screen justify-center overflow-hidden pt-8 pb-20 text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
        }}
      />
      <div>
        <Image
          alt="Bouquet"
          className="ml-[2px]"
          priority
          height={120}
          quality={100}
          src={pita}
          width={350}
        />
        

        {/* Decorative Stars */}
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[35px] top-[35px]"
        />
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[180px] top-0"
        />
        <Image
          src={star4}
          alt="star"
          width={22}
          height={22}
          className="absolute right-[55px] top-[30px]"
        />
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[15px] top-[180px]"
        />
        <Image
          src={star4}
          alt="star"
          width={22}
          height={22}
          className="absolute right-[20px] top-[140px]"
        />
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[25px] top-[320px]"
        />
        <Image
          src={star4}
          alt="star"
          width={22}
          height={22}
          className="absolute right-[15px] top-[280px]"
        />
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[15px] top-[450px]"
        />
        <Image
          src={star4}
          alt="star"
          width={22}
          height={22}
          className="absolute right-[35px] top-[430px]"
        />
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[25px] top-[580px]"
        />
        <Image
          src={star4}
          alt="star"
          width={22}
          height={22}
          className="absolute right-[20px] top-[580px]"
        />
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[35px] top-[700px]"
        />
        <Image
          src={star4}
          alt="star"
          width={22}
          height={22}
          className="absolute right-[27px] top-[730px]"
        />
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[25px] top-[810px]"
        />
        <Image
          src={star4}
          alt="star"
          width={22}
          height={22}
          className="absolute right-[110px] top-[830px]"
        />
        <Image
          src={star3}
          alt="star"
          width={24}
          height={24}
          className="absolute left-[140px] top-[850px]"
        />
      </div>
    </div>
  );
}
