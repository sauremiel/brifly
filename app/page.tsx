"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Header } from "@/components/brief/header"
import { FilterPanel } from "@/components/brief/filter-panel"
import { SpinCard } from "@/components/brief/spin-card"
import { ColorCard } from "@/components/brief/color-card"
import { Controls } from "@/components/brief/controls"
import { HistoryDrawer } from "@/components/brief/history-drawer"
import {
  DEFAULT_FILTERS,
  briefToText,
  rollAll,
  rollColors,
  rollMood,
  rollName,
  rollNiche,
  type Brief,
  type Filters,
} from "@/lib/generate"

const INITIAL_BRIEF: Brief = {
  niche: "Кофейня навынос",
  mood: "Меланхолия",
  name: "WOLD",
  colors: ["#F4A261", "#E76F51", "#E9C46A", "#F1DEC9", "#8B3A2B"],
}

const MAX_HISTORY = 30

export default function Page() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [brief, setBrief] = useState<Brief>(INITIAL_BRIEF)
  const [count, setCount] = useState(0)
  const [undoStack, setUndoStack] = useState<Brief[]>([])
  const [history, setHistory] = useState<Brief[]>([])
  const [filterOpen, setFilterOpen] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [spinning, setSpinning] = useState(false)
  const spinTimer = useRef<number | null>(null)

  const commit = useCallback((next: Brief, previous: Brief) => {
    setUndoStack((s) => [...s, previous])
    setBrief(next)
    setHistory((h) => [next, ...h].slice(0, MAX_HISTORY))
    setCount((c) => c + 1)
  }, [])

  const spinNiche = useCallback(() => {
    setBrief((b) => {
      const next = { ...b, niche: rollNiche(filters, b.niche) }
      setUndoStack((s) => [...s, b])
      setHistory((h) => [next, ...h].slice(0, MAX_HISTORY))
      return next
    })
    setCount((c) => c + 1)
  }, [filters])

  const spinMood = useCallback(() => {
    setBrief((b) => {
      const next = { ...b, mood: rollMood(b.mood) }
      setUndoStack((s) => [...s, b])
      setHistory((h) => [next, ...h].slice(0, MAX_HISTORY))
      return next
    })
    setCount((c) => c + 1)
  }, [])

  const spinName = useCallback(() => {
    setBrief((b) => {
      const next = { ...b, name: rollName(filters, b.name) }
      setUndoStack((s) => [...s, b])
      setHistory((h) => [next, ...h].slice(0, MAX_HISTORY))
      return next
    })
    setCount((c) => c + 1)
  }, [filters])

  const spinColors = useCallback(() => {
    setBrief((b) => {
      const next = { ...b, colors: rollColors(filters.colorTemp, b.colors) }
      setUndoStack((s) => [...s, b])
      setHistory((h) => [next, ...h].slice(0, MAX_HISTORY))
      return next
    })
    setCount((c) => c + 1)
  }, [filters])

  const spinAll = useCallback(() => {
    setBrief((b) => {
      const next = rollAll(filters, b)
      setUndoStack((s) => [...s, b])
      setHistory((h) => [next, ...h].slice(0, MAX_HISTORY))
      return next
    })
    setCount((c) => c + 1)
    setSpinning(true)
    if (spinTimer.current) window.clearTimeout(spinTimer.current)
    spinTimer.current = window.setTimeout(() => setSpinning(false), 550)
  }, [filters])

  const undo = useCallback(() => {
    setUndoStack((s) => {
      if (s.length === 0) return s
      const prev = s[s.length - 1]
      setBrief(prev)
      return s.slice(0, -1)
    })
  }, [])

  const copyBrief = useCallback(() => {
    const text = briefToText(brief)
    navigator.clipboard?.writeText(text).catch(() => {})
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }, [brief])

  const restore = useCallback((item: Brief) => {
    setBrief((b) => {
      setUndoStack((s) => [...s, b])
      return item
    })
    setHistoryOpen(false)
  }, [])

  // keep latest handlers for the global key listener
  const spinAllRef = useRef(spinAll)
  const undoRef = useRef(undo)
  spinAllRef.current = spinAll
  undoRef.current = undo

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null
      const tag = el?.tagName
      const typing =
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "BUTTON" ||
        tag === "A" ||
        el?.isContentEditable
      if ((e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z")) {
        e.preventDefault()
        undoRef.current()
        return
      }
      if ((e.code === "Space" || e.key === " ") && !typing) {
        e.preventDefault()
        spinAllRef.current()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  function updateFilters(next: Partial<Filters>) {
    setFilters((f) => ({ ...f, ...next }))
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <Header count={count} />

      <div className="mt-10 sm:mt-14">
        <FilterPanel
          open={filterOpen}
          onToggle={() => setFilterOpen((o) => !o)}
          filters={filters}
          onChange={updateFilters}
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <SpinCard
          index="01"
          title="Ниша"
          subtitle="Кто клиент"
          value={brief.niche}
          onSpin={spinNiche}
        />
        <SpinCard
          index="02"
          title="Настроение"
          subtitle="Какая эмоция"
          value={brief.mood}
          onSpin={spinMood}
        />
        <SpinCard
          index="03"
          title="Название"
          subtitle="Как зовут бренд"
          value={brief.name}
          onSpin={spinName}
        />
        <ColorCard colors={brief.colors} onSpin={spinColors} />
      </div>

      <div className="mt-8">
        <Controls
          onSpinAll={spinAll}
          onUndo={undo}
          canUndo={undoStack.length > 0}
          onHistory={() => setHistoryOpen(true)}
          onCopy={copyBrief}
          copied={copied}
          spinning={spinning}
        />
      </div>

      <footer className="mt-14 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        Бриф — генератор случайных заданий для дизайнеров
      </footer>

      <HistoryDrawer
        open={historyOpen}
        onClose={() => setHistoryOpen(false)}
        items={history}
        onRestore={restore}
      />
    </main>
  )
}
