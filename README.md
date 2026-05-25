# University Restaurant · Pool · Bar — Sassari

Sito mobile-first per il locale University (Via Duca degli Abruzzi 23/B, Sassari).
Funziona come link-tree: menù, mappa, contatti e calendario partite TV.

---

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript 5.7**
- **Tailwind CSS** + **shadcn/ui** (Radix UI) — solo nella home
- **next-themes** — toggle chiaro/scuro (solo home)
- **lucide-react** — icone
- **next/font/google** — Archivo + JetBrains Mono (solo `/calendario`)
- **pnpm** come package manager

```bash
pnpm dev      # dev server su http://localhost:3000
pnpm build
pnpm lint
```

---

## Struttura

```
app/
  layout.tsx                  # root layout, ThemeProvider
  globals.css                 # CSS globale + variabili shadcn
  page.tsx                    # HOME — link-tree (menù, maps, contatti)
  not-found.tsx               # pagina 404
  robots.ts / sitemap.ts
  calendario/
    layout.tsx                # carica font Archivo + JetBrains Mono
    page.tsx                  # CALENDARIO — partite in TV ("use client")
  design_handoff_calendario/
    README.md                 # specifiche di design (token, tipografia, componenti)
    Calendario.html           # prototipo HTML statico di riferimento visivo

lib/
  menu-data.ts                # dati statici del menù (sezioni, voci, prezzi, avvisi)
  calendar-data.ts            # dati statici eventi sportivi (166 eventi)
  utils.ts                    # cn() helper shadcn

components/
  theme-provider.tsx
  ui/                         # componenti shadcn generati (non toccare a mano)
```

---

## Dove modificare i dati

### Menù → `lib/menu-data.ts`
Esporta `MENU_SECTIONS`, `MENU_NOTICES`, `MENU_FOOTER_TEXT`.
Ogni voce ha `{ name, description?, price, frozen? }`.
Il flag `frozen: true` mostra l'icona ❄️ con link alla legenda allergeni.

### Calendario → `lib/calendar-data.ts`
Esporta `CALENDAR_EVENTS` (array) e i tipi `SportCategoryId`, `SportEvent`.
Shape evento:
```ts
{ id, date: "YYYY-MM-DD", time: "HH:MM", title, category, competition?, channel? }
```
Categorie: `"calcio" | "tennis" | "motogp" | "formula1"`.

### Contatti / orari → `app/page.tsx`
Tre costanti in cima al file:
```ts
const PROFILE  = { hours: "..." }
const LOCATION = { address: "...", lat, lng }
const CONTACTS = { phone: "...", whatsapp: "..." }
```

---

## Pagine

### `/` — Home
- Tab **Menù**: ricerca full-text + accordion sezioni. Sheet "Promo e convenzioni" se `MENU_NOTICES` non è vuoto.
- Tab **Maps**: iframe Google Maps + link navigazione.
- Tab **Contatti**: Chiama, WhatsApp, Instagram.
- FAB fisso (telefono + WhatsApp) appare dopo 200 px di scroll nel tab Menù.
- Toggle tema chiaro/scuro in alto a destra.
- Icona Calendar in alto a sinistra → link a `/calendario`.

### `/calendario` — Calendario sport
- Estetica broadcast: sfondo `#0a0a0a`, barre colorate per sport, orari monospaziati.
- Chip filtro per sport (dim 0.18 + saturate 0.2 sui non selezionati).
- Ieri mostrato in versione compatta (opacità 0.4, nessuna card).
- OGGI badge teal con glow + pulsing dot nel contatore eventi.
- FAB prenotazione (teal, espandibile) → Chiama / WhatsApp.
- Icona Home in alto a destra → link a `/`.
- Non indicizzata (`robots: noindex`).

Colori sport:
| Sport    | Hex       |
|----------|-----------|
| Calcio   | `#4ade80` |
| Tennis   | `#facc15` |
| MotoGP   | `#f87171` |
| F1       | `#60a5fa` |

---

## Note tecniche

- **Timezone**: il "giorno corrente" è calcolato con metodi locali (`getFullYear/Month/Date`), non `toISOString()`, per evitare bug alle 00:xx CEST.
- **Font calendario**: caricati nel layout `/calendario/layout.tsx` come CSS variables (`--font-archivo`, `--font-mono-cal`). Nel componente si usano come `var(--font-archivo, Archivo, sans-serif)` con fallback per SSR.
- **shadcn/ui**: usato solo nella home. Il calendario usa inline styles per aderire pixel-perfect al design handoff.
- **Dati statici**: nessun backend, nessuna API. Tutto in TypeScript in `lib/`.
