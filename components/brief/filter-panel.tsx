"use client"

import {
  Sparkles,
  Utensils,
  Flower2,
  Landmark,
  Hammer,
  Dumbbell,
  ShoppingBag,
  Wine,
  Palmtree,
  Leaf,
  SlidersHorizontal,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  CATEGORIES,
  COLOR_FILTERS,
  NAME_LANGS,
  NAME_LENGTHS,
} from "@/lib/brief-data"
import type { Filters } from "@/lib/generate"

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Utensils,
  Flower2,
  Landmark,
  Hammer,
  Dumbbell,
  ShoppingBag,
  Wine,
  Palmtree,
  Leaf,
}

export function FilterPanel({
  open,
  onToggle,
  filters,
  onChange,
}: {
  open: boolean
  onToggle: () => void
  filters: Filters
  onChange: (next: Partial<Filters>) => void
}) {
  const activeCount =
    (filters.category !== "all" ? 1 : 0) +
    (filters.colorTemp !== "all" ? 1 : 0) +
    (filters.nameLength !== "any" ? 1 : 0) +
    (filters.nameLang !== "any" ? 1 : 0)

  return (
    <section className="rounded-3xl border border-border bg-card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="flex items-center gap-2.5">
          <SlidersHorizontal className="h-4.5 w-4.5 text-foreground" />
          <span className="text-sm font-semibold text-foreground">Фильтры</span>
          {activeCount > 0 && (
            <span className="rounded-full bg-terracotta px-2 py-0.5 text-xs font-medium text-terracotta-foreground tabular-nums">
              {activeCount}
            </span>
          )}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-6 border-t border-border px-5 py-5">
            <FilterGroup label="Категория бизнеса">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => {
                  const Icon = ICONS[c.icon]
                  const active = filters.category === c.id
                  return (
                    <Chip
                      key={c.id}
                      active={active}
                      onClick={() => onChange({ category: c.id })}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {c.label}
                    </Chip>
                  )
                })}
              </div>
            </FilterGroup>

            <FilterGroup label="Цвет">
              <div className="flex flex-wrap gap-2">
                {COLOR_FILTERS.map((c) => (
                  <Chip
                    key={c.id}
                    active={filters.colorTemp === c.id}
                    onClick={() => onChange({ colorTemp: c.id })}
                  >
                    {c.label}
                  </Chip>
                ))}
              </div>
            </FilterGroup>

            <div className="grid gap-6 sm:grid-cols-2">
              <FilterGroup label="Длина названия">
                <div className="flex flex-wrap gap-2">
                  {NAME_LENGTHS.map((c) => (
                    <Chip
                      key={c.id}
                      active={filters.nameLength === c.id}
                      onClick={() => onChange({ nameLength: c.id })}
                    >
                      {c.label}
                    </Chip>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup label="Язык названия">
                <div className="flex flex-wrap gap-2">
                  {NAME_LANGS.map((c) => (
                    <Chip
                      key={c.id}
                      active={filters.nameLang === c.id}
                      onClick={() => onChange({ nameLang: c.id })}
                    >
                      {c.label}
                    </Chip>
                  ))}
                </div>
              </FilterGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FilterGroup({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      {children}
    </div>
  )
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-card text-foreground hover:border-foreground/30 hover:bg-secondary",
      )}
    >
      {children}
    </button>
  )
}
