"use client";
import Navigation from "./component/Navigation";
import HeroBanner from "./sections/HeroBanner";
import FastMatching from "./sections/FastMatching";
import EasyAnalysis from "./sections/EasyAnalysis";
import TradeLikePro from "./sections/TradeLikePro";
import HowToLink from "./sections/HowToLink";
import WhyChooseUs from "./sections/WhyChooseUs";
import NavigateSteps from "./sections/NavigateSteps";
import EnquireNow from "./sections/EnquireNow";
import ScrollToTop from "./component/ScrollToTop";
import "../scss/custom.scss";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pt-30">
      <Navigation />
      <HeroBanner />
      <FastMatching />
      <EasyAnalysis />
      <TradeLikePro />
      <HowToLink />
      <WhyChooseUs />
      <NavigateSteps />
      <EnquireNow />
      <ScrollToTop />
    </div>
  );
}
