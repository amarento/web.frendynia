"use server";

import { and, asc, eq } from "drizzle-orm";
import { z } from "zod";
import { createServerAction } from "zsa";
import { db } from "~/server/db";
import { guests } from "~/server/db/schema";

export const getGuestById = createServerAction()
  .input(z.object({ id: z.number() }))
  .handler(async ({ input }) => {
    return await db.query.guests.findFirst({ where: eq(guests.id, input.id) });
  });

export const rsvpGuestById = createServerAction()
  .input(z.object({ id: z.number(), hasGift: z.boolean() }))
  .handler(async ({ input }) => {
    return await db
      .update(guests)
      .set({ nRSVPDinnerAct: 1, _angpaoGiven: input.hasGift })
      .where(eq(guests.id, input.id));
  });

export const getAttendingGuest = createServerAction().handler(async () => {
  return await db.query.guests.findMany({
    where: and(eq(guests._angpaoGiven, true), eq(guests.clientId, 1)),
    orderBy: [asc(guests.invNames)],
  });
});

export const getTotalGuestById = createServerAction()
  .input(z.object({ clientId: z.number() }))
  .handler(async ({ input }) => {
    return (
      await db.query.guests.findMany({
        where: eq(guests.clientId, input.clientId),
      })
    ).length;
  });
