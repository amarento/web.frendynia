'use server';

import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { createServerAction } from 'zsa';
import { db } from '~/server/db';
import { eventsToGuests, guests } from '~/server/db/schema';

export const addWishAction = createServerAction()
  .input(
    z.object({
      guestId: z.number(),
      wish: z.string(),
    })
  )
  .handler(async ({ input }) => {
    await db
      .update(eventsToGuests)
      .set({ wish: input.wish })
      .where(eq(eventsToGuests.guestId, input.guestId));
  });

export const getGuestNameByIdAction = async (guestId: number) => {
  const guest = await db
    .select({
      name: guests.names,
    })
    .from(guests)
    .where(eq(guests.id, guestId))
    .limit(1);

  return guest[0]?.name;
};

export const getAllWishes = createServerAction().handler(async () => {
  const wishes = await db
    .select({
      name: guests.names,
      wish: eventsToGuests.wish,
    })
    .from(eventsToGuests)
    .leftJoin(guests, eq(eventsToGuests.guestId, guests.id))
    .where(eq(eventsToGuests.eventId, 1));

  return wishes.filter((e2g) => e2g.wish !== null);
});
