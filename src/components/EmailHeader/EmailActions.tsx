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
import PencilIcon from "../Icons/PencilIcon"
import RemoveUserIcon from "../Icons/RemoveUserIcon"
import ClockIcon from "../Icons/ClockIcon"
import TrashIcon from "../Icons/TrashIcon"
import UnreadIcon from "../Icons/UnreadIcon"

const EmailActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex border rounded-md p-1">
          Move
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <span className="flex gap-3 items-center">
            <UnreadIcon /> Mark as unread
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex gap-3 items-center">
            <PencilIcon /> Edit lead
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex gap-3 items-center">
            <RemoveUserIcon /> Remove lead
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex gap-3 items-center">
            <ClockIcon /> Set reminder
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex gap-3 items-center">
            <TrashIcon /> Delete
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default EmailActions
