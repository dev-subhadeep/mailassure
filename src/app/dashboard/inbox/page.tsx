import EmailContentCard from "@/components/EmailContentCard"
import EmailHeader from "@/components/EmailHeader"
import InboxColumn from "@/components/InboxColumn"
import LeadDetails from "@/components/LeadDetails"
import React from "react"

const InboxPage = () => {
  return (
    <div className="flex">
      <div>
        <InboxColumn />
      </div>
      <div className="bg-gray-100 flex-grow">
        <EmailHeader />
        <EmailContentCard
          subject="Shaw - following up"
          date="2023-11-21T00:39:19.000Z"
          body="hey there"
          fromEmail="lennon@gmail.com"
          toEmail="jeanne@gmail.com"
        />
      </div>
      <div>
        <LeadDetails />
      </div>
    </div>
  )
}

export default InboxPage
