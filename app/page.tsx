type IconName = "dashboard" | "clipboard" | "users" | "ticket" | "scan" | "settings" | "store" | "report" | "audit" | "view";

const menuGroups: { label: string; icon: IconName }[][] = [
  [{ label: "Dashboard", icon: "dashboard" }, { label: "ตรวจสลิป", icon: "clipboard" }, { label: "จัดการ User", icon: "users" }, { label: "เติม Token", icon: "ticket" }, { label: "สแกนบัตรเข้างาน", icon: "scan" }, { label: "ตั้งราคา", icon: "settings" }, { label: "จัดการร้านค้า", icon: "store" }],
  [{ label: "Report", icon: "report" }, { label: "Audit Log", icon: "audit" }, { label: "มุมมองร้านค้า", icon: "view" }],
];

const orders = [["#0041", "สมชาย ใจดี", "บัตร × 2", "[ยอด]"], ["#0042", "สุดา แสงทอง", "บัตร × 1 · เสื้อ × 1", "[ยอด]"], ["#0043", "ประเสริฐ มีสุข", "เสื้อ × 2", "[ยอด]"], ["#0044", "วารี พูนทรัพย์", "บัตร × 3", "[ยอด]"]];

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5V3h6v1.5M9 10h6M9 14h6M9 18h3" /></>,
    users: <><path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy="7" r="3.5" /><path d="M17 11a3.5 3.5 0 0 0-1.5-6.7M21 20v-1.5a4 4 0 0 0-2.8-3.8" /></>,
    ticket: <><path d="M3 7.5A2.5 2.5 0 0 0 5.5 5h13A2.5 2.5 0 0 0 21 7.5v1a2.5 2.5 0 0 0 0 5v1a2.5 2.5 0 0 0-2.5 2.5h-13A2.5 2.5 0 0 0 3 14.5a2.5 2.5 0 0 0 0-5z" /><path d="M12 8v1M12 12v1M12 16v1" /></>,
    scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M7 12h10" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1a1.8 1.8 0 1 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 1 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 1 1 0-3.6h.2a1.8 1.8 0 0 0 1.3-3.1l-.1-.1a1.8 1.8 0 1 1 2.5-2.5l.1.1a1.8 1.8 0 0 0 3.1-1.3v-.2a1.8 1.8 0 1 1 3.6 0v.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 1 1 2.5 2.5l-.1.1a1.8 1.8 0 0 0 1.3 3.1h.2a1.8 1.8 0 1 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.1Z" /></>,
    store: <><path d="M4 10v10h16V10M3 10l2-6h14l2 6" /><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M9 20v-5h6v5" /></>,
    report: <><path d="M5 20V10M12 20V4M19 20v-7M3 20h18" /></>, audit: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></>, view: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></>,
  };
  return <svg aria-hidden="true" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24">{paths[name]}</svg>;
}

function StatCard({ label, value, note, color }: { label: string; value: string; note: string; color: string }) {
  return <article className="rounded-[15px] border border-[#24466c] bg-[#102542] px-[18px] py-[17px] shadow-[0_8px_18px_rgba(2,10,24,0.08)]"><p className="text-[12px] text-[#a6b6cb]">{label}</p><p className={`mt-[12px] text-[30px] font-bold leading-none tracking-tight ${color}`}>{value}</p><p className="mt-[14px] text-[11px] text-[#8ea1ba]">{note}</p></article>;
}

