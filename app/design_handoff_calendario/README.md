# Handoff: Calendario — University · Pool · Bar (Sassari)

> **Importante:** i file in questa cartella sono **riferimenti di design in HTML statico**, non codice production. L'obiettivo è **ricreare il design nel tuo progetto Next.js** usando le convenzioni, i componenti e il design system già presenti nel codebase (Tailwind, CSS Modules, shadcn/ui, ecc.). Non importare l'HTML così com'è.

## Fedeltà

**Hi-fi (alta fedeltà).** Colori, tipografia, spaziature e interazioni sono finali. Da ricreare pixel-perfect con gli strumenti del codebase di destinazione.

---

## Cosa stai costruendo

Schermata mobile (9:16) `/calendario` del sito/app del locale. Mostra ai clienti quali partite trasmette il bar nei prossimi giorni, raggruppate per giornata, con filtri per sport.

**Estetica:** ispirata alla grafica broadcast di palinsesti sportivi — sfondo molto scuro, gerarchia tipografica decisa, barre colorate a sinistra di ogni evento per identificare lo sport, numeri tabulari monospaziati per gli orari (effetto "tabellone").

---

## Routing & file consigliati (Next.js App Router)

```
app/
  calendario/
    page.tsx                  # server component, fetch eventi
    _components/
      CalendarHeader.tsx
      SportFilter.tsx         # client component (stato selezione)
      DayGroup.tsx
      EventRow.tsx
      OggiBadge.tsx
    _lib/
      sports.ts               # mappa colori/etichette/glyph per sport
      grouping.ts             # raggruppa eventi per data + classifica past/today/future
      types.ts
```

Se usi Pages Router, l'equivalente sta in `pages/calendario.tsx` con i componenti in `components/calendario/*`.

---

## Design tokens

### Colori

| Token | Valore | Uso |
|---|---|---|
| `--bg` | `#0a0a0a` | sfondo schermata |
| `--surface-1` | `#131313` | card eventi (giorni normali) |
| `--surface-2` | `#161616` | card eventi (OGGI, leggermente più chiara) |
| `--border` | `#1c1c1c` | bordo card e separatori orizzontali |
| `--border-today` | `#232323` | bordo card di OGGI |
| `--chip-bg` | `#141414` | chip filtro inattivo |
| `--chip-border` | `#1f1f1f` | bordo chip filtro inattivo |
| `--channel-bg` | `#1c1c1c` | pillola canale TV (DAZN, Sky, ecc.) |
| `--fg` | `#ffffff` | testo primario |
| `--fg-muted` | `#888888` | testo secondario (stage/torneo) |
| `--fg-dim` | `#666666` | label meta |
| `--fg-faint` | `#555555` | eyebrow, day-count |
| `--fg-faintest` | `#444444` | footer |
| `--accent` | `#00e0c2` | badge OGGI, accent live |

### Colori sport (left-bar di ogni evento + accent chip)

| Sport | Hex |
|---|---|
| Calcio | `#4ade80` (verde) |
| Tennis | `#facc15` (giallo) |
| MotoGP | `#f87171` (rosso) |
| F1 | `#60a5fa` (blu) |

Glyph emoji (usati solo nei chip filtro, NON nelle card): ⚽ 🎾 🏍 🏎

### Tipografia

Tre font:
- **Archivo** (400, 500, 600, 700, 800, 900) — UI generale + headline
- **Archivo Narrow** (500/600/700) — opzionale, non strettamente necessario
- **JetBrains Mono** (400, 500, 600, 700) — orari, codici data, label tecniche

In Next.js usa `next/font/google`:
```ts
import { Archivo, JetBrains_Mono } from "next/font/google";
export const archivo = Archivo({ subsets: ["latin"], weight: ["400","500","600","700","800","900"], variable: "--font-archivo" });
export const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-mono" });
```

### Scala tipografica

