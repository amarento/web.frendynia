'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import gift from 'public/envelope.png';
import type React from 'react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';

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
        ease: 'easeOut',
      },
    }),
  };

  function handleCopyFrendyAccount(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    void navigator.clipboard
      .writeText('0390484828')
      .then(() => {
        setCopiedFrendy(true);
        setTimeout(() => setCopiedFrendy(false), 1500);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }

  function handleCopyNathaniaAccount(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    void navigator.clipboard
      .writeText('0885670097')
      .then(() => {
        setCopiedNathania(true);
        setTimeout(() => setCopiedNathania(false), 1500);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }

  return (
    <div className="bg-[#EFEEEB] pt-16 pb-12 text-center font-lastik text-[#43423D] md:pb-16">
      <motion.div
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <h1 className="text-[31px] md:text-[39px]">Send Gift</h1>
        <h3 className="mb-8 font-retrofans text-[#5D5C55] text-[16px] md:mb-10 md:text-[18px] lg:mb-12 lg:text-[20px]">
          for groom & bride
        </h3>
        <Image
          alt="Gift"
          className="mx-auto mb-10 h-auto w-[30vw] md:mb-12 md:w-[24vw] lg:w-[18vw] xl:w-[12vw]"
          src={gift}
        />
      </motion.div>
      <div className="flex flex-row justify-center">
        <motion.div
          className="mx-auto ml-10 w-[45%] md:mr-6 md:w-[35%] lg:w-[30%]"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h5 className="text-[14px] md:text-[18px] lg:text-[20px]">
            BCA 0390484828
          </h5>
          <h5 className="mb-2 text-[14px] md:mb-3 md:text-[18px] lg:text-[20px]">
            a/n Frendy Miktam
          </h5>
          <Button
            className={`rounded-lg px-7 py-2 shadow active:scale-95 lg:px-8 lg:py-3 ${
              copiedFrendy
                ? 'active:bg-[#43423D]'
                : 'bg-[#F8F8F7] hover:bg-[#F0F0EF]'
            }`}
            disabled={copiedFrendy}
            onClick={handleCopyFrendyAccount}
          >
            <p
              className={`text-[12px] md:text-[14px] lg:text-[16px] ${
                copiedFrendy ? 'text-white' : 'text-[#5D5C55]'
              }`}
            >
              {copiedFrendy ? 'Copied!' : 'Copy'}
            </p>
          </Button>
        </motion.div>
        <motion.div
          className="mx-auto mr-10 w-[45%] md:ml-6 md:w-[35%] md:pb-0 lg:w-[30%]"
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h5 className="text-[14px] md:text-[18px] lg:text-[20px]">
            BCA 0885670097
          </h5>
          <h5 className="mb-2 text-[14px] md:mb-3 md:text-[18px] lg:text-[20px]">
            a/n Nathania Verina
          </h5>
          <Button
            className={`rounded-lg px-7 py-2 shadow active:scale-95 lg:px-8 lg:py-3 ${
              copiedNathania
                ? 'active:bg-[#43423D]'
                : 'bg-[#F8F8F7] hover:bg-[#F0F0EF]'
            }`}
            disabled={copiedNathania}
            onClick={handleCopyNathaniaAccount}
          >
            <p
              className={`text-[12px] md:text-[14px] lg:text-[16px] ${
                copiedNathania ? 'text-white' : 'text-[#5D5C55]'
              }`}
            >
              {copiedNathania ? 'Copied!' : 'Copy'}
            </p>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
