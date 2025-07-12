import React from "react";

export default function Footer() {
  return (
    <div className="flex h-28 flex-col items-center justify-center gap-1 bg-dark-green-dark pt-2 sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-44">
      <h5 className="text-h5 font-marjorie text-light-green-dark">Amarento</h5>
      <p className="text-h6 font-inter text-light-green-dark">
        Copyright © 2025. All rights reserved.
      </p>
    </div>
  );
}
