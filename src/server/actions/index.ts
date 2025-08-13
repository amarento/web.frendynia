'use server';

import { and, eq, inArray } from 'drizzle-orm';
import { z } from 'zod';
import { createServerAction } from 'zsa';
import { db } from '~/server/db';
import { clients, events, eventsToGuests } from '~/server/db/schema';

export const addWishAction = createServerAction()
  .input(
    z.object({
      clientId: z.number(),
      guestId: z.number(),
      wish: z.string(),
    })
  )
  .handler(async ({ input }) => {
    /** load guest all guest ids for the clients. */
    const guestIds = db
      .select({ id: eventsToGuests.guestId })
      .from(eventsToGuests)
      .leftJoin(events, eq(eventsToGuests.eventId, events.id))
      .where(
        and(
          eq(events.clientId, input.clientId),
          eq(events.eventCategory, 'reception')
        )
      );

    if ((await guestIds).length === 0) {
      throw new Error('No guests found in the reception event of the client.');
    }

    await db
      .update(eventsToGuests)
      .set({ wish: input.wish })
      .where(
        and(
          eq(eventsToGuests.guestId, input.guestId),
          inArray(eventsToGuests.guestId, guestIds)
        )
      );
  });

export const getGuestNameByIdAction = createServerAction()
  .input(
    z.object({
      clientId: z.number(),
      guestId: z.number(),
    })
  )
  .handler(async ({ input }) => {
    const client = await db.query.clients.findFirst({
      where: eq(clients.id, input.clientId),
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
      .find((g) => g.id === input.guestId);
    return guest?.names;
  });

export const getAllWishes = createServerAction()
  .input(
    z.object({
      clientId: z.number(),
    })
  )
  .handler(async ({ input }) => {
    const client = await db.query.clients.findFirst({
      where: eq(clients.id, input.clientId),
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

    if (!client) {
      return [];
    }

    const allWishes = client.events
      .flatMap((event) =>
        event.eventsToGuests.map((e2g) => ({
          guestId: e2g.guestId,
          wish: e2g.wish,
          name: e2g.guest.names,
        }))
      )
      .filter(
        (
          item
        ): item is {
          guestId: number;
          wish: string;
          name: string;
        } => Boolean(item.wish)
      );

    const uniqueWishes = [
      ...new Map(allWishes.map((item) => [item.guestId, item])).values(),
    ];

    return uniqueWishes.map(({ wish, name }) => ({ wish, name }));
  });
