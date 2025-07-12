import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import { type Row } from "@tanstack/react-table";
import useGiftExchange from "~/app/(client-specific)/perkichristmas2024/gift/useGiftExchange";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useToast } from "~/components/ui/use-toast";
import { type GuestWithInfo } from "~/server/db/schema";
import ClientAPI from "../../../api";

interface IDataTableRowActionsProps<TData> {
  readonly row: Row<TData>;
  readonly clientCode: string;
}

export default function DataTableRowActions<TData>({
  row,
  clientCode,
}: IDataTableRowActionsProps<TData>) {
  /** parse row as guest. */
  const guest = row.original as unknown as GuestWithInfo;

  const { toast } = useToast();

  /** add logic to call the right server. */
  const api = new ClientAPI("https://perkiaachen.fly.dev");

  /** hanlde action to send initial message. */
  const { mutate: sendInitialMessage } = useMutation({
    mutationKey: ["send-initial-message"],
    mutationFn: (request: { guestId: number }) =>
      api.sendInitialMessage(clientCode, request.guestId),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "✅ Initial message was sent successfully!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "❌ An error occured while sending message!",
      });
    },
  });

  /** handle action to send reminder. */
  const { mutate: sendReminder } = useMutation({
    mutationKey: ["send-reminder"],
    mutationFn: (request: { guestId: number }) => {
      return api.sendReminder(clientCode, request.guestId);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "✅ Reminder message was sent successfully!",
      });
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: `❌ An error occured while sending message! ${err.message}`,
      });
    },
  });

  /** handle action to send christmas gift message. */
  const { result } = useGiftExchange();
  const { mutate: sendChristmasGiftMessage } = useMutation({
    mutationKey: ["send-christmas-gift-message"],
    mutationFn: (request: {
      name: string;
      giftId: number;
      waNumber: string;
    }) => {
      return api.sendChristmasGiftMessage(
        request.name,
        request.giftId,
        request.waNumber,
      );
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "✅ Christmas gift message was sent successfully!",
      });
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: `❌ An error occured while sending message! ${err.message}`,
      });
    },
  });

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
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuLabel>Data</DropdownMenuLabel>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log(row.original)}>
          Delete
        </DropdownMenuItem>
        <DropdownMenuLabel>RSVP</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => sendInitialMessage({ guestId: guest.id })}
        >
          Initial message
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => sendReminder({ guestId: guest.id })}>
          Reminder
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            sendChristmasGiftMessage({
              name: guest.invNames,
              giftId: result?.[guest.id] ?? 0,
              waNumber: guest.waNumber,
            })
          }
        >
          Christmas gift
        </DropdownMenuItem>
        <DropdownMenuItem>QR</DropdownMenuItem>
        <DropdownMenuItem>Reset state</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
