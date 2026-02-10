"use client"

import React from "react"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Instagram, Facebook, Menu, Phone, MessageCircle, MapPin, Sun, Moon, ExternalLink, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

// ============================================
// PROFILE DATA - Edit your information here
// ============================================
const PROFILE = {
  hours: "dom - giov 15-02 | ven - sab 15-04",
}

const LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/universitypoolbar/",
    icon: Instagram,
  }
  //,{
  //  name: "Facebook",
  //  url: "https://facebook.com/marcorossi",
  //  icon: Facebook,
  //},
  //{
  //  name: "Menù",
  //  url: "https://darc.net/marcorossi",
  //  icon: Menu,
  //},
]

const LOCATION = {
  address: "Via Duca degli Abruzzi 23/B, 07100 Sassari, Italia",
  lat: 40.716080737244596,
  lng: 8.564947312850702,
}

const CONTACTS = {
  phone: "+39 393 2320918",
  whatsapp: "+39 393 2320918",
}

// ============================================
// COMPONENTS
// ============================================

function BusinessLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801 119" className="h-auto w-full max-w-[300px]">
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M798.607 6.646q-.71.71-1.352 1.61L772.53 43.154v25.111q0 .901.579 1.48.58.58 3.027.837v1.546h-26.528v-1.546q2.446-.257 3.026-.837.58-.579.58-1.48V45.6l-24.596-35.284q-2.062-2.96-2.704-3.67-.647-.707-1.545-.708V4.393h28.33v1.545q-1.16 0-2.189.257-1.032.26-1.031 1.288 0 .516 1.675 3.091a411 411 0 0 0 3.927 5.923 385 385 0 0 0 4.7 6.825q2.446 3.478 3.992 5.924.386-.643 1.674-2.382a171 171 0 0 0 2.898-4.057 288 288 0 0 1 3.477-4.893 182 182 0 0 0 5.859-8.564q1.03-1.608 1.03-1.867 0-1.028-.966-1.288a7.3 7.3 0 0 0-1.867-.257V4.393h24.467v1.545q-1.032 0-1.738.708m-85.313 14.165q-.516-.707-1.545-.708h-22.15v48.162q0 .901.58 1.48.578.58 3.026.837v1.546h-26.527v-1.546q2.446-.257 3.026-.837.579-.579.579-1.48V20.103h-22.149q-1.032 0-1.545.708-.516.71-.773 2.898h-1.545V.787h1.545q.257 2.192.773 2.897.513.71 1.545.709h63.615q1.029 0 1.545-.709.513-.705.773-2.897h1.545v22.922h-1.545q-.26-2.189-.773-2.898m-60.34 80.959c0 3.18-1.783 5.477-5.016 6.501l5.638 9.08v.177h-5.099l-5.182-8.55h-6.177v8.55h-4.768V94.704h11.152c6.592 0 9.452 2.968 9.452 7.066m-9.95-3.603h-5.886v7.384h5.886c3.441 0 5.183-1.343 5.183-3.71 0-2.226-1.534-3.674-5.183-3.674m-40.585-27.585q2.446-.257 3.027-.837.579-.579.579-1.48V8.256q0-.901-.579-1.481-.581-.578-3.027-.837V4.393h26.528v1.545q-2.447.259-3.026.837-.58.58-.58 1.481v60.009q0 .901.58 1.48.578.58 3.026.837v1.546h-26.528zm15.217 24.122 9.908 22.824h-5.14l-2.156-5.052h-11.857l-2.114 5.052h-4.975l9.95-22.824zm1.12 14.274-4.436-10.317h-.208l-4.311 10.317zm-20.643 1.978c0 4.24-3.233 6.572-9.535 6.572h-11.691V94.704h12.023c5.804 0 8.747 2.297 8.747 5.83 0 2.226-1.078 3.851-3.772 4.911v.177c2.819.918 4.228 2.826 4.228 5.334m-9.659-12.825h-6.882v6.077h6.882c3.109 0 4.602-1.06 4.602-3.038 0-1.979-1.41-3.039-4.602-3.039m-.166 9.292h-6.716v6.678h6.757c3.524 0 5.058-1.201 5.058-3.357 0-2.19-1.534-3.321-5.099-3.321m-48.839-79.98q3.733.517 8.499.837 4.764.323 9.787.966 5.022.645 9.787 1.803 4.762 1.16 8.499 3.412a18.16 18.16 0 0 1 6.052 5.924q2.318 3.671 2.318 9.207 0 4.25-1.738 8.371-1.74 4.121-5.924 7.404-4.186 3.284-11.203 5.215-7.019 1.932-17.449 1.932-8.114 0-13.972-.773-5.862-.771-9.98-1.867-4.123-1.093-6.503-1.996-2.384-.9-3.542-.901a1.98 1.98 0 0 0-1.352.515q-.58.516-1.223 1.159l-1.545-.386 9.529-22.922 1.288.644q-.259.772-.258 2.704 0 1.289 2.382 2.897 2.381 1.612 6.182 3.027 3.796 1.417 8.692 2.382 4.892.966 9.915.966 9.658 0 14.166-2.254 4.506-2.252 4.507-6.503 0-2.318-3.928-3.284-3.93-.966-9.851-1.545-5.924-.579-12.749-1.288-6.827-.707-12.748-2.575-5.925-1.866-9.852-5.409-3.928-3.54-3.927-9.722 0-4.893 2.253-8.886 2.253-3.99 6.31-6.825 4.057-2.83 9.852-4.442 5.794-1.61 12.877-1.61 6.567 0 12.233.837 5.665.838 10.045 1.867 4.376 1.032 7.34 1.867 2.96.839 4.25.838 1.287 0 2.06-.58a8.4 8.4 0 0 0 1.416-1.352l1.417.515-8.886 17.9-1.545-.773v-1.417q0-1.157-2.511-2.382-2.511-1.223-6.374-2.189-3.865-.965-8.628-1.61a69.5 69.5 0 0 0-9.272-.644q-8.371 0-11.718 1.932-3.35 1.932-3.348 4.121 0 2.191 2.318 3.284 2.317 1.096 6.052 1.609m-32.475 90.615c-8.001 0-12.395-4.204-12.395-11.906 0-7.526 4.643-11.978 12.437-11.978 7.959 0 12.395 4.205 12.395 11.907 0 7.561-4.601 11.977-12.437 11.977m0-20.315c-4.933 0-7.545 2.968-7.545 8.373 0 5.335 2.653 8.374 7.545 8.374 4.934 0 7.587-2.968 7.587-8.374 0-5.405-2.612-8.373-7.587-8.373m-36.805-27.161q2.832-.126 2.833-2.317-.001-.257-1.031-1.803a184 184 0 0 0-2.575-3.735 243 243 0 0 0-3.413-4.7 1466 1466 0 0 0-3.605-4.829 216 216 0 0 1-3.027-4.121q-1.288-1.801-1.674-2.446h-12.619v21.634q0 .901.579 1.48.579.58 3.026.837v1.546h-26.527v-1.546q2.446-.257 3.026-.837.579-.579.579-1.48V8.256q0-.901-.579-1.481-.58-.578-3.026-.837V4.393h47.131c9.529 0 16.439 1.738 19.833 5.215 5.192 3.477 7.338 8.865 7.338 16.161q0 8.886-5.215 13.908-5.216 5.022-13.199 7.211l15.195 21.377q1.544 2.317 3.735 2.317v1.546h-26.785zm6.438-44.684q0-2.832-2.125-4.958-2.125-2.124-7.79-2.125h-21.634V32.98h21.634q5.665 0 7.79-2.124t2.125-4.958m-53.318 77.087c2.141 0 3.67 1.461 3.67 3.432 0 2.208-1.529 3.703-3.67 3.703-2.209 0-3.67-1.495-3.67-3.703 0-1.971 1.461-3.432 3.67-3.432m-24.033 14.543h-4.726V98.167h-8.789v-3.463h22.345v3.463h-8.83zm2.791-45.014q-.516-.386-1.545-.386h-64.258v-1.546q2.445-.257 3.026-.837.579-.579.579-1.48V8.256q0-.901-.579-1.481-.582-.578-3.026-.837V4.393h64.258q1.029 0 1.545-.709.513-.705.773-2.897h1.545v22.407h-1.545q-.26-2.189-.773-2.898-.516-.707-1.545-.708h-41.337v10.688h23.952q1.931.002 2.769-.837.835-.835 1.094-2.125h1.546v20.089h-1.546q-.259-1.285-1.094-2.125-.838-.836-2.769-.837h-23.952v11.976h41.337q1.029 0 1.545-.708.513-.707.773-3.155h1.545v22.02h-1.545q-.26-1.674-.773-2.06m-57.217 22.19 9.908 22.824h-5.141l-2.156-5.052h-11.856l-2.115 5.052h-4.974l9.949-22.824zm1.119 14.274-4.436-10.317h-.207l-4.312 10.317zm-30.385 0h-6.177v8.55h-4.767V94.704h11.152c6.591 0 9.452 2.968 9.452 7.066 0 3.18-1.783 5.477-5.017 6.501l5.639 9.08v.177h-5.1zm4.892-7.137c0-2.226-1.534-3.674-5.182-3.674h-5.887v7.384h5.887c3.441 0 5.182-1.343 5.182-3.71m.206-94.229q-.26.774-1.545 3.734a1050 1050 0 0 0-3.155 7.341q-1.87 4.38-4.121 9.722a1696 1696 0 0 1-4.636 10.881 3481 3481 0 0 0-8.628 20.218q-1.738 4.121-2.769 6.825-1.031 2.705-1.03 2.962 0 1.159 1.803 1.159v1.674h-26.527v-1.546q1.158-.256 1.545-.515.386-.257.386-.643 0-.256-1.03-2.64a504 504 0 0 1-2.64-6.246 383 383 0 0 0-3.799-8.757 614 614 0 0 1-4.442-10.173 596 596 0 0 0-4.572-10.43q-2.318-5.15-4.249-9.53a457 457 0 0 1-3.284-7.597 300 300 0 0 1-1.867-4.507q-.903-2.188-1.417-2.833-.516-.644-1.545-.773V4.393h26.399v1.545q-1.547.128-2.061.515a1.22 1.22 0 0 0-.515 1.03q0 .387.58 1.61.579 1.225 2.446 5.215 1.866 3.993 5.409 11.59 3.54 7.598 9.593 20.733 5.795-12.75 9.208-20.282 3.41-7.534 5.28-11.526 1.865-3.99 2.382-5.473.514-1.478.515-1.996 0-.642-.386-.965-.387-.322-1.546-.451V4.393h22.149v1.545q-.773.259-1.223.515-.452.26-.708 1.159m-86.758 109.916h-4.726V98.167h-8.789v-3.463h22.345v3.463h-8.83zm-32.229-46.946q2.445-.257 3.026-.837.579-.579.579-1.48V8.256q0-.901-.579-1.481-.581-.578-3.026-.837V4.393h26.527v1.545q-2.447.259-3.026.837-.58.58-.58 1.481v60.009q0 .901.58 1.48.579.58 3.026.837v1.546h-26.527zm-3.877 30.199c0-3.921 3.482-6.465 9.825-6.465 3.192 0 6.26.494 8.54 1.378v3.851h-.207c-2.239-1.096-5.431-1.696-8.25-1.696-3.399 0-5.058 1.13-5.058 2.791 0 1.66 1.203 2.367 6.675 3.604 5.762 1.342 8.001 3.144 8.001 6.889 0 4.134-3.524 6.784-10.033 6.784-3.523 0-7.172-.707-9.535-1.838v-3.886h.208c2.321 1.307 6.052 2.191 9.245 2.191 3.441 0 5.223-1.096 5.223-3.145 0-1.766-1.409-2.544-6.384-3.604-5.887-1.342-8.25-3.144-8.25-6.854m-23.959-6.077h18.614v3.463h-13.888v6.006h12.81v3.427h-12.81v6.466h13.888v3.462h-18.614zm-18.652-24.122q1.802 0 2.383-.386.579-.385.579-1.03 0-.386-.386-.966-.388-.578-1.674-1.996-1.289-1.415-3.799-4.056a778 778 0 0 1-6.632-7.083 1804 1804 0 0 1-10.173-11.074 1887 1887 0 0 1-14.552-16.161v40.435q0 .901.58 1.48.578.58 3.026.837v1.546h-24.467v-1.546q2.446-.257 3.026-.837.58-.579.58-1.48V8.256q0-.901-.58-1.481-.58-.578-3.026-.837V4.393h31.034v1.545q-2.19.13-2.897.579-.709.452-.708 1.095 0 .26 1.674 2.318 1.673 2.06 4.378 5.151a689 689 0 0 0 6.117 6.889q3.412 3.801 6.889 7.598a625 625 0 0 0 6.697 7.211 2599 2599 0 0 0 5.537 5.86V8.256q0-2.189-2.704-2.318V4.393h23.565v1.545q-2.447.259-3.026.837-.579.58-.579 1.481v60.009q0 .901.579 1.48.579.58 3.026.837v1.546h-24.467zM75.669 6.775q-.579.58-.579 1.481v34.511q0 8.5-2.769 14.294t-7.598 9.272q-4.83 3.477-11.332 4.829-6.504 1.352-13.843 1.352t-13.843-1.352-11.332-4.829q-4.83-3.477-7.598-9.272-2.77-5.795-2.769-14.294V8.256q0-.901-.579-1.481-.58-.578-3.026-.837V4.393h26.527v1.545q-2.447.259-3.026.837-.579.58-.579 1.481v34.511q0 7.47 4.249 10.689 4.25 3.219 11.976 3.219t11.976-3.219 4.25-10.689V8.256q0-.901-.58-1.481-.58-.578-3.026-.837V4.393h26.527v1.545q-2.446.259-3.026.837m92.12 94.995c0 3.18-1.782 5.477-5.016 6.501l5.638 9.08v.177h-5.099l-5.182-8.55h-6.177v8.55h-4.768V94.704h11.152c6.592 0 9.452 2.968 9.452 7.066m-15.836-3.603v7.384h5.887c3.441 0 5.182-1.343 5.182-3.71 0-2.226-1.534-3.674-5.182-3.674zm109.392-3.463 9.909 22.824h-5.141l-2.156-5.052h-11.856l-2.115 5.052h-4.975l9.95-22.824zm1.12 14.274-4.436-10.317h-.207l-4.312 10.317zm18.154-.601c0 3.71 1.825 6.007 5.97 6.007 4.229 0 5.97-2.262 5.97-6.042V94.704h4.685v13.885c0 5.653-3.441 9.398-10.655 9.398-7.172 0-10.696-3.603-10.696-9.256V94.704h4.726zm95.176 2.473h.207V94.704h4.643v22.824h-5.058l-11.193-16.146h-.207v16.146h-4.644V94.704h5.224zm85.583-8.656c0 4.805-3.689 7.703-10.24 7.703h-5.389v7.631h-4.768V94.704h10.448c6.425 0 9.949 2.721 9.949 7.49m-15.629-4.027v8.232h5.182c3.98 0 5.68-1.519 5.68-4.134 0-2.614-1.741-4.098-5.68-4.098zm31.877-3.993c7.96 0 12.396 4.205 12.396 11.907 0 7.561-4.602 11.977-12.437 11.977-8.001 0-12.396-4.204-12.396-11.906 0-7.526 4.643-11.978 12.437-11.978m-.041 20.316c4.933 0 7.586-2.968 7.586-8.374 0-5.405-2.611-8.373-7.586-8.373-4.934 0-7.545 2.968-7.545 8.373 0 5.335 2.653 8.374 7.545 8.374m52.643-.424h13.432v3.462h-18.2V94.704h4.768zm28.967-11.081c2.14 0 3.67 1.461 3.67 3.432 0 2.208-1.53 3.703-3.67 3.703-2.209 0-3.67-1.495-3.67-3.703 0-1.971 1.461-3.432 3.67-3.432"
      />
    </svg>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Toggle theme">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  )
}

