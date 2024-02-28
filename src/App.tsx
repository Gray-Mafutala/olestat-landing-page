import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import GreatCustomer from "./components/Sections/GreatCustomer";
import Hero from "./components/Sections/Hero";
import NewsLetter from "./components/Sections/NewsLetter";
import Testimonials from "./components/Sections/Testimonials";
import TheBiggestBusiness from "./components/Sections/TheBiggestBusiness";
import TheFutureOfBusiness from "./components/Sections/TheFutureOfBusiness";
import TrustedCompanies from "./components/Sections/TrustedCompanies";
import WeOffer from "./components/Sections/WeOffer";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 200 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-20 overflow-hidden">
        <Hero />
        <div className="flex flex-col gap-y-32">
          <TrustedCompanies />
          <WeOffer />
          <GreatCustomer />
          <TheBiggestBusiness />
          <TheFutureOfBusiness />
          <Testimonials />
          <NewsLetter />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
