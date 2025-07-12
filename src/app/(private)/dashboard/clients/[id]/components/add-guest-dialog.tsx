"use client";

import { Loader2, Save } from "lucide-react";
import React from "react";
import * as xlsx from "xlsx";
import { useServerAction } from "zsa-react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { type NewGuest } from "~/server/db/schema";
import { addGuestsByClient } from "../../../client-actions";

type GuestExcelData = {
  "Nama Penerima RSVP": string;
  "Nomor WA (format: 621234567899)": string;
  "Side (BRIDE/GROOM)": string;
  "Table Name": string;
  "Total Pax RSVP": string;
  "Holy Matrimony": boolean;
  Reception: boolean;
};

interface IAddGuestDialog {
  readonly clientId: number;
}

export default function AddGuestDialog({ clientId }: IAddGuestDialog) {
  const { toast } = useToast();

  /** state for add client action */
  const { isPending, execute } = useServerAction(addGuestsByClient, {
    onSuccess: () => {
      toast({
        title: "✅ Guests for client added successfully.",
      });
    },
    onError: ({ err }) => {
      toast({
        title: `Failed to add guests for client. Error: ${err.message}`,
        variant: "destructive",
      });
    },
  });

  /** local state for uploaded file. */
  const [guests, setGuests] = React.useState<NewGuest[]>();

  const onOpenFile = React.useCallback(
    (files: FileList | null) => {
      if (files === null) {
        toast({
          title: "No file selected.",
          variant: "destructive",
        });
        return;
      }

      const file = files[0];
      if (file === undefined) {
        toast({
          title: "Error reading excel file.",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = async (event) => {
        const binaryStr = event.target?.result;
        const workbook = xlsx.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0] as unknown as string;

        const worksheet = workbook.Sheets[sheetName];
        if (worksheet === undefined) {
          toast({
            title: "Error reading excel file.",
            variant: "destructive",
          });
          return;
        }

        /** map data to typescript object */
        const data: GuestExcelData[] = xlsx.utils.sheet_to_json(worksheet, {
          range: "B15:H59",
        });

        const guests: NewGuest[] = data.map((row) => {
          const guest: NewGuest = {
            invNames: row["Nama Penerima RSVP"],
            waNumber: row["Nomor WA (format: 621234567899)"],
            nRSVPPlan: parseInt(row["Total Pax RSVP"]),
            nRSVPHolmatWA: row["Holy Matrimony"] === false ? 0 : null,
            nRSVPDinnerWA: row.Reception === false ? 0 : null,
            side: row["Side (BRIDE/GROOM)"],
            tableName: row["Table Name"],
            clientId: clientId,
          };
          return guest;
        });

        setGuests(guests);

        toast({
          title: `${guests.length} guests were loaded successfully. 🎉`,
        });
      };

      reader.readAsArrayBuffer(file);
    },
    [clientId, toast],
  );

  const saveGuests = async () => {
    if (guests === undefined) {
      toast({
        title: "No guests to save. Please reload the file.",
        variant: "destructive",
      });
      return;
    }

    await execute(guests);
  };

  return (
    <Dialog>
      <DialogTrigger
        className={
          "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        }
      >
        Add
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add guests from xlsx file</DialogTitle>
          <DialogDescription className="grid gap-4 font-mono">
            <div className="mt-2">
              {isPending ? (
                <Button
                  className="flex items-center gap-1"
                  variant={"secondary"}
                  disabled
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p>Loading</p>
                </Button>
              ) : (
                <Input
                  type="file"
                  className="cursor-pointer"
                  onChange={(e) => onOpenFile(e.target.files)}
                />
              )}
            </div>

            {guests ? (
              <div className="my-4 flex max-h-80 flex-col gap-2 overflow-y-scroll">
                <h1 className="font-bold">Data Preview</h1>
                <pre>{JSON.stringify(guests, null, 2)}</pre>
              </div>
            ) : null}

            <Button
              className="flex items-center gap-1"
              disabled={guests === undefined}
              onClick={() => saveGuests()}
            >
              <Save className="h-4 w-4" />
              <p>Save guests</p>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
