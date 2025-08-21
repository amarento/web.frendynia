"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
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

// import motion1 from "./_images/motion-1.jpg";
// import motion2 from "./_images/motion-2.jpg";
// import motion3 from "./_images/motion-3.jpg";
// import motion4 from "./_images/motion-4.jpg";
// import motion5 from "./_images/motion-5.jpg";

export default function Page() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}

function PageContent() {
  const searchParams = useSearchParams();
  const guestId = Number.parseInt(searchParams.get("guestId")!, 10);
  // const [showSplash, setShowSplash] = useState(true);

  const { data: guestName } = useServerActionQuery(getGuestNameByIdAction, {
    input: {
      clientId: 4,
      guestId,
    },
    queryKey: ["guest-name"],
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 7000); // Show splash for 7 seconds (enough time for all animations)

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showSplash) {
  //   return (
  //     <AnimatePresence>
  //       {showSplash && (
  //         <motion.div
  //           className="fixed inset-0 z-50 flex items-center justify-center bg-black"
  //           initial={{ opacity: 1 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           transition={{ duration: 1, ease: "easeOut" }}
  //         >
  //           <motion.div
  //             className="relative flex h-96 w-96 items-center justify-center"
  //             initial="hidden"
  //             animate="visible"
  //             variants={{
  //               hidden: { opacity: 0 },
  //               visible: {
  //                 opacity: 1,
  //                 transition: {
  //                   staggerChildren: 1.2,
  //                 },
  //               },
  //             }}
  //           >
  //             <motion.img
  //               src={motion1.src}
  //               alt=""
  //               className="absolute z-10 h-72 w-72 object-contain"
  //               variants={{
  //                 hidden: {
  //                   scale: 1,
  //                   opacity: 0,
  //                   clipPath: "inset(100% 0 0 0)",
  //                 },
  //                 visible: {
  //                   scale: 1,
  //                   opacity: 1,
  //                   clipPath: "inset(0% 0 0 0)",
  //                   transition: { duration: 1.8, ease: "easeOut" },
  //                 },
  //               }}
  //             />
  //             <motion.img
  //               src={motion2.src}
  //               alt=""
  //               className="absolute z-20 h-[296px] w-[296px] object-contain"
  //               variants={{
  //                 hidden: { scale: 1, opacity: 0 },
  //                 visible: {
  //                   scale: 1,
  //                   opacity: 1,
  //                   transition: { duration: 0.2, ease: "easeOut" },
  //                 },
  //               }}
  //             />
  //             <motion.img
  //               src={motion3.src}
  //               alt=""
  //               className="absolute z-30 h-[304px] w-[304px] object-contain"
  //               variants={{
  //                 hidden: { scale: 1, opacity: 0 },
  //                 visible: {
  //                   scale: 1,
  //                   opacity: 1,
  //                   transition: { duration: 0.2, ease: "easeOut" },
  //                 },
  //               }}
  //             />
  //             <motion.img
  //               src={motion4.src}
  //               alt=""
  //               className="absolute z-40 h-[312px] w-[312px] object-contain"
  //               variants={{
  //                 hidden: { scale: 1, opacity: 0 },
  //                 visible: {
  //                   scale: 1,
  //                   opacity: 1,
  //                   transition: { duration: 0.2, ease: "easeOut" },
  //                 },
  //               }}
  //             />
  //             <motion.img
  //               src={motion5.src}
  //               alt=""
  //               className="absolute z-50 h-80 w-80 object-contain"
  //               variants={{
  //                 hidden: {
  //                   scale: 1,
  //                   opacity: 1,
  //                   clipPath: "inset(0 0 100% 0)", // Start hidden from bottom
  //                 },
  //                 visible: {
  //                   scale: 1,
  //                   opacity: 1,
  //                   clipPath: "inset(0 0 0% 0)", // Fully visible
  //                   transition: { duration: 0.2, ease: "easeOut" },
  //                 },
  //                 exit: {
  //                   scale: 1,
  //                   opacity: 0,
  //                   clipPath: "inset(0 0 100% 0)", // Hide by clipping from bottom up
  //                   transition: { duration: 0.2, ease: "easeOut" },
  //                 },
  //               }}
  //             />
  //           </motion.div>
  //         </motion.div>
  //       )}
  //     </AnimatePresence>
  //   );
  // }

  return (
    <div
      // className={`transition-opacity duration-1000 ${!showSplash ? "opacity-100" : "opacity-0"}`}
    >
      <Homepage />
      <Invitation />
      <Lovestory />
      <Timeline />
      <Dresscode />
      <Gift />
      <Photoalbum />
      <Wish guestId={guestId} guestName={guestName} />
      <Ending />
      <Footer />
    </div>
  );
}
