"use client";

import Homepage from "./homepage/page";
import Brideandgroom from "./brideandgroom/page";
import Bibleverse from "./bibleverse/page";
import Photoalbumone from "./photoalbumone/page";
import Thewedding from "./thewedding/page";
import Photoalbumotwo from "./photoalbumtwo/page";
import Holymatrimony from "./holymatrimony/page";
import Gift from "./gift/page";
import Wish from "./wish/page";

export default function Page() {
return (
    <div>
      < Homepage />
      < Brideandgroom />
      < Bibleverse />
      < Photoalbumone />
      < Thewedding />
      < Photoalbumotwo />
      < Holymatrimony />
      < Gift />
      < Wish />
    </div>
  );
}