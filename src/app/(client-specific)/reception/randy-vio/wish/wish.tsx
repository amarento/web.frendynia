/** biome-ignore-all lint/a11y/noStaticElementInteractions: drag scrolling functionality */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: drag scrolling functionality */
/** biome-ignore-all lint/nursery/useSortedClasses: embla carousel styling */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import AutoHeight from 'embla-carousel-auto-height';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '~/components/ui/button';

import {
  useServerActionMutation,
  useServerActionQuery,
} from '~/lib/hooks/server-action-hooks';
import { addWishAction, getAllWishes } from '~/server/actions';

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
      clientId: 4,
    },
    queryKey: ['wishes'],
  });

  const { mutateAsync: sendWish } = useServerActionMutation(addWishAction, {
    onSuccess: () => {
      // biome-ignore lint: required for promise handling
      void refetch();
    },
    onError: (error) => {
      toast.error(
        `An error occurred while adding wish. Error: ${error.message}`
      );
    },
  });

  // Progress bar state
  const [progress, setProgress] = useState(0);

  // Embla Carousel setup with autoplay and auto height
  const autoplayPlugin = Autoplay({ delay: 10_000, stopOnInteraction: false });
  const autoHeightPlugin = AutoHeight();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [autoplayPlugin, autoHeightPlugin]
  );

  // Progress bar effect
  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    let interval: NodeJS.Timeout;
    const resetProgress = () => {
      setProgress(0);
      clearInterval(interval);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 100 / 100; // 10000ms / 100ms intervals = 100 steps
        });
      }, 100);
    };

    // Reset progress when slide changes
    const onSlideChange = () => {
      resetProgress();
    };

    emblaApi.on('select', onSlideChange);
    resetProgress(); // Start initial progress

    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSlideChange);
    };
  }, [emblaApi]);

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
    if (!guestId) {
      toast.error('An error occured while adding wish. Guest not found.');
    }

    if (guestId) {
      await sendWish({ guestId, wish: data.wish, clientId: 4 });
    }
  };

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

  return (
    <div className="text-center font-bodoni text-[#43423D]">
      <div className="bg-[#FAFAF8] pb-16 pt-10 md:pb-20 md:pt-12 lg:pt-16">
        <motion.div
          className=""
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h1 className="pl-6 font-snell text-[39px] md:text-[49px]">
            Well Wishes
          </h1>
          <h3 className="-mt-1 mb-10 text-[16px] text-[#5D5C55] md:mb-12 md:text-[20px] lg:mb-14">
            for groom & bride
          </h3>

          {/* Carousel Container with Gradients */}
          <div className="relative">
            {/* Left Gradient Overlay */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-[#F8F8F7] to-transparent lg:w-80" />

            {/* Right Gradient Overlay */}
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-[#F8F8F7] to-transparent lg:w-80" />

            {/* Embla Carousel */}
            <div
              className="embla embla--auto-height overflow-hidden px-4"
              ref={emblaRef}
            >
              <div className="embla__container flex gap-x-[13px]">
                {wishes && wishes.length > 0
                  ? [...wishes].reverse().map((wish, index) => (
                      <div
                        className="embla__slide flex w-[90vw] flex-col items-center justify-center rounded-xl border border-solid border-[#43423D] bg-[#FAFAFA] p-6 text-center shadow md:w-[95vw] md:p-8 lg:w-[40vw] lg:p-10"
                        key={index.toString()}
                      >
                        <p className="w-full text-[16px] text-[#5D5C55] md:text-[18px] lg:text-[20px]">
                          {wish.wish}
                        </p>
                        <p className="mt-2 text-[14px] italic text-[#5D5C55] md:text-[16px] lg:text-[18px]">
                          – {wish.name}
                        </p>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {wishes && wishes.length > 1 && (
            <div className="mx-auto mt-6 h-[3px] w-16 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-[#888888] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </motion.div>
      </div>
      <div className="bg-[#FCFCF8] pb-10 pt-16 md:pb-12">
        <motion.div
          custom={1}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h1 className="pl-6 font-snell text-[39px] md:text-[49px]">
            Send Wish
          </h1>
          <h3 className="-mt-1 mb-10 text-[16px] text-[#5D5C55] md:mb-12 md:text-[20px] lg:mb-16">
            for groom & bride
          </h3>
        </motion.div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register('name')}
              className="mb-4 block w-full rounded-lg border bg-white p-2 text-[14px] text-muted-foreground"
              disabled={!!guestName}
            />
            <p className="pl-1 text-[14px] md:text-[16px]">Your Wishes</p>
            <textarea
              {...register('wish')}
              className="block h-32 w-full resize-none rounded-lg border p-2 text-[12px] placeholder:text-left placeholder:align-top md:text-[14px]"
              placeholder="Type Your Wishes"
            />
            {errors.wish && (
              <p className="text-red-500">{errors.wish.message}</p>
            )}
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
              className="rounded-lg bg-[#F8F8F7] px-7 py-2 shadow hover:bg-[#F0F0EF] active:scale-95 active:bg-[#EDEDEB] lg:px-8 lg:py-3"
              type="submit"
            >
              <p className="text-[12px] text-[#5D5C55] md:text-[14px] lg:text-[16px]">
                Send Wish
              </p>
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
