import { SearchIcon } from "lucide-react"
import React from "react"

const SearchBox = () => {
  return (
    <div className="flex border border-slate-100 border-opacity-20 p-2 rounded-sm gap-2 bg-slate-300 bg-opacity-10">
      <SearchIcon />{" "}
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent"
      />
    </div>
  )
}

export default SearchBox
