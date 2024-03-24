"use client"

import Image from "next/image"
import React from "react"
import Logo from "../../public/Logo.png"
import { Button } from "@/components/ui/button"
import HomeIcon from "./Icons/HomeIcon"
import EmailIcon from "./Icons/EmailIcon"
import SendIcon from "./Icons/SendIcon"
import ListIcon from "./Icons/ListIcon"
import InboxIcon from "./Icons/InboxIcon"
import BarChartIcon from "./Icons/BarChartIcon"
import DummyUserIcon from "../../public/images/user_icon.png"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <nav className="w-[56px] flex flex-col items-center justify-between h-screen border-r border-slate-500 border-opacity-20 px-2 py-4">
      <div className="flex flex-col items-center">
        <div className="mb-[100px]">
          <Image
            src={Logo}
            height={32}
            width={32}
            alt="logo"
            className="dark:invert"
          />
        </div>
        <div className="flex flex-col justify-between h-[400px]">
          <Link href="/">
            <HomeIcon />
          </Link>
          <Link
            href="/"
            className={cn(
              pathname.includes("inbox") && "brightness-50 dark:brightness-150"
            )}
          >
            <EmailIcon />
          </Link>
          <Link href="/">
            <SendIcon />
          </Link>
          <Link href="/">
            <ListIcon />
          </Link>
          <Link href="/">
            <InboxIcon />
          </Link>
          <Link href="/">
            <BarChartIcon />
          </Link>
        </div>
      </div>
      <div className="justify-self-end">
        <Image src={DummyUserIcon} width={32} height={32} alt="User Icon" />
      </div>
    </nav>
  )
}

export default Sidebar
