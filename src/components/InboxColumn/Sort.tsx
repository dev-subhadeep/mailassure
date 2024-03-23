import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const Sort = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2">
          Newest <ChevronDown />
        </div>{" "}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Newest</DropdownMenuItem>
        <DropdownMenuItem>Oldest</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Sort
