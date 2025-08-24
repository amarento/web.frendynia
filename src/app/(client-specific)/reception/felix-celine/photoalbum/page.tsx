"use client";

import Image from "next/image";
import { motion } from "motion/react";

import bgcrop from "../_images/bg-crop.png";
import crop3 from "../_images/crop-3.png";

import img1 from "../_images/img-1.jpg";
import img2 from "../_images/img-2.jpg";
import img3 from "../_images/img-3.jpg";
import img4 from "../_images/img-4.jpg";
import img5 from "../_images/img-5.jpg";
import img6 from "../_images/img-6.jpg";
import img7 from "../_images/img-7.jpg";
import img8 from "../_images/img-8.jpg";
import img9 from "../_images/img-9.jpg";
import img10 from "../_images/img-10.jpg";
import img11 from "../_images/img-11.jpg";
import img12 from "../_images/img-12.jpg";
import img13 from "../_images/img-13.jpg";
import img14 from "../_images/img-14.jpg";
import img15 from "../_images/img-15.jpg";
import img16 from "../_images/img-16.jpg";
import img17 from "../_images/img-17.jpg";
import img18 from "../_images/img-18.jpg";
import img19 from "../_images/img-19.jpg";
import img20 from "../_images/img-20.jpg";
import img21 from "../_images/img-21.jpg";
import img22 from "../_images/img-22.jpg";
import img23 from "../_images/img-23.jpg";
import img24 from "../_images/img-24.jpg";
import img25 from "../_images/img-25.jpg";

export default function Photoalbum() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
  ];

  // Split images into three groups for three carousels
  const carousel1Images = images.slice(0, 9); // First 9 images
  const carousel2Images = images.slice(9, 17); // Next 8 images
  const carousel3Images = images.slice(17); // Remaining 8 images

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, x: 0, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="relative flex w-screen justify-center overflow-hidden pt-16 text-center text-[#F0F0F0]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgcrop.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-row items-center justify-center gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h5
            className="pb-8 font-beth text-[25px] text-[#222222]"
            variants={fadeInFromLeft}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
          >
            Felix
          </motion.h5>
          <motion.div
            className="h-auto w-[140px] pb-12"
            variants={fadeInFromBottom}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
          >
            <Image alt="Crop image" priority src={crop3} />
          </motion.div>
          <motion.h5
            className="pb-8 pl-2 font-beth text-[25px] text-[#222222]"
            variants={fadeInFromRight}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            Celine
          </motion.h5>
        </motion.div>

        {/* Three Landscape Carousels */}
        <div className="w-full max-w-6xl space-y-8">
          
          {/* First Carousel */}
          <div className="relative w-full overflow-hidden">
            <div className="marquee-track marquee-left-slow">
              {[...carousel1Images, ...carousel1Images].map((image, index) => (
                <motion.div
                  key={`carousel1-${index}`}
                  className="flex-shrink-0 px-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % carousel1Images.length) * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    alt={`Album item ${(index % carousel1Images.length) + 1}`}
                    className="h-[180px] w-[280px] rounded-sm border object-cover shadow-lg"
                    src={image}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second Carousel */}
          <div className="relative w-full overflow-hidden">
            <div className="marquee-track marquee-right-slower">
              {[...carousel2Images, ...carousel2Images].map((image, index) => (
                <motion.div
                  key={`carousel2-${index}`}
                  className="flex-shrink-0 px-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % carousel2Images.length) * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    alt={`Album item ${(index % carousel2Images.length) + 1}`}
                    className="h-[180px] w-[280px] rounded-sm border object-cover shadow-lg"
                    src={image}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Third Carousel */}
          <div className="relative w-full overflow-hidden">
            <div className="marquee-track marquee-left-fast">
              {[...carousel3Images, ...carousel3Images].map((image, index) => (
                <motion.div
                  key={`carousel3-${index}`}
                  className="flex-shrink-0 px-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % carousel3Images.length) * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    alt={`Album item ${(index % carousel3Images.length) + 1}`}
                    className="h-[180px] w-[280px] rounded-sm border object-cover shadow-lg"
                    src={image}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
