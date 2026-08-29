import {
  MOODS,
  NAMES,
  NICHES,
  PALETTES,
  type CategoryId,
  type ColorTemp,
  type NameLang,
  type NameLength,
} from "./brief-data"

export type Filters = {
  category: CategoryId
  colorTemp: ColorTemp
  nameLength: NameLength
  nameLang: NameLang
}

export type Brief = {
  niche: string
  mood: string
  name: string
  colors: string[]
}

export const DEFAULT_FILTERS: Filters = {
  category: "all",
  colorTemp: "all",
  nameLength: "any",
  nameLang: "any",
}

function pick<T>(arr: T[], exclude?: T): T {
  if (arr.length === 0) return exclude as T
  if (arr.length === 1) return arr[0]
  let value = arr[Math.floor(Math.random() * arr.length)]
  // avoid repeating the same result twice in a row when possible
  let guard = 0
  while (exclude !== undefined && value === exclude && guard < 8) {
    value = arr[Math.floor(Math.random() * arr.length)]
    guard++
  }
  return value
}

export function rollNiche(filters: Filters, current?: string): string {
  const pool =
    filters.category === "all"
      ? NICHES
      : NICHES.filter((n) => n.category === filters.category)
  const list = (pool.length ? pool : NICHES).map((n) => n.text)
  return pick(list, current)
}

export function rollMood(current?: string): string {
  return pick(MOODS, current)
}

export function rollName(filters: Filters, current?: string): string {
  let pool = NAMES
  if (filters.nameLength !== "any") {
    pool = pool.filter((n) => n.length === filters.nameLength)
  }
  if (filters.nameLang !== "any") {
    pool = pool.filter((n) => n.lang === filters.nameLang)
  }
  const list = (pool.length ? pool : NAMES).map((n) => n.text)
  return pick(list, current)
}

export function rollColors(filters: ColorTemp, current?: string[]): string[] {
  const pool =
    filters === "all" ? PALETTES : PALETTES.filter((p) => p.temp === filters)
  const list = pool.length ? pool : PALETTES
  const currentKey = current?.join(",")
  let choice = list[Math.floor(Math.random() * list.length)]
  let guard = 0
  while (list.length > 1 && choice.colors.join(",") === currentKey && guard < 8) {
    choice = list[Math.floor(Math.random() * list.length)]
    guard++
  }
  return choice.colors
}

export function rollAll(filters: Filters, current?: Brief): Brief {
  return {
    niche: rollNiche(filters, current?.niche),
    mood: rollMood(current?.mood),
    name: rollName(filters, current?.name),
    colors: rollColors(filters.colorTemp, current?.colors),
  }
}

export function briefToText(brief: Brief): string {
  return [
    "БРИФ",
    "",
    `Ниша: ${brief.niche}`,
    `Настроение: ${brief.mood}`,
    `Название: ${brief.name}`,
    `Палитра: ${brief.colors.join("  ")}`,
  ].join("\n")
}
