"use client"

import { useEffect } from "react"
import { X, CornerDownLeft } from "lucide-react"
import type { Brief } from "@/lib/generate"

export function HistoryDrawer({
  open,
  onClose,
  items,
  onRestore,
}: {
  open: boolean
  onClose: () => void
  items: Brief[]
  onRestore: (brief: Brief) => void
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (open) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="История брифов"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-card shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-foreground">История</h2>
            <p className="text-xs text-muted-foreground">
              {items.length > 0
                ? `Последние ${items.length} вариантов`
                : "Пока пусто — крути барабаны"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-6 py-5">
          {items.length === 0 && (
            <p className="pt-10 text-center text-sm text-muted-foreground">
              Здесь появятся сгенерированные брифы.
            </p>
          )}
          {items.map((brief, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onRestore(brief)}
              className="group block w-full rounded-2xl border border-border bg-background p-4 text-left transition-colors hover:border-foreground/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {brief.name} · {brief.niche}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {brief.mood}
                  </p>
                </div>
                <CornerDownLeft className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-3 flex gap-1.5">
                {brief.colors.map((hex, j) => (
                  <span
                    key={`${hex}-${j}`}
                    className="h-5 flex-1 rounded-md border border-black/5"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </aside>
    </div>
  )
}
