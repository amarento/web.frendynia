"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";
import logo from "../../../../public/logo-green.png";

export default function Header() {
  const router = useRouter();

  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [scrollingTimeout, setScrollingTimeout] =
    React.useState<NodeJS.Timeout | null>(null);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    return router.push("/");
  };

  const handleLiveDemoClick = () => {
    return router.push("/live-demo");
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 100;
      const topPosition =
        aboutSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const handleServiceClick = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      const offset = 100;
      const topPosition =
        serviceSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const handleFAQClick = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        if (!scrollingTimeout) {
          const timeout = setTimeout(() => {
            setIsHeaderVisible(false);
          }, 200);
          setScrollingTimeout(timeout);
        }
      } else {
        setIsHeaderVisible(true);
        if (scrollingTimeout) {
          clearTimeout(scrollingTimeout);
          setScrollingTimeout(null);
        }
      }

      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollingTimeout]);

  return (
    <header
      className={`fixed left-0 top-0 z-10 w-full bg-white shadow-sm transition-all duration-300 ease-in-out ${
        isHeaderVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-[5%]">
        <div className="mb-xs mt-xs flex items-end justify-between">
          <Image
            src={logo}
            alt="Logo"
            className="w-6 cursor-pointer lg:w-7 2xl:w-8"
            onClick={handleLogoClick}
          />
          <nav className="text-p absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 space-x-12 font-marjorie text-green-900 md:flex">
            <button
              onClick={handleAboutClick}
              className="drop-shadow-sm hover:opacity-75"
            >
              About
            </button>
            <button
              onClick={handleServiceClick}
              className="drop-shadow-sm hover:opacity-75"
            >
              Services
            </button>
            <button
              onClick={handleFAQClick}
              className="drop-shadow-sm hover:opacity-75"
            >
              FAQ
            </button>
          </nav>
          <Button
            onClick={handleLiveDemoClick}
            className="duration-250 rounded-full bg-dark-green-light px-6 shadow transition delay-150 ease-in-out hover:bg-dark-green-base hover:opacity-90 md:px-7 lg:px-8 2xl:px-9"
          >
            <h6 className="text-h6 font-marjorie text-light-green-lighter">
              Try Live Demo
            </h6>
          </Button>
        </div>
      </div>
    </header>
  );
}
