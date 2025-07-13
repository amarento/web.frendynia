"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "~/components/ui/button";
// import { AnimatedSection } from "../../../_components/AnimatedSection";
// import { Carousel } from 'react-responsive-carousel'; // Uncomment if needed

type Wish = {
  name: string;
  message: string;
};

export default function Wish() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);

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

  // useEffect(() => {
  //   fetch("/api/wishes")
  //     .then((res) => res.json())
  //     .then((data: Wish[]) => setWishes(data))
  //     .catch(() => setWishes([]));
  // }, []);

  const handleSendGiftClick = () => {
    setTimeout(() => {
      window.open("https://maps.app.goo.gl/YvGsbE2Tcsyrua5b8");
    }, 300);
  };

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
      <div className="bg-[#F8F8F7] pb-6 pt-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0}
          className=""
        >
          <h1 className="text-[31px] md:text-[39px]">Well Wishes</h1>
          <h3 className="font-retrofans text-[16px] text-[#5D5C55] md:text-[20px]">
            for groom & bride
          </h3>
          {/* Wish Carousel */}
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
          className="bg-white border p-4 rounded shadow-md text-center"
        >
          <p className="italic">"{wish.message}"</p>
          <p className="text-sm mt-2">– {wish.name}</p>
        </div>
      ))}
    </Carousel> */}
        </motion.div>
      </div>
      <div className="bg-[#EFEEEB] pt-16 pb-10 md:pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h1 className="text-[31px] md:text-[39px]">Send Wish</h1>
          <h3 className="font-retrofans text-[16px] text-[#5D5C55] md:text-[20px]">
            for groom & bride
          </h3>
          {/* <Image
            src={gift}
            alt="Gift"
            className="mx-auto h-auto mb-8 w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[15vw]"
          /> */}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={2}
          className="mx-auto w-[75vw] text-left lg:w-[60vw] xl:w-[50vw]"
        >
          <p className="pl-1 text-[14px] md:text-[16px]">Full Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 block w-full rounded-lg border p-2 text-[12px]"
          />
          <p className="pl-1 text-[14px] md:text-[16px]">Your Wishes</p>
          <textarea
            placeholder="Type Your Wishes"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block h-32 w-full resize-none rounded-lg border p-2 text-[12px] placeholder:text-left placeholder:align-top md:text-[14px]"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={3}
          className="pt-6 flex justify-center gap-6 md:pt-8"
        >
          <Button
            onClick={handleSendGiftClick}
            className="rounded-lg bg-[#F8F8F7] px-7 py-2 shadow lg:px-8 lg:py-3 hover:bg-[#F0F0EF] active:bg-[#EDEDEB] active:scale-95"
          >
            <p className="text-[12px] text-[#5D5C55] md:text-[14px] lg:text-[16px]">
              Send Wish
            </p>
          </Button>

          {/* <button
          onClick={handleSubmit}
          className="rounded-lg bg-[#AAA9A1] px-6 py-2 text-[12px] text-white shadow"
        >
          Send Wish
        </button> */}
        </motion.div>
      </div>
    </div>
  );
}
