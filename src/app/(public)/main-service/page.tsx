"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import qrCheckIn from "../../../../public/QR-CheckIn.jpg";
import whatsapp from "../../../../public/RSVP_WA.jpg";

export default function MainService() {
  /** method to navigate to live demo page. */
  const router = useRouter();
  const handleLiveDemoClick = () => {
    setTimeout(() => {
      router.push("/live-demo");
    }, 300);
  };

  return (
    <div id="service" className="side-margin">
      <div className="px-2">
        <h3 className="text-h3 mb-sm font-marjorie text-dark-green-light drop-shadow-sm">
          A Stress-Free Wedding Experience
        </h3>
        <p className="text-p mb-5xl font-inter text-dark-green-dark drop-shadow-sm md:w-11/12">
          The big day is approaching, and the last thing you want to worry about
          is your guest list. We’ve got you covered from the moment the invites
          go out to the moment the last guest checks in, making sure everything
          runs smoothly so you can focus on the celebration.
        </p>
      </div>
      <div className="mb-xl pb-xl flex flex-col rounded-[50px] bg-light-green-lighter p-5 shadow md:flex-row-reverse md:items-center md:py-8 md:pl-8">
        <div className="md:w-1/2">
          <div className="mb-xl flex h-[300px] items-end justify-center rounded-[30px] bg-light-green-light md:mb-0 md:h-[300px] lg:mr-2 lg:h-[380px] xl:mr-4 2xl:ml-40 2xl:mr-12">
            <Image
              src={whatsapp}
              alt="WhatsApp"
              className="w-[233px] rounded-t-[36px] transition delay-150 duration-700 ease-in-out lg:h-[500px] lg:w-[300px] hover:lg:-translate-y-3 hover:lg:scale-105"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-h3 mb-sm md:mb-md font-marjorie text-dark-green-light drop-shadow-sm">
            WhatsApp RSVP
          </h3>
          <p className="text-p mb-md md:mb-lg font-inter text-dark-green-dark drop-shadow-sm md:pr-10">
            Send invitations, track responses, and manage your guest list — all
            in one place. Effortlessly stay organized and ensure no detail is
            missed as you prepare for your special day.
          </p>
          <Button
            onClick={handleLiveDemoClick}
            className="duration-250 w-fit rounded-full bg-dark-green-light px-6 shadow transition delay-150 ease-in-out hover:bg-dark-green-base hover:opacity-90 md:px-7 lg:px-8 2xl:px-9"
          >
            <p className="text-p font-marjorie text-light-green-lighter">
              Try Live Demo
            </p>
          </Button>
        </div>
      </div>
      <div className="mb-2xl pb-xl flex w-full flex-col justify-center rounded-[50px] bg-light-green-lighter p-5 shadow md:px-2 md:pt-8 xl:pb-16">
        <div className="mb-xl flex max-h-[240px] items-end justify-center rounded-[30px] bg-light-green-light sm:mx-4 md:mx-5 md:max-h-[360px] lg:mx-6 lg:max-h-[440px] xl:mx-8 xl:max-h-[460px] 2xl:mx-12 2xl:max-h-[520px]">
          <Image
            src={qrCheckIn}
            alt="QRCheckIn"
            className="w-[400px] rounded-[30px] transition delay-150 duration-700 ease-in-out sm:w-[480px] md:w-[560px] md:rounded-b-none lg:w-[680px] hover:lg:-translate-y-3 hover:lg:scale-105 xl:w-[720px] 2xl:w-[800px]"
          />
        </div>
        <div className="sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 2xl:ml-12">
          <h3 className="text-h3 mb-sm font-marjorie text-dark-green-light drop-shadow-sm">
            QR Check-In System
          </h3>
          <p className="text-p font-inter text-dark-green-dark drop-shadow-sm md:pr-12">
            Picture yourself on your wedding day, where guest check-ins are
            effortless — just a quick scan of a QR code updates your list in
            real-time, keeping everything running smoothly. Once the celebration
            ends, you’ll receive a detailed post-event report, making it easy to
            track attendance, angpao and follow up with your guests.
          </p>
        </div>
      </div>
    </div>
  );
}
