"use client";

import { ArrowLeft, Gift } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Snowfall from "react-snowfall";
import BluetoothStatus from "~/app/_components/bluetooth-status";
import Loading from "~/app/_components/loading";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { useToast } from "~/components/ui/use-toast";

import LoadingPage from "~/app/_components/loading-page";
import { useThermalPrinter } from "~/hooks/use-thermal-printer";
import {
  useServerActionMutation,
  useServerActionQuery,
} from "~/lib/hooks/server-action-hooks";
import { getGuestById, rsvpGuestById } from "../guest-actions";

export default function Page() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  /** read client data from database. */
  const { data: guest, isLoading } = useServerActionQuery(getGuestById, {
    input: { id: +params.id },
    queryKey: [`guest-${params.id}`],
  });

  const { onPrint } = useThermalPrinter();

  /** rsvp guest. */
  const { toast } = useToast();
  const { isPending, mutate } = useServerActionMutation(rsvpGuestById, {
    onSuccess: async () => {
      toast({
        title: "✅ Check in successful.",
        description: "Thank you for coming!",
      });

      /** print guest id sticker for gift. */
      if (hasGift) await onPrint(params.id, 8);

      /** print guest name for table name. */
      setTimeout(() => {
        void onPrint(guest!.invNames, 1);
      }, 1000);

      /** route page back to welcome. */
      router.push("welcome");
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "❌ Check in failed.",
        description: "Sorry! An error occurred while checking in.",
      });
    },
  });

  /** local state for gift status. */
  const [hasGift, setHasGift] = React.useState<boolean>(false);

  /** action when the user check in. */
  const onCheckIn = () => {
    /** rsvp guest by id. */
    mutate({ id: +params.id, hasGift });
  };

  if (isLoading) return <LoadingPage />;

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center">
      <Snowfall radius={[0, 2.5]} speed={[1.0, 2.0]} snowflakeCount={100} />
      <Button
        size={"sm"}
        className="absolute right-24 top-24 flex gap-x-1 bg-dark-grey-default/40"
        onClick={() => router.push("welcome")}
      >
        <ArrowLeft className="h-4 w-4" />
        <p className="mt-1">Back</p>
      </Button>

      <div className="mt-28 flex w-1/3 flex-col items-center justify-center space-y-6 rounded-md">
        <h1 className="text-3xl">Welcome,</h1>
        <p className="text-5xl">{guest?.invNames}</p>

        <div className="mt-8 flex items-center gap-x-2 text-3xl">
          <div className="flex items-center gap-x-4">
            <Button
              size={"icon"}
              className="mb-2 bg-white/20 text-2xl"
              disabled
            >
              -
            </Button>
            <h3>{guest?.nRSVPPlan}</h3>
            <Button
              size={"icon"}
              className="mb-2 bg-white/20 text-2xl"
              disabled
            >
              +
            </Button>
          </div>
          <p>/ {guest?.nRSVPPlan} Person(s)</p>
        </div>

        <div className="mt-8 flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            className="mb-1"
            checked={hasGift}
            onCheckedChange={(checked) => {
              setHasGift(checked);
            }}
          />

          <div className="flex items-center gap-x-1">
            <Gift className="mb-2 h-7 w-7" />
            <Label htmlFor="airplane-mode" className="text-3xl">
              Gift
            </Label>
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="bg-white/20" onClick={onCheckIn}>
            {isPending ? <Loading className="text-sm" /> : "CONTINUE"}
          </Button>
        </div>

        <BluetoothStatus />
      </div>
    </div>
  );
}
