"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useServerActionQuery } from "~/lib/hooks/server-action-hooks";
import { getGuestNameByIdAction } from "~/server/actions";

import Homepage from "./homepage/page";
import Invitation from "./invitation/page";
import Lovestory from "./lovestory/page";
import Timeline from "./timeline/page";
import Dresscode from "./dresscode/page";
import Gift from "./gift/page";
import Photoalbum from "./photoalbum/page";
import Wish from "./wish/wish";
import Footer from "./footer/page";

export default function Page() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}

function PageContent() {
  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
  const guestId = Number.parseInt(searchParams.get("guestId") as string, 10);

  const { data: guestName } = useServerActionQuery(getGuestNameByIdAction, {
    input: {
      clientId: 4,
      guestId,
    },
    queryKey: ["guest-name"],
  });

  return (
    <div>
      <Homepage />
      <Invitation />
      <Lovestory />
      <Timeline />
      <Dresscode />
      <Gift />
      <Photoalbum />
      <Wish guestId={guestId} guestName={guestName} />
      <Footer />
    </div>
  );
}
