import React from "react"
import ChevronDown from "../Icons/ChevronDown"
import { Button } from "../ui/button"
import RefreshIcon from "../Icons/RefreshIcon"
import SearchBox from "./SearchBox"
import { Badge } from "../ui/badge"
import Sort from "./Sort"
import { Separator } from "../ui/separator"
import InboxCard from "./InboxCard"

const InboxColumn = ({ emails }: any) => {
  return (
    <div className="p-5 border-r border-slate-500 border-opacity-20 overflow-y-auto h-full">
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
      <div className="mt-4">
        <SearchBox />
      </div>
      <div className="flex justify-between items-center py-4">
        <div>
          <Badge
            variant={"secondary"}
            className="text-blue-600 font-extrabold text-lg"
          >
            26
          </Badge>{" "}
          New Replies
        </div>
        <div>
          <Sort />
        </div>
      </div>
      <Separator />
      {emails?.map((email: any) => (
        <InboxCard
          key={email.id}
          id={email.id}
          email={email.fromEmail}
          snippet={email.subject}
          date="Mar 7"
          active={false}
          campaign="Campaign Name"
          isRead={email.isRead}
          threadId={email.threadId}
        />
      ))}
      {/* <InboxList /> */}
    </div>
  )
}

export default InboxColumn
