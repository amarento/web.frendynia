"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Calendar, Info, Loader2, UsersRound } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Snowfall from "react-snowfall";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { addChristmasGuest } from "~/app/(private)/dashboard/client-actions";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { useServerActionQuery } from "~/lib/hooks/server-action-hooks";
import { delta, isMoreThanTwoWeekApart } from "~/lib/utils";
import { type addChristmasGuestSchema } from "~/server/contracts";
import { getTotalGuestById } from "./guest-actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  whatsapp: z.string().regex(/^49\d{10,11}$/, {
    message:
      "Phone number must start with '49' and have at least 12 digits in total and maximum of 13 digits.",
  }),
  dietary: z.string().optional(),
  address: z.string().optional(),
});

const CLIENT_ID = 1;
const MAX_GUESTS = 70;
export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  /** toast for user feedback. */
  const { toast } = useToast();

  /** state for add client action */
  const router = useRouter();
  const { isPending, execute } = useServerAction(addChristmasGuest, {
    onSuccess: () => {
      toast({
        title: "✅ Registration successful.",
        description: `Thank you for your registration!`,
      });
      router.push("/perkichristmas2024/thankyou");
    },
    onError: ({ err }) => {
      toast({
        title: err.message,
        variant: "destructive",
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const guest: z.infer<typeof addChristmasGuestSchema> = {
      invNames: values.name,
      waNumber: values.whatsapp,
      nRSVPPlan: 1,
      clientId: CLIENT_ID,
      note: values.dietary,
      address: values.address,
    };

    /** action to add guest and guest information. */
    await execute(guest);
  }

  /** local state for agreement. */
  const [agree, setAgree] = React.useState<boolean>(false);

  const { data, isPending: isLoadingTotalGuest } = useServerActionQuery(
    getTotalGuestById,
    {
      input: { clientId: CLIENT_ID },
      queryKey: ["total-guest"],
    },
  );

  return (
    <div className="bg-stary-night-plain bg-cover text-white-primary-default">
      <div className="relative flex min-h-screen w-full items-center justify-center bg-dark-grey-default/40 backdrop-blur-sm">
        {!agree ? (
          <div className="rounded-mdtext-white-primary-default fixed inset-0 top-10 mx-auto grid h-12 w-10/12 grid-cols-2 items-center justify-center gap-x-1 md:w-1/3">
            <div className="col-span-1 flex h-9 justify-center gap-x-1 rounded-sm bg-white/20 px-2 py-2">
              {delta(new Date("2024-12-14")) === 0 ? (
                <div className="flex items-center gap-x-1">
                  <Calendar className="h-4 w-4" />
                  <p className="-mb-1 text-sm">Registration closed</p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-x-1">
                    <Calendar className="h-4 w-4" />
                    <p className="mt-1 text-sm">
                      {delta(new Date("2024-12-14"))} days left
                    </p>
                  </div>

                  <div>
                    <span className="animate-blink transition-none">.</span>
                    <span className="animate-delay-150 animate-blink transition-none">
                      .
                    </span>
                    <span className="animate-blink transition-none animation-delay-300">
                      .
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-1 flex h-9 justify-center gap-x-1 rounded-sm bg-white/20 px-2 py-2 text-center">
              {isLoadingTotalGuest ? (
                <div className="flex items-center gap-x-1">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p className="mt-1 animate-pulse text-sm">
                    Loading available seats ...
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-x-1">
                    <UsersRound className="h-4 w-4" />
                    <p className="mt-1 text-sm">
                      {Math.max(MAX_GUESTS - (data ?? 0), 0) === 0 ? "No " : ""}
                      spots left
                    </p>
                  </div>
                  <div>
                    <span className="animate-blink transition-none">.</span>
                    <span className="animate-delay-150 animate-blink transition-none">
                      .
                    </span>
                    <span className="animate-blink transition-none animation-delay-300">
                      .
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : null}
        <Snowfall radius={[0, 2.5]} speed={[1.0, 2.0]} snowflakeCount={100} />
        <div className="mx-auto w-10/12 py-12 md:w-1/3">
          {agree ? (
            <div>
              <div className="mb-4">
                <Button size={"icon"} onClick={() => setAgree(false)}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>
              <h1 className="mb-4 text-center text-lg font-bold">
                CHRISTMAS PERKI AACHEN 2024 REGISTRATION FORM
              </h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex max-w-[500x] flex-col space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Max Mustermann" />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No. Whatsapp</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="491234567899" />
                        </FormControl>
                        <FormDescription className="text-white-primary-default/80">
                          Please input a valid whatsapp number. The number will
                          be used for automated RSVP via WhatsApp.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dietary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alergi makanan</FormLabel>
                        <FormControl>
                          <Input placeholder="-" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alamat</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Roermonderstr. 110a, 52072, Aachen"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {isPending ? (
                    <Button className="flex w-full items-center gap-2 bg-white/20">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <p className="text-sm">Registering ...</p>
                    </Button>
                  ) : (
                    <Button type="submit" className="mt-8 bg-white/20">
                      Submit
                    </Button>
                  )}
                </form>
              </Form>
            </div>
          ) : (
            <div>
              <h1 className="mb-8 mt-16 text-center text-lg font-bold">
                CHRISTMAS PERKI AACHEN 2024 REGISTRATION
              </h1>
              <div className="grid gap-y-4">
                <p>Shalom Saudara/i,</p>
                <p>
                  Acara natal PERKI Aachen akan diadakan pada tanggal{" "}
                  <span className="font-bold">21.12.2024</span> pukul{" "}
                  <span className="font-bold">15:00</span>. Ada beberapa
                  informasi yang wajib Saudara/i ketahui:
                </p>
                <p>
                  1. Alamat gereja adalah{" "}
                  <span className="font-bold">
                    Roermonderstraße 110a, 52072 Aachen
                  </span>
                  . Demi kelancaran ibadah, Saudara/i mohon hadir di gereja jam
                  <span className="font-bold"> 14.30</span>.
                </p>
                <p>
                  2. Karena keterbatasan kapasitas gedung dan untuk membantu
                  teman-teman pengurus konsumsi, maka pendaftaran akan ditutup 1
                  minggu sebelum ibadah{" "}
                  <span className="font-bold">(14.12.2024)</span> atau ketika
                  pendaftar sudah mencapai 70 orang. Oleh karena itu, kami mohon
                  Saudara/i dapat mendaftarkan diri secepat mungkin dan tidak
                  mendaftar dekat dengan deadline yang ada.
                </p>
                <p>
                  3. Bagi Saudara/i yang ingin hadir bersama keluarga,
                  diharapkan untuk mendaftarkan seluruh anggota keluarga yang
                  akan hadir satu per satu guna memastikan jumlah konsumsi.
                </p>
                <p>
                  4. Akan diadakan acara tukar kado natal. Saudara/i yang datang
                  ke gereja diharapkan dapat mempersiapkan kado natal dengan
                  budget +- 5 Euro.{" "}
                  <span className="font-bold">
                    Mohon jangan memberikan makanan/minuman
                  </span>
                  . Diharapkan untuk membungkus kado dan memberikan tulisan
                  (dalam bentuk surat kecil) tentang ayat alkitab yang paling
                  berkesan bagi Saudara/i di tahun ini dan alasan mengapa ayat
                  tersebut berkesan.
                </p>
                <p>
                  Diharapkan Jemaat tidak terlambat untuk datang ke dalam
                  ibadah.
                </p>

                <div className="flex w-full items-center gap-x-4 rounded-md bg-neutral-200/20 p-4">
                  <Info className="w-12" />
                  <p className="text-sm">
                    Untuk bantuan dan informasi lebih lanjut, silahkan hubungi
                    +491745277265{" "}
                    <span className="font-bold">(Reggy Irawan)</span> via
                    WhatsApp.{" "}
                  </p>
                </div>

                <p className="mt-4 text-right font-bold">
                  See you and God bless you! :)
                </p>
              </div>

              <div className="mt-12 flex justify-center">
                {isMoreThanTwoWeekApart(new Date("2024-12-21")) ||
                data === MAX_GUESTS ? (
                  <Button className="bg-white/20 font-bold">
                    Registration closed!
                  </Button>
                ) : (
                  <Button
                    onClick={() => setAgree(true)}
                    className="bg-white/20 font-bold"
                  >
                    Sign me up! 🎄
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
