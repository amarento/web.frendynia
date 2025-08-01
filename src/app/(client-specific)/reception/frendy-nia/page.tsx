"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useServerActionQuery } from "~/lib/hooks/server-action-hooks";
import { getGuestNameByIdAction } from "~/server/actions";
import Bibleverse from "./bibleverse/page";
import Brideandgroom from "./brideandgroom/page";
import Gift from "./gift/page";
import Holymatrimony from "./holymatrimony/page";
import Homepage from "./homepage/page";
import Photoalbumone from "./photoalbumone/page";
import Photoalbumotwo from "./photoalbumtwo/page";
import Thewedding from "./thewedding/page";
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
      guestId,
    },
    queryKey: ["guest-name"],
  });

  return (
    <div>
      <Homepage />
      <Brideandgroom />
      <Bibleverse />
      <Photoalbumone />
      <Thewedding />
      <Photoalbumotwo />
      <Holymatrimony />
      <Gift />
      <Wish guestId={guestId} guestName={guestName} />
      <Footer />
    </div>
  );
}
