import React from "react"

import { formatDate } from "@/lib/utils"

interface EmailContentProps {
  subject: string
  date: string
  fromEmail: string
  toEmail: string
  body: string
}

const EmailContentCard = ({
  subject,
  date,
  fromEmail,
  toEmail,
  body,
}: EmailContentProps) => {
  const formattedDate = formatDate(new Date(date))
  return (
    <div className=" bg-white bg-opacity-10 p-4 rounded-md border border-slate-500 border-opacity-20">
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="font-bold">{subject}</span>
            <span className="text-slate-500">{formattedDate}</span>
          </div>
          <div>from : {fromEmail} cc: lennon.j@mail.com</div>
          <div>to : {toEmail}</div>
        </div>
        <div className="mt-10">{body}</div>
      </div>
    </div>
  )
}

export default EmailContentCard
