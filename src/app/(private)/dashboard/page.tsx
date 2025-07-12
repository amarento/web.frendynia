import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { getClients } from "./client-actions";
import { columns } from "./columns";
import AddClientDialog from "./components/add-client-dialog";
import { DataTable } from "./data-table";

export default async function Page() {
  const data = await getClients();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-center gap-x-2">
        <AddClientDialog />
        <Link
          href={"Amarento_GuestList_Template.xlsx"}
          download
          className={cn(
            buttonVariants({ variant: "default" }),
            "flex items-center gap-x-2",
          )}
        >
          <DownloadIcon className="h-4 w-4" />
          <p>Download template</p>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export const dynamic = "force-dynamic";
