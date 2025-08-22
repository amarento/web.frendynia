"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useServerActionQuery } from "~/lib/hooks/server-action-hooks";
import { getGuestNameByIdAction } from "~/server/actions";

import Homepage from "./homepage/page";
import Invitation from "./invitation/page";
import Lovestory from "./lovestory/page";
import Timeline from "./timeline/page";
import Dresscode from "./dresscode/page";
import Gift from "./gift/page";
import Photoalbum from "./photoalbum/page";
import Wish from "./wish/wish";
import Ending from "./ending/page";
import Footer from "./footer/page";

import motion1 from "./_images/motion-1.png";
import motion2 from "./_images/motion-2.png";
import motion3 from "./_images/motion-3.png";
import motion4 from "./_images/motion-4.png";
import motion5 from "./_images/motion-5.png";
import black from "./_images/black.png";

export default function Page() {
  return <PageContent />;
}

function PageContent() {
  const searchParams = useSearchParams();
  const guestId = Number.parseInt(searchParams.get("guestId")!, 10);
  const [showSplash, setShowSplash] = useState(true);

  const { data: guestName } = useServerActionQuery(getGuestNameByIdAction, {
    input: {
      clientId: 4,
      guestId,
    },
    queryKey: ["guest-name"],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 8800); // Show splash for 8 seconds (enough time for all animations)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              className="relative flex h-[400px] w-[400px] items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 1.4,
                    delayChildren: 0.8,
                  },
                },
              }}
            >
              <motion.img
                src={motion1.src}
                alt=""
                className="absolute z-10 h-80 w-80 object-contain"
                variants={{
                  hidden: {
                    scale: 1,
                    opacity: 0,
                    clipPath: "inset(100% 0 0 0)",
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    clipPath: "inset(0% 0 0 0)",
                    transition: { duration: 1.8, ease: "easeOut" },
                  },
                }}
              />
              <motion.img
                src={motion2.src}
                alt=""
                className="absolute z-20 h-[336px] w-[336px] object-contain"
                variants={{
                  hidden: { scale: 1, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  },
                }}
              />
              <motion.img
                src={motion3.src}
                alt=""
                className="absolute z-30 h-[352px] w-[352px] object-contain"
                variants={{
                  hidden: { scale: 1, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  },
                }}
              />
              <motion.img
                src={motion4.src}
                alt=""
                className="absolute z-40 h-[368px] w-[368px] object-contain"
                variants={{
                  hidden: { scale: 1, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  },
                }}
              />
              <motion.img
                src={motion5.src}
                alt=""
                className="absolute z-50 h-96 w-96 object-contain"
                variants={{
                  hidden: {
                    scale: 1,
                    opacity: 0,
                    clipPath: "inset(0 0 100% 0)", // Start hidden from bottom
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    clipPath: "inset(0 0 0% 0)", // Fully visible
                    transition: { duration: 0.2, ease: "easeOut" },
                  },
                  exit: {
                    scale: 1,
                    opacity: 0,
                    clipPath: "inset(0 0 100% 0)", // Hide by clipping from bottom up
                    transition: { duration: 0.2, ease: "easeOut" },
                  },
                }}
              />
              <motion.img
                src={black.src}
                alt=""
                className="absolute z-[60] w-[400px] object-contain"
                variants={{
                  hidden: {
                    scale: 1,
                    opacity: 1,
                    clipPath: "inset(100% 0 0 0)",
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    clipPath: "inset(0% 0 0 0)",
                    transition: { duration: 0.7, ease: "easeIn" },
                  },
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <Homepage showAnimations={!showSplash} />
        <Invitation />
        <Lovestory />
        <Timeline />
        <Dresscode />
        <Gift />
        <Photoalbum />
        <Wish guestId={guestId} guestName={guestName} />
        <Ending />
        <Footer />
      </motion.div>
    </>
  );
}
