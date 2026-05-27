import { getEvents } from "@/lib/google-sheets"
import CalendarioClient from "./CalendarioClient"

export const revalidate = 60

export default async function CalendarioPage() {
  const events = await getEvents()
  return <CalendarioClient events={events} />
}
