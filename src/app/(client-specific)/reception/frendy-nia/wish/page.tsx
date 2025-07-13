/** biome-ignore-all lint/complexity/noVoid: <explanation> */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
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

export default function Wish({
  guestName,
  guestId,
}: {
  guestName?: string;
  guestId?: number;
}) {
  const { data: wishes, refetch } = useServerActionQuery(getAllWishes, {});

  const { mutateAsync: sendWish } = useServerActionMutation(addWishAction, {
    onSuccess: () => {
      void refetch();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(wishSchema),
    defaultValues: {
      name: guestName ?? '',
      wish: '',
    },
  });

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

          <div className="flex gap-x-4 px-4">
            {wishes?.map((wish, index) => (
              <div
                className="rounded border bg-white p-4 text-center shadow-md lg:w-[24vw] xl:w-[30vw]"
                key={index.toString()}
              >
                <p className="italic">{wish.wish}</p>
                <p className="mt-2 text-sm">– {wish.name}</p>
              </div>
            ))}
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
          <h3 className="font-retrofans text-[#5D5C55] text-[16px] md:text-[20px]">
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
