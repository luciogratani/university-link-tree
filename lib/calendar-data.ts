export type SportCategoryId = "calcio" | "tennis" | "motogp" | "formula1"
export type FilterCategoryId = SportCategoryId | "all"

export type SportEvent = {
  id: string
  date: string        // 'YYYY-MM-DD'
  time: string        // 'HH:MM'
  title: string
  category: SportCategoryId
  competition?: string
  channel?: string
}

export const SPORT_CATEGORIES: { id: FilterCategoryId; label: string; emoji: string }[] = [
  { id: "all",      label: "Tutti",     emoji: "🏆" },
  { id: "calcio",   label: "Calcio",    emoji: "⚽" },
  { id: "tennis",   label: "Tennis",    emoji: "🎾" },
  { id: "motogp",   label: "MotoGP",    emoji: "🏍️" },
  { id: "formula1", label: "Formula 1", emoji: "🏎️" },
]

// ============================================================
// EVENTI – aggiornare con i dati reali dai PDF del calendario
// ============================================================
export const CALENDAR_EVENTS: SportEvent[] = [
  // ── 2026-05-14 ──
  { id: "e1", date: "2026-05-14", time: "21:00", title: "Real Madrid – Arsenal", category: "calcio", competition: "Champions League – Semifinale", channel: "Sky Sport" },

  // ── 2026-05-15 ──
  { id: "e2", date: "2026-05-15", time: "13:00", title: "GP di Francia – Gara", category: "motogp", competition: "MotoGP World Championship", channel: "Sky Sport MotoGP" },
  { id: "e3", date: "2026-05-15", time: "15:00", title: "GP d'Austria – Gara", category: "formula1", competition: "Formula 1 World Championship", channel: "Sky Sport F1" },

  // ── 2026-05-17 ──
  { id: "e4", date: "2026-05-17", time: "15:00", title: "Milan – Lazio", category: "calcio", competition: "Serie A – 36ª Giornata", channel: "DAZN" },
  { id: "e5", date: "2026-05-17", time: "18:00", title: "Juventus – Roma", category: "calcio", competition: "Serie A – 36ª Giornata", channel: "DAZN" },
  { id: "e6", date: "2026-05-17", time: "20:45", title: "Inter – Napoli", category: "calcio", competition: "Serie A – 36ª Giornata", channel: "DAZN" },

  // ── 2026-05-20 ──
  { id: "e7", date: "2026-05-20", time: "21:00", title: "PSG – Manchester City", category: "calcio", competition: "Champions League – Semifinale Ritorno", channel: "Sky Sport" },

  // ── 2026-05-21 ──
  { id: "e8",  date: "2026-05-21", time: "21:00", title: "Real Madrid – Arsenal", category: "calcio", competition: "Champions League – Semifinale Ritorno", channel: "Sky Sport" },
  { id: "e9",  date: "2026-05-21", time: "11:00", title: "Roland Garros – 1° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-05-22 ──
  { id: "e10", date: "2026-05-22", time: "14:00", title: "GP Monaco – Qualifiche", category: "formula1", competition: "Formula 1 World Championship", channel: "Sky Sport F1" },
  { id: "e11", date: "2026-05-22", time: "11:00", title: "Roland Garros – 1° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-05-23 ──
  { id: "e12", date: "2026-05-23", time: "15:00", title: "GP Monaco – Gara", category: "formula1", competition: "Formula 1 World Championship", channel: "Sky Sport F1" },
  { id: "e13", date: "2026-05-23", time: "11:00", title: "Roland Garros – 2° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e14", date: "2026-05-23", time: "15:00", title: "Atalanta – Fiorentina", category: "calcio", competition: "Serie A – 37ª Giornata", channel: "DAZN" },

  // ── 2026-05-24 ──
  { id: "e15", date: "2026-05-24", time: "11:00", title: "Roland Garros – 2° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e16", date: "2026-05-24", time: "15:00", title: "Napoli – Inter", category: "calcio", competition: "Serie A – 37ª Giornata", channel: "DAZN" },
  { id: "e17", date: "2026-05-24", time: "18:00", title: "Juventus – Milan", category: "calcio", competition: "Serie A – 37ª Giornata", channel: "DAZN" },

  // ── 2026-05-25 (OGGI) ──
  { id: "e18", date: "2026-05-25", time: "11:00", title: "Roland Garros – 3° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e19", date: "2026-05-25", time: "15:00", title: "Roland Garros – 3° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e20", date: "2026-05-25", time: "20:45", title: "Lazio – Roma", category: "calcio", competition: "Serie A – 38ª Giornata", channel: "DAZN" },

  // ── 2026-05-26 ──
  { id: "e21", date: "2026-05-26", time: "11:00", title: "Roland Garros – 3° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e22", date: "2026-05-26", time: "15:00", title: "Roland Garros – 3° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e23", date: "2026-05-26", time: "20:45", title: "Inter – Milan", category: "calcio", competition: "Serie A – 38ª Giornata", channel: "DAZN" },

  // ── 2026-05-27 ──
  { id: "e24", date: "2026-05-27", time: "11:00", title: "Roland Garros – Ottavi", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-05-28 ──
  { id: "e25", date: "2026-05-28", time: "11:00", title: "Roland Garros – Ottavi", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e26", date: "2026-05-28", time: "13:00", title: "GP d'Italia (Mugello) – Sprint", category: "motogp", competition: "MotoGP World Championship", channel: "Sky Sport MotoGP" },

  // ── 2026-05-29 ──
  { id: "e27", date: "2026-05-29", time: "11:00", title: "Roland Garros – Ottavi", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e28", date: "2026-05-29", time: "13:00", title: "GP d'Italia (Mugello) – Gara", category: "motogp", competition: "MotoGP World Championship", channel: "Sky Sport MotoGP" },

  // ── 2026-05-31 ──
  { id: "e29", date: "2026-05-31", time: "14:00", title: "Roland Garros – Quarti", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e30", date: "2026-05-31", time: "21:00", title: "Finale Champions League", category: "calcio", competition: "UEFA Champions League", channel: "Sky Sport / TV8" },

  // ── 2026-06-01 ──
  { id: "e31", date: "2026-06-01", time: "14:00", title: "Roland Garros – Quarti", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e32", date: "2026-06-01", time: "22:00", title: "GP Canada – Qualifiche", category: "formula1", competition: "Formula 1 World Championship", channel: "Sky Sport F1" },

  // ── 2026-06-04 ──
  { id: "e33", date: "2026-06-04", time: "14:00", title: "Roland Garros – Semifinali", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-06-05 ──
  { id: "e34", date: "2026-06-05", time: "14:00", title: "Roland Garros – Semifinali", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e35", date: "2026-06-05", time: "21:00", title: "GP Canada – Gara", category: "formula1", competition: "Formula 1 World Championship", channel: "Sky Sport F1" },

  // ── 2026-06-07 ──
  { id: "e36", date: "2026-06-07", time: "15:00", title: "Roland Garros – Finale Femminile", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-06-08 ──
  { id: "e37", date: "2026-06-08", time: "15:00", title: "Roland Garros – Finale Maschile", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
]
