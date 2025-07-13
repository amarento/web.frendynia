'use server';

import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { createServerAction } from 'zsa';
import { db } from '~/server/db';
import { clients, eventsToGuests } from '~/server/db/schema';

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
  const client = await db.query.clients.findFirst({
    where: eq(clients.id, 2),
    with: {
      events: {
        with: {
          eventsToGuests: {
            with: {
              guest: true,
            },
          },
        },
      },
    },
  });

  const guest = client?.events
    .flatMap((event) => event.eventsToGuests.flatMap((e2g) => e2g.guest))
    .find((g) => g.id === guestId);
  return guest?.names;
};

export const getAllWishes = createServerAction().handler(async () => {
  const client = await db.query.clients.findFirst({
    where: eq(clients.id, 2),
    with: {
      events: {
        with: {
          eventsToGuests: {
            with: {
              guest: true,
            },
          },
        },
      },
    },
  });

  return client?.events
    .flatMap((event) => event.eventsToGuests.flatMap((e2g) => e2g.wish))
    .filter((wish) => wish !== null);
});