export default function Home() {
  return <main className="min-h-screen w-full bg-[#08172b] text-[#e9f0f8] selection:bg-[#3699f2]/30"><div className="flex min-h-screen w-full">
    <aside className="hidden w-[219px] shrink-0 border-r border-[#29496d] bg-[#102440] px-[15px] py-[22px] md:block"><div className="flex items-center gap-[10px] px-[7px]"><div className="h-[30px] w-[30px] rounded-[8px] bg-[#4aa7fb]" /><span className="text-[14px] font-semibold">Reunion Admin</span></div><nav className="mt-[22px] space-y-[9px]" aria-label="เมนูหลัก">{menuGroups.map((group, groupIndex) => <div key={groupIndex} className={groupIndex === 1 ? "mt-[18px]" : ""}>{group.map((item, itemIndex) => <a key={item.label} href="#" className={`group flex h-[40px] items-center gap-[12px] rounded-[10px] px-[11px] text-[13px] transition-colors ${groupIndex === 0 && itemIndex === 0 ? "bg-[#19395e] font-semibold text-white" : "text-[#a6b9d1] hover:bg-[#173454] hover:text-white"}`}><Icon name={item.icon} /><span>{item.label}</span></a>)}</div>)}</nav></aside>
    <section className="w-full px-[22px] py-[34px] sm:px-[30px] lg:px-[29px] lg:py-[35px]"><header><p className="text-[12px] text-[#8fa5c0]">Reunion Admin</p><h1 className="mt-[8px] text-[27px] font-bold tracking-[-0.7px] text-[#f3f7fb]">ภาพรวมงาน</h1><p className="mt-[9px] text-[12px] text-[#9badc4]">ข้อมูลตัวอย่างสำหรับต้นแบบ UI</p></header>
      <div className="mt-[24px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-4"><StatCard label="บัตรที่อนุมัติแล้ว" value="248" note="จากบัตรทั้งหมด [จำนวนบัตร]" color="text-[#45a5ff]" /><StatCard label="รอตรวจสลิป" value="12" note="ต้องดำเนินการ" color="text-[#ffd071]" /><StatCard label="เข้างานแล้ว" value="0" note="เริ่มหน้างาน" color="text-[#5ce2b2]" /><StatCard label="Token ที่เติมแล้ว" value="1,500" note="ยอดใช้ได้ทั้งหมด" color="text-[#a488ff]" /></div>
      <div className="mt-[22px] grid grid-cols-1 gap-[14px] xl:grid-cols-[minmax(0,1.86fr)_minmax(275px,0.94fr)]"><section className="rounded-[15px] border border-[#24466c] bg-[#102542] px-[18px] pb-[18px] pt-[18px]"><div className="flex items-center justify-between"><h2 className="text-[15px] font-bold">รอตรวจสลิป</h2><a href="#" className="text-[12px] font-semibold text-[#43a5ff]">ดูทั้งหมด</a></div><div className="mt-[18px] overflow-x-auto"><table className="w-full min-w-[485px] border-collapse text-left text-[12px]"><thead className="text-[11px] text-[#9aadc4]"><tr className="border-b border-[#254664]"><th className="w-[20%] px-[36px] pb-[8px] font-normal">คำสั่งซื้อ</th><th className="w-[25%] pb-[8px] font-normal">ผู้ซื้อ</th><th className="w-[31%] pb-[8px] font-normal">รายการ</th><th className="pb-[8px] font-normal">ยอด</th></tr></thead><tbody>{orders.map(([id, buyer, item, total]) => <tr key={id} className="border-b border-[#203e5d] last:border-b-0"><td className="px-[36px] py-[11px] text-[#9eb1c8]">{id}</td><td className="py-[11px] text-[#d9e4f0]">{buyer}</td><td className="py-[11px] text-[#9eb1c8]">{item}</td><td className="py-[11px] font-semibold text-[#d9e4f0]">{total}</td></tr>)}</tbody></table></div></section>
        <section className="rounded-[15px] border border-[#24466c] bg-[#102542] px-[18px] pb-[20px] pt-[18px]"><h2 className="text-[15px] font-bold">ยอดขายรายร้าน</h2><div className="mt-[18px] space-y-[12px]">{[["ร้านที่ 1", "86%", "bg-[#40a1fa]"], ["ร้านที่ 2", "62%", "bg-[#a384ff]"], ["ร้านที่ 3", "36%", "bg-[#35d7c0]"]].map(([shop, width, color]) => <div key={shop}><div className="mb-[7px] flex justify-between text-[12px] text-[#d5e0ed]"><span>{shop}</span><span className="text-[#9badc4]">[ยอด]</span></div><div className="h-[7px] overflow-hidden rounded-full bg-[#1c3b5d]"><div className={`h-full rounded-full ${color}`} style={{ width }} /></div></div>)}</div></section>
      </div></section>
  </div></main>;
}
