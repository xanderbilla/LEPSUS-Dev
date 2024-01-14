/** @format */
"use client";

import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const width = useWindowWidth();

  const mobileScr = width < 768;

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div
      className={`relative transition-all delay-900 ease-in-out min-w-[72px] ${
        isCollapsed || mobileScr ? "min-w-[72px]" : "min-w-52"
      } border-r px-3 pb-10 pt-24`}
    >
      <div className="absolute right-[-20px] top-7" onClick={toggleCollapse}>
        <Button variant="secondary" className="rounded-full p-2">
          {isCollapsed || mobileScr ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <Nav
        isCollapsed={mobileScr ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
