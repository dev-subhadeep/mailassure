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
    <div className=" bg-white bg-opacity-10 p-4 rounded-md border border-slate-200">
      <div>
        <div>
          <div className="flex justify-between text-lg">
            <span>{subject}</span>
            <span>{formattedDate}</span>
          </div>
          <div>
            <p>from : {fromEmail} cc: lennon.j@mail.com</p>
            <p>to : {toEmail}</p>
          </div>
        </div>
        <div>{body}</div>
      </div>
    </div>
  )
}

export default EmailContentCard