function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-4 pb-6">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <FadeIn delay={100} className="px-4 py-3">
        <BusinessLogo />
      </FadeIn>
      <FadeIn delay={200} className="text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{PROFILE.hours}</span>
        </div>
      </FadeIn>
    </div>
  )
}

function LinkCard({ name, url, icon: Icon, index }: { name: string; url: string; icon: typeof Instagram; index: number }) {
  return (
    <FadeIn delay={400 + index * 100}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Icon className="h-5 w-5 text-foreground" />
        </div>
        <span className="font-medium text-foreground">{name}</span>
      </a>
    </FadeIn>
  )
}

function LinksTab() {
  return (
    <div className="flex flex-col gap-3">
      {LINKS.map((link, index) => (
        <LinkCard key={link.name} {...link} index={index} />
      ))}
    </div>
  )
}

function MapsTab() {
  const encodedAddress = encodeURIComponent(LOCATION.address)
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed&z=16`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`

  return (
    <div className="flex flex-col gap-3">
      <FadeIn delay={400}>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            src={mapUrl}
            width="100%"
            height="240"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="bg-muted"
          />
        </div>
      </FadeIn>
      <FadeIn delay={500}>
        <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{LOCATION.address}</p>
        </div>
      </FadeIn>
      <FadeIn delay={600}>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary p-4 text-primary-foreground shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
        >
          <ExternalLink className="h-5 w-5" />
          <span className="font-semibold">Apri in Maps</span>
        </a>
      </FadeIn>
    </div>
  )
}

