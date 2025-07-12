"use client";

import { Loader2, Plus } from "lucide-react";
import React from "react";
import * as xlsx from "xlsx";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { useToast } from "~/components/ui/use-toast";
import {
  cn,
  constructDateTime,
  constuctClientCode,
  getInitials,
} from "~/lib/utils";
import { type newClientSchema } from "~/server/contracts";
import { addClient } from "../client-actions";

const dateRegex = /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const ExcelDataSchema = z.object({
  "Nama Bride and Groom": z.string(),
  "Nama Orang Tua Groom": z.string(),
  "Nama Orang Tua Bride": z.string(),
  "Tanggal Acara": z
    .string()
    .regex(dateRegex, {
      message: "Invalid date format. Please use DD.MM.YYYY.",
    })
    .transform((str) => {
      const [day, month, year] = str.split(".");
      return new Date(parseInt(year!), parseInt(month!) - 1, parseInt(day!));
    }),
  "Jumlah Pax": z.number().int().positive(),
  "Lokasi Holmat": z.string(),
  "Jam Holmat": z.union([
    z.literal(""),
    z.literal("-"),
    z.string().regex(timeRegex, {
      message: "Invalid time format. Please use HH:MM (24-hour format).",
    }),
  ]),
  "Lokasi Resepsi": z.string(),
  "Jam Resepsi": z.string().regex(timeRegex, {
    message: "Invalid time format. Please use HH:MM (24-hour format).",
  }),
  EO: z.string(),
  // Consider using a more specific format if needed
});

export default function AddClientDialog() {
  const { toast } = useToast();

  /** state for add client action */
  const { isPending, execute } = useServerAction(addClient, {
    onSuccess: () => {
      toast({
        title: "✅ Client added successfully.",
      });
    },
  });

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
        try {
          const data: [string, string][] = xlsx.utils.sheet_to_json(worksheet, {
            header: 1,
            range: "B4:C13",
          });
          const object = ExcelDataSchema.parse(Object.fromEntries(data));

          /** read holmat time */
          let holmat = undefined;
          if (object["Jam Holmat"] !== "-") {
            holmat = constructDateTime(
              object["Tanggal Acara"],
              object["Jam Holmat"],
            );
            if (!holmat.success || holmat.data === null) {
              toast({
                title: "Error constructing holmat date time.",
                variant: "destructive",
              });
              return;
            }
          }

          /** read dinner time */
          const dinner = constructDateTime(
            object["Tanggal Acara"],
            object["Jam Resepsi"],
          );

          if (!dinner.success || dinner.data === null) {
            toast({
              title: "Error constructing holmat date time.",
              variant: "destructive",
            });
            return;
          }

          /** construct client unique code */
          const [groom, bride] = object["Nama Bride and Groom"].split("&");
          const initial = getInitials(groom ?? "", bride ?? "");
          const code = constuctClientCode(initial);

          const client: z.infer<typeof newClientSchema> = {
            code: code,
            nameGroom: groom?.trim() ?? "",
            nameBride: bride?.trim() ?? "",
            parentsNameGroom: object["Nama Orang Tua Groom"],
            parentsNameBride: object["Nama Orang Tua Bride"],
            weddingDay: new Date(object["Tanggal Acara"]),
            holmatLocation: object["Lokasi Holmat"],
            holmatTime:
              holmat !== undefined ? holmat.data.toJSDate() : new Date(),
            dinnerLocation: object["Lokasi Resepsi"],
            dinnerTime: dinner.data.toJSDate(),
          };

          await execute(client);
          toast({
            title: "Client was added successfully. 🎉",
          });
        } catch (error) {
          toast({
            title: `An error occured while parsing data from excel file. Error: ${JSON.stringify(error)}`,
            variant: "destructive",
          });
        }
      };

      reader.readAsArrayBuffer(file);
    },
    [execute, toast],
  );

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants(),
          "flex w-fit items-center gap-1 font-mono",
        )}
      >
        <Plus className="h-4 w-4" />
        <p>Add client</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add client</DialogTitle>
          <DialogDescription>
            <div className="mt-2 grid gap-4">
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

              <div className="flex items-center justify-center gap-x-2 overflow-hidden">
                <Separator orientation="horizontal" className="w-1/2" />
                <span>or</span>
                <Separator orientation="horizontal" className="w-1/2" />
              </div>

              <div className="flex gap-x-2">
                <Input type="text" placeholder="File URL" />
                <Button>Load</Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
