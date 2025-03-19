"use client";
import Image from "next/image";
import AppStoreBtn from "../component/AppStoreBtn";
import RegisterBtn from "../component/RegisterBtn";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(useGSAP);

export default function HeroBanner() {
  const container = useRef<HTMLImageElement>(null);
  useGSAP(
    () => {
      gsap.to(".banner-hand-img img", { opacity: 1, duration: 0.6 });
    },
    { scope: container }
  );

  const t = useTranslations("Banner");

  return (
    <div className="hero-banner py-10 px-3 md:px-5 w-full relative">
      <div className="flex justify-end  ">
        <div className="text-wrap flex-[0_0_100%] md:flex-[0_0_50%]">
          <div className="row-1 title-row relative">
            <h1 className="heading main-heading text-5xl md:text-6xl lg:text-8xl  title text-center">
              <div className="">{t("title")}</div>
              <div className="font-light text-4xl md:text-5xl lg:text-6xl text-white italic">
                {t("use")}
              </div>
            </h1>
            <AppStoreBtn />

            <Image
              src="/regular.png"
              alt="Regulated"
              width={1214}
              height={1131}
              className="z-[-1] absolute bottom-[-8vw] md:bottom-[-20%] lg:bottom-[-30%] right-[5%] md:right-[10%] transition-all w-[25%]"
            ></Image>
          </div>
          <div
            ref={container}
            className="image-row banner-hand-img relative md:absolute w-[140%] md:w-[75%] lg:w-[70%]"
          >
            <Image
              src="/hand.png"
              alt="Hand Image"
              width={1000}
              height={1166}
              className="w-full hand-image"
            />
          </div>

          <div className="subinfo text-right md:text-left px-1 mt-10 pl-15 md:pl-0 pr-0 lg:pr-[10%]">
            <div className="title sub-heading mb-2">
              <div className="heading font-bold">Choose & Trade</div>
              <div className="heading gold italic">Ready-To-Go Strategies</div>
            </div>
            <div className="description relative">
              <p className="mb-5">
                Browse and copy hundreds of investment strategies developed by
                master traders! Whether you are a pro or beginner, you can now
                trade quicker and more confidently.
              </p>
              <div className="strats flex justify-end md:justify-start gap-4 mb-8">
                <div className="flex-none">Forex</div>
                <div className="flex-none">Precious Metals</div>
                <div className="flex-none">Oil</div>
                <div className="flex-none">Indices</div>
              </div>
              <div className="mb-5">
                <RegisterBtn variant="primary" />
              </div>

              <p className="italic">
                When you invest, your capital is at risk. Be prudent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