function ContactButton({
  href,
  icon: Icon,
  label,
  sublabel,
  variant = "default",
  delay = 0,
}: {
  href: string
  icon: typeof Phone
  label: string
  sublabel: string
  variant?: "default" | "whatsapp"
  delay?: number
}) {
  return (
    <FadeIn delay={delay}>
      <a
        href={href}
        className={`flex items-center gap-4 rounded-xl p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] ${
          variant === "whatsapp"
            ? "bg-[#25D366] text-white"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${
            variant === "whatsapp" ? "bg-white/20" : "bg-primary-foreground/20"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{label}</span>
          <span className={`text-sm ${variant === "whatsapp" ? "text-white/80" : "text-primary-foreground/80"}`}>
            {sublabel}
          </span>
        </div>
      </a>
    </FadeIn>
  )
}

function ContactsTab() {
  const whatsappUrl = `https://wa.me/${CONTACTS.whatsapp.replace(/\s/g, "").replace("+", "")}`

  return (
    <div className="flex flex-col gap-3">
      <ContactButton
        href={`tel:${CONTACTS.phone.replace(/\s/g, "")}`}
        icon={Phone}
        label="Chiama"
        sublabel={CONTACTS.phone}
        variant="default"
        delay={400}
      />
      <ContactButton
        href={whatsappUrl}
        icon={MessageCircle}
        label="WhatsApp"
        sublabel={CONTACTS.whatsapp}
        variant="whatsapp"
        delay={500}
      />
    </div>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function ProfilePage() {
  return (
    <main className="relative min-h-screen bg-muted/30">
      <div className="mx-auto max-w-md px-4 py-8">
        <ProfileHeader />

        <FadeIn delay={300}>
          <Tabs defaultValue="link" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="link">Link</TabsTrigger>
              <TabsTrigger value="maps">Maps</TabsTrigger>
              <TabsTrigger value="contatti">Contatti</TabsTrigger>
            </TabsList>

            <TabsContent value="link" className="mt-4">
              <LinksTab />
            </TabsContent>

            <TabsContent value="maps" className="mt-4">
              <MapsTab />
            </TabsContent>

            <TabsContent value="contatti" className="mt-4">
              <ContactsTab />
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </main>
  )
}
