"use client"
import { redirect } from "next/navigation"

export default function Home({ params, searchParams }: any) {
  const token = searchParams.token || ""
  if (token) {
    localStorage.setItem("token", token)
  }
  const storedToken = localStorage.getItem("token")
  if (storedToken) {
    redirect("/dashboard/inbox")
  } else {
    redirect("/account/signup")
  }

  return <></>
}
