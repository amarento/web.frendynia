'use server';

import { db } from '~/server/db';
import { eventsToGuests, guests } from '~/server/db/schema';
import { eq } from 'drizzle-orm';

export async function getAllWishes() {
  const wishes = await db
    .select({
      name: guests.names,
      wish: eventsToGuests.wish,
    })
    .from(eventsToGuests)
    .leftJoin(guests, eq(eventsToGuests.guestId, guests.id))
    .where(eq(eventsToGuests.eventId, 1));

  return wishes;
}
