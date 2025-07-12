"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction, ZSAError } from "zsa";
import {
  addChristmasGuestSchema,
  addDemoGuestSchema,
  addGuestSchema,
  deleteClientSchema,
  newClientSchema,
} from "~/server/contracts";
import { db } from "~/server/db";
import { clients, guestInfo, guests } from "~/server/db/schema";

export async function getClients() {
  return await db.select().from(clients);
}

export const addClient = createServerAction()
  .input(newClientSchema)
  .handler(async ({ input }) => {
    await db.insert(clients).values(input);
    revalidatePath("/dashboard");
  });

export const deleteClient = createServerAction()
  .input(deleteClientSchema)
  .handler(async ({ input }) => {
    await db.delete(clients).where(eq(clients.id, input.clientId));
    revalidatePath("/dashboard");
  });

export const getClientByCode = createServerAction()
  .input(z.object({ code: z.string() }))
  .handler(async ({ input }) => {
    return await db.query.clients.findFirst({
      where: eq(clients.code, input.code),
      with: {
        guests: {
          orderBy: (guests, { asc }) => [asc(guests.invNames)],
          with: { guestInfo: true },
        },
      },
    });
  });

export type ClientWithGuestInfo = Awaited<
  ReturnType<typeof getClientByCode>
>[0];

/** add multiple guests through excel file. */
export const addGuestsByClient = createServerAction()
  .input(z.array(addGuestSchema))
  .handler(async ({ input }) => {
    await db.insert(guests).values(input);
    revalidatePath("/dashboard");
  });

/** add single guest with additional information. */
export const addChristmasGuest = createServerAction()
  .input(addChristmasGuestSchema)
  .handler(async ({ input }) => {
    /** validate max. number of guests. */
    const n = (
      await db.query.guests.findMany({
        where: eq(guests.clientId, input.clientId),
      })
    ).length;
    if (n === 70)
      throw new ZSAError(
        "ERROR",
        "I'm sorry! It seems like you are late to register to the party. The maximum number of people is already exceeded.",
      );

    /** validate guest existance. */
    const _guest = await db.query.guests.findFirst({
      where: and(
        eq(guests.invNames, input.invNames),
        eq(guests.clientId, input.clientId),
      ),
    });

    if (_guest !== undefined)
      throw new ZSAError(
        "CONFLICT",
        "Uh oh! You are already registered to our event. 💚",
      );

    /** add guest. */
    const guest = await db
      .insert(guests)
      .values(input)
      .returning()
      .then((res) => res.at(0));

    /** add guest information. */
    await db
      .insert(guestInfo)
      .values({ guestId: guest!.id, note: input.note, address: input.address });
  });

/** add single amarento-demo guest. */
export const addDemoGuest = createServerAction()
  .input(addDemoGuestSchema)
  .handler(async ({ input }) => {
    /** validate guest existance. */
    const _guest = await db.query.guests.findFirst({
      where: and(
        eq(guests.invNames, input.invNames),
        eq(guests.clientId, input.clientId),
      ),
    });

    if (_guest !== undefined) return _guest;

    /** add guest. */
    const guest = await db
      .insert(guests)
      .values({ ...input, nRSVPPlan: 1 })
      .returning()
      .then((res) => res.at(0));

    /** add guest information. */
    if (input.companyName !== undefined)
      await db
        .insert(guestInfo)
        .values({ guestId: guest!.id, note: input.companyName });

    return guest;
  });
