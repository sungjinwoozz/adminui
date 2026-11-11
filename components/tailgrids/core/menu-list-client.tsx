"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/tailgrids/core/sidebar";

const menus = [
  { name: "Dashboard", id: "dashboard" },
  { name: "CheckSlip", id: "check-slip" },
  { name: "\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 User", id: "users" },
  { name: "\u0e15\u0e31\u0e49\u0e07\u0e23\u0e32\u0e04\u0e32", id: "pricing" },
  { name: "\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32", id: "stores" },
  { name: "Report", id: "report" },
  { name: "Audit Log", id: "audit-log" },
];

type MenuListClientProps = {
  activePage: string;
  onSelect: (page: string) => void;
};

export default function MenuListClient({
  activePage,
  onSelect,
}: MenuListClientProps) {
  return (
    <SidebarMenu className="gap-px">
      {menus.map((menu) => (
        <SidebarMenuItem key={menu.id}>
          <SidebarMenuButton
            isActive={activePage === menu.id}
            onClick={() => onSelect(menu.id)}
            className="h-10 rounded-[7px] px-2.5 text-[13px] font-medium text-[#a6b8cc] hover:bg-[#19395e] hover:text-white data-[active=true]:bg-[#19395e] data-[active=true]:text-white"
          >
            {menu.name}
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
