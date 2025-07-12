import Image from "next/image";
import React from "react";
import website from "../../../../public/PersonalizedWebsite.png";
import instagramFilter from "../../../../public/InstagramFilter.png";
import einvitation from "../../../../public/E-Invitation.png";
import { Button } from "~/components/ui/button";

export default function SecondaryProducts() {
  return (
    <div className="side-margin">
      <div className="px-2">
        <h3 className="text-h3 mb-sm font-marjorie text-dark-green-light drop-shadow-sm">
          Here’s How We Make Your Day Memorable:
        </h3>
        <p className="text-p mb-xl w-11/12 font-inter text-dark-green-dark drop-shadow-sm">
          Your guests will be captivated by the thought and effort you’ve put
          into every detail, from the breathtaking pre-wedding photos that
          beautifully showcase your journey to the flawless execution of the
          event itself. Surrounded by the splendid atmosphere you’ve curated,
          your wedding will spark conversations long after the day ends.
        </p>
      </div>
      <div className="mb-5xl pb-lg flex w-full flex-col justify-center rounded-[50px] bg-light-green-lighter p-5 pt-6 shadow md:px-2 lg:mb-48 lg:pt-6 xl:pt-8 2xl:pt-10">
        <div className="mb-xl flex max-h-[180px] items-end justify-center rounded-[30px] bg-light-green-light sm:mx-4 sm:max-h-[280px] md:mx-5 md:max-h-[360px] lg:mx-6 lg:max-h-[440px] xl:mx-8 xl:max-h-[480px] 2xl:mx-12 2xl:max-h-[520px]">
          <Image
            src={website}
            alt="Website"
            className="w-[260px] rounded-t-[30px] transition delay-150 duration-700 ease-in-out sm:w-[400px] md:w-[510px] lg:w-[610px] hover:lg:-translate-y-3 hover:lg:scale-105 xl:w-[680px] 2xl:w-[740px]"
          />
        </div>
        <div className="sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 2xl:ml-12">
          <h3 className="text-h3 mb-xs font-marjorie text-dark-green-light drop-shadow-sm">
            Personalized Website
          </h3>
          <p className="text-p mb-md font-inter text-dark-green-dark drop-shadow-sm">
            Date & venue direction | Couple bio | Pre-wed gallery | Music |
            Dresscode | Wedding counter | Wishes | Accomodation details
          </p>
          <Button className="duration-250 w-fit rounded-full bg-dark-green-light px-6 shadow transition delay-150 ease-in-out hover:bg-dark-green-base hover:opacity-90 md:px-7 lg:px-8 2xl:px-9">
            <p className="text-p font-marjorie text-light-green-lighter">
              See Our Template
            </p>
          </Button>
        </div>
      </div>
      <div className="sm:flex sm:flex-row sm:gap-4 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
        <div className="mb-5xl sm:mb-2xl 2xl:mb-5xl pb-xl flex min-h-[400px] w-full flex-col rounded-[50px] bg-light-green-lighter p-5 shadow md:p-6 lg:p-7 xl:p-8 2xl:p-12">
          <div className="mb-xl flex h-[300px] items-end justify-center rounded-[30px] bg-light-green-light lg:h-[380px]">
            <Image
              src={instagramFilter}
              alt="Instagram Filter"
              className="w-[233px] rounded-t-[30px] transition delay-150 duration-700 ease-in-out lg:h-[500px] lg:w-[300px] hover:lg:-translate-y-3 hover:lg:scale-105"
            />
          </div>
          <h3 className="text-h3 mb-sm font-marjorie text-dark-green-light drop-shadow-sm">
            Instagram Filter
          </h3>
          <p className="text-p mb-md font-inter text-dark-green-dark drop-shadow-sm">
            Designed to reflect the essence of you and your special moments, our
            elegant Instagram filter lets your guests capture memories that will
            last a lifetime.
          </p>
          <Button className="duration-250 w-fit rounded-full bg-dark-green-light px-6 shadow transition delay-150 ease-in-out hover:bg-dark-green-base hover:opacity-90 md:px-7 lg:px-8 2xl:px-9">
            <p className="text-p font-marjorie text-light-green-lighter">
              See Our Template
            </p>
          </Button>
        </div>
        <div className="mb-5xl sm:mb-2xl 2xl:mb-5xl pb-xl flex min-h-[400px] w-full flex-col rounded-[50px] bg-light-green-lighter p-5 shadow md:p-6 lg:p-7 xl:p-8 2xl:p-12">
          <div className="mb-xl flex h-[300px] items-end justify-center rounded-[30px] bg-light-green-light lg:h-[380px]">
            <Image
              src={einvitation}
              alt="E-Invitation"
              className="w-[233px] rounded-t-[30px] transition delay-150 duration-700 ease-in-out lg:h-[500px] lg:w-[300px] hover:lg:-translate-y-3 hover:lg:scale-105"
            />
          </div>
          <h3 className="text-h3 mb-sm font-marjorie text-dark-green-light drop-shadow-sm">
            E-Invitation
          </h3>
          <p className="text-p mb-md font-inter text-dark-green-dark drop-shadow-sm">
            Your event, your design. Tailored to your style, your love story.
            Our E-Invitation brings your vision to life, with personalized
            details to make it uniquely yours.
          </p>
          <Button className="duration-250 w-fit rounded-full bg-dark-green-light px-6 shadow transition delay-150 ease-in-out hover:bg-dark-green-base hover:opacity-90 md:px-7 lg:px-8 2xl:px-9">
            <p className="text-p font-marjorie text-light-green-lighter">
              See Our Template
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
