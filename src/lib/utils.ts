import { type ClassValue, clsx } from "clsx";
import { DateTime } from "luxon";
import { alphabet, generateRandomString } from "oslo/crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructDateTime(date: Date, time: string) {
  /** split to hours and minutes */
  const [hours, minutes] = time.split(":").map(Number);

  if (hours === undefined || minutes === undefined)
    return {
      success: false,
      message: "Error constructing date time.",
      data: null,
    };

  return {
    success: true,
    message: null,
    data: DateTime.fromJSDate(date)
      .setZone("Asia/Jakarta")
      .set({ hour: hours, minute: minutes }),
  };
}

export function getInitials(name1: string, name2: string): string {
  /** split name */
  const parts1 = name1.split(" ");
  const parts2 = name2.split(" ");

  /** take first letter */
  const initials = [
    ...parts1.map((part) => part.charAt(0)),
    ...parts2.map((part) => part.charAt(0)),
  ];

  /** initials ready */
  return initials.join("").toUpperCase();
}

export function constuctClientCode(initial: string) {
  const random = generateRandomString(4, alphabet("A-Z", "0-9"));
  return `${initial}${random}`;
}

/** method to convert javascript datetime to pretty local time */
export function toLocalTime(date: Date) {
  return DateTime.fromJSDate(date)
    .setZone("Asia/Jakarta")
    .setLocale("id-ID")
    .toFormat("dd MMMM yyyy HH:mm 'WIB'");
}

export function toLocalDay(date: Date) {
  return DateTime.fromJSDate(date)
    .setZone("Asia/Jakarta")
    .setLocale("id-ID")
    .toFormat("EEEE, dd MMMM yyyy");
}

/** method to calculate if the delta is more than two weeks. */
export function isMoreThanTwoWeekApart(date: Date): boolean {
  const currentDate = new Date();
  const milliseconds = 7 * 24 * 60 * 60 * 1000;

  return date.getTime() - currentDate.getTime() < milliseconds;
}

/** method to calculate if the delta is more than two weeks. */
export function delta(date: Date): number {
  const currentDate = new Date();
  const timeDifference = date.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return Math.max(daysDifference, 0);
}
