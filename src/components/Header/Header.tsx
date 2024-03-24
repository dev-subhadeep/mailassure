import React from "react"
import ThemeSwitcher from "./ThemeSwitcher"
import ProfileMenu from "./ProfileMenu"
import { ModeToggle } from "../ModeToggle"

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full h-[68px] border-b border-slate-500 border-opacity-20 px-6">
      <h1 className="font-bold">Onebox</h1>
      <div className="flex flex-row justify-end items-center gap-6">
        <ThemeSwitcher />
        <ProfileMenu />
      </div>
    </header>
  )
}

export default Header
