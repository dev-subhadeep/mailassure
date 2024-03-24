"use client"
import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  return (
    <main>
      <p>{token}</p>
    </main>
  )
}
