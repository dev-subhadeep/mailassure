import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? "PM" : "AM"
  const formattedHours = hours % 12 || 12 // Convert to 12-hour clock format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${day} ${monthNames[monthIndex]} ${year} : ${formattedHours}:${formattedMinutes}${ampm}`
}

export const getToken = () => {
  return localStorage.getItem("token") || ""
}
