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
import { ChevronDown, Ellipsis } from "lucide-react"

const EmailSettings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex border rounded-md p-1">
          <Ellipsis />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default EmailSettings
