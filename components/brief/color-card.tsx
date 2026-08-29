"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { SpinButton } from "./spin-card"

export function ColorCard({
  colors,
  onSpin,
}: {
  colors: string[]
  onSpin: () => void
}) {
  const [copied, setCopied] = useState<string | null>(null)

  async function copy(hex: string) {
    try {
      await navigator.clipboard.writeText(hex)
      setCopied(hex)
      window.setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1200)
    } catch {
      // clipboard unavailable — ignore silently
    }
  }

  return (
    <article className="flex min-h-56 flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_2px_24px_-8px_rgba(0,0,0,0.12)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Цвета
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Нажми цвет, подставит HEX
          </p>
        </div>
        <span className="font-mono text-sm text-muted-foreground/60">04</span>
      </div>

      <div key={colors.join(",")} className="roll-in my-4 grid grid-cols-5 gap-2">
        {colors.map((hex, i) => {
          const isCopied = copied === hex
          return (
            <button
              key={`${hex}-${i}`}
              type="button"
              onClick={() => copy(hex)}
              title={`Скопировать ${hex}`}
              className="group flex flex-col gap-1.5 text-left"
            >
              <span
                className="relative flex aspect-square items-center justify-center rounded-xl border border-black/5 transition-transform group-hover:-translate-y-0.5 group-active:scale-95"
                style={{ backgroundColor: hex }}
              >
                {isCopied && (
                  <Check className="h-4 w-4 text-white mix-blend-difference" />
                )}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-tight text-muted-foreground tabular-nums">
                {isCopied ? "скопир." : hex}
              </span>
            </button>
          )
        })}
      </div>

      <SpinButton onClick={onSpin} />
    </article>
  )
}
