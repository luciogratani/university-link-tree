"use client"

import React, { useState } from "react"
import { X } from "lucide-react"

// ─── Font shorthands (coerenti con CalendarioClient) ─────────────────────────
const FA = "var(--font-archivo, Archivo, sans-serif)"
const FM = "var(--font-mono-cal, 'JetBrains Mono', monospace)"

// ─── CalendarPopup ───────────────────────────────────────────────────────────
// Si mostra a OGNI visita della pagina (nessun localStorage / cookie).
export default function CalendarPopup() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendar-popup-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "grid",
        placeItems: "center",
        padding: 20,
        background: "rgba(5,5,5,0.72)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 380,
          background: "#131313",
          border: "1px solid #232323",
          borderRadius: 14,
          padding: "28px 22px 24px",
          boxShadow:
            "0 0 0 1px rgba(0,224,194,0.18), inset 0 0 40px rgba(0,224,194,0.04), 0 24px 60px -20px rgba(0,0,0,0.8)",
        }}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Chiudi"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 32,
            height: 32,
            display: "grid",
            placeItems: "center",
            background: "#1a1a1a",
            border: "1px solid #2a2a2a",
            borderRadius: 8,
            color: "#888",
            cursor: "pointer",
          }}
        >
          <X size={16} />
        </button>

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: FA,
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#00e0c2",
          }}
        >
          University · Sassari
        </div>

        {/* Titolo */}
        <h2
          id="calendar-popup-title"
          style={{
            fontFamily: FA,
            fontWeight: 900,
            fontSize: 28,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "12px 0 0",
          }}
        >
          Orari Mondiali
        </h2>

        {/* Paragrafo */}
        <p
          style={{
            fontFamily: FA,
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 1.5,
            color: "#aaa",
            margin: "12px 0 0",
          }}
        >
          Durante i Mondiali restiamo aperti più a lungo nelle sere di partita.
        </p>

        {/* Box orari */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: 18,
            background: "#1f1f1f",
            border: "1px solid #232323",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {/* Di base */}
          <div style={{ background: "#161616", padding: "12px 14px" }}>
            <div
              style={{
                fontFamily: FA,
                fontWeight: 700,
                fontSize: 9.5,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#666",
              }}
            >
              Di base
            </div>
            <div
              style={{
                fontFamily: FA,
                fontWeight: 600,
                fontSize: 13.5,
                color: "#ddd",
                marginTop: 5,
              }}
            >
              Chiusura{" "}
              <span style={{ fontFamily: FM, fontWeight: 700, color: "#fff" }}>2:00</span>{" "}
              in settimana ·{" "}
              <span style={{ fontFamily: FM, fontWeight: 700, color: "#fff" }}>4:00</span>{" "}
              venerdì e sabato
            </div>
            <div
              style={{
                fontFamily: FA,
                fontWeight: 500,
                fontSize: 12,
                color: "#888",
                marginTop: 6,
              }}
            >
              Anche il ristorante segue gli stessi orari.
            </div>
          </div>

          {/* Sere di partita */}
          <div style={{ background: "#161616", padding: "12px 14px" }}>
            <div
              style={{
                fontFamily: FA,
                fontWeight: 700,
                fontSize: 9.5,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00e0c2",
              }}
            >
              Sere di partita
            </div>
            <div
              style={{
                fontFamily: FA,
                fontWeight: 600,
                fontSize: 13.5,
                color: "#ddd",
                marginTop: 5,
              }}
            >
              Aperti fino alla fine del match, massimo le{" "}
              <span style={{ fontFamily: FM, fontWeight: 700, color: "#00e0c2" }}>6:00</span>
            </div>
          </div>
        </div>

        {/* Nota */}
        <p
          style={{
            fontFamily: FA,
            fontWeight: 500,
            fontSize: 12.5,
            lineHeight: 1.45,
            color: "#777",
            margin: "14px 0 0",
          }}
        >
          Nessuna partita in calendario? Valgono gli orari di base.
        </p>
      </div>
    </div>
  )
}
