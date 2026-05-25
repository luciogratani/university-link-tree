"use client"

import React, { useState, useMemo, useRef, useEffect } from "react"
import { Calendar, Phone, MessageCircle, X } from "lucide-react"
import { CALENDAR_EVENTS, type SportCategoryId } from "@/lib/calendar-data"

// ─── Sport config ────────────────────────────────────────────────────────────

const SPORTS: Record<SportCategoryId, { label: string; glyph: string; color: string }> = {
  calcio:   { label: "Calcio",  glyph: "⚽", color: "#4ade80" },
  tennis:   { label: "Tennis",  glyph: "🎾", color: "#facc15" },
  motogp:   { label: "MotoGP",  glyph: "🏍", color: "#f87171" },
  formula1: { label: "F1",      glyph: "🏎", color: "#60a5fa" },
}

type FilterId = SportCategoryId | "all"

const CHIPS: { id: FilterId; label: string; glyph?: string; color?: string }[] = [
  { id: "all",      label: "All Sports" },
  { id: "calcio",   label: "Calcio",    glyph: "⚽", color: "#4ade80" },
  { id: "tennis",   label: "Tennis",    glyph: "🎾", color: "#facc15" },
  { id: "motogp",   label: "MotoGP",    glyph: "🏍", color: "#f87171" },
  { id: "formula1", label: "F1",        glyph: "🏎", color: "#60a5fa" },
]

// ─── Font shorthands (with fallbacks for SSR before font load) ──────────────
const FA = "var(--font-archivo, Archivo, sans-serif)"
const FM = "var(--font-mono-cal, 'JetBrains Mono', monospace)"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getTodayStr() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
}

function isoWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dn = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dn)
  const y1 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - y1.getTime()) / 86400000 + 1) / 7)
}

function getWeekMeta(): string {
  const now = new Date()
  const mo = new Intl.DateTimeFormat("it-IT", { month: "long" }).format(now).toUpperCase()
  return `SETTIMANA ${isoWeek(now)} · ${mo} ${now.getFullYear()}`
}

function dayCode(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00")
  const wd = new Intl.DateTimeFormat("it-IT", { weekday: "short" }).format(d).replace(".", "").slice(0, 3).toUpperCase()
  const dd = d.getDate().toString().padStart(2, "0")
  const mo = new Intl.DateTimeFormat("it-IT", { month: "short" }).format(d).replace(".", "").slice(0, 3).toUpperCase()
  return `${wd} · ${dd} ${mo}`
}

function eventIsLive(dateStr: string, timeStr: string, today: string): boolean {
  if (dateStr !== today) return false
  const [h, m] = timeStr.split(":").map(Number)
  const now = new Date()
  const start = new Date(now)
  start.setHours(h, m, 0, 0)
  const end = new Date(start.getTime() + 7_200_000)
  return now >= start && now < end
}

// ─── EventRow ────────────────────────────────────────────────────────────────

type Ev = (typeof CALENDAR_EVENTS)[number]