| Elemento | Font | Weight | Size | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Eyebrow ("UNIVERSITY · SASSARI") | Archivo | 600 | 10px | 0.32em | — |
| Headline "CALENDARIO" | Archivo | 900 | 44px | -0.035em | 0.92 |
| Meta riga ("SETTIMANA 22…") | JetBrains Mono | 400 | 10px | 0.12em | — |
| Chip filtro | Archivo | 700 | 11px | 0.14em | — |
| Day code ("VEN · 23 MAG") | JetBrains Mono | 600 | 11px | 0.22em | — |
| Day count ("02") | JetBrains Mono | 400 | 10px | 0.10em | — |
| OGGI badge | Archivo | 900 | 11px | 0.18em | — |
| Nome evento | Archivo | 800 | 15px | -0.01em | 1.15 |
| Etichetta sport (in card) | Archivo | 700 | 9px | 0.18em | — |
| Stage / torneo | Archivo | 500 | 12px | 0 | — |
| Channel pill (DAZN, Sky…) | Archivo | 700 | 9.5px | 0.16em | — |
| Orario | JetBrains Mono | 700 | 18px | 0.01em, `font-feature-settings: 'tnum'` | 1 |
| Time-label ("CET", "IN ONDA") | JetBrains Mono | 400 | 8.5px | 0.18em | — |
| Footer | JetBrains Mono | 400 | 9.5px | 0.18em | — |

Tutto **uppercase** tranne: nome evento, stage/torneo.

### Spaziature & radius

- Padding schermata: 20px orizzontale
- Padding interno card evento: 11px verticale, 12–14px orizzontale
- Gap fra chip: 8px
- Card radius: 10px
- Chip radius: 6px
- Channel pill radius: 3px
- OGGI badge radius: 3px (volutamente squadrato)
- Icona calendario header: 38×38, radius 8px

### Ombre / glow

- Card OGGI:
  ```
  box-shadow:
    0 0 0 1px rgba(0, 224, 194, 0.18),
    inset 0 0 30px rgba(0, 224, 194, 0.04),
    0 8px 28px -10px rgba(0, 224, 194, 0.12);
  ```
- OGGI badge: `box-shadow: 0 0 18px rgba(0, 224, 194, 0.35);`
- Pulse dot (8 eventi indicator): `box-shadow: 0 0 8px #4ade80;` + animazione pulse 1.6s

**Nessun gradiente** tranne due piccolissimi fade ambientali e una "rule" sfumata accanto al day-code (`linear-gradient(to right, #222, transparent)`).

---

## Componenti — specifiche

