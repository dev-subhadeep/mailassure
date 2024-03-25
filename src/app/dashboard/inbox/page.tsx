"use client"

import ActivitiesSection from "@/components/Activities"
import DeleteDialogModal from "@/components/DeleteModal"
import EmailContentCard from "@/components/EmailContentCard"
import EmailHeader from "@/components/EmailHeader"
import EmailSeparator from "@/components/EmailSeparator"
import ReplyIcon from "@/components/Icons/ReplyIcon"
import InboxColumn from "@/components/InboxColumn"
import LeadDetails from "@/components/LeadDetails"
import ReplyBox from "@/components/ReplyBox"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"

const InboxPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showReplyBox, setShowReplyBox] = useState(false)

  const handleKeyPress = (e: KeyboardEvent) => {
    if (showReplyBox === false && showDeleteModal === false && e.key === "d") {
      setShowDeleteModal(true)
    }
  }

  useEffect(() => {
    if (showReplyBox) return
    window.addEventListener("keydown", handleKeyPress)

    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [showReplyBox])
  return (
    <div className="flex h-[calc(100vh-68px)]">
      <div>
        <InboxColumn />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col h-full justify-between">
          <EmailHeader />
          <div className="flex-grow p-4">
            <EmailSeparator text="Today" />
            <EmailContentCard
              subject="Shaw - following up"
              date="2023-11-21T00:39:19.000Z"
              body="hey there"
              fromEmail="lennon@gmail.com"
              toEmail="jeanne@gmail.com"
            />
            <EmailSeparator text="Yesterday" />
            <EmailContentCard
              subject="Shaw - following up"
              date="2023-11-21T00:39:19.000Z"
              body="hey there"
              fromEmail="lennon@gmail.com"
              toEmail="jeanne@gmail.com"
            />
          </div>
          <div className="p-4">
            {showReplyBox && (
              <ReplyBox closeReplyBox={() => setShowReplyBox(false)} />
            )}
            {!showReplyBox && (
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowReplyBox(true)}
              >
                <span className="flex gap-2 items-center">
                  <ReplyIcon /> Reply
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="border-l border-slate-500 border-opacity-20">
        <LeadDetails />
        <ActivitiesSection />
      </div>
      <DeleteDialogModal
        isOpen={showDeleteModal}
        setIsOpen={() => setShowDeleteModal(false)}
      />
    </div>
  )
}

export default InboxPage
