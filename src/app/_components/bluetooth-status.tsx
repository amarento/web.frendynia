"use client";

import { Bluetooth } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { useThermalPrinter } from "~/hooks/use-thermal-printer";
import { cn } from "~/lib/utils";

export default function BluetoothStatus() {
  const { server, onConnectDevice } = useThermalPrinter();

  React.useEffect(() => {
    if (server?.connected === false) {
      void onConnectDevice();
    }
  }, [server?.connected, onConnectDevice]);

  return (
    <Button
      className="absolute bottom-8 right-8 bg-white/20"
      size={"icon"}
      onClick={onConnectDevice}
    >
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75",
            {
              "animate-ping bg-cyan-400": server?.connected === true,
            },
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-3 w-3 rounded-full bg-neutral-400",
            {
              "bg-cyan-400": server?.connected === true,
            },
          )}
        />
      </span>
      <Bluetooth className="h-4 w-4" />
    </Button>
  );
}
