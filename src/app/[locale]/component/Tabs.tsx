"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import parse from "html-react-parser";

export default function Tabs({ children }: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentTab =
    searchParams.get("navigate-tab") || children[0]?.key || "1";
  const tabs = React.Children.toArray(children) as React.ReactElement[];
  const [active, setActive] = useState<string>(currentTab);

  useEffect(() => {
    setActive(currentTab);
  }, [currentTab]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: string
  ) => {
    e.preventDefault();

    setActive(index);

    const params = new URLSearchParams(searchParams);
    params.set("navigate-tab", index);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const isEven = Number(active) % 2 === 0;

  return (
    <div className="horizontal-tabs">
      <div className="tabs-navigation flex flex-[0_0_auto]">
        {tabs.map((child: any, index: any) => {
          const dataIcon = child.props.icon;
          return (
            <a
              href="#"
              className={`flex flex-wrap transition-all text-xl lg:text-2xl block p-1 px-4 ${
                active === String(index + 1) ? "active" : ""
              }`}
              key={`tab-${index + 1}`}
              onClick={(e) => handleClick(e, String(index + 1))}
            >
              <div className="title-wrap  items-center flex">
                {dataIcon && <div className="tab-icon">{parse(dataIcon)}</div>}
                {child.props.title && (
                  <div className="title ">{child.props.title}</div>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <div
        className={`tabs-content flex items-center flex-[0_0_100%] md:flex-[0_0_50%] px-10 ${
          active === tabs[0]?.key ? "first-active" : ""
        } ${active === tabs[tabs.length - 1].key ? "last-active" : ""} ${
          isEven ? "even" : "odd"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabs.find(
              (child: any, index: any) => String(index + 1) === active
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
