'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import AutoHeight from 'embla-carousel-auto-height';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import {
  useServerActionMutation,
  useServerActionQuery,
} from '~/lib/hooks/server-action-hooks';
import { addWishAction, getAllWishes } from '~/server/actions';
import bgcrop from '../_images/bg-crop.png';
import square from '../_images/square.png';

const wishSchema = z.object({
  name: z.string(),
  wish: z.string().min(1, { message: 'Wish cannot be empty.' }),
});

interface IWishProps {
  readonly guestName: string | undefined;
  readonly guestId: number | undefined;
}

export default function Wish({ guestName, guestId }: IWishProps) {
  const { data: wishes, refetch } = useServerActionQuery(getAllWishes, {
    input: {
      clientId: 9,
    },
    queryKey: ['wishes'],
  });

  const { mutateAsync: sendWish } = useServerActionMutation(addWishAction, {
    onSuccess: () => {
      void refetch();
    },
  });

  // Embla Carousel setup with autoplay and auto height
  const autoplayPlugin = Autoplay({ delay: 10_000, stopOnInteraction: false });
  const autoHeightPlugin = AutoHeight();
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [autoplayPlugin, autoHeightPlugin]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(wishSchema),
    defaultValues: {
      name: guestName ?? '',
      wish: '',
    },
  });

  React.useEffect(() => {
    reset({
      name: guestName,
    });
  }, [guestName, reset]);

  const onSubmit = async (data: z.infer<typeof wishSchema>) => {
    if (guestId) {
      await sendWish({ guestId, wish: data.wish, clientId: 9 });
    }
  };

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

  const fadeInFromBottom = {
    hidden: { opacity: 0, x: 0, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const fadeInFromTop = {
    hidden: { opacity: 0, x: 0, y: -20 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="text-center font-schoolbell text-[#43423D]">
      <div className="relative pt-20">
        <div
          className="-z-10 absolute inset-0"
          style={{
            backgroundImage: `url(${bgcrop.src})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
        />
        <motion.div variants={containerVariants}>
          <motion.h1
            className="pb-6 font-beth text-[#333333] text-[28px] md:pb-12 md:text-[39px] lg:pb-16"
            initial="hidden"
            transition={{ duration: 0.4, ease: 'easeOut' }}
            variants={fadeInFromTop}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            Well Wishes
          </motion.h1>

          {/* Carousel Container with Gradients */}
          <motion.div
            initial="hidden"
            transition={{ duration: 0.4, ease: 'easeOut' }}
            variants={fadeInFromBottom}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            <div className="relative">
              {/* Left Gradient Overlay */}
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F8F8F7] to-transparent lg:w-80" />

              {/* Right Gradient Overlay */}
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-8 bg-gradient-to-l from-[#F8F8F7] to-transparent lg:w-80" />

              {/* Embla Carousel */}
              <div
                className="embla embla--auto-height overflow-hidden px-4"
                ref={emblaRef}
              >
                <div className="embla__container flex gap-x-[13px] px-[13px]">
                  {wishes && wishes.length > 0
                    ? [...wishes].reverse().map((wish, index) => (
                        <div
                          className="embla__slide flex h-[340px] w-[340px] flex-col items-center justify-center p-6 text-center md:h-[350px] md:w-[95vw] md:p-8 lg:h-[400px] lg:w-[40vw] lg:p-10"
                          key={index.toString()}
                          style={{
                            backgroundImage: `url(${square.src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                          }}
                        >
                          <p className="w-full text-[#43423D] text-[16px] md:text-[18px] lg:text-[20px]">
                            {wish.wish}
                          </p>
                          <p className="mt-2 text-[#43423D] text-[14px] italic md:text-[16px] lg:text-[18px]">
                            – {wish.name}
                          </p>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative pt-12 md:pb-12">
        <div
          className="-z-10 absolute inset-0"
          style={{
            backgroundImage: `url(${bgcrop.src})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
        />
        <motion.div variants={containerVariants}>
          <motion.h1
            className="pb-8 font-beth text-[#333333] text-[28px] md:pb-12 md:text-[39px] lg:pb-16"
            initial="hidden"
            transition={{ duration: 0.4, ease: 'easeOut' }}
            variants={fadeInFromTop}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            Make your wish
          </motion.h1>
        </motion.div>
        <motion.form
          className="mx-auto w-[75vw] lg:w-[60vw] xl:w-[50vw]"
          initial="hidden"
          onSubmit={handleSubmit(onSubmit)}
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <motion.div
            className="text-left"
            initial="hidden"
            transition={{ duration: 0.4, ease: 'easeOut' }}
            variants={fadeInFromBottom}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            <p className="pl-1 text-[#333333] text-[16px] md:text-[16px]">
              from:
            </p>
            <input
              {...register('name')}
              className="mb-4 block w-full rounded-sm border bg-[#FCFCFC] p-2 text-[14px] text-muted-foreground"
              disabled={!!guestName}
            />
          </motion.div>

          <motion.div
            className="text-left"
            initial="hidden"
            transition={{ duration: 0.4, ease: 'easeOut' }}
            variants={fadeInFromBottom}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            <p className="pl-1 text-[#333333] text-[16px] md:text-[16px]">
              wish:
            </p>
            <textarea
              {...register('wish')}
              className="block h-32 w-full resize-none rounded-sm border bg-[#FCFCFC] p-3 text-[12px] placeholder:text-left placeholder:align-top md:text-[14px]"
              placeholder="Type Your Wishes"
            />
            {errors.wish && (
              <p className="text-red-500">{errors.wish.message}</p>
            )}
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 pt-7 md:pt-8"
            initial="hidden"
            transition={{ duration: 0.4, ease: 'easeOut' }}
            variants={fadeInFromTop}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            <Button
              className="rounded-sm bg-[#F8F8F8] px-7 py-2 shadow hover:bg-[#F0F0EF] active:scale-95 active:bg-[#EDEDEB] lg:px-8 lg:py-3"
              type="submit"
            >
              <p className="text-[#43423D] text-[14px] md:text-[14px] lg:text-[16px]">
                Send Wish
              </p>
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
