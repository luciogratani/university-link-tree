/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },

  // Header di sicurezza (applicati da Vercel alle risposte)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Impedisce che il sito sia incorporato in iframe (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // Il browser non deve indovinare il MIME type (es. non eseguire come script)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Quanta parte dell’URL inviare ai siti esterni (es. Google Maps)
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disabilita API sensibili (camera, microfono, geolocation, ecc.) per questo sito
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Content-Security-Policy: restringe da dove si possono caricare risorse.
          // Permette: stesso dominio, Vercel Analytics, Google Maps (iframe), font Google.
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vitals.vercel-insights.com https://*.vercel-insights.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com https://www.google.com",
              "frame-src https://www.google.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ]
  },
}

export default nextConfig
