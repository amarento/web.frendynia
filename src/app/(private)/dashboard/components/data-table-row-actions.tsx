import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import { type Row } from "@tanstack/react-table";
import { Delete, Edit, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useServerAction } from "zsa-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useToast } from "~/components/ui/use-toast";
import { type Client } from "~/server/db/schema";

import ClientAPI from "../api";
import { deleteClient } from "../client-actions";
import AddGuestDialog from "../clients/[id]/components/add-guest-dialog";

interface IDataTableRowActionsProps<TData> {
  readonly row: Row<TData>;
}

export default function DataTableRowActions<TData>({
  row,
}: IDataTableRowActionsProps<TData>) {
  /** parse row as guest. */
  const client = row.original as unknown as Client;

  /** handle redirection to guest dashboard. */
  const router = useRouter();

  const { toast } = useToast();
  const api = new ClientAPI("https://perkiaachen.fly.dev");

  /** handle action to send initial message. */
  const { mutate: sendInitialMessage } = useMutation({
    mutationKey: ["send-initial-message"],
    mutationFn: (code: string) => api.sendInitialMessage(code),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "✅ Initial message was sent successfully!",
      });
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: `❌ An error occured while sending message! ${err.message}`,
      });
    },
  });

  /** handle action to send reminder message. */
  const { mutate: sendReminder } = useMutation({
    mutationKey: ["send-reminder-with-qr"],
    mutationFn: (code: string) => api.sendReminder(code),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "✅ Reminder was sent successfully!",
      });
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: `❌ An error occured while sending message! ${err.message}`,
      });
    },
  });

  /** handle action to send reminder message with QR. */
  const { isPending, mutate: sendReminderWithQR } = useMutation({
    mutationKey: ["send-reminder-with-qr"],
    mutationFn: (code: string) => api.sendReminderMessageWithQR(code),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "✅ Reminder was sent successfully!",
      });
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: `❌ An error occured while sending message! ${err.message}`,
      });
    },
  });

  /** handle action to delete client. */
  const { isPending: isPendingDeleting, execute } = useServerAction(
    deleteClient,
    {
      onSuccess: () => {
        toast({
          title: "✅ Client deleted successfully.",
        });
      },
    },
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Client</DropdownMenuLabel>

        <DropdownMenuItem className="flex items-center gap-x-1">
          <Edit />
          <span>Edit</span>
        </DropdownMenuItem>
        {isPendingDeleting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <DropdownMenuItem onClick={() => execute({ clientId: client.id })}>
            <Delete />
            <span>Delete</span>
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Guest</DropdownMenuLabel>
        <AddGuestDialog clientId={client.id} />
        <DropdownMenuItem
          onClick={() => router.push(`/dashboard/clients/${client.code}`)}
        >
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => sendInitialMessage(client.code)}>
          Initial message
        </DropdownMenuItem>
        {isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <DropdownMenuItem onClick={() => sendReminder(client.code)}>
            Reminder
          </DropdownMenuItem>
        )}
        {isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <DropdownMenuItem onClick={() => sendReminderWithQR(client.code)}>
            Reminder with QR
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
