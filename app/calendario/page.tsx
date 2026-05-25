"use client"

import React, { useState, useMemo, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CALENDAR_EVENTS, SPORT_CATEGORIES, type FilterCategoryId } from "@/lib/calendar-data"

// ============================================================
// HELPERS
// ============================================================

function getTodayString() {
  return new Date().toISOString().slice(0, 10)
}

function formatDateHeader(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00")
  return new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date)
}

const SPORT_BADGE: Record<string, string> = {
  calcio:   "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  tennis:   "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  motogp:   "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  formula1: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
}

// ============================================================
// THEME TOGGLE
// ============================================================

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Toggle theme">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

// ============================================================
// PAGINA
// ============================================================

export default function CalendarioPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategoryId>("all")
  const todayRef = useRef<HTMLDivElement>(null)
  const today = getTodayString()

  // Scroll to today section after first render
  useEffect(() => {
    const timer = setTimeout(() => {
      todayRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  const filteredEvents = useMemo(() => {
    const source =
      activeCategory === "all"
        ? CALENDAR_EVENTS
        : CALENDAR_EVENTS.filter((e) => e.category === activeCategory)

    return [...source].sort((a, b) => {
      const d = a.date.localeCompare(b.date)
      return d !== 0 ? d : a.time.localeCompare(b.time)
    })
  }, [activeCategory])

  const groupedByDate = useMemo(() => {
    const map = new Map<string, typeof filteredEvents>()
    for (const event of filteredEvents) {
      if (!map.has(event.date)) map.set(event.date, [])
      map.get(event.date)!.push(event)
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b))
  }, [filteredEvents])

  const emojiByCategory = Object.fromEntries(
    SPORT_CATEGORIES.map((c) => [c.id, c.emoji]),
  )

  return (
    <main className="relative min-h-screen bg-muted/30">
      <div className="mx-auto max-w-md px-4 py-6">

        {/* ── Header ── */}
        <div className="relative mb-5 flex flex-col items-center gap-1">
          <div className="absolute right-0 top-0">
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Calendar className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Calendario Sport</h1>
          </div>
          <p className="text-sm text-muted-foreground">University · Sassari</p>
        </div>

        {/* ── Category filter ── */}
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SPORT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:bg-accent",
              )}
            >
              <span aria-hidden="true">{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* ── Event list ── */}
        {groupedByDate.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">Nessun evento in programma.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {groupedByDate.map(([date, events]) => {
              const isPast  = date < today
              const isToday = date === today

              return (
                <div
                  key={date}
                  ref={isToday ? todayRef : undefined}
                  className="scroll-mt-4"
                >
                  {/* Date header */}
                  <div
                    className={cn(
                      "mb-2 flex items-center gap-2",
                      isPast && !isToday && "opacity-55",
                    )}
                  >
                    {isToday && (
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                        Oggi
                      </span>
                    )}
                    <span
                      className={cn(
                        "text-sm font-semibold capitalize",
                        isToday
                          ? "text-foreground"
                          : isPast
                          ? "text-muted-foreground"
                          : "text-foreground",
                      )}
                    >
                      {formatDateHeader(date)}
                    </span>
                  </div>

                  {/* Events card */}
                  <div
                    className={cn(
                      "overflow-hidden rounded-xl border border-border bg-card shadow-sm",
                      isPast && !isToday && "opacity-55",
                    )}
                  >
                    {events.map((event, idx) => (
                      <div
                        key={event.id}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3",
                          idx < events.length - 1 && "border-b border-border",
                        )}
                      >
                        {/* Sport emoji badge */}
                        <span
                          className={cn(
                            "flex-shrink-0 rounded-full px-2 py-0.5 text-sm leading-none",
                            SPORT_BADGE[event.category],
                          )}
                          aria-label={event.category}
                        >
                          {emojiByCategory[event.category]}
                        </span>

                        {/* Title + competition */}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-foreground">
                            {event.title}
                          </p>
                          {event.competition && (
                            <p className="truncate text-xs text-muted-foreground">
                              {event.competition}
                            </p>
                          )}
                        </div>

                        {/* Time + channel */}
                        <div className="flex-shrink-0 text-right">
                          <p className="text-sm font-medium tabular-nums text-foreground">
                            {event.time}
                          </p>
                          {event.channel && (
                            <p className="text-xs text-muted-foreground">{event.channel}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Le partite potrebbero variare. Chiedere sempre al personale.
        </p>
      </div>
    </main>
  )
}
