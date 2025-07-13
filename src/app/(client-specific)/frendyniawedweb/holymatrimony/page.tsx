"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";

export default function Holymatrimony() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const handleYoutubeClick = () => {
    setTimeout(() => {
      window.open("https://youtu.be/6Wf41An2H-U?si=t_0_vWed-ls14x65");
    }, 300);
  };

  return (
    <div className="flex flex-col justify-center pt-16 pb-10 md:pb-12 lg:pb-16 bg-[#F8F8F7] text-center font-lastik text-[#43423D]">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={0}
        className="mb-2 text-[31px] md:text-[39px] xl:text-[49px]"
      >
        Holy Matrimony
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={1}
        className="mx-auto mb-10 w-4/5 text-[12px] text-[#5D5C55] md:mb-12 md:text-[14px] lg:text-[16px] lg:mb-16 xl:text-[18px] xl:w-2/3 2xl:text-[20px]"
      >
        Though we cannot gather in person, your presence is felt in spirit. Tune
        in to our livestream to witness our wedding ceremony and celebrate with
        us from afar.
      </motion.p>
      
      {/* Youtube Embed */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={2}
        className="mx-auto text-[#5D5C55] mb-8 aspect-video w-[90%] md:w-[85%] overflow-hidden md:mb-10 lg:mb-12 xl:w-[65%] 2xl:w-[40%]]"
      >
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/6Wf41An2H-U?si=qdmaMOsIgs_8mLS8"
          title="Holy Matrimony Youtube"
          allowFullScreen
        />
      </motion.div>

      {/* Button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={3}
      >
        <Button
          onClick={handleYoutubeClick}
          className="rounded-lg bg-[#AAA9A1] px-7 py-2 md:px-8 md:py-3 lg:px-9 lg:py-4 shadow hover:bg-[#A2A19A] active:bg-[#999892] active:scale-95" 
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px] 2xl:text-[18px]">
            Join Link
          </p>
        </Button>
      </motion.div>
    </div>
  );
}
