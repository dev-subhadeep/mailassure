import React from "react"
import { Badge } from "../ui/badge"
import Tag from "../tag"
import { cn } from "@/lib/utils"

interface InboxCardProps {
  email: string
  snippet: string
  date: string
  isRead: boolean
  campaign?: string
  active?: boolean
}

const InboxCard = ({
  email,
  snippet,
  date,
  isRead,
  campaign,
  active,
}: InboxCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-row border-b border-slate-100",
        active && "bg-blue-50 bg-opacity-20"
      )}
    >
      <div className={cn("w-1 h-auto", active && "bg-blue-400")}>
        {!isRead && !active && (
          <div className="bg-blue-400 h-3 w-3 rounded-full mt-8"></div>
        )}
      </div>
      <div className="w-full px-4 py-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-slate-700">{email}</span>
          <span className="text-slate-400">{date}</span>
        </div>
        <div>{snippet}</div>
        <div>
          <Badge variant="secondary">
            <Tag type="interested" />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default InboxCard
