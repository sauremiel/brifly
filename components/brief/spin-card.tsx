"use client"

import { RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

export function SpinCard({
  index,
  title,
  subtitle,
  value,
  onSpin,
}: {
  index: string
  title: string
  subtitle: string
  value: string
  onSpin: () => void
}) {
  return (
    <article className="flex min-h-56 flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_2px_24px_-8px_rgba(0,0,0,0.12)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
            {title}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <span className="font-mono text-sm text-muted-foreground/60">{index}</span>
      </div>

      <div className="my-4 flex-1">
        <p
          key={value}
          className="roll-in text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
        >
          {value}
        </p>
      </div>

      <SpinButton onClick={onSpin} />
    </article>
  )
}

export function SpinButton({
  onClick,
  className,
}: {
  onClick: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground hover:text-background",
        className,
      )}
    >
      <RefreshCw className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180" />
      Крутить
    </button>
  )
}
