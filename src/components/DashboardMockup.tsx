interface DashboardMockupProps {
  className?: string;
}

export function DashboardMockup({ className = "" }: DashboardMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-400/20 via-teal-500/10 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="mx-auto flex h-6 w-48 items-center justify-center rounded-md bg-white px-3 text-[10px] text-slate-400 ring-1 ring-slate-200">
            dashboard.websmil.com
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-14 shrink-0 border-r border-slate-100 bg-slate-50 py-4 sm:block">
            <div className="mx-auto mb-4 h-7 w-7 rounded-lg bg-teal-600" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="mx-auto mb-2 h-6 w-6 rounded-md bg-slate-200/80" />
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 sm:p-5">
            {/* Stats row */}
            <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: "Clientes", value: "248", color: "bg-teal-500" },
                { label: "Reservas", value: "36", color: "bg-blue-500" },
                { label: "Ingresos", value: "€4.2k", color: "bg-violet-500" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-slate-100 bg-slate-50/80 p-2 sm:p-3">
                  <div className={`mb-1.5 h-1 w-6 rounded-full ${stat.color}`} />
                  <p className="text-[9px] text-slate-500 sm:text-[10px]">{stat.label}</p>
                  <p className="text-sm font-bold text-slate-800 sm:text-base">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="mb-3 rounded-lg border border-slate-100 bg-slate-50/50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-medium text-slate-600">Actividad semanal</span>
                <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[9px] font-medium text-teal-700">+23%</span>
              </div>
              <div className="flex h-16 items-end gap-1 sm:h-20">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-teal-600 to-teal-400 opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Table rows */}
            <div className="space-y-1.5">
              {[1, 2, 3].map((row) => (
                <div key={row} className="flex items-center gap-2 rounded-md bg-white p-2 ring-1 ring-slate-100">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-teal-400 to-teal-600" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 w-20 rounded-full bg-slate-200" />
                    <div className="h-1 w-12 rounded-full bg-slate-100" />
                  </div>
                  <div className="h-5 w-10 rounded bg-teal-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 -left-3 animate-float rounded-xl border border-white bg-white px-3 py-2 shadow-lg sm:-left-6">
        <p className="text-[10px] font-medium text-slate-500">Tiempo ahorrado</p>
        <p className="text-lg font-bold text-teal-600">-30%</p>
      </div>

      <div className="absolute -right-2 -top-3 animate-float rounded-xl border border-white bg-white px-3 py-2 shadow-lg sm:-right-4" style={{ animationDelay: "1.5s" }}>
        <p className="text-[10px] font-medium text-slate-500">Online 24/7</p>
        <p className="text-sm font-bold text-slate-800">✓ Activo</p>
      </div>
    </div>
  );
}
