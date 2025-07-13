'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useServerActionQuery } from '~/lib/hooks/server-action-hooks';
import { getGuestNameByIdAction } from '~/server/actions';
import Bibleverse from '../../reception/frendy-nia/bibleverse/page';
import Photoalbumone from '../../reception/frendy-nia/photoalbumone/page';
import Brideandgroom from '../../reception/frendy-nia/brideandgroom/page';
import Gift from '../../reception/frendy-nia/gift/page';
import Holymatrimony from '../../reception/frendy-nia/holymatrimony/page';
import Homepage from '../../reception/frendy-nia/homepage/page';
import Photoalbumtwo from '../../reception/frendy-nia/photoalbumtwo/page';
import Thewedding from '../../reception/frendy-nia/thewedding/page';
import Wish from '../../reception/frendy-nia/wish/wish';
import Footer from '../../reception/frendy-nia/footer/page';

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
  const guestId = Number.parseInt(searchParams.get('guestId') as string, 10);

  const { data: guestName } = useServerActionQuery(getGuestNameByIdAction, {
    input: {
      guestId,
    },
    queryKey: ['guest-name'],
  });

  return (
    <Suspense>
      <div>
        <Homepage />
        <Brideandgroom />
        <Bibleverse />
        <Photoalbumone />
        <Thewedding />
        <Photoalbumtwo />
        <Holymatrimony />
        <Gift />
        <Wish guestId={guestId} guestName={guestName} />
        <Footer />
      </div>
    </Suspense>
  );
}
