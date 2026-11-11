import type { CSSProperties } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/tailgrids/core/sidebar";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/tailgrids/core/avatar";
import Dashboard from "./dashboard/page";

const mainMenu = [
  "Dashboard",
  "ตรวจสลิป",
  "จัดการ User",
  "ตั้งราคา",
  "จัดการร้านค้า",
  "Report",
  "Audit Log",
  "สแกนบัตรเข้างาน",
  "เติม Token",
  "ร้านค้า",
  "สแกนตัด TOKEN ของร้านค้า",
];

function MenuList({
  items,
  active = false,
}: {
  items: string[];
  active?: boolean;
}) {
  return (
    <SidebarMenu className="gap-px">
      {items.map((item, index) => (
        <SidebarMenuItem key={item}>
          <SidebarMenuButton
            className={`h-10 rounded-[7px] px-2.5 text-[13px] font-medium text-[#a6b8cc] hover:bg-[#19395e] hover:text-white ${active && index === 0 ? "bg-[#19395e] text-white" : ""}`}
          >
            {item}
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

export default function Home() {
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
              <MenuList items={mainMenu} />
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="mt-4.5 px-0">
            <SidebarGroupContent />
          </SidebarGroup>
        </SidebarContent>

        <Avatar className="mx-auto" size="md">
          <AvatarImage src="/docs/images/avatar/avatar-1.webp" />
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge status="online" size="lg" ping />
        </Avatar>
      </Sidebar>

      <Dashboard />
    </SidebarProvider>
  );
}
