import type { CSSProperties, ReactNode } from "react";

type BasicProps = {
  children?: ReactNode;
  className?: string;
};

type ProviderProps = BasicProps & {
  style?: CSSProperties;
};

export function SidebarProvider({
  children,
  className = "",
  style,
}: ProviderProps) {
  return (
    <div
      className={`flex min-h-svh w-full bg-white text-[#344054] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function Sidebar({ children, className = "" }: BasicProps) {
  return (
    <aside
      className={`flex h-svh w-(--sidebar-width) shrink-0 flex-col overflow-hidden border-r ${className}`}
    >
      {children}
    </aside>
  );
}

export function SidebarContent({ children, className = "" }: BasicProps) {
  return (
    <div className={`min-h-0 flex-1 overflow-auto ${className}`}>
      {children}
    </div>
  );
}

export function SidebarGroup({ children, className = "" }: BasicProps) {
  return <div className={`flex w-full flex-col ${className}`}>{children}</div>;
}

export function SidebarGroupLabel({ children, className = "" }: BasicProps) {
  return <div className={`shrink-0 ${className}`}>{children}</div>;
}

export function SidebarGroupContent({ children, className = "" }: BasicProps) {
  return <div className={`w-full ${className}`}>{children}</div>;
}

export function SidebarMenu({ children, className = "" }: BasicProps) {
  return <ul className={`flex w-full flex-col ${className}`}>{children}</ul>;
}

export function SidebarMenuItem({ children, className = "" }: BasicProps) {
  return <li className={`relative ${className}`}>{children}</li>;
}

export function SidebarMenuButton({ children, className = "" }: BasicProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center overflow-hidden text-left transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
