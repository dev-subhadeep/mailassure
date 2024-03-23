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
import { Badge } from "./ui/badge"

const Sidebar = () => {
  return (
    <nav className="w-[56px] flex flex-col items-center justify-between h-screen border-r border-slate-100 px-2 py-4">
      <div className="flex flex-col items-center">
        <div className="mb-[100px]">
          <Image src={Logo} height={32} width={32} alt="logo" />
        </div>
        <div className="flex flex-col justify-between h-[400px]">
          <Button variant="ghost">
            <HomeIcon />
          </Button>
          <Button variant="ghost">
            <EmailIcon />
          </Button>
          <Button variant="ghost">
            <SendIcon />
          </Button>
          <Button variant="ghost">
            <ListIcon />
          </Button>
          <Button variant="ghost">
            <InboxIcon />
          </Button>
          <Button variant="ghost">
            <BarChartIcon />
          </Button>
        </div>
      </div>
      <div className="justify-self-end">
        <Image src={DummyUserIcon} width={32} height={32} alt="User Icon" />
      </div>
    </nav>
  )
}

export default Sidebar
