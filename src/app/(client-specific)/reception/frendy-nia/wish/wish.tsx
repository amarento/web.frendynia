'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
    input: undefined,
    queryKey: ['wishes'],
  });

  const { mutateAsync: sendWish } = useServerActionMutation(addWishAction, {
    onSuccess: () => {
      void refetch();
    },
  });

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
      await sendWish({ guestId, wish: data.wish });
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
    <div className="text-center font-lastik text-[#43423D]">
      <div className="bg-[#F8F8F7] pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-16">
        <motion.div
          className=""
          custom={0}
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          whileInView="visible"
        >
          <h1 className="text-[31px] md:text-[39px]">Well Wishes</h1>
          <h3 className="mb-10 font-retrofans text-[#5D5C55] text-[16px] md:mb-12 md:text-[20px] lg:mb-14">
            for groom & bride
          </h3>
          <div
            className="scrollbar-hide flex gap-x-4 overflow-x-auto px-4"
            style={{
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              overflowY: 'hidden',
            }}
          >
            {wishes && wishes.length > 0
              ? [...wishes].reverse().map((wish, index) => (
                  <div
                    className="flex w-[90vw] flex-shrink-0 flex-col items-center justify-center rounded-xl border border-[#B29234] border-solid bg-[#FAFAFA] p-6 text-center shadow md:w-[95vw] md:p-8 lg:w-[80vw] lg:p-10 xl:w-[58vw]"
                    key={index.toString()}
                  >
                    <p className="w-full text-[#5D5C55] text-[16px] md:text-[18px] lg:text-[20px]">
                      {wish.wish}
                    </p>
                    <p className="mt-2 text-[#5D5C55] text-[14px] italic md:text-[16px] lg:text-[18px]">
                      – {wish.name}
                    </p>
                  </div>
                ))
              : null}
          </div>
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
          <h3 className="mb-10 font-retrofans text-[#5D5C55] text-[16px] md:mb-12 md:text-[20px] lg:mb-16">
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
              <p className="text-[#5D5C55] text-[12px] md:text-[14px] lg:text-[16px]">
                Send Wish
              </p>
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
