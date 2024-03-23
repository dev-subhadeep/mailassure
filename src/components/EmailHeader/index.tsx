import React from "react"
import LeadStatus from "./LeadStatus"
import EmailActions from "./EmailActions"
import EmailSettings from "./EmailSettings"

const EmailHeader = () => {
  return (
    <div className="bg-white flex justify-between p-4 items-center">
      <div>
        <h1>Orlando</h1>
        <p className="text-sm text-slate-500">orlandom@gmail.com</p>
      </div>
      <div className="flex items-center gap-4">
        <LeadStatus />
        <EmailActions />
        <EmailSettings />
      </div>
    </div>
  )
}

export default EmailHeader
