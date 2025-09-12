"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Tab<T extends string> = {
  label: string;
  value: T;
  disabled?: boolean;
  content: React.ReactNode;
};

type ReusableTabsProps<T extends string> = {
  tabs: Tab<T>[];
  activeTab: T;
  align?: "left" | "center" | "right";
  tabContentStyle?: string;
};

const ReusableTabs = <T extends string>({
  tabs,
  activeTab,
  align = "center",
  tabContentStyle = "",
}: ReusableTabsProps<T>) => {
  const tabRowRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ offset: 0, width: 0 });

  const updateIndicator = (target: HTMLElement) => {
    const tabBounds = target.getBoundingClientRect();
    const rowBounds = tabRowRef.current?.getBoundingClientRect();

    if (rowBounds && indicatorRef.current) {
      const offset = tabBounds.left - rowBounds.left;
      const width = tabBounds.width;

      setIndicatorStyle({ offset, width });
    }
  };

  useEffect(() => {
    const activeTabElement = document.querySelector(
      `button[tab-value="${activeTab}"]`
    );
    if (activeTabElement) {
      updateIndicator(activeTabElement as HTMLElement);
    }
  }, [activeTab]);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { replace } = router;

  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  const handleTabChange = (value: string) => {
    const text = value;
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set("tab", text);
    } else {
      params.delete("tab");
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
    const activeTabElement = document.querySelector(
      `button[tab-value="${value}"]`
    );
    if (activeTabElement) {
      updateIndicator(activeTabElement as HTMLElement);
    }
  };

  return (
    <div>
      <div className={`w-full flex ${justifyClass}`}>
        <div
          ref={tabRowRef}
          className="bg-[#f3f3f3] p-1 rounded-xl flex gap-2 relative"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              tab-value={tab.value}
              disabled={tab.disabled || false}
              onClick={() => handleTabChange(tab.value)}
              className={`px-4 z-10 py-1.5 rounded-md bg-transparent text-[#a13200] font-medium text-sm sm:text-base transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer
                ${activeTab === tab.value ? "text-white" : "text-[#a13200]"}
                `}
            >
              {tab.label}
            </button>
          ))}
          <motion.div
            ref={indicatorRef}
            className={`indicator absolute bottom-1 top-1 rounded-md bg-secondary-color z-0`}
            animate={{
              transform: `translateX(${indicatorStyle.offset - 4}px)`,
              width: `${indicatorStyle.width}px`,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            initial={false}
          />
        </div>
      </div>

      <div className={cn("mt-10", tabContentStyle)}>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

export default ReusableTabs;
