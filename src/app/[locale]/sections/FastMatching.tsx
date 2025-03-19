"use client";
import Video from "../component/Video";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function FastMatching() {
  const container = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".ullist",
        start: "top 50%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    tl.from(".li-custom-shape > div", { "--diagonallinewidth": "0px" })
      .to(".li-custom-shape > div", { "--diagonallinewidth": "30px" })
      .from(".li-custom-shape > div", { width: "0" })
      .to(".li-custom-shape > div", { width: "100%" });
  }, []);

  return (
    <div className="fastmatching-section pt-40 w-full">
      <div className="main-container w-full">
        <div className="content">
          <div className="sub-heading text-center heading font-bold mb-10">
            Fast Matching
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center max-w-[600px] mx-auto gap-6 justify-center">
            <div className="phone mx-auto flex-[0_0_100%] md:flex-[0_0_45%]">
              <div className="phone-video mx-auto">
                <Video
                  source="/mobile-video.mp4"
                  loop={true}
                  autoplay={true}
                  classname="rounded-[25px]"
                />
              </div>
            </div>
            <div className="pl-[30px] flex-[0_0_auto] md:flex-[0_0_55%] ullist flex-1 text-xl md:text-2xl ">
              <ul>
                <li className="flex items-center gap-4 ">
                  <div className="li-custom-shape">
                    <div></div>
                  </div>
                  Spotlight
                </li>
                <li className="flex items-center gap-4">
                  <div className="li-custom-shape">
                    <div></div>
                  </div>
                  Top Strategies
                </li>
                <li className="flex items-center gap-4">
                  <div className="li-custom-shape">
                    <div></div>
                  </div>
                  Low Drawdown
                </li>
                <li className="flex items-center gap-4">
                  <div className="li-custom-shape">
                    <div></div>
                  </div>
                  Medium Drawdown
                </li>
                <li className="flex items-center gap-4">
                  <div className="li-custom-shape">
                    <div></div>
                  </div>
                  High Drawdown
                </li>
                <li className="flex items-center gap-4">
                  <div className="li-custom-shape">
                    <div></div>
                  </div>
                  New Strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
