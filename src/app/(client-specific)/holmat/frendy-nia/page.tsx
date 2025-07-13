import { getGuestNameByIdAction } from '~/server/actions';
import Bibleverse from '../../reception/frendy-nia/bibleverse/page';
import Brideandgroom from '../../reception/frendy-nia/brideandgroom/page';
import Gift from '../../reception/frendy-nia/gift/page';
import Holymatrimony from '../../reception/frendy-nia/holymatrimony/page';
import Homepage from '../../reception/frendy-nia/homepage/page';
import Photoalbumone from '../../reception/frendy-nia/photoalbumone/page';
import Thewedding from '../../reception/frendy-nia/thewedding/page';
import Wish from '../../reception/frendy-nia/wish/page';

export default async function Page({
  searchParams,
}: {
  searchParams: { guestId: string };
}) {
  const guestId = Number.parseInt(searchParams?.guestId, 10);
  const guestName = await getGuestNameByIdAction(guestId);

  return (
    <div>
      <Homepage />
      <Brideandgroom />
      <Bibleverse />
      <Photoalbumone />
      <Thewedding />
      <Photoalbumone />
      <Holymatrimony />
      <Gift />
      <Wish guestId={guestId} guestName={guestName} />
    </div>
  );
}
