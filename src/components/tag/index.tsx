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
          "h-3 w-3 rounded-full bg-opacity-35 shadow-xl flex justify-center items-center",
          type === "interested" && "bg-green-400",
          type === "meeting booked" && "bg-purple-400",
          type === "meeting completed" && "bg-yellow-400",
          type === "closed" && "bg-indigo-400"
        )}
      >
        <div
          className={cn(
            "h-2 w-2 rounded-full p-1",
            type === "interested" && "bg-green-400",
            type === "meeting booked" && "bg-purple-400",
            type === "meeting completed" && "bg-yellow-400",
            type === "closed" && "bg-indigo-400"
          )}
        ></div>
      </div>
      <div
        className={cn(
          "capitalize",
          type === "interested" && "text-green-400",
          type === "meeting booked" && "text-purple-400",
          type === "meeting completed" && "text-yellow-400",
          type === "closed" && "text-indigo-400"
        )}
      >
        {type}
      </div>
    </div>
  )
}

export default Tag
