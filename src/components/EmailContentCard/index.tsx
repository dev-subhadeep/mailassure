import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
    <div className="m-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between text-lg">
            <span>{subject}</span>
            <span>{formattedDate}</span>
          </CardTitle>
          <CardDescription>
            <p>from : {fromEmail} cc: lennon.j@mail.com</p>
            <p>to : {toEmail}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{body}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default EmailContentCard
