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

export const CALENDAR_EVENTS: SportEvent[] = [
  // ── 2026-05-14 ──
  { id: "e1", date: "2026-05-14", time: "21:00", title: "Real Madrid – Arsenal", category: "calcio", competition: "Champions League – Semifinale", channel: "Sky Sport" },

  // ── 2026-05-17 ──
  { id: "e2", date: "2026-05-17", time: "15:00", title: "Milan – Lazio", category: "calcio", competition: "Serie A – 36ª Giornata", channel: "DAZN" },
  { id: "e3", date: "2026-05-17", time: "18:00", title: "Juventus – Roma", category: "calcio", competition: "Serie A – 36ª Giornata", channel: "DAZN" },
  { id: "e4", date: "2026-05-17", time: "20:45", title: "Inter – Napoli", category: "calcio", competition: "Serie A – 36ª Giornata", channel: "DAZN" },

  // ── 2026-05-20 ──
  { id: "e5", date: "2026-05-20", time: "21:00", title: "PSG – Manchester City", category: "calcio", competition: "Champions League – Semifinale Ritorno", channel: "Sky Sport" },

  // ── 2026-05-21 ──
  { id: "e6",  date: "2026-05-21", time: "11:00", title: "Roland Garros – 1° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e7",  date: "2026-05-21", time: "21:00", title: "Real Madrid – Arsenal", category: "calcio", competition: "Champions League – Semifinale Ritorno", channel: "Sky Sport" },

  // ── 2026-05-22 ──
  { id: "e8", date: "2026-05-22", time: "11:00", title: "Roland Garros – 1° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-05-23 ──
  { id: "e9",  date: "2026-05-23", time: "11:00", title: "Roland Garros – 2° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e10", date: "2026-05-23", time: "15:00", title: "Atalanta – Fiorentina", category: "calcio", competition: "Serie A – 37ª Giornata", channel: "DAZN" },

  // ── 2026-05-24 ──
  { id: "e11", date: "2026-05-24", time: "11:00", title: "Roland Garros – 2° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e12", date: "2026-05-24", time: "15:00", title: "Napoli – Inter", category: "calcio", competition: "Serie A – 37ª Giornata", channel: "DAZN" },
  { id: "e13", date: "2026-05-24", time: "18:00", title: "Juventus – Milan", category: "calcio", competition: "Serie A – 37ª Giornata", channel: "DAZN" },

  // ── 2026-05-25 ──
  { id: "e14", date: "2026-05-25", time: "11:00", title: "Roland Garros – 3° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e15", date: "2026-05-25", time: "15:00", title: "Roland Garros – 3° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e16", date: "2026-05-25", time: "20:45", title: "Lazio – Roma", category: "calcio", competition: "Serie A – 38ª Giornata", channel: "DAZN" },

  // ── 2026-05-26 ──
  { id: "e17", date: "2026-05-26", time: "11:00", title: "Roland Garros – 3° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e18", date: "2026-05-26", time: "15:00", title: "Roland Garros – 3° Turno", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e19", date: "2026-05-26", time: "20:45", title: "Inter – Milan", category: "calcio", competition: "Serie A – 38ª Giornata", channel: "DAZN" },

  // ── 2026-05-27 ──
  { id: "e20", date: "2026-05-27", time: "11:00", title: "Roland Garros – Ottavi", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-05-28 ──
  { id: "e21", date: "2026-05-28", time: "11:00", title: "Roland Garros – Ottavi", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-05-29 ──
  { id: "e22", date: "2026-05-29", time: "11:00", title: "Roland Garros – Ottavi", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-05-31 ──
  { id: "e23", date: "2026-05-31", time: "14:00", title: "GP d'Italia – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky e TV8" },
  { id: "e24", date: "2026-05-31", time: "14:00", title: "Roland Garros – Quarti", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },
  { id: "e25", date: "2026-05-31", time: "21:00", title: "Finale Champions League", category: "calcio", competition: "UEFA Champions League", channel: "Sky Sport / TV8" },

  // ── 2026-06-01 ──
  { id: "e26", date: "2026-06-01", time: "14:00", title: "Roland Garros – Quarti", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-06-04 ──
  { id: "e27", date: "2026-06-04", time: "14:00", title: "Roland Garros – Semifinali", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-06-05 ──
  { id: "e28", date: "2026-06-05", time: "14:00", title: "Roland Garros – Semifinali", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-06-07 ──
  { id: "e29", date: "2026-06-07", time: "14:00", title: "GP d'Ungheria – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },
  { id: "e30", date: "2026-06-07", time: "15:00", title: "GP di Monaco – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },
  { id: "e31", date: "2026-06-07", time: "15:00", title: "Roland Garros – Finale Femminile", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-06-08 ──
  { id: "e32", date: "2026-06-08", time: "15:00", title: "Roland Garros – Finale Maschile", category: "tennis", competition: "Roland Garros 2026", channel: "Eurosport" },

  // ── 2026-06-11 ──
  { id: "e33", date: "2026-06-11", time: "21:00", title: "Messico – Sudafrica", category: "calcio", competition: "Mondiale 2026 – Gruppo A" },

  // ── 2026-06-12 ──
  { id: "e34", date: "2026-06-12", time: "04:00", title: "Corea del Sud – Repubblica Ceca", category: "calcio", competition: "Mondiale 2026 – Gruppo A" },
  { id: "e35", date: "2026-06-12", time: "21:00", title: "Canada – Bosnia ed Erzegovina", category: "calcio", competition: "Mondiale 2026 – Gruppo B" },

  // ── 2026-06-13 ──
  { id: "e36", date: "2026-06-13", time: "03:00", title: "Stati Uniti – Paraguay", category: "calcio", competition: "Mondiale 2026 – Gruppo D" },
  { id: "e37", date: "2026-06-13", time: "21:00", title: "Qatar – Svizzera", category: "calcio", competition: "Mondiale 2026 – Gruppo B" },

  // ── 2026-06-14 ──
  { id: "e38", date: "2026-06-14", time: "00:00", title: "Brasile – Marocco", category: "calcio", competition: "Mondiale 2026 – Gruppo C" },
  { id: "e39", date: "2026-06-14", time: "03:00", title: "Haiti – Scozia", category: "calcio", competition: "Mondiale 2026 – Gruppo C" },
  { id: "e40", date: "2026-06-14", time: "06:00", title: "Australia – Turchia", category: "calcio", competition: "Mondiale 2026 – Gruppo D" },
  { id: "e41", date: "2026-06-14", time: "15:00", title: "GP di Spagna – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },
  { id: "e42", date: "2026-06-14", time: "19:00", title: "Germania – Curaçao", category: "calcio", competition: "Mondiale 2026 – Gruppo E" },
  { id: "e43", date: "2026-06-14", time: "22:00", title: "Olanda – Giappone", category: "calcio", competition: "Mondiale 2026 – Gruppo F" },

  // ── 2026-06-15 ──
  { id: "e44", date: "2026-06-15", time: "01:00", title: "Costa d'Avorio – Ecuador", category: "calcio", competition: "Mondiale 2026 – Gruppo E" },
  { id: "e45", date: "2026-06-15", time: "04:00", title: "Svezia – Tunisia", category: "calcio", competition: "Mondiale 2026 – Gruppo F" },
  { id: "e46", date: "2026-06-15", time: "18:00", title: "Spagna – Capo Verde", category: "calcio", competition: "Mondiale 2026 – Gruppo H" },
  { id: "e47", date: "2026-06-15", time: "21:00", title: "Belgio – Egitto", category: "calcio", competition: "Mondiale 2026 – Gruppo G" },

  // ── 2026-06-16 ──
  { id: "e48", date: "2026-06-16", time: "00:00", title: "Arabia Saudita – Uruguay", category: "calcio", competition: "Mondiale 2026 – Gruppo H" },
  { id: "e49", date: "2026-06-16", time: "03:00", title: "Iran – Nuova Zelanda", category: "calcio", competition: "Mondiale 2026 – Gruppo G" },
  { id: "e50", date: "2026-06-16", time: "21:00", title: "Francia – Senegal", category: "calcio", competition: "Mondiale 2026 – Gruppo I" },

  // ── 2026-06-17 ──
  { id: "e51", date: "2026-06-17", time: "00:00", title: "Iraq – Norvegia", category: "calcio", competition: "Mondiale 2026 – Gruppo I" },
  { id: "e52", date: "2026-06-17", time: "03:00", title: "Argentina – Algeria", category: "calcio", competition: "Mondiale 2026 – Gruppo J" },
  { id: "e53", date: "2026-06-17", time: "06:00", title: "Austria – Giordania", category: "calcio", competition: "Mondiale 2026 – Gruppo J" },
  { id: "e54", date: "2026-06-17", time: "19:00", title: "Portogallo – Rep. Dem. Congo", category: "calcio", competition: "Mondiale 2026 – Gruppo K" },
  { id: "e55", date: "2026-06-17", time: "22:00", title: "Inghilterra – Croazia", category: "calcio", competition: "Mondiale 2026 – Gruppo L" },

  // ── 2026-06-18 ──
  { id: "e56", date: "2026-06-18", time: "01:00", title: "Ghana – Panama", category: "calcio", competition: "Mondiale 2026 – Gruppo L" },
  { id: "e57", date: "2026-06-18", time: "04:00", title: "Uzbekistan – Colombia", category: "calcio", competition: "Mondiale 2026 – Gruppo K" },
  { id: "e58", date: "2026-06-18", time: "18:00", title: "Repubblica Ceca – Sudafrica", category: "calcio", competition: "Mondiale 2026 – Gruppo A" },
  { id: "e59", date: "2026-06-18", time: "21:00", title: "Svizzera – Bosnia ed Erzegovina", category: "calcio", competition: "Mondiale 2026 – Gruppo B" },

  // ── 2026-06-19 ──
  { id: "e60", date: "2026-06-19", time: "00:00", title: "Canada – Qatar", category: "calcio", competition: "Mondiale 2026 – Gruppo B" },
  { id: "e61", date: "2026-06-19", time: "03:00", title: "Messico – Corea del Sud", category: "calcio", competition: "Mondiale 2026 – Gruppo A" },
  { id: "e62", date: "2026-06-19", time: "21:00", title: "Stati Uniti – Australia", category: "calcio", competition: "Mondiale 2026 – Gruppo D" },

  // ── 2026-06-20 ──
  { id: "e63", date: "2026-06-20", time: "00:00", title: "Scozia – Marocco", category: "calcio", competition: "Mondiale 2026 – Gruppo C" },
  { id: "e64", date: "2026-06-20", time: "02:30", title: "Brasile – Haiti", category: "calcio", competition: "Mondiale 2026 – Gruppo C" },
  { id: "e65", date: "2026-06-20", time: "05:00", title: "Turchia – Paraguay", category: "calcio", competition: "Mondiale 2026 – Gruppo D" },
  { id: "e66", date: "2026-06-20", time: "19:00", title: "Olanda – Svezia", category: "calcio", competition: "Mondiale 2026 – Gruppo F" },
  { id: "e67", date: "2026-06-20", time: "22:00", title: "Germania – Costa d'Avorio", category: "calcio", competition: "Mondiale 2026 – Gruppo E" },

  // ── 2026-06-21 ──
  { id: "e68", date: "2026-06-21", time: "02:00", title: "Ecuador – Curaçao", category: "calcio", competition: "Mondiale 2026 – Gruppo E" },
  { id: "e69", date: "2026-06-21", time: "06:00", title: "Tunisia – Giappone", category: "calcio", competition: "Mondiale 2026 – Gruppo F" },
  { id: "e70", date: "2026-06-21", time: "14:00", title: "GP di Repubblica Ceca – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },
  { id: "e71", date: "2026-06-21", time: "18:00", title: "Spagna – Arabia Saudita", category: "calcio", competition: "Mondiale 2026 – Gruppo H" },
  { id: "e72", date: "2026-06-21", time: "21:00", title: "Belgio – Iran", category: "calcio", competition: "Mondiale 2026 – Gruppo G" },

  // ── 2026-06-22 ──
  { id: "e73", date: "2026-06-22", time: "00:00", title: "Uruguay – Capo Verde", category: "calcio", competition: "Mondiale 2026 – Gruppo H" },
  { id: "e74", date: "2026-06-22", time: "03:00", title: "Nuova Zelanda – Egitto", category: "calcio", competition: "Mondiale 2026 – Gruppo G" },
  { id: "e75", date: "2026-06-22", time: "19:00", title: "Argentina – Austria", category: "calcio", competition: "Mondiale 2026 – Gruppo J" },
  { id: "e76", date: "2026-06-22", time: "23:00", title: "Francia – Iraq", category: "calcio", competition: "Mondiale 2026 – Gruppo I" },

  // ── 2026-06-23 ──
  { id: "e77", date: "2026-06-23", time: "02:00", title: "Norvegia – Senegal", category: "calcio", competition: "Mondiale 2026 – Gruppo I" },
  { id: "e78", date: "2026-06-23", time: "05:00", title: "Giordania – Algeria", category: "calcio", competition: "Mondiale 2026 – Gruppo J" },
  { id: "e79", date: "2026-06-23", time: "19:00", title: "Portogallo – Uzbekistan", category: "calcio", competition: "Mondiale 2026 – Gruppo K" },
  { id: "e80", date: "2026-06-23", time: "22:00", title: "Inghilterra – Ghana", category: "calcio", competition: "Mondiale 2026 – Gruppo L" },

  // ── 2026-06-24 ──
  { id: "e81", date: "2026-06-24", time: "01:00", title: "Panama – Croazia", category: "calcio", competition: "Mondiale 2026 – Gruppo L" },
  { id: "e82", date: "2026-06-24", time: "04:00", title: "Colombia – Rep. Dem. Congo", category: "calcio", competition: "Mondiale 2026 – Gruppo K" },
  { id: "e83", date: "2026-06-24", time: "21:00", title: "Svizzera – Canada", category: "calcio", competition: "Mondiale 2026 – Gruppo B" },
  { id: "e84", date: "2026-06-24", time: "21:00", title: "Bosnia ed Erzegovina – Qatar", category: "calcio", competition: "Mondiale 2026 – Gruppo B" },

  // ── 2026-06-25 ──
  { id: "e85", date: "2026-06-25", time: "00:00", title: "Marocco – Haiti", category: "calcio", competition: "Mondiale 2026 – Gruppo C" },
  { id: "e86", date: "2026-06-25", time: "00:00", title: "Scozia – Brasile", category: "calcio", competition: "Mondiale 2026 – Gruppo C" },
  { id: "e87", date: "2026-06-25", time: "03:00", title: "Sudafrica – Corea del Sud", category: "calcio", competition: "Mondiale 2026 – Gruppo A" },
  { id: "e88", date: "2026-06-25", time: "03:00", title: "Repubblica Ceca – Messico", category: "calcio", competition: "Mondiale 2026 – Gruppo A" },
  { id: "e89", date: "2026-06-25", time: "22:00", title: "Curaçao – Costa d'Avorio", category: "calcio", competition: "Mondiale 2026 – Gruppo E" },
  { id: "e90", date: "2026-06-25", time: "22:00", title: "Ecuador – Germania", category: "calcio", competition: "Mondiale 2026 – Gruppo E" },

  // ── 2026-06-26 ──
  { id: "e91", date: "2026-06-26", time: "01:00", title: "Tunisia – Olanda", category: "calcio", competition: "Mondiale 2026 – Gruppo F" },
  { id: "e92", date: "2026-06-26", time: "01:00", title: "Giappone – Svezia", category: "calcio", competition: "Mondiale 2026 – Gruppo F" },
  { id: "e93", date: "2026-06-26", time: "04:00", title: "Turchia – Stati Uniti", category: "calcio", competition: "Mondiale 2026 – Gruppo D" },
  { id: "e94", date: "2026-06-26", time: "04:00", title: "Paraguay – Australia", category: "calcio", competition: "Mondiale 2026 – Gruppo D" },
  { id: "e95", date: "2026-06-26", time: "21:00", title: "Norvegia – Francia", category: "calcio", competition: "Mondiale 2026 – Gruppo I" },
  { id: "e96", date: "2026-06-26", time: "21:00", title: "Senegal – Iraq", category: "calcio", competition: "Mondiale 2026 – Gruppo I" },

  // ── 2026-06-27 ──
  { id: "e97",  date: "2026-06-27", time: "02:00", title: "Capo Verde – Arabia Saudita", category: "calcio", competition: "Mondiale 2026 – Gruppo H" },
  { id: "e98",  date: "2026-06-27", time: "02:00", title: "Uruguay – Spagna", category: "calcio", competition: "Mondiale 2026 – Gruppo H" },
  { id: "e99",  date: "2026-06-27", time: "05:00", title: "Nuova Zelanda – Belgio", category: "calcio", competition: "Mondiale 2026 – Gruppo G" },
  { id: "e100", date: "2026-06-27", time: "05:00", title: "Egitto – Iran", category: "calcio", competition: "Mondiale 2026 – Gruppo G" },
  { id: "e101", date: "2026-06-27", time: "23:00", title: "Panama – Inghilterra", category: "calcio", competition: "Mondiale 2026 – Gruppo L" },
  { id: "e102", date: "2026-06-27", time: "23:00", title: "Croazia – Ghana", category: "calcio", competition: "Mondiale 2026 – Gruppo L" },

  // ── 2026-06-28 ──
  { id: "e103", date: "2026-06-28", time: "01:30", title: "Colombia – Portogallo", category: "calcio", competition: "Mondiale 2026 – Gruppo K" },
  { id: "e104", date: "2026-06-28", time: "01:30", title: "Rep. Dem. Congo – Uzbekistan", category: "calcio", competition: "Mondiale 2026 – Gruppo K" },
  { id: "e105", date: "2026-06-28", time: "04:00", title: "Algeria – Austria", category: "calcio", competition: "Mondiale 2026 – Gruppo J" },
  { id: "e106", date: "2026-06-28", time: "04:00", title: "Giordania – Argentina", category: "calcio", competition: "Mondiale 2026 – Gruppo J" },
  { id: "e107", date: "2026-06-28", time: "14:00", title: "GP d'Olanda – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },
  { id: "e108", date: "2026-06-28", time: "15:00", title: "GP d'Austria – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },
  { id: "e109", date: "2026-06-28", time: "21:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },

  // ── 2026-06-29 ──
  { id: "e110", date: "2026-06-29", time: "19:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e111", date: "2026-06-29", time: "22:30", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },

  // ── 2026-06-30 ──
  { id: "e112", date: "2026-06-30", time: "03:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e113", date: "2026-06-30", time: "19:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e114", date: "2026-06-30", time: "23:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },

  // ── 2026-07-01 ──
  { id: "e115", date: "2026-07-01", time: "03:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e116", date: "2026-07-01", time: "18:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e117", date: "2026-07-01", time: "22:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },

  // ── 2026-07-02 ──
  { id: "e118", date: "2026-07-02", time: "02:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e119", date: "2026-07-02", time: "21:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },

  // ── 2026-07-03 ──
  { id: "e120", date: "2026-07-03", time: "01:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e121", date: "2026-07-03", time: "05:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e122", date: "2026-07-03", time: "20:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },

  // ── 2026-07-04 ──
  { id: "e123", date: "2026-07-04", time: "00:00", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e124", date: "2026-07-04", time: "03:30", title: "Sedicesimi di finale", category: "calcio", competition: "Mondiale 2026 – Sedicesimi di finale" },
  { id: "e125", date: "2026-07-04", time: "19:00", title: "Ottavi di finale", category: "calcio", competition: "Mondiale 2026 – Ottavi di finale" },
  { id: "e126", date: "2026-07-04", time: "23:00", title: "Ottavi di finale", category: "calcio", competition: "Mondiale 2026 – Ottavi di finale" },

  // ── 2026-07-05 ──
  { id: "e127", date: "2026-07-05", time: "16:00", title: "GP di Gran Bretagna – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },
  { id: "e128", date: "2026-07-05", time: "22:00", title: "Ottavi di finale", category: "calcio", competition: "Mondiale 2026 – Ottavi di finale" },

  // ── 2026-07-06 ──
  { id: "e129", date: "2026-07-06", time: "02:00", title: "Ottavi di finale", category: "calcio", competition: "Mondiale 2026 – Ottavi di finale" },
  { id: "e130", date: "2026-07-06", time: "21:00", title: "Ottavi di finale", category: "calcio", competition: "Mondiale 2026 – Ottavi di finale" },

  // ── 2026-07-07 ──
  { id: "e131", date: "2026-07-07", time: "02:00", title: "Ottavi di finale", category: "calcio", competition: "Mondiale 2026 – Ottavi di finale" },
  { id: "e132", date: "2026-07-07", time: "18:00", title: "Ottavi di finale", category: "calcio", competition: "Mondiale 2026 – Ottavi di finale" },
  { id: "e133", date: "2026-07-07", time: "22:00", title: "Ottavi di finale", category: "calcio", competition: "Mondiale 2026 – Ottavi di finale" },

  // ── 2026-07-09 ──
  { id: "e134", date: "2026-07-09", time: "22:00", title: "Quarti di finale", category: "calcio", competition: "Mondiale 2026 – Quarti di finale" },

  // ── 2026-07-10 ──
  { id: "e135", date: "2026-07-10", time: "21:00", title: "Quarti di finale", category: "calcio", competition: "Mondiale 2026 – Quarti di finale" },

  // ── 2026-07-11 ──
  { id: "e136", date: "2026-07-11", time: "23:00", title: "Quarti di finale", category: "calcio", competition: "Mondiale 2026 – Quarti di finale" },

  // ── 2026-07-12 ──
  { id: "e137", date: "2026-07-12", time: "03:00", title: "Quarti di finale", category: "calcio", competition: "Mondiale 2026 – Quarti di finale" },
  { id: "e138", date: "2026-07-12", time: "14:00", title: "GP di Germania – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky e TV8" },

  // ── 2026-07-14 ──
  { id: "e139", date: "2026-07-14", time: "21:00", title: "Semifinale", category: "calcio", competition: "Mondiale 2026 – Semifinali" },

  // ── 2026-07-15 ──
  { id: "e140", date: "2026-07-15", time: "21:00", title: "Semifinale", category: "calcio", competition: "Mondiale 2026 – Semifinali" },

  // ── 2026-07-18 ──
  { id: "e141", date: "2026-07-18", time: "23:00", title: "Finale 3° posto", category: "calcio", competition: "Mondiale 2026 – Finale terzo posto" },

  // ── 2026-07-19 ──
  { id: "e142", date: "2026-07-19", time: "15:00", title: "GP del Belgio – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },
  { id: "e143", date: "2026-07-19", time: "21:00", title: "Finale Mondiale", category: "calcio", competition: "Mondiale 2026 – Finale" },

  // ── 2026-07-26 ──
  { id: "e144", date: "2026-07-26", time: "15:00", title: "GP d'Ungheria – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-08-09 ──
  { id: "e145", date: "2026-08-09", time: "14:00", title: "GP di Gran Bretagna – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },

  // ── 2026-08-23 ──
  { id: "e146", date: "2026-08-23", time: "15:00", title: "GP d'Olanda – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-08-30 ──
  { id: "e147", date: "2026-08-30", time: "14:00", title: "GP di Aragon – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },

  // ── 2026-09-06 ──
  { id: "e148", date: "2026-09-06", time: "15:00", title: "GP d'Italia – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky, TV8" },

  // ── 2026-09-13 ──
  { id: "e149", date: "2026-09-13", time: "14:00", title: "GP di San Marino – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky e TV8" },
  { id: "e150", date: "2026-09-13", time: "15:00", title: "GP di Madrid – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-09-20 ──
  { id: "e151", date: "2026-09-20", time: "14:00", title: "GP d'Austria – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },

  // ── 2026-09-27 ──
  { id: "e152", date: "2026-09-27", time: "13:00", title: "GP dell'Azerbaijan – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-10-04 ──
  { id: "e153", date: "2026-10-04", time: "07:00", title: "GP del Giappone – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },

  // ── 2026-10-11 ──
  { id: "e154", date: "2026-10-11", time: "09:00", title: "GP d'Indonesia – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },
  { id: "e155", date: "2026-10-11", time: "14:00", title: "GP di Singapore – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-10-25 ──
  { id: "e156", date: "2026-10-25", time: "05:00", title: "GP d'Australia – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },
  { id: "e157", date: "2026-10-25", time: "21:00", title: "GP degli Stati Uniti – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-11-01 ──
  { id: "e158", date: "2026-11-01", time: "08:00", title: "GP della Malesia – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },
  { id: "e159", date: "2026-11-01", time: "21:00", title: "GP del Messico – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-11-08 ──
  { id: "e160", date: "2026-11-08", time: "18:00", title: "GP del Brasile – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },
  { id: "e161", date: "2026-11-08", time: "19:00", title: "GP del Qatar – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },

  // ── 2026-11-21 ──
  { id: "e162", date: "2026-11-21", time: "05:00", title: "GP di Las Vegas – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-11-22 ──
  { id: "e163", date: "2026-11-22", time: "14:00", title: "GP del Portogallo – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky e TV8" },

  // ── 2026-11-29 ──
  { id: "e164", date: "2026-11-29", time: "14:00", title: "GP di Valencia – Gara", category: "motogp", competition: "MotoGP 2026", channel: "Sky" },
  { id: "e165", date: "2026-11-29", time: "17:00", title: "GP del Qatar – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },

  // ── 2026-12-06 ──
  { id: "e166", date: "2026-12-06", time: "14:00", title: "GP di Abu Dhabi – Gara", category: "formula1", competition: "Formula 1 2026", channel: "Sky" },
]
