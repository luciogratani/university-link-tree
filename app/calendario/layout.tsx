import React from "react"
import { Archivo, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono-cal",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Calendario Sport | University · Sassari",
  robots: { index: false, follow: false },
}

export default function CalendarioLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${archivo.variable} ${mono.variable}`}>{children}</div>
}
