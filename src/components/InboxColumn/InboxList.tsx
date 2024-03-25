import React from "react"
import InboxCard from "./InboxCard"

interface DataProps {
  id: number
  fromName: string
  fromEmail: string
  toName?: string
  toEmail: string
  subject: string
  isRead: boolean
}

const getData = async () => {
  const res = await fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list")
  const data = await res.json()
  return data
}

const InboxList = async () => {
  const data = await getData()
  return (
    <div>
      {data?.map((item: DataProps) => (
        <InboxCard
          id={item.id}
          key={item.id}
          email={item.fromEmail}
          date=""
          snippet={item.subject}
          isRead={item.isRead}
        />
      ))}
    </div>
  )
}

export default InboxList
