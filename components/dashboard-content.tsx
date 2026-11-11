const stats = [
  { label: "ผู้ใช้งานทั้งหมด", value: "1,248", valueClass: "text-white" },
  { label: "ร้านค้าทั้งหมด", value: "326", valueClass: "text-white" },
  { label: "รายการรอตรวจสอบ", value: "18", valueClass: "text-yellow-300" },
  { label: "รายได้เดือนนี้", value: "฿84,500", valueClass: "text-green-300" },
];

export default function DashboardContent() {
  return (
    <main className="min-h-svh min-w-0 flex-1 bg-[#0A1628] p-8 text-white">
      <h1 className="mb-8 text-3xl font-semibold">Dashboard</h1>

      <section className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-xl border border-[#263c57] bg-[#10233d] p-5"
          >
            <p className="text-sm text-[#8fa6c2]">{stat.label}</p>
            <p className={`mt-5 text-3xl font-semibold ${stat.valueClass}`}>
              {stat.value}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
