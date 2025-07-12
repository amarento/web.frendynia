"use client";

import FAQ from "./faq/page";
import Footer from "./footer/page";
import Homepage from "./homepage/page";
import MainService from "./main-service/page";
import SecondaryProducts from "./secondary-service/page";
import Stats from "./stats/page";

export default function App() {
  return (
    <div>
      <Homepage />
      <Stats />
      <MainService />
      <SecondaryProducts />
      <FAQ />
      <Footer />
    </div>
  );
}
