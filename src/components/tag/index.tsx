import React from "react"
import { cn } from "@/lib/utils"

interface TagProps {
  type: "interested" | "meeting booked" | "meeting completed" | "closed"
}

const Tag = ({ type }: TagProps) => {
  return (
    <div className="flex gap-2 min-h-1 min-w-1 items-center">
      <div
        className={cn(
          "h-3 w-3 rounded-full",
          "bg-green-400 bg-opacity-35 shadow-xl flex justify-center items-center"
        )}
      >
        <div
          className={cn("h-2 w-2 rounded-full p-1", "bg-green-400 shadow-xl")}
        ></div>
      </div>
      <div className="text-green-500">{type}</div>
    </div>
  )
}

export default Tag
