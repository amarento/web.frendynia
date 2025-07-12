"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function Homepage() {
  const router = useRouter();

  const handleLiveDemoClick = () => {
    setTimeout(() => {
      router.push("/live-demo");
    }, 300);
  };

  return (
    <div className="side-margin flex flex-col items-center justify-center">
      <div className="mb-md mt-36 rounded-full bg-light-green-lighter px-5 py-1 shadow lg:mt-40 xl:mt-44 2xl:mt-48">
        <p className="text-p font-marjorie text-dark-green-base">
          Wedding RSVP Management
        </p>
      </div>
      <h1 className="text-h1 mb-lg max-w-4xl text-center font-marjorie leading-loose text-dark-green-base drop-shadow-sm 2xl:max-w-6xl">
        We manage the Peace of Mind you deserve during your Wedding planning
      </h1>
      <div className="mb-4xl flex space-x-8">
        <Button
          onClick={handleLiveDemoClick}
          className="duration-250 w-fit rounded-full bg-dark-green-light px-6 shadow transition delay-150 ease-in-out hover:bg-dark-green-base hover:opacity-90 md:px-7 lg:px-8 2xl:px-9"
        >
          <p className="text-p font-marjorie text-light-green-lighter">
            Try Live Demo
          </p>
        </Button>
        <Link
          href={"https://wa.me/4917634685672"}
          className="duration-250 rounded-full border border-dark-green-light bg-transparent px-6 pb-1 pt-2 transition delay-150 ease-in-out hover:border-dark-green-base hover:bg-light-green-lighter"
        >
          <p className="text-p font-marjorie text-dark-green-light">
            Contact Us
          </p>
        </Link>
      </div>
      <div className="h-80 w-screen bg-light-green-light md:h-[400px] lg:h-[480px] xl:h-[600px] 2xl:h-[720px]"></div>
    </div>
  );
}
