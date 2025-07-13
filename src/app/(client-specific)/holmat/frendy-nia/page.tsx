'use client';

import { Gift } from 'lucide-react';
import Bibleverse from '../../reception/frendy-nia/bibleverse/page';
import Brideandgroom from '../../reception/frendy-nia/brideandgroom/page';
import Holymatrimony from '../../reception/frendy-nia/holymatrimony/page';
import Homepage from '../../reception/frendy-nia/homepage/page';
import Photoalbumone from '../../reception/frendy-nia/photoalbumone/page';
import Thewedding from '../../reception/frendy-nia/thewedding/page';
import Wish from '../../reception/frendy-nia/wish/page';

export default function Page() {
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
      <Wish />
    </div>
  );
}
