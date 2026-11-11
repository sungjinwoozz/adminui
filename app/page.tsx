"use client";

import { useState, type CSSProperties } from "react";
import AdminMenu, { type AppPage } from "@/components/admin-menu";
import CheckSlipContent from "@/components/check-slip-content";
import DashboardContent from "@/components/dashboard-content";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarProvider,
} from "@/components/tailgrids/core/sidebar";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/tailgrids/core/avatar";

export default function Home() {
  const [activePage, setActivePage] = useState<AppPage>("dashboard");

  let content = <DashboardContent/>;

  if (activePage === "check-slip") {
    content = <CheckSlipContent />;
  } else if (activePage !== "dashboard") {
  }

  return (
    <SidebarProvider
      className="bg-[#0a1220]"
      style={{ "--sidebar-width": "220px" } as CSSProperties}
    >
      <Sidebar className="border-r border-[#263c57] bg-[#0F2038] px-3.75 py-5.5">
        <div className="flex items-center gap-2.5 px-1.25">
          <div className="size-7.5 rounded-lg bg-[#49a5fb]" />
          <span className="text-[14px] font-semibold text-white">Admin UI</span>
        </div>

        <SidebarContent className="mt-5.5 overflow-hidden px-0">
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              <AdminMenu activePage={activePage} onSelect={setActivePage} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <Avatar className="mx-auto" size="md">
          <AvatarImage src="/docs/images/avatar/avatar-1.webp" />
          <AvatarFallback></AvatarFallback>
          <AvatarBadge status="online" size="lg" ping />
        </Avatar>
      </Sidebar>

      {content}
    </SidebarProvider>
  );
}