function EventRow({
  event,
  filter,
  isFirst,
  isToday,
  today,
}: {
  event: Ev
  filter: FilterId
  isFirst: boolean
  isToday: boolean
  today: string
}) {
  const sp = SPORTS[event.category]
  const dimmed = filter !== "all" && filter !== event.category
  const live = isToday && eventIsLive(event.date, event.time, today)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "5px 1fr auto",
        alignItems: "stretch",
        minHeight: 64,
        borderTop: isFirst ? undefined : `1px solid ${isToday ? "#202020" : "#1c1c1c"}`,
        opacity: dimmed ? 0.18 : 1,
        filter: dimmed ? "saturate(0.2)" : undefined,
        transition: "opacity 0.2s, filter 0.2s",
      }}
    >
      {/* Left color bar */}
      <div style={{ background: sp.color }} />

      {/* Main content */}
      <div style={{ padding: "11px 12px 11px 14px", display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}>
        {/* Name + sport label */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, minWidth: 0 }}>
          <p style={{ fontFamily: FA, fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em", lineHeight: 1.15, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, minWidth: 0, margin: 0 }}>
            {event.title}
          </p>
          <span style={{ fontFamily: FA, fontWeight: 700, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: sp.color, flexShrink: 0 }}>
            {sp.label}
          </span>
        </div>

        {/* Stage / competition */}
        {event.competition && (
          <p style={{ fontFamily: FA, fontWeight: 500, fontSize: 12, color: "#888", margin: "2px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {event.competition}
          </p>
        )}

        {/* Channel pill */}
        {event.channel && (
          <div style={{ marginTop: 6 }}>
            <span style={{ fontFamily: FA, fontWeight: 700, fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#666", padding: "2px 6px", background: "#1c1c1c", borderRadius: 3 }}>
              {event.channel}
            </span>
          </div>
        )}
      </div>

      {/* Time block */}
      <div style={{ padding: "11px 14px 11px 8px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", minWidth: 64, borderLeft: "1px dashed #1f1f1f" }}>
        <p style={{ fontFamily: FM, fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "0.01em", lineHeight: 1, fontFeatureSettings: "'tnum' 1", margin: 0 }}>
          {event.time}{live && <span style={{ color: "#00e0c2", marginLeft: 4 }}>·</span>}
        </p>
        {live && (
          <p style={{ fontFamily: FM, fontSize: 8.5, letterSpacing: "0.18em", color: "#00e0c2", margin: "4px 0 0", textTransform: "uppercase" }}>
            IN ONDA
          </p>
        )}
      </div>
    </div>
  )
}

// ─── CompactEventRow (solo per ieri) ─────────────────────────────────────────

function CompactEventRow({ event, isFirst }: { event: Ev; isFirst: boolean }) {
  const sp = SPORTS[event.category]
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "5px 0",
      borderTop: isFirst ? undefined : "1px solid #181818",
    }}>
      <span style={{ fontFamily: FM, fontWeight: 500, fontSize: 11, color: "#555", flexShrink: 0, letterSpacing: "0.04em" }}>
        {event.time}
      </span>
      <span style={{ width: 4, height: 4, borderRadius: "50%", background: sp.color, flexShrink: 0, opacity: 0.6 }} />
      <span style={{ fontFamily: FA, fontWeight: 600, fontSize: 12, color: "#555", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
        {event.title}
      </span>
    </div>
  )
}

// ─── DayGroup ────────────────────────────────────────────────────────────────

function DayGroup({
  date,
  events,
  filter,
  today,
  scrollRef,
  compact,
}: {
  date: string
  events: Ev[]
  filter: FilterId
  today: string
  scrollRef?: React.RefObject<HTMLDivElement | null>
  compact?: boolean
}) {
  const isToday = date === today
  const isPast = date < today

  // Ieri: rendering minimale, senza card né filtro sport
  if (compact) {
    return (
      <div style={{ padding: "8px 20px 14px", opacity: 0.4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span style={{ fontFamily: FM, fontWeight: 600, fontSize: 10, letterSpacing: "0.22em", color: "#444" }}>
            {dayCode(date)}
          </span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #1e1e1e, transparent)" }} />
        </div>
        {events.map((ev, idx) => (
          <CompactEventRow key={ev.id} event={ev} isFirst={idx === 0} />
        ))}
      </div>
    )
  }

  return (
    <div ref={isToday ? scrollRef : undefined} style={{ padding: "10px 20px 6px", opacity: isPast ? 0.55 : 1 }}>
      {/* Day label */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "4px 0 10px" }}>
        {isToday && (
          <span style={{ display: "inline-flex", alignItems: "center", height: 22, padding: "0 9px", background: "#00e0c2", color: "#061513", fontFamily: FA, fontWeight: 900, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", borderRadius: 3, boxShadow: "0 0 18px rgba(0,224,194,0.35)", flexShrink: 0 }}>
            OGGI
          </span>
        )}
        <span style={{ fontFamily: FM, fontWeight: 600, fontSize: 11, letterSpacing: "0.22em", color: "#fff", flexShrink: 0 }}>
          {dayCode(date)}
        </span>
        {/* Gradient rule */}
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #222, transparent)" }} />
        {/* Event count */}
        <span style={{ fontFamily: FM, fontSize: 10, color: "#555", letterSpacing: "0.1em", flexShrink: 0 }}>
          {String(events.length).padStart(2, "0")}
        </span>
      </div>

      {/* Card */}
      <div style={{
        background: isToday ? "#161616" : "#131313",
        border: `1px solid ${isToday ? "#232323" : "#1c1c1c"}`,
        borderRadius: 10,
        overflow: "hidden",
        ...(isToday ? {
          boxShadow: "0 0 0 1px rgba(0,224,194,0.18), inset 0 0 30px rgba(0,224,194,0.04), 0 8px 28px -10px rgba(0,224,194,0.12)",
        } : {}),
      }}>
        {events.map((ev, idx) => (
          <EventRow key={ev.id} event={ev} filter={filter} isFirst={idx === 0} isToday={isToday} today={today} />
        ))}
      </div>
    </div>
  )
}

// ─── Floating booking ────────────────────────────────────────────────────────

const PHONE = "+39 393 2320918"

function FloatingBooking() {
  const [open, setOpen] = useState(false)
  const phoneHref = `tel:${PHONE.replace(/\s/g, "")}`
  const waHref = `https://wa.me/${PHONE.replace(/[\s+]/g, "")}`

  return (
    <>
      {/* Invisible backdrop to close on outside tap */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 40 }}
        />
      )}

      <div style={{ position: "fixed", bottom: 24, right: 20, zIndex: 50, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        {/* Action items */}
        {open && (
          <>
            <a
              href={phoneHref}
              onClick={() => setOpen(false)}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#161616", border: "1px solid #2a2a2a", borderRadius: 10, padding: "11px 18px", color: "#fff", textDecoration: "none", fontFamily: FA, fontWeight: 700, fontSize: 13, letterSpacing: "0.04em", boxShadow: "0 4px 24px rgba(0,0,0,0.6)", whiteSpace: "nowrap" }}
            >
              <Phone size={16} />
              Chiama
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#161616", border: "1px solid #2a2a2a", borderRadius: 10, padding: "11px 18px", color: "#25D366", textDecoration: "none", fontFamily: FA, fontWeight: 700, fontSize: 13, letterSpacing: "0.04em", boxShadow: "0 4px 24px rgba(0,0,0,0.6)", whiteSpace: "nowrap" }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </>
        )}

        {/* FAB */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Chiudi" : "Prenota un tavolo"}
          style={{ width: 52, height: 52, borderRadius: "50%", background: "#00e0c2", color: "#061513", border: "none", cursor: "pointer", display: "grid", placeItems: "center", boxShadow: "0 0 24px rgba(0,224,194,0.35)", transition: "transform 0.15s", flexShrink: 0 }}
        >
          {open ? <X size={22} /> : <Phone size={22} />}
        </button>
      </div>
    </>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CalendarioPage() {
  const [filter, setFilter] = useState<FilterId>("all")
  const today = useMemo(getTodayStr, [])
  const yesterday = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() - 1)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
  }, [])
  const scrollRef = useRef<HTMLDivElement>(null)

  // Scroll to today on mount
  useEffect(() => {
    const t = setTimeout(() => scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150)
    return () => clearTimeout(t)
  }, [])

  // Group events by date: solo ieri + oggi + futuro
  const grouped = useMemo(() => {
    const map = new Map<string, Ev[]>()
    for (const ev of CALENDAR_EVENTS) {
      if (ev.date < yesterday) continue
      if (!map.has(ev.date)) map.set(ev.date, [])
      map.get(ev.date)!.push(ev)
    }
    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, evs]) => ({ date, events: [...evs].sort((a, b) => a.time.localeCompare(b.time)) }))
  }, [yesterday])

  // Count events for the current ISO week (for header meta)
  const weekCount = useMemo(() => {
    const now = new Date()
    const dn = now.getDay() === 0 ? 7 : now.getDay()
    const mon = new Date(now)
    mon.setDate(now.getDate() - dn + 1)
    mon.setHours(0, 0, 0, 0)
    const sun = new Date(mon)
    sun.setDate(mon.getDate() + 6)
    const monStr = mon.toISOString().slice(0, 10)
    const sunStr = sun.toISOString().slice(0, 10)
    return CALENDAR_EVENTS.filter(e => e.date >= monStr && e.date <= sunStr).length
  }, [])

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      backgroundImage: "radial-gradient(circle at 20% 10%, rgba(96,165,250,0.05), transparent 40%), radial-gradient(circle at 80% 90%, rgba(74,222,128,0.04), transparent 40%)",
      color: "#fff",
      overflowX: "hidden",
    }}>

      {/* ── Header ── */}
      <div style={{ padding: "14px 20px 6px" }}>
        <div style={{ fontFamily: FA, fontWeight: 600, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#555" }}>
          University · Sassari
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 10 }}>
          <h1 style={{ fontFamily: FA, fontWeight: 900, fontSize: 44, lineHeight: 0.92, letterSpacing: "-0.035em", color: "#fff", margin: 0, flex: 1 }}>
            CALEN<br />DARIO
          </h1>
          <div
            style={{ width: 38, height: 38, border: "1.5px solid #2a2a2a", borderRadius: 8, background: "#111", display: "grid", placeItems: "center", flexShrink: 0 }}
            aria-hidden
          >
            <Calendar size={18} color="#fff" strokeWidth={1.8} />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14, fontFamily: FM, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666" }}>
          <span>{getWeekMeta()}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#888" }}>
            <span
              className="animate-pulse"
              style={{ display: "inline-block", width: 6, height: 6, background: "#4ade80", borderRadius: "50%", boxShadow: "0 0 8px #4ade80" }}
            />
            {weekCount} EVENTI
          </span>
        </div>
      </div>

      {/* ── Filter chips ── */}
      <div style={{ position: "relative" }}>
        <div
          style={{ display: "flex", gap: 8, padding: "18px 20px 14px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
          className="[&::-webkit-scrollbar]:hidden"
        >
          {CHIPS.map(chip => {
            const active = filter === chip.id
            return (
              <button
                key={chip.id}
                onClick={() => setFilter(chip.id)}
                aria-pressed={active}
                style={{
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 36,
                  padding: "0 14px 0 0",
                  background: active ? "#fff" : "#141414",
                  border: `1px solid ${active ? "#fff" : "#1f1f1f"}`,
                  borderRadius: 6,
                  color: active ? "#0a0a0a" : "#cfcfcf",
                  fontFamily: FA,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "background 0.15s, color 0.15s, border-color 0.15s",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Colored left accent bar */}
                <span style={{ width: 4, alignSelf: "stretch", flexShrink: 0, marginRight: 10, background: chip.color ?? (active ? "#0a0a0a" : "#333") }} />
                {chip.glyph && <span aria-hidden style={{ fontSize: 13, lineHeight: 1 }}>{chip.glyph}</span>}
                {chip.label}
              </button>
            )
          })}
        </div>
        {/* Right fade edge */}
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 28, background: "linear-gradient(to left, #0a0a0a, transparent)", pointerEvents: "none" }} />
      </div>

      {/* ── Day groups ── */}
      {grouped.map(({ date, events }) => (
        <DayGroup
          key={date}
          date={date}
          events={events}
          filter={filter}
          today={today}
          scrollRef={date === today ? scrollRef : undefined}
          compact={date === yesterday}
        />
      ))}

      {/* ── Floating booking ── */}
      <FloatingBooking />

      {/* ── Footer ── */}
      <div style={{ padding: "22px 20px 36px", textAlign: "center", fontFamily: FM, fontSize: 9.5, letterSpacing: "0.18em", color: "#444", textTransform: "uppercase" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 10 }}>
          <span style={{ height: 1, width: 30, background: "#1f1f1f", display: "block" }} />
          <span style={{ width: 6, height: 6, background: "#1f1f1f", transform: "rotate(45deg)", display: "block" }} />
          <span style={{ height: 1, width: 30, background: "#1f1f1f", display: "block" }} />
        </div>
        Le partite potrebbero variare
      </div>

    </main>
  )
}
