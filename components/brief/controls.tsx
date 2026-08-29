"use client"

import { RefreshCw, Undo2, History, Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function Controls({
  onSpinAll,
  onUndo,
  canUndo,
  onHistory,
  onCopy,
  copied,
  spinning,
}: {
  onSpinAll: () => void
  onUndo: () => void
  canUndo: boolean
  onHistory: () => void
  onCopy: () => void
  copied: boolean
  spinning: boolean
}) {
  return (
    <div className="flex flex-col gap-5">
      <button
        type="button"
        onClick={onSpinAll}
        className="group flex w-full items-center justify-center gap-3 rounded-3xl bg-terracotta px-6 py-6 text-lg font-extrabold uppercase tracking-widest text-terracotta-foreground transition-[transform,background-color] hover:brightness-105 active:scale-[0.99] sm:text-2xl"
      >
        <RefreshCw
          className={cn(
            "h-6 w-6 transition-transform duration-500 group-hover:rotate-180",
            spinning && "animate-spin",
          )}
        />
        Крутить всё
      </button>

      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          <Kbd>Пробел</Kbd> — крутить всё{"  "}
          <span className="mx-1 text-muted-foreground/40">|</span>
          <Kbd>Ctrl</Kbd>+<Kbd>Z</Kbd> — назад
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <SecondaryButton onClick={onUndo} disabled={!canUndo}>
            <Undo2 className="h-4 w-4" />
            Назад
          </SecondaryButton>
          <SecondaryButton onClick={onHistory}>
            <History className="h-4 w-4" />
            История
          </SecondaryButton>
          <SecondaryButton onClick={onCopy}>
            {copied ? (
              <Check className="h-4 w-4 text-terracotta" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Скопировано" : "Скопировать бриф"}
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}

function SecondaryButton({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded-md border border-border bg-secondary px-1.5 py-0.5 font-mono text-[11px] font-medium text-foreground">
      {children}
    </kbd>
  )
}
