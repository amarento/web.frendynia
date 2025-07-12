"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { Loader2 } from "lucide-react";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useServerAction } from "zsa-react";
import ClientAPI from "~/app/(private)/dashboard/api";
import {
  addDemoGuest,
  getClientByCode,
} from "~/app/(private)/dashboard/client-actions";
import Loading from "~/app/_components/loading";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { useServerActionQuery } from "~/lib/hooks/server-action-hooks";
import { addDemoGuestSchema } from "~/server/contracts";
import { AMARENTO_DEMO_CLIENT_CODE } from "../data";

export default function Page() {
  const { isLoading, data } = useServerActionQuery(getClientByCode, {
    input: { code: AMARENTO_DEMO_CLIENT_CODE },
    queryKey: ["client"],
  });

  /** define form. */
  const form = useForm<z.infer<typeof addDemoGuestSchema>>({
    resolver: zodResolver(addDemoGuestSchema),
    defaultValues: { clientId: data?.id ?? 36 },
  });

  const { toast } = useToast();

  const router = useRouter();
  const api = new ClientAPI("https://amarento-demo.fly.dev");
  const { mutate } = useMutation({
    mutationKey: ["send-initial-message"],
    mutationFn: (request: { guestId: number }) =>
      api.sendInitialMessage(AMARENTO_DEMO_CLIENT_CODE, request.guestId),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Please check you WhatsApp message!",
        className: "bg-light-green-light text-dark-green-base",
      });

      router.push("https://wa.me/4915254937548");
    },
    onError: (error) => {
      toast({
        title: error.message,
        variant: "destructive",
      });
    },
  });

  const { isPending, execute } = useServerAction(addDemoGuest, {
    onSuccess: ({ data }) => {
      toast({
        title: "Congrats! You've been successfully registered! 🎉",
        description: `You will get a WhatsApp message shortly!`,
        className: "bg-light-green-light text-dark-green-base",
      });

      mutate({ guestId: data.id });
    },
    onError: ({ err }) => {
      toast({
        title: err.message,
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof addDemoGuestSchema>) {
    void execute({ ...values, clientId: data!.id });
  }

  return (
    <div className="grid min-h-screen items-center justify-center bg-dark-green-dark text-white">
      {isLoading ? (
        <div className="flex items-center gap-x-2 text-white">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p className="mt-[2px] text">Loading client info ...</p>
        </div>
      ) : (
        <div className="mx-auto my-12 grid w-10/12 gap-y-4 md:max-w-screen-sm">
          <Button
            onClick={() => router.push("/")}
            className="mb-sm w-fit gap-2 bg-light-green-light text-dark-green-base hover:bg-light-green-light hover:opacity-75"
          >
            <Home className="h-4 w-4" /> Home
          </Button>
          <div className="text-xl md:text-2xl">
            <h1 className="font-marjorie text-yellow-200">
              Hi, this is Amarento Live Demo Page 👋
            </h1>
          </div>

          <div className="grid gap-y-4 text-base">
            <p>
              We use an example invitation, just so you can experience how our
              RSVP works
            </p>
            <p>
              Please fill in the form below to receive automated message from
              our WhatsApp
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-2 grid grid-cols-2 gap-x-4 gap-y-8"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>First Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Reynard"
                        {...field}
                        className="rounded-full"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Last Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Gozali"
                        {...field}
                        className="rounded-full"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="DreamHouse EO"
                        {...field}
                        className="rounded-full"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="waNumber"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Whatsapp Number*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="628123112455"
                        {...field}
                        className="rounded-full"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="-mt-6 text-sm text-yellow-200">
                * means required field
              </p>

              <Button
                type="submit"
                className="col-span-2 w-fit place-self-center rounded-full bg-yellow-200 px-8 font-marjorie text-dark-green-base hover:bg-light-green-light"
              >
                {isPending ? (
                  <Loading className="mt-[2px] text-base" />
                ) : (
                  "RSVP ME"
                )}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
