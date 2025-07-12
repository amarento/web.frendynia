"use client";

import { useRouter } from "next/navigation";
import QrScanner from "qr-scanner";
import React from "react";
import Snowfall from "react-snowfall";
import BluetoothStatus from "~/app/_components/bluetooth-status";

export default function Scan() {
  const router = useRouter();
  /** action after scanning. */
  const onScan = React.useCallback(
    (result: QrScanner.ScanResult) => {
      const url = result.data.replace(
        "https://amarento.id/clients/PERCHR2024",
        "/perkichristmas2024",
      );

      router.push(url);
    },
    [router],
  );

  /** video reference component. */
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  /** start video when page rendered. */
  React.useEffect(() => {
    /** instantiate scanner video ref is already populated. */
    if (videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          onScan(result);
        },
        {
          onDecodeError: (error) => console.log(error),
          highlightScanRegion: true,
          preferredCamera: "user",
          maxScansPerSecond: 20,
        },
      );

      /** start scanner. */
      void qrScanner.start();

      return () => {
        qrScanner.stop();
        qrScanner.destroy();
      };
    }
  }, [onScan]);

  return (
    <div className="relative flex h-screen w-screen flex-col bg-stary-night-plain bg-cover">
      <div className="bg-dark-grey-default/40 backdrop-blur-sm">
        <h1 className="absolute top-20 w-full text-center text-3xl text-yellow-400 md:text-4xl">
          SCAN QR CODE HERE
        </h1>

        <Snowfall radius={[0, 2.5]} speed={[1.0, 2.0]} snowflakeCount={100} />

        <div className="flex h-screen flex-col items-center justify-center">
          <video className="aspect-video w-10/12 md:w-6/12" ref={videoRef} />
        </div>
      </div>

      <BluetoothStatus />
    </div>
  );
}
