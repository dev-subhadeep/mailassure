import { SearchIcon } from "lucide-react"
import React from "react"

const SearchBox = () => {
  return (
    <div className="flex border border-slate-100 p-2 rounded-sm gap-2">
      <SearchIcon />{" "}
      <input type="text" placeholder="Search" className="outline-none" />
    </div>
  )
}

export default SearchBox
