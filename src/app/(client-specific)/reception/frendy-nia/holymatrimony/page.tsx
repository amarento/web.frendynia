'use client';

import { motion } from 'framer-motion';
import { Button } from '~/components/ui/button';

export default function Holymatrimony() {
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

  const handleYoutubeClick = () => {
    setTimeout(() => {
      window.open('https://www.youtube.com/embed/3kKyjYuOXis?si=lOYbJaKGYyCBN33a');
    }, 300);
  };

  return (
    <div className="flex flex-col justify-center bg-[#F8F8F7] pt-16 pb-10 text-center font-lastik text-[#43423D] md:pb-12 lg:pb-16">
      <motion.h1
        className="mb-2 text-[31px] md:text-[39px] xl:text-[49px]"
        custom={0}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        Holy Matrimony
      </motion.h1>

      <motion.p
        className="mx-auto mb-10 w-4/5 text-[#5D5C55] text-[12px] md:mb-12 md:text-[14px] lg:mb-16 lg:text-[16px] xl:w-2/3 xl:text-[18px] 2xl:text-[20px]"
        custom={1}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        Though we cannot gather in person, your presence is felt in spirit. Tune
        in to our livestream to witness our wedding ceremony and celebrate with
        us from afar.
      </motion.p>

      {/* Youtube Embed */}
      <motion.div
        className="2xl:w-[40%]] mx-auto mb-8 aspect-video w-[90%] overflow-hidden text-[#5D5C55] md:mb-10 md:w-[85%] lg:mb-12 xl:w-[65%]"
        custom={2}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <iframe
          allowFullScreen
          className="h-full w-full"
          src="https://www.youtube.com/embed/3kKyjYuOXis?si=lOYbJaKGYyCBN33a"
          title="Holy Matrimony Youtube"
        />
      </motion.div>

      {/* Button */}
      <motion.div
        custom={3}
        initial="hidden"
        variants={fadeIn}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <Button
          className="rounded-lg bg-[#AAA9A1] px-7 py-2 shadow hover:bg-[#A2A19A] active:scale-95 active:bg-[#999892] md:px-8 md:py-3 lg:px-9 lg:py-4"
          onClick={handleYoutubeClick}
        >
          <p className="text-[12px] text-white md:text-[14px] lg:text-[16px] 2xl:text-[18px]">
            Join Link
          </p>
        </Button>
      </motion.div>
    </div>
  );
}
