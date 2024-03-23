import React from "react"
import ChevronDown from "../Icons/ChevronDown"
import { Button } from "../ui/button"
import RefreshIcon from "../Icons/RefreshIcon"
import SearchBox from "./SearchBox"
import { Badge } from "../ui/badge"
import Sort from "./Sort"
import { Separator } from "../ui/separator"
import InboxCard from "./InboxCard"
import InboxList from "./InboxList"

const InboxColumn = () => {
  return (
    <div className="p-5 border-r border-slate-100 h-screen">
      <div className="flex justify-between gap-10">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            All Inbox(s) <ChevronDown />
          </h1>
          <p>
            <span className="font-semibold">25/25</span>
            <span className="text-slate-500"> Inboxes selected</span>
          </p>
        </div>
        <div>
          <Button variant={"outline"}>
            <RefreshIcon />
          </Button>
        </div>
      </div>
      <SearchBox />
      <div className="flex justify-between items-center py-4">
        <div>
          <Badge variant={"secondary"} className="text-blue-600 font-extrabold">
            26
          </Badge>{" "}
          New Replies
        </div>
        <div>
          <Sort />
        </div>
      </div>
      <Separator />
      <InboxCard
        email="Beata@gmail.com"
        snippet="I've tried a lot and."
        date="Mar 7"
        active={false}
        campaign="Campaign Name"
        isRead={false}
      />
      {/* <InboxList /> */}
    </div>
  )
}

export default InboxColumn
