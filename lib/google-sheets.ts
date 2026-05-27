// Fetch events from a publicly published Google Sheet (CSV format).
// Set SHEET_CSV_URL in .env.local to the "Pubblica sul web" CSV link.
//
// Sheet columns (row 1 = header, ignored):
//   A: id  B: date (YYYY-MM-DD)  C: time (HH:MM)  D: title
//   E: category (calcio|tennis|motogp|formula1)
//   F: competition (optional)    G: channel (optional)

import type { SportEvent, SportCategoryId } from "./calendar-data"

const VALID_CATEGORIES = new Set<string>(["calcio", "tennis", "motogp", "formula1"])

export async function getEvents(): Promise<SportEvent[]> {
  const url = process.env.SHEET_CSV_URL
  if (!url) {
    console.warn("[getEvents] SHEET_CSV_URL not set — returning empty calendar")
    return []
  }

  try {
    const fetchOpts: RequestInit =
      process.env.NODE_ENV === "development"
        ? { cache: "no-store" }
        : { next: { revalidate: 60 } }
    const res = await fetch(url, fetchOpts)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const text = await res.text()
    return parseCsv(text)
  } catch (err) {
    console.error("[getEvents] fetch failed:", err)
    return []
  }
}

function parseCsv(text: string): SportEvent[] {
  const lines = text.trim().split("\n").slice(1) // skip header
  const result: SportEvent[] = []

  for (const line of lines) {
    const cols = parseCsvLine(line.replace(/\r$/, ""))
    const [id, date, time, title, category, competition, channel] = cols.map((c) => c.trim())

    if (!id || !date || !time || !title || !VALID_CATEGORIES.has(category)) continue

    const event: SportEvent = { id, date, time, title, category: category as SportCategoryId }
    if (competition) event.competition = competition
    if (channel) event.channel = channel
    result.push(event)
  }

  return result
}

function parseCsvLine(line: string): string[] {
  const result: string[] = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === "," && !inQuotes) {
      result.push(current)
      current = ""
    } else {
      current += ch
    }
  }
  result.push(current)
  return result
}
