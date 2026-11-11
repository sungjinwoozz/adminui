"use client";

export default function Dashboard() {
  return (
    <main className="min-h-svh min-w-0 flex-1 bg-[#0A1628] p-8 text-white">
      <div className="mb-8">
        <h1 className="mt-2 text-3xl font-semibold">Dashboard</h1>
      </div>
      <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-[#263c57] bg-[#10233d] p-5">
          <p className="text-sm text-[#8fa6c2]">ผู้ใช้งานทั้งหมด</p>
          <p className="mt-5 text-3xl font-semibold">1,248</p>
        </div>
        <div className="rounded-xl border border-[#263c57] bg-[#10233d] p-5">
          <p className="text-sm text-[#8fa6c2]">ร้านค้าทั้งหมด</p>
          <p className="mt-5 text-3xl font-semibold">326</p>
        </div>
        <div className="rounded-xl border border-[#263c57] bg-[#10233d] p-5">
          <p className="text-sm text-[#8fa6c2]">รายการรอตรวจสอบ</p>
          <p className="mt-5 text-3xl font-semibold text-yellow-300">18</p>
        </div>
        <div className="rounded-xl border border-[#263c57] bg-[#10233d] p-5">
          <p className="text-sm text-[#8fa6c2]">รายได้เดือนนี้</p>
          <p className="mt-5 text-3xl font-semibold text-green-300">฿84,500</p>
        </div>
      </div>
    </main>
  );
}
