/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useMutation } from "@tanstack/react-query";
import Snowfall from "react-snowfall";
import secretSanta from "secret-santa-generator";
import ClientAPI from "~/app/(private)/dashboard/api";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import { useServerActionQuery } from "~/lib/hooks/server-action-hooks";
import { getAttendingGuest } from "../guest-actions";
import useGiftExchange from "./useGiftExchange";

export default function Page() {
  /** load guests. */
  const { data: guests } = useServerActionQuery(getAttendingGuest, {
    input: undefined,
    queryKey: ["attend-guest"],
  });

  /** local state to save randomized gift. */
  const { result, setResult } = useGiftExchange();

  const randomize = async () => {
    const result = secretSanta.buildSecretSantaTable(
      guests?.map((guest) => guest.id),
    ) as Record<number, number>;
    setResult(result);
  };

  const { toast } = useToast();
  const api = new ClientAPI("https://perkiaachen.fly.dev");

  const { mutate } = useMutation({
    mutationKey: ["send-christmas-gift-message"],
    mutationFn: () => sendChristmasGiftMessage(),
    onSuccess: async () => {
      toast({
        title: "Success",
        description: "✅ Christmas gift message was sent successfully.",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "❌ An error occurred while sending message.",
      });
    },
  });

  const sendChristmasGiftMessage = async () => {
    if (result === undefined) {
      toast({
        variant: "destructive",
        title: "Result for the exchange is still undefined.",
      });
      return;
    }

    const list = Array.from(Object.entries(result), ([key, value]) => {
      const guest = guests?.find((guest) => guest.id === +key);

      return {
        name: guest?.invNames ?? "",
        waNumber: guest?.waNumber ?? "",
        giftId: value,
      };
    });

    void Promise.all(
      list.map(
        async (data) =>
          await api.sendChristmasGiftMessage(
            data.name,
            data.giftId,
            data.waNumber,
          ),
      ),
    );
  };

  return (
    <div className="flex h-screen flex-col bg-stary-night-plain bg-cover">
      <div className="h-full bg-dark-grey-default/40 backdrop-blur-sm">
        <Snowfall radius={[0, 2.5]} speed={[1.0, 2.0]} snowflakeCount={100} />
        <h1 className="mt-20 text-center text-3xl">
          TUKER KADO PERKI AACHEN 2024
        </h1>

        <div className="mx-auto mt-16 md:w-10/12">
          <div className="flex items-center space-x-2">
            <Button onClick={() => randomize()} className="bg-white/20">
              RANDOMIZE! 🎲
            </Button>

            <Button onClick={() => mutate()} className="bg-white/20">
              SEND MESSAGE! 🎅
            </Button>
          </div>

          <div className="mt-4">
            <h3 className="mb-2 text-xl">RESULTS</h3>
            {result === undefined ? (
              <p>
                The exchange has not begin yet. Please tell everyone to come ...
              </p>
            ) : (
              <div className="grid flex-wrap gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
                {guests?.map((guest) => (
                  <Badge key={guest.id} className="flex w-fit gap-x-2">
                    <p>{guest.invNames}</p>|<p>{result[guest.id]}</p>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
