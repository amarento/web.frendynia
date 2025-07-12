"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "~/components/ui/checkbox";
import { toLocalDay, toLocalTime } from "~/lib/utils";
import { type Client } from "~/server/db/schema";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import DataTableRowActions from "./components/data-table-row-actions";
import UploadMediaDialog from "./components/upload-media-dialog";

export const columns: ColumnDef<Client>[] = [
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
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nameGroom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Groom" />
    ),
  },
  {
    accessorKey: "nameBride",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bride" />
    ),
  },
  {
    accessorKey: "parentsNameGroom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Groom Parents" />
    ),
  },
  {
    accessorKey: "parentsNameBride",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bride Parents" />
    ),
  },
  {
    accessorKey: "weddingDay",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wedding Day" />
    ),
    cell: ({ row }) => {
      if (row.original.weddingDay === null) return "-";
      return toLocalDay(row.original.weddingDay);
    },
  },
  {
    accessorKey: "holmatLocation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Holy Matrimony" />
    ),
  },
  {
    accessorKey: "holmatTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Holy Matrimony Time" />
    ),
    cell: ({ row }) => {
      if (row.original.holmatTime === null) return "-";
      return <p className="w-32">{toLocalTime(row.original.holmatTime)}</p>;
    },
  },
  {
    accessorKey: "dinnerLocation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dinner" />
    ),
  },
  {
    accessorKey: "dinnerTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dinner Time" />
    ),
    cell: ({ row }) => {
      if (row.original.dinnerTime === null) return "-";
      return <p className="w-32">{toLocalTime(row.original.dinnerTime)}</p>;
    },
  },
  {
    header: " ",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
  {
    header: " ",
    cell: ({ row }) => <UploadMediaDialog />,
  },
];
