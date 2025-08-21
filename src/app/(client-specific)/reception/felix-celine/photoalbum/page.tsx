"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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

  const [imageIndices, setImageIndices] = useState(() =>
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 25)),
  );
  const [animationKeys, setAnimationKeys] = useState(() =>
    Array.from({ length: 6 }, (_, index) => index),
  );
  const [isInitialized, setIsInitialized] = useState(false);
  const [nextChangeTime, setNextChangeTime] = useState(() =>
    Array.from({ length: 6 }, () => 0),
  );
  void nextChangeTime;

  useEffect(() => {
    // Initialize the component after mount
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100); // Small delay to ensure everything is ready

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    // Initialize change times with staggered intervals to prevent simultaneous changes
    const now = Date.now();
    const initialTimes = Array.from({ length: 6 }, (_, index) => {
      const baseInterval = Math.random() * 6000 + 6000; // 6-12 seconds
      return now + baseInterval + index * 1500; // Add 1.5 seconds between each image's first change
    });
    setNextChangeTime(initialTimes);

    const checkAndUpdate = () => {
      const currentTime = Date.now();

      setNextChangeTime((prevTimes) => {
        const newTimes = [...prevTimes];
        let hasChanges = false;

        for (let i = 0; i < 6; i++) {
          if (currentTime >= (prevTimes[i] ?? 0)) {
            // Time to change this image
            setImageIndices((prev) => {
              const newIndices = [...prev];
              // Ensure we get a different image
              let newIndex;
              do {
                newIndex = Math.floor(Math.random() * images.length);
              } while (newIndex === prev[i] && images.length > 1);
              newIndices[i] = newIndex;
              return newIndices;
            });

            setAnimationKeys((prev) => {
              const newKeys = [...prev];
              newKeys[i] = Date.now() + i; // Unique key to trigger animation
              return newKeys;
            });

            // Schedule next change for this image, ensuring it's at least 2.5 seconds away from other changes
            let nextTime: number;
            const minGap = 2500; // 2.5 seconds minimum gap
            let attempts = 0;

            do {
              nextTime = currentTime + Math.random() * 5000 + 7000; // 7-12 seconds from now
              attempts++;
            } while (
              attempts < 15 && // More attempts for better distribution
              newTimes.some(
                (time, index) =>
                  index !== i && Math.abs(time - nextTime) < minGap,
              )
            );

            newTimes[i] = nextTime;
            hasChanges = true;
          }
        }

        return hasChanges ? newTimes : prevTimes;
      });
    };

    // Check every 50ms for more responsive updates
    const interval = setInterval(checkAndUpdate, 50);

    return () => clearInterval(interval);
  }, [images.length, isInitialized]);

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

  const fadeIn = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
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

  const fadeInFromTop = {
    hidden: { opacity: 0, x: 0, y: -20 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
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
            variants={fadeInFromBottom}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
          >
            <Image
              alt="Crop image"
              priority
              className="mb-12"
              height={300}
              quality={100}
              src={crop3}
              width={140}
            />
          </motion.div>
          <motion.h5
            className="pb-8 pl-2 font-beth text-[25px] text-[#222222]"
            variants={fadeInFromRight}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            Celine
          </motion.h5>
        </motion.div>
        <div className="grid grid-cols-2 gap-5">
          {Array.from({ length: 6 }, (_, index) => {
            const imageIndex = imageIndices[index];
            if (imageIndex === undefined || !images[imageIndex]) {
              return null;
            }
            const isInitialLoad = animationKeys[index] === index; // Check if this is the initial render
            return (
              <motion.div
                key={animationKeys[index]}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: isInitialLoad ? 1.5 : 1.2,
                  ease: isInitialLoad ? "easeOut" : "easeInOut",
                  delay: isInitialLoad ? index * 0.4 : 0, // Staggered delay only for initial load
                  opacity: { duration: isInitialLoad ? 1.8 : 1.0 },
                  scale: { duration: isInitialLoad ? 1.2 : 0.8 },
                }}
              >
                <Image
                  alt={`Photo album item ${index + 1}`}
                  className="h-[168px] w-[168px] rounded-xl border object-cover"
                  height={200}
                  quality={100}
                  src={images[imageIndex]}
                  width={200}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
