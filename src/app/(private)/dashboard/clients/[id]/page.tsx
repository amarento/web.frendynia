"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import Loading from "~/app/_components/loading";
import { Badge } from "~/components/ui/badge";
import { useServerActionQuery } from "~/lib/hooks/server-action-hooks";
import { toLocalTime } from "~/lib/utils";
import { type Guest } from "~/server/db/schema";
import ClientAPI from "../../api";
import { getClientByCode } from "../../client-actions";
import { DataTable } from "../../data-table";
import { columns } from "./components/columns";

export default function Page() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  /** user rsvp live tracker */
  const api = new ClientAPI("https://perkiaachen.fly.dev");
  const { data } = useQuery({
    queryKey: ["user-state"],
    queryFn: () => api.getRSVPStates(),
    refetchInterval: 1000,
  });

  /** read client data from database. */
  const { data: client, isLoading } = useServerActionQuery(getClientByCode, {
    input: { code: id },
    queryKey: [`client-${id}`],
  });

  const groups = (guests: Guest[]) => {
    const nHolMat = guests.reduce((prev, current) => {
      if (current.nRSVPHolmatWA !== null) return prev + current.nRSVPHolmatWA;
      return prev;
    }, 0);
    const nReception = guests.reduce((prev, current) => {
      if (current.nRSVPDinnerWA !== null) {
        return prev + current.nRSVPDinnerWA;
      }
      return prev;
    }, 0);

    const nNotAttend = guests.filter(
      (guest) => guest.nRSVPDinnerWA === 0 && guest.nRSVPDinnerWA === 0,
    ).length;

    const nResponded = guests.filter(
      (guest) => guest.nRSVPHolmatWA !== null && guest.nRSVPDinnerWA !== null,
    ).length;
    const nNotResponded = guests.filter(
      (guest) => guest.nRSVPHolmatWA === null && guest.nRSVPDinnerWA === null,
    ).length;

    return {
      nHolMat,
      nReception,
      nResponded,
      nNotAttend,
      nNotResponded,
    };
  };

  if (isLoading)
    return (
      <div className="grid h-full items-center justify-center">
        <Loading className="text-sm" />
      </div>
    );

  if (client?.guests === undefined || client.guests.length === 0) {
    return <div className="p-4">No guests for the client found.</div>;
  }

  const { nHolMat, nReception, nResponded, nNotAttend, nNotResponded } = groups(
    client?.guests,
  );

  const lastUpdated = client?.guests.reduce((latest, current) => {
    return current.updatedAt > latest.updatedAt ? current : latest;
  });

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex flex-col gap-x-2">
        <Badge className="w-fit">{client?.code}</Badge>
        <h1 className="text-2xl font-bold">
          <span>{client?.nameGroom}</span>
          {client.nameBride ? ` & ${client?.nameBride}` : null}
        </h1>
      </div>

      <div className="grid gap-4">
        <div className="flex items-center gap-x-2 text-xl">
          <h1>KPI</h1>
          <Badge className="w-fit">
            Event -{" "}
            {client.weddingDay ? toLocalTime(client.weddingDay) : "unknown"}
          </Badge>
          <Badge className="w-fit">
            Last update - {toLocalTime(lastUpdated.updatedAt)}
          </Badge>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div className="rounded-md border p-4">
            <h2>Invitations</h2>
            <p className="text-2xl font-bold">{client?.guests.length}</p>
          </div>

          <div className="rounded-md border p-4">
            <h2>Responded</h2>
            <p className="text-2xl font-bold">{nResponded}</p>
          </div>

          <div className="rounded-md border p-4">
            <h2>Unresponded</h2>
            <p className="text-2xl font-bold">{nNotResponded}</p>
          </div>

          <div className="rounded-md border p-4">
            <h2>Holy Matrimony</h2>
            <p className="text-2xl font-bold">{nHolMat}</p>
          </div>

          <div className="rounded-md border p-4">
            <h2>Reception</h2>
            <p className="text-2xl font-bold">{nReception}</p>
          </div>

          <div className="rounded-md border p-4">
            <h2>Unattend</h2>
            <p className="text-2xl font-bold">{nNotAttend}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <h1 className="text-xl">Guest List</h1>
        <div>
          {client ? (
            <DataTable columns={columns} data={client.guests} clientCode={id} />
          ) : (
            <div className="mx-auto flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p>Loading guests...</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-4">
        <h1 className="text-xl">WhatsApp Live Tracker</h1>
        <div>
          {data ? (
            data?.map((message, i) => (
              <div key={i}>{JSON.stringify(message)}</div>
            ))
          ) : (
            <div className="rounded-lg border p-8 text-center">
              <p>Live tracking has not begin yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
