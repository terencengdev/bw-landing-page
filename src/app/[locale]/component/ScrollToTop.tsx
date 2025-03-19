import { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? "visible" : ""
      } scrollToTopButton fixed bottom-0 right-0 px-3 py-4 mb-[71px] z-50 items-center text-xs flex gap-2 bg-[#f37406]`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp className="inline-block h-4 w-5" />
    </button>
  );
}
