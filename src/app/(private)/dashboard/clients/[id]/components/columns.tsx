"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { Check, X } from "lucide-react";
import { PERKI_CHRISTMAS_CLIENT_CODE } from "~/app/(client-specific)/data";
import { Badge } from "~/components/ui/badge";
import { Checkbox } from "~/components/ui/checkbox";
import { type GuestWithInfo } from "~/server/db/schema";
import DataTableRowActions from "./data-table-row-actions";

export const columns: ColumnDef<GuestWithInfo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invNames",
    header: "Name",
  },
  {
    header: "Address",
    cell: ({ row }) => <div>{row.original.guestInfo?.address ?? "-"}</div>,
  },
  {
    accessorKey: "waNumber",
    header: "Whatsapp ",
  },
  {
    header: "RSVP Holy Matrimony",
    accessorKey: "nRSVPHolmatWA",
  },
  {
    header: "RSVP Reception",
    accessorKey: "nRSVPDinnerWA",
  },
  {
    header: "Allergies",
    cell: ({ row }) => <div>{row.original.guestInfo?.note ?? "-"}</div>,
  },
  {
    header: "RSVP Status",
    cell: ({ row }) => {
      const hasNotResponded =
        row.original.nRSVPHolmatWA === null &&
        row.original.nRSVPDinnerWA === null;

      console.log(row.original.invNames.includes("Arjuna"));
      return (
        <div>
          {hasNotResponded ? (
            <Badge className="flex w-fit gap-1 bg-green-500 px-3 font-mono text-white-primary-default">
              <p>Unresponded</p>
            </Badge>
          ) : row.original.rsvpDinner ? (
            <Badge className="flex w-fit gap-1 bg-green-500 px-3 font-mono text-white-primary-default">
              <Check className="h-4 w-4" />
              <p>Attend</p>
            </Badge>
          ) : (
            <Badge className="flex w-fit gap-1 bg-red-500 px-3 font-mono text-white-primary-default">
              <X className="h-4 w-4" />
              <p>Unattend</p>
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    header: "Reception Status",
    cell: ({ row }) => (
      <div>
        {row.original.nRSVPDinnerAct === null ? (
          <Badge className="flex w-fit gap-1 bg-red-500 px-3 font-mono text-white-primary-default">
            <X className="h-4 w-4" />
            <p>Unattend</p>
          </Badge>
        ) : (
          <Badge className="flex w-fit gap-1 bg-green-500 px-3 font-mono text-white-primary-default">
            <Check className="h-4 w-4" />
            <p>Attend</p>
          </Badge>
        )}
      </div>
    ),
  },
  {
    header: " ",
    cell: ({ row }) => (
      <DataTableRowActions row={row} clientCode={PERKI_CHRISTMAS_CLIENT_CODE} />
    ),
  },
];
