"use client";

import Image from "next/image";
import gift from "../../../../../public/envelope.png";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";

import React, { useState } from "react";

export default function Gift() {
  const [copiedFrendy, setCopiedFrendy] = useState(false);
  const [copiedNathania, setCopiedNathania] = useState(false);

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

  const handleGoogleMapsHolmatClick: () => void = () => {
    setTimeout(() => {
      window.open("https://maps.app.goo.gl/YvGsbE2Tcsyrua5b8");
    }, 300);
  };

  function handleCopyFrendyAccount(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    void navigator.clipboard
      .writeText("0390484828")
      .then(() => {
        setCopiedFrendy(true);
        setTimeout(() => setCopiedFrendy(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  function handleCopyNathaniaAccount(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    void navigator.clipboard
      .writeText("0885670097")
      .then(() => {
        setCopiedNathania(true);
        setTimeout(() => setCopiedNathania(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  return (
    <div className="bg-[#EFEEEB] pt-16 text-center font-lastik text-[#43423D] md:pb-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        custom={0}
      >
        <h1 className="text-[31px] md:text-[39px]">Send Gift</h1>
        <h3 className="mb-8 font-retrofans text-[16px] text-[#5D5C55] md:mb-10 md:text-[18px] lg:mb-12 lg:text-[20px]">
          for groom & bride
        </h3>
        <Image
          src={gift}
          alt="Gift"
          className="mx-auto mb-6 h-auto w-[30vw] md:mb-8 md:w-[24vw] lg:mb-10 lg:w-[18vw] xl:w-[12vw]"
        />
      </motion.div>
      <div className="md:flex md:flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
          className="mx-auto mb-8 w-[90%] md:mb-0 md:mr-6 md:w-[35%] lg:w-[30%]"
        >
          <h5 className="text-[16px] md:text-[18px] lg:text-[20px]">
            BCA 0390484828
          </h5>
          <h5 className="mb-2 text-[16px] md:text-[18px] lg:mb-3 lg:text-[20px]">
            a/n Frendy Miktam
          </h5>
          <Button
            onClick={handleCopyFrendyAccount}
            className={`rounded-lg px-7 py-2 shadow active:scale-95 lg:px-8 lg:py-3 ${
              copiedFrendy ? "active:bg-[#43423D]" : "bg-[#F8F8F7] hover:bg-[#F0F0EF]"
            }`}
            disabled={copiedFrendy}
          >
            <p
              className={`text-[12px] md:text-[14px] lg:text-[16px] ${
                copiedFrendy ? "text-white" : "text-[#5D5C55]"
              }`}
            >
              {copiedFrendy ? "Copied!" : "Copy"}
            </p>
          </Button>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
          className="mx-auto w-[90%] pb-8 md:ml-6 md:w-[35%] md:pb-0 lg:w-[30%]"
        >
          <h5 className="text-[16px] md:text-[18px] lg:text-[20px]">
            BCA 0885670097
          </h5>
          <h5 className="mb-2 text-[16px] md:text-[18px] lg:mb-3 lg:text-[20px]">
            a/n Nathania Verina
          </h5>
          <Button
            onClick={handleCopyNathaniaAccount}
            className={`rounded-lg px-7 py-2 shadow active:scale-95 lg:px-8 lg:py-3 ${
              copiedNathania ? "active:bg-[#43423D]" : "bg-[#F8F8F7] hover:bg-[#F0F0EF]"
            }`}
            disabled={copiedNathania}
          >
            <p
              className={`text-[12px] md:text-[14px] lg:text-[16px] ${
                copiedNathania ? "text-white" : "text-[#5D5C55]"
              }`}
            >
              {copiedNathania ? "Copied!" : "Copy"}
            </p>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
