import React from "react"
import Logo from "../../../public/Logo.png"
import Image from "next/image"
import Link from "next/link"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Link
        href={"/"}
        className="flex justify-center gap-2 border-b border-slate-100 py-5"
      >
        <Image src={Logo} alt="logo" />
        <h1 className="text-xl font-bold">REACHINBOX</h1>
      </Link>
      <div className="flex justify-center items-center grow">{children}</div>
      <div className="text-center py-2 border-t border-slate-100">
        &copy; 2023 Reachinbox. All rights reserved.
      </div>
    </div>
  )
}

export default layout
