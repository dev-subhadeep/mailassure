import React from "react"
import LeadStatus from "./LeadStatus"

const EmailHeader = () => {
  return (
    <div className="bg-white flex justify-between p-4 items-center">
      <div>
        <h1>Orlando</h1>
        <p className="text-sm text-slate-500">orlandom@gmail.com</p>
      </div>
      <div>
        <LeadStatus />
      </div>
    </div>
  )
}

export default EmailHeader
