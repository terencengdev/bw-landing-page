"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VerticalTabs({ children }: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentTab = searchParams.get("guide-tab") || children[0]?.key || "0";
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
    params.set("guide-tab", index);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const isEven = Number(active) % 2 === 0;

  return (
    <div className="vertical-tabs flex  gap-2">
      <div className="tabs-navigation flex gap-[15px] flex-col justify-between flex-[0_0_100%] md:flex-[0_0_50%]">
        {children.map((child: any, index: any) => (
          <a
            href="#"
            className={`flex flex-wrap transition-all text-xl lg:text-2xl block p-5 lg:p-8 px-5 ${
              active === child.key ? "active" : ""
            }`}
            key={`tab-${index}`}
            onClick={(e) => handleClick(e, String(child.key))}
          >
            <div className="title-wrap  items-center flex">
              {" "}
              <div className="number text-4xl md:text-6xl  pr-10">
                {index + 1}
              </div>
              <div className="title ">{child.props.title}</div>
            </div>

            <div className={`mobile-content md:none px-10 `}>
              {children.find((child: any) => child.key === active)}
            </div>
          </a>
        ))}
      </div>

      <div
        className={`hidden md:flex tabs-content flex items-center flex-[0_0_100%] md:flex-[0_0_50%] p-5 ${
          active === children[0].key ? "first-active" : ""
        } ${
          active === children[children.length - 1].key ? "last-active" : ""
        } ${isEven ? "even" : "odd"}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children.find((child: any) => child.key === active)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
