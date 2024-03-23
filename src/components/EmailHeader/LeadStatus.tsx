import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Tag from "../tag"
import { ChevronDown } from "lucide-react"

const LeadStatus = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex border rounded-md p-1">
          <Tag type="meeting booked" />
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Interested</DropdownMenuItem>
        <DropdownMenuItem>Meeting Booked</DropdownMenuItem>
        <DropdownMenuItem>Meeting Completed</DropdownMenuItem>
        <DropdownMenuItem>Closed</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LeadStatus
