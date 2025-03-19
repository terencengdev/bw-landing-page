"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function EasyAnalysis() {
  const container = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      ".function-img",
      { scale: 0 },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".function-imgs",
          start: "top 50%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="easyanalysis-section py-20 w-full">
      <div className="main-container w-full">
        <div className="content">
          <div className="sub-heading text-center heading font-bold mb-5">
            Easy Analysis
          </div>
          <div className="text-center sub-heading-2 text-2xl md:text-4xl heading gold mb-20">
            Instant clarity on the Masters' profile. Get a snapshot of their
            trade history, profitability, risk, and portfolio all in one place.
          </div>
          <div className="mobile-image-wrap max-w-[250px] mx-auto relative">
            <Image
              src="/easy-analysis-mobile.png"
              alt="Easy Analysis Mobile image"
              width={1036}
              height={2198}
              className="w-[80%] mx-auto shadow-lg"
            ></Image>
            <div className="function-imgs">
              <Image
                src="/analysis/function-1.png"
                alt="Easy Analysis Mobile Function 1"
                width={1036}
                height={2198}
                className="function-img"
                ref={container}
              ></Image>
              <Image
                src="/analysis/function-2.png"
                alt="Easy Analysis Mobile Function 2"
                width={1036}
                height={2198}
                className="function-img"
                ref={container}
              ></Image>
              <Image
                src="/analysis/function-3.png"
                alt="Easy Analysis Mobile Function 3"
                width={1036}
                height={2198}
                className="function-img"
                ref={container}
              ></Image>
              <Image
                src="/analysis/function-4.png"
                alt="Easy Analysis Mobile Function 4"
                width={1036}
                height={2198}
                className="function-img"
                ref={container}
              ></Image>
              <Image
                src="/analysis/function-5.png"
                alt="Easy Analysis Mobile Function 5"
                width={1036}
                height={2198}
                className="function-img"
                ref={container}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
