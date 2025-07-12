"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Snowfall from "react-snowfall";
import BluetoothStatus from "~/app/_components/bluetooth-status";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import useAuthentication from "./useAuthentication";

const PASSWORD = "rodokangel";
export default function Page() {
  const router = useRouter();

  /** local state for authorized. */
  const { authorized, setAuthorized } = useAuthentication();

  /** local state for admin. */
  const [password, setPassword] = React.useState<string>();

  const { toast } = useToast();

  return (
    <div className="relative flex h-svh flex-col items-center justify-center gap-4">
      <Snowfall radius={[0, 2.5]} speed={[1.0, 2.0]} snowflakeCount={100} />
      {!authorized ? (
        <div>
          <p className="mb-1 text-sm">Enter Password</p>
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            className="mt-4"
            size={"sm"}
            onClick={() => {
              if (password === PASSWORD) setAuthorized(true);
              else {
                toast({
                  variant: "destructive",
                  title: "Authentication failed.",
                });
              }
            }}
          >
            Login
          </Button>
        </div>
      ) : (
        <>
          <h3 className="w-11/12 text-center text-2xl">
            WELCOME TO PERKI CHRISTMAS CELEBRATION 2024!
          </h3>
          <Button onClick={() => router.push("scan")} className="bg-white/20">
            CHECK ME IN!
          </Button>
        </>
      )}

      <BluetoothStatus />
    </div>
  );
}
