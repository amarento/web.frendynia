"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import gift from "public/envelope.png";
import type React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";

export default function Gift() {
  const [copiedGroom, setCopiedGroom] = useState(false);
  const [copiedBride, setCopiedBride] = useState(false);

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

  function handleCopyGroomAccount(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    void navigator.clipboard
      .writeText("6730355597")
      .then(() => {
        setCopiedGroom(true);
        setTimeout(() => setCopiedGroom(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  function handleCopyBrideAccount(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    void navigator.clipboard
      .writeText("7880770556")
      .then(() => {
        setCopiedBride(true);
        setTimeout(() => setCopiedBride(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  return (
    <div className="bg-[#FCFCF8] pb-12 pt-16 text-center font-bodoni text-[#43423D] md:pb-16">
      <motion.div
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        <h1 className="font-snell pl-6 text-[49px] md:text-[49px]">Send Gift</h1>
        <h3 className="mb-8 text-[16px] font-medium md:mb-10 md:text-[18px] lg:mb-12 lg:text-[20px]">
          For Groom & Bride
        </h3>
        <Image
          alt="Gift"
          className="mx-auto mb-10 h-auto w-[30vw] md:mb-12 md:w-[24vw] lg:w-[18vw] xl:w-[12vw]"
          src={gift}
        />
      </motion.div>
      <div className="flex flex-col justify-center md:flex md:flex-row">
        <motion.div
          className="mx-auto mb-8 md:mr-12"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <h5 className="text-[16px] font-medium md:text-[18px] lg:text-[20px]">
            Rek. BCA 6730355597
          </h5>
          <h5 className="mb-2 text-[14px] italic md:mb-3 md:text-[18px] lg:text-[20px]">
            a/n Aaron Randy Kuncoro
          </h5>
          <Button
            className={`rounded-lg px-7 py-2 shadow active:scale-95 lg:px-8 lg:py-3 ${
              copiedGroom
                ? "active:bg-[#43423D]"
                : "bg-[#F8F8F7] hover:bg-[#F0F0EF]"
            }`}
            disabled={copiedGroom}
            onClick={handleCopyGroomAccount}
          >
            <p
              className={`text-[12px] md:text-[14px] lg:text-[16px] ${
                copiedGroom ? "text-white" : "text-[#5D5C55]"
              }`}
            >
              {copiedGroom ? "Copied!" : "Copy"}
            </p>
          </Button>
        </motion.div>
        <motion.div
          className="mx-auto md:ml-12"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <h5 className="text-[16px] font-medium md:text-[18px] lg:text-[20px]">
            Rek. BCA 7880770556
          </h5>
          <h5 className="mb-2 text-[14px] italic md:mb-3 md:text-[18px] lg:text-[20px]">
            a/n Vionita Hartanto
          </h5>
          <Button
            className={`rounded-lg px-7 py-2 shadow active:scale-95 lg:px-8 lg:py-3 ${
              copiedBride
                ? "active:bg-[#43423D]"
                : "bg-[#F8F8F7] hover:bg-[#F0F0EF]"
            }`}
            disabled={copiedBride}
            onClick={handleCopyBrideAccount}
          >
            <p
              className={`text-[12px] md:text-[14px] lg:text-[16px] ${
                copiedBride ? "text-white" : "text-[#5D5C55]"
              }`}
            >
              {copiedBride ? "Copied!" : "Copy"}
            </p>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