### 1. CalendarHeader
- Eyebrow ("University · Sassari") con punto separatore opzionale
- Titolo `CALENDARIO` spezzato su due righe (`CALEN` / `DARIO`) per peso visivo — usa `<br/>` o `\n` + `white-space: pre-line`
- Icona calendario a destra: square 38×38, bordo `1.5px #2a2a2a`, sfondo `#111`, all'interno un'icona Lucide `Calendar` con un punto teal `#00e0c2` (puoi disegnare un cerchietto sopra l'icona)
- Riga meta sotto: "SETTIMANA NN · MESE YYYY" a sinistra, "N EVENTI" a destra con pulse dot verde

### 2. SportFilter (client component)
- 5 chip orizzontali scrollabili, scrollbar nascosta, `scroll-snap-type: x mandatory`
- Stato attivo: chip diventa bianca (`bg #fff`, testo `#0a0a0a`)
- Ogni chip (tranne "ALL SPORTS"): barra colorata 4px tutta altezza sul lato sinistro + glyph emoji + label
- Al click di un filtro NON nasconde gli eventi: li **dimma** (opacity 0.18 + saturate 0.2) con transizione 0.2s. "ALL SPORTS" resetta.
- Stato: `useState<'all' | 'calcio' | 'tennis' | 'motogp' | 'f1'>`

### 3. DayGroup
Props: `{ code: string; count: number; status: 'past' | 'today' | 'future'; events: Event[] }`

- `status='past'`: l'intero `<DayGroup>` ha `opacity: 0.55`
- `status='today'`: mostra `<OggiBadge>` prima del day-code; card eventi usa `surface-2` + bordo+glow teal
- `status='future'`: normale

Day-label è una flex row: `[OGGI badge?] [DAY CODE] [hairline rule che si espande] [count]`

### 4. EventRow
Grid 3 colonne: `[barra 5px] [contenuto 1fr] [orario auto]`

Contenuto:
- Riga 1: nome evento (bold 800, ellissi) + label sport piccola a destra (colore sport, 9px tracked)
- Riga 2: stage/torneo (es. "Serie A · 37ª giornata")
- Riga 3: channel pill grigia ("DAZN", "Sky Sport F1", ecc.)

Time block:
- Separatore tratteggiato verticale a sinistra (`border-left: 1px dashed #1f1f1f`)
- Orario monospaziato 18px bold
- Label sotto: "CET" normalmente, "IN ONDA" se evento live (e `time-label` diventa teal)

Separatori fra eventi nella stessa card: `border-top: 1px solid #1c1c1c` (o `#202020` se OGGI).

### 5. OggiBadge
Rettangolo `height: 22px`, `padding: 0 9px`, sfondo `#00e0c2`, testo `#061513`, weight 900, 11px, tracking 0.18em, radius 3px, con glow esterno teal.

### 6. Footer
Ornamento minimal: due linee orizzontali `#1f1f1f` con un quadrato ruotato 45° al centro, sopra il testo "Le partite potrebbero variare".

---

## Modello dati

```ts
// _lib/types.ts
export type Sport = 'calcio' | 'tennis' | 'motogp' | 'f1';

export type SportEvent = {
  id: string;
  sport: Sport;
  name: string;          // "Lazio — Roma"
  stage?: string;        // "Serie A · Derby della Capitale"
  channel: string;       // "DAZN"
  startsAt: string;      // ISO "2026-05-25T20:45:00+02:00"
  live?: boolean;        // override; altrimenti calcolato lato client
};
```

### Raggruppamento
- Ordina per `startsAt`
- Raggruppa per data locale Europe/Rome
- Per ogni gruppo determina `status`:
  - `today` se la data == oggi
  - `past` se < oggi
  - `future` se > oggi
- Day code: `dayjs(date).locale('it').format('ddd · DD MMM').toUpperCase()` (es. "LUN · 25 MAG")
- Per il numero settimana e il mese nell'header meta: `dayjs().isoWeek()` + nome mese.

### Live detection
Un evento è "live" se `now ≥ startsAt && now < startsAt + 2h` (heuristic; sostituisci con durata reale se l'hai).

---

## Interazioni

- **Filtri chip:** click cambia stato selezionato e applica/rimuove `data-dim` agli eventi non corrispondenti. Transizione 200ms su opacity+filter.
- **Scroll:** lo schermo intero è scrollabile verticalmente; nascondi scrollbar.
- **Tap su evento:** placeholder — al momento nessun navigazione. Suggerito: aprire modal con dettagli o link a "imposta promemoria" / share su WhatsApp.

---

## Sport map (centralizzata)

```ts
// _lib/sports.ts
export const SPORTS = {
  calcio: { label: 'Calcio',  glyph: '⚽', color: '#4ade80' },
  tennis: { label: 'Tennis',  glyph: '🎾', color: '#facc15' },
  motogp: { label: 'MotoGP',  glyph: '🏍', color: '#f87171' },
  f1:     { label: 'F1',      glyph: '🏎', color: '#60a5fa' },
} as const;
```

Usa il colore via CSS custom property: `style={{ '--accent': SPORTS[sport].color }}` — così barra, label sport e bordo chip restano sincronizzati.

---

## Accessibilità

- I chip filtro sono `<button>` con `aria-pressed`
- Le emoji nei chip sono decorative: avvolgile in `<span aria-hidden="true">`
- Le icone SVG (calendario) → `aria-hidden="true"`
- Contrasto: testo `#888` su `#131313` raggiunge ~4.5:1 — borderline per AA su small text. Considera `#9a9a9a` se vuoi margine.
- L'effetto "dim 0.18" sui non-selezionati NON nasconde il contenuto a screen reader: ok per filtro visivo, ma considera aggiungere un toggle "Solo X" che li rimuove dal flusso.

---

## Responsive

Lo schermo è progettato a **412px di larghezza target**. Per il sito desktop:
- O centra la schermata in un viewport limitato (es. `max-width: 480px` su mobile, e su desktop wrap in un mockup laptop)
- O scala l'intera schermata adattando il padding (20px → 32px) e il titolo (44px → 56px+)

Su mobile reale (320–430px) il layout funziona già senza modifiche.

---

## File inclusi in questo handoff

- `Calendario.html` — il prototipo HTML statico completo (copia di `Calendario.html` del progetto). Aprilo nel browser per vedere il design dal vivo e ispezionare gli stili computati.
- `README.md` — questo file.

---

## Suggerimento per Claude Code

Una volta nel tuo progetto Next.js, puoi dare a Claude Code questo prompt:

> Nella cartella `design_handoff_calendario/` trovi il riferimento di design per la pagina `/calendario`. Leggi `README.md` per le specifiche e `Calendario.html` per il riferimento visivo. Implementa la pagina in `app/calendario/page.tsx` usando i nostri pattern esistenti (Tailwind / shadcn / quello che usi). I dati eventi vengono da `[…tuo data source…]`; per ora usa un mock con la stessa shape descritta nel README. Mantieni gli stessi token (colori, font, spaziature, glow) pixel-perfect.

Buon lavoro 🎬
