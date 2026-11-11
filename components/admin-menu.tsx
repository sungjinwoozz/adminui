"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/tailgrids/core/sidebar";

export const menuItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "check-slip", label: "CheckSlip" },
  { id: "users", label: "จัดการ User" },
  { id: "pricing", label: "ตั้งราคา" },
  { id: "stores", label: "จัดการร้านค้า" },
  { id: "report", label: "Report" },
  { id: "audit-log", label: "Audit Log" },
] as const;

export type AppPage = (typeof menuItems)[number]["id"];

type AdminMenuProps = {
  activePage: AppPage;
  onSelect: (page: AppPage) => void;
};

export default function AdminMenu({ activePage, onSelect }: AdminMenuProps) {
  return (
    <SidebarMenu className="gap-px">
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.id}>
          <SidebarMenuButton
            isActive={activePage === item.id}
            onClick={() => onSelect(item.id)}
            className="h-10 rounded-[7px] px-2.5 text-[13px] font-medium text-[#a6b8cc] hover:bg-[#19395e] hover:text-white data-[active=true]:bg-[#19395e] data-[active=true]:text-white"
          >
            {item.label}
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
