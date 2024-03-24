"use client"

import React, { useState } from "react"
import { Switch } from "../ui/switch"
import { useTheme } from "next-themes"

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("dark")
  const { setTheme } = useTheme()
  const handleThemeSwitch = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("light")
      setTheme("light")
    } else {
      setCurrentTheme("dark")
      setTheme("dark")
    }
  }
  return <Switch onClick={handleThemeSwitch} />
}

export default ThemeSwitcher
