import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://universitypoolbar.it'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'University Restaurant · Pool · Bar | Sassari',
  description:
    'Menù, orari, mappa e contatti dello University Restaurant Pool Bar a Sassari. Pizza e fainè, primi e secondi .',
  openGraph: {
    title: 'University Restaurant · Pool · Bar | Sassari',
    description:
      'Menù, orari, mappa e contatti dello University Restaurant Pool Bar a Sassari. Pizza e fainè, primi e secondi .',
    url: siteUrl,
    siteName: 'University Restaurant · Pool · Bar',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/placeholder-logo.svg', width: 400, height: 120, alt: 'University Restaurant Pool Bar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'University Restaurant · Pool · Bar | Sassari',
    description:
      'Menù, orari, mappa e contatti dello University Restaurant Pool Bar a Sassari.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
