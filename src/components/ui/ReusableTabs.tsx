"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

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
  };

  return (
    <div>
      <div className={`w-full flex ${justifyClass}`}>
        <div className="bg-[#f3f3f3] p-1 rounded-xl flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              disabled={tab.disabled || false}
              onClick={() => handleTabChange(tab.value)}
              className={`px-4 py-1.5 rounded-md font-medium text-sm sm:text-base transition-all duration-300  disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer
                ${
                  activeTab === tab.value
                    ? "bg-[#a13200] text-white"
                    : "bg-transparent text-[#a13200]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className={cn("mt-10", tabContentStyle)}>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

export default ReusableTabs;
