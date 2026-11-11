"use client";

import { useState, type CSSProperties } from "react";
import AdminMenu from "@/components/admin-menu";
import AuditLogContent from "@/components/audit-log-content";
import CheckSlipContent from "@/components/check-slip-content";
import DashboardContent from "@/components/dashboard-content";
import ReportContent from "@/components/report-content";
import StoreManagementContent from "@/components/store-management-content";
import UserManagementContent from "@/components/user-management-content";
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
  const [activePage, setActivePage] = useState("dashboard");

  let content = <DashboardContent/>;

  if (activePage === "check-slip") {
  content = <CheckSlipContent />;
} else if (activePage === "audit-log") {
  content = <AuditLogContent />;
} else if (activePage === "report") {
  content = <ReportContent />;
} else if (activePage === "stores") {
  content = <StoreManagementContent />;
} else if (activePage === "users") {
  content = <UserManagementContent />;
} else if (activePage === "dashboard") {
  content = <DashboardContent />;
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

        
        <SidebarContent className="mt-10 overflow-hidden px-0 ">
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              <AdminMenu activePage={activePage} onSelect={setActivePage} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* โปรไฟล์ */}
        <div className="mt-auto flex w-full items-center gap-3 px-1.25">
          <Avatar className="shrink-0" size="md">
            <AvatarImage src="/docs/images/avatar/avatar-1.webp" />
            <AvatarFallback>A</AvatarFallback>
            <AvatarBadge status="online" size="lg" ping />
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">Admin</p>
            <p className="truncate text-xs text-[#8fa6c2]">ผู้ดูแลระบบ</p>
          </div>
        </div>
      </Sidebar>

      
      {content}
    </SidebarProvider>
  );
}
