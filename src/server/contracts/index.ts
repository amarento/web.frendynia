import { z } from "zod";

export type UserState = {
  readonly nextQuestionId: number;
  readonly isAttendHolmat: boolean;
  readonly nRSVPHolMat: number;
  readonly isAttendDinner: boolean;
  readonly nRSVPDinner: number;
  readonly dinnerNames: string[];
};

export type UserMessage = {
  readonly state: UserState;
};

export const newClientSchema = z.object({
  code: z.string(),
  nameGroom: z.string(),
  nameBride: z.string(),
  parentsNameGroom: z.string(),
  parentsNameBride: z.string(),
  weddingDay: z.date(),
  holmatLocation: z.string(),
  holmatTime: z.date(),
  dinnerLocation: z.string(),
  dinnerTime: z.date(),
});

export const deleteClientSchema = z.object({
  clientId: z.number(),
});

export const addGuestSchema = z.object({
  invNames: z.string(),
  waNumber: z.coerce.string(),
  nRSVPPlan: z.number(),
  side: z.string().optional().nullable(),
  tableName: z.coerce.string().optional().nullable(),
  clientId: z.number(),
});

export const defaultMessageSchema = z.object({
  clientCode: z.string(),
  guestId: z.number().optional(),
  type: z.enum(["initial", "reminder"]).optional(),
  withQR: z.boolean().optional(),
});

export const christmasGiftRequestSchema = z.object({
  name: z.string(),
  giftId: z.number(),
  waNumber: z.string(),
});

export type ChristmasGiftRequest = z.infer<typeof christmasGiftRequestSchema>;

export const addChristmasGuestSchema = z.object({
  invNames: z.string(),
  waNumber: z.string(),
  nRSVPPlan: z.number(),
  clientId: z.number(),
  note: z.string().optional(),
  address: z.string().optional(),
});

const phoneNumberRegEx = /^((\+62|62|0)8[1-9][0-9]{7,10}|(\+49|49)\d{10,11})$/;
export const addDemoGuestSchema = z
  .object({
    clientId: z.number(),
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters." }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters." }),
    companyName: z.string().optional(),
    waNumber: z.string().regex(phoneNumberRegEx, {
      message:
        "Phone number must start with either '62' or '49' and have at least 10 characters.",
    }),
  })
  .transform((data) => ({
    ...data,
    invNames: `${data.firstName} ${data.lastName}`.trim(),
  }));
