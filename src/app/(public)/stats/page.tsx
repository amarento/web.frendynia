import React from "react";

export default function Stats() {
  return (
    <div
      id="about"
      className="pb-xl pt-xl mb-xl h-full w-screen bg-light-green-lighter"
    >
      <div className="side-margin">
        <div className="justify-between md:flex md:w-full md:flex-row">
          <div className="flex flex-col md:w-2/3">
            <h3 className="text-h3 mb-sm px-1 font-marjorie text-dark-green-light drop-shadow-sm">
              Welcome to Amarento👋
            </h3>
            <p className="text-p mb-lg mr-12 px-2 font-inter text-dark-green-dark drop-shadow-sm">
              We’re a passionate team based in Surabaya, Indonesia, on a mission
              to take the chaos out of managing your wedding RSVPs. Because
              weddings are about love, connection, and celebration — not
              spreadsheets and endless phone calls.
            </p>
          </div>
          <div className="grid w-fit grid-cols-2 gap-4 p-2 drop-shadow">
            <div className="flex size-[112px] flex-col rounded-[30px] bg-light-green-light pl-4 pt-3 text-dark-green-light md:size-[118px] lg:size-[124px] xl:size-[132px] 2xl:size-[140px]">
              <div className="flex flex-row gap-1">
                <h2 className="text-h2 font-marjorieSemiBold">60</h2>
                <h4 className="text-h4">%</h4>
              </div>
              <p className="text-p w-20 font-inter !leading-snug">
                Faster Check-in
              </p>
            </div>
            <div className="flex size-[112px] flex-col rounded-[30px] bg-light-green-light pl-4 pt-3 text-dark-green-light md:size-[118px] lg:size-[124px] xl:size-[132px] 2xl:size-[140px]">
              <div className="flex flex-row gap-1">
                <h2 className="text-h2 font-marjorieSemiBold">99</h2>
                <h4 className="text-h4">%</h4>
              </div>
              <p className="text-p w-20 font-inter !leading-snug">
                Client Satisfaction
              </p>
            </div>
            <div className="flex size-[112px] flex-col rounded-[30px] bg-light-green-light pl-4 pt-3 text-dark-green-light md:size-[118px] lg:size-[124px] xl:size-[132px] 2xl:size-[140px]">
              <div className="flex flex-row gap-1">
                <h2 className="text-h2 font-marjorieSemiBold">80</h2>
                <h4 className="text-h4">%</h4>
              </div>
              <p className="text-p w-20 font-inter !leading-snug">
                Reduced Workload
              </p>
            </div>
            <div className="flex size-[112px] flex-col rounded-[30px] bg-light-green-light pl-4 pt-3 text-dark-green-light md:size-[118px] lg:size-[124px] xl:size-[132px] 2xl:size-[140px]">
              <div className="flex flex-row gap-1">
                <h2 className="text-h2 font-marjorieSemiBold">70</h2>
                <h4 className="text-h4">+</h4>
              </div>
              <p className="text-p w-20 font-inter !leading-snug">
                RSVP Served
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
