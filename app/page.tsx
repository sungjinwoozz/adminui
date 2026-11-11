"use client";

import { useState, type CSSProperties } from "react";
import MenuListClient from "@/components/tailgrids/core/menu-list-client";
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
import Dashboard from "./dashboard/page";
import CheckSlipPage from "./check-slip/page";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <SidebarProvider
      className="bg-[#0a1220] bg-transparent-70%"
      style={{ "--sidebar-width": "220px" } as CSSProperties}
    >
      <Sidebar className="border-r border-[#263c57] bg-[#0F2038] px-3.75 py-5.5">
        <div className="flex items-center gap-2.5 px-1.25">
          <div className="size-7.5 rounded-lg bg-[#49a5fb]" />
          <div className="text-[14px] font-semibold text-white">Admin UI</div>
        </div>

        <SidebarContent className="mt-5.5 overflow-hidden px-0">
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              <MenuListClient activePage={activePage} onSelect={setActivePage} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <Avatar className="mx-auto" size="md">
          <AvatarImage src="/docs/images/avatar/avatar-1.webp" />
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge status="online" size="lg" ping />
        </Avatar>
      </Sidebar>

      {activePage === "dashboard" && <Dashboard />}
      {activePage === "check-slip" && <CheckSlipPage />}
      {!["dashboard", "check-slip"].includes(activePage) && (
        <main className="min-h-svh min-w-0 flex-1 bg-[#0A1628] p-8 text-white">
          <h1 className="text-3xl font-semibold">กำลังเตรียมหน้านี้</h1>
        </main>
      )}
    </SidebarProvider>
  );
}
