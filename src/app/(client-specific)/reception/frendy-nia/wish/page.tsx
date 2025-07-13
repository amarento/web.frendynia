'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '~/components/ui/button';

// import { Carousel } from "react-responsive-carousel";

type Wish = {
  name: string;
  message: string;
};

export default function Wish() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([]);

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

  // useEffect(() => {
  //   fetch("/api/wishes")
  //     .then((res) => res.json())
  //     .then((data: Wish[]) => setWishes(data))
  //     .catch(() => setWishes([]));
  // }, []);

  // const handleSubmit = async () => {
  //   if (!name.trim() || !message.trim()) return;

  //   await fetch("/api/wishes", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name, message }),
  //   });

  //   setName("");
  //   setMessage("");
  //   setWishes((prev) => [...prev, { name, message }]);
  // };

  return (
    <div className="text-center font-lastik text-[#43423D]">
      <div className="bg-[#F8F8F7] pt-10 pb-6">
        <motion.div
          className=""
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h1 className="text-[31px] md:text-[39px]">Well Wishes</h1>
          <h3 className="font-retrofans text-[#5D5C55] text-[16px] md:text-[20px]">
            for groom & bride
          </h3>
          {/* <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            interval={4000}
          >
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="rounded border bg-white p-4 text-center shadow-md"
              >
                <p className="italic">"{wish.message}"</p>
                <p className="mt-2 text-sm">– {wish.name}</p>
              </div>
            ))}
          </Carousel> */}
        </motion.div>
      </div>
      <div className="bg-[#EFEEEB] pt-16 pb-10 md:pb-12">
        <motion.div
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h1 className="text-[31px] md:text-[39px]">Send Wish</h1>
          <h3 className="font-retrofans text-[#5D5C55] text-[16px] md:text-[20px]">
            for groom & bride
          </h3>
        </motion.div>
        <motion.div
          className="mx-auto w-[75vw] text-left lg:w-[60vw] xl:w-[50vw]"
          custom={2}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <p className="pl-1 text-[14px] md:text-[16px]">Full Name</p>
          <input
            className="mb-4 block w-full rounded-lg border p-2 text-[12px]"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <p className="pl-1 text-[14px] md:text-[16px]">Your Wishes</p>
          <textarea
            className="block h-32 w-full resize-none rounded-lg border p-2 text-[12px] placeholder:text-left placeholder:align-top md:text-[14px]"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type Your Wishes"
            value={message}
          />
        </motion.div>
        <motion.div
          className="flex justify-center gap-6 pt-6 md:pt-8"
          custom={3}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <Button
            // onClick={handleSubmit}
            className="rounded-lg bg-[#F8F8F7] px-7 py-2 shadow hover:bg-[#F0F0EF] active:scale-95 active:bg-[#EDEDEB] lg:px-8 lg:py-3"
          >
            <p className="text-[#5D5C55] text-[12px] md:text-[14px] lg:text-[16px]">
              Send Wish
            </p>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
