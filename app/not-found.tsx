import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

/**
 * Pagina 404 personalizzata: mostrata per URL inesistenti (es. /notfound).
 * Link per tornare alla home.
 */
export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-muted/30">
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 px-4 py-8 text-center">
        <p className="text-6xl font-bold text-muted-foreground/50">404</p>
        <h1 className="text-xl font-semibold text-foreground">Pagina non trovata</h1>
        <p className="max-w-xs text-sm text-muted-foreground">
          L’indirizzo che hai aperto non esiste. Torna alla home per menù, mappa e contatti.
        </p>
        <Button asChild size="lg" className="mt-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            Torna alla home
          </Link>
        </Button>
      </div>
    </main>
  )
}
