"use client";
import React, { useCallback } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface SliderProps {
  sliderContent: {
    image: string;
    text: string;
  }[];
}
export default function CarouselSlider({ sliderContent }: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="carouselslider relative embla " ref={emblaRef}>
      <div className="embla__container text-center">
        {sliderContent.map((slider, index) => (
          <div key={index} className="embla__slide">
            <Image
              src={slider.image}
              alt=""
              className="slide-image w-full"
              width={200}
              height={200}
            ></Image>
            <div className="text font-extrabold text-lg lg:text-xl">
              {slider.text}
            </div>
          </div>
        ))}
      </div>

      <div className="embla__nav flex justify-between absolute w-full top-50 translate-y-[-50%]">
        <button
          onClick={scrollPrev}
          className="embla__nav__button embla__nav__button--prev"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={scrollNext}
          className="embla__nav__button embla__nav__button--next"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
