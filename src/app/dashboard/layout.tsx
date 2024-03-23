import Header from "@/components/Header/Header"
import Sidebar from "@/components/Sidebar"
import React from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
