import React from "react"

interface InboxCardProps {
  email: string
  snippet: string
  date: string
  status?: string
  campaign?: string
  active?: boolean
}

const InboxCard = ({
  email,
  snippet,
  date,
  status,
  campaign,
}: InboxCardProps) => {
  return <div>InboxCard</div>
}

export default InboxCard
