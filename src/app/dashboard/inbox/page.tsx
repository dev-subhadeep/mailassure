import EmailContentCard from "@/components/EmailContentCard"
import InboxColumn from "@/components/InboxColumn"
import React from "react"

const InboxPage = () => {
  return (
    <div className="flex">
      <div>
        <InboxColumn />
      </div>
      <div className="bg-gray-100 p-4">
        <EmailContentCard
          subject="Shaw - following up"
          date={new Date("2023-11-21T00:39:19.000Z").toLocaleDateString()}
          body="hey there"
          fromEmail="lennon@gmail.com"
          toEmail="jeanne@gmail.com"
        />
      </div>
    </div>
  )
}

export default InboxPage
