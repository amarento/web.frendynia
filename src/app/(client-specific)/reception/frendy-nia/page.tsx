import { getGuestNameByIdAction } from '~/server/actions';
import Bibleverse from './bibleverse/page';
import Brideandgroom from './brideandgroom/page';
import Gift from './gift/page';
import Holymatrimony from './holymatrimony/page';
import Homepage from './homepage/page';
import Photoalbumone from './photoalbumone/page';
import Photoalbumotwo from './photoalbumtwo/page';
import Thewedding from './thewedding/page';
import Wish from './wish/page';

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
      <Photoalbumotwo />
      <Holymatrimony />
      <Gift />
      <Wish guestId={guestId} guestName={guestName} />
    </div>
  );
}
