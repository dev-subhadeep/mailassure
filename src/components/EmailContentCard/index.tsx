import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
  const convertedDate = new Date(date)
  const dateString = convertedDate.toLocaleDateString()
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between text-lg">
          <span>{subject}</span>
          <span>{date}</span>
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
  )
}

export default EmailContentCard
