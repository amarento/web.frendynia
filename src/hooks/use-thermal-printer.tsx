"use client";

import {
  Br,
  Cut,
  Printer,
  Text,
  type TextSize,
  render,
} from "react-thermal-printer";
import { create } from "zustand";

const PRINTER_NAME = "RPP02N";
const SERVICE_UUID = "E7810A71-73AE-499D-8C15-FAA9AEF0C3F2".toLowerCase();
// const PRINTER_NAME = "Q244G3C71680257";
// const SERVICE_UUID = "0000ff00-0000-1000-8000-00805f9b34fb".toLocaleLowerCase();

interface IThermalPrinterState {
  readonly device: BluetoothDevice | undefined;
  readonly server: BluetoothRemoteGATTServer | undefined;
  readonly characteristic: BluetoothRemoteGATTCharacteristic | undefined;
  readonly onConnectDevice: () => Promise<void>;
  readonly onDisconnectDevice: () => void;
  readonly onPrint: (text: string, size: TextSize) => Promise<void>;
}

export const useThermalPrinter = create<IThermalPrinterState>((set, get) => ({
  device: undefined,
  server: undefined,
  characteristic: undefined,
  onConnectDevice: async () => {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ name: PRINTER_NAME }],
      optionalServices: [SERVICE_UUID],
    });
    set({ device });

    const server = await device.gatt?.connect();
    set({ server });

    const service = await server?.getPrimaryService(SERVICE_UUID);
    const characteristic = (await service?.getCharacteristics())?.at(0);
    set({ characteristic });
  },
  onDisconnectDevice: () => {
    const { server } = get();
    server?.disconnect();
  },
  onPrint: async (text: string, size: TextSize) => {
    const { device, server } = get();
    if (server?.connected === false || device === undefined)
      await get().onConnectDevice();

    const encoder = (text: string) => new TextEncoder().encode(text);
    const receipt = (
      <Printer type="epson" width={50} encoder={encoder} debug>
        <Br />
        <Br />
        <Text align="center" size={{ height: size, width: size }}>
          {text}
        </Text>
        <Cut />
      </Printer>
    );

    const data = await render(receipt);
    await print(data);
  },
}));

const print = async (data: Uint8Array) => {
  const { characteristic } = useThermalPrinter.getState();
  const chunkSize = 512;
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.subarray(i, i + chunkSize));
  }

  for (const chunk of chunks) {
    await characteristic?.writeValue(chunk);
  }
};
