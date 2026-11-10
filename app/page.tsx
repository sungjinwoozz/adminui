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

const mainMenu = [
  "Dashboard",
  "ตรวจสลิป",
  "จัดการ User",
  "เติม Token",
  "สแกนบัตรเข้างาน",
  "ตั้งราคา",
  "จัดการร้านค้า",
  "Report",
  "Audit Log",
  "มุมมองร้านค้า",
];

function MenuList({
  items,
  active = false,
}: {
  items: string[];
  active?: boolean;
}) {
  return (
    <SidebarMenu className="gap-[1px]">
      {items.map((item, index) => (
        <SidebarMenuItem key={item}>
          <SidebarMenuButton
            className={`h-10 rounded-[7px] px-[10px] text-[13px] font-medium text-[#a6b8cc] hover:bg-[#19395e] hover:text-white ${active && index === 0 ? "bg-[#19395e] text-white" : ""}`}
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
      className="bg-[#0A1628]"
      style={{ "--sidebar-width": "220px" } as CSSProperties}
    >
      <Sidebar className="border-r border-[#263c57] bg-[#0F2038] px-[15px] py-[22px]">
        <div className="flex items-center gap-[10px] px-[5px]">
          <div className="size-[30px] rounded-[8px] bg-[#49a5fb]" />
          <div className="text-[14px] font-semibold text-white">
            Reunion Admin
          </div>
        </div>

        <SidebarContent className="mt-[22px] overflow-hidden px-0">
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              <MenuList items={mainMenu} />
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="mt-[18px] px-0">
            <SidebarGroupContent></SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="min-h-svh flex-1 bg-[#0A1628]" />
    </SidebarProvider>
  );
}
