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
import { getToken } from "@/lib/utils"
import { getEmails } from "@/lib/data"
import React, { useEffect, useState } from "react"
import { redirect, useSearchParams } from "next/navigation"
import { Email } from "@/lib/types"

const InboxPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showReplyBox, setShowReplyBox] = useState(false)
  const [emails, setEmails] = useState([])
  const [thread, setThread] = useState([])
  const searchParams = useSearchParams()
  const threadId = searchParams.get("thread") || null

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "d") {
      if (showReplyBox) return
      setShowDeleteModal(true)
    }
    if (e.key === "r") {
      if (showDeleteModal) return
      setShowReplyBox(true)
    }
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false)
  }

  useEffect(() => {
    if (threadId) {
      const token = getToken()
      if (token) {
        const fetchEmails = async () => {
          const res = await fetch(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
          const data = await res.json()
          setThread(data.data)
        }
        fetchEmails()
      } else {
        redirect("/")
      }
    }
  }, [threadId, showReplyBox])

  useEffect(() => {
    const token = getToken()
    if (token) {
      const fetchEmails = async () => {
        const res = await fetch(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        const data = await res.json()
        setEmails(data.data)
      }
      fetchEmails()
    } else {
      redirect("/")
    }
  }, [showDeleteModal, showReplyBox])

  useEffect(() => {
    if (showReplyBox) return
    window.addEventListener("keydown", handleKeyPress)

    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [showReplyBox])
  return (
    <div className="flex h-[calc(100vh-68px)]">
      <div>
        <InboxColumn emails={emails} />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col h-full justify-start">
          <EmailHeader />
          <div className="h-[calc(80vh)] overflow-y-auto">
            <div className="flex-grow p-4">
              {thread.map((threadItem: Email) => (
                <EmailContentCard
                  key={threadItem.id}
                  subject={threadItem.subject}
                  date={threadItem.sentAt}
                  body={threadItem.body}
                  fromEmail={threadItem.fromEmail}
                  toEmail={threadItem.toEmail}
                />
              ))}
            </div>
          </div>
          {threadId && (
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
          )}
        </div>
      </div>
      <div className="border-l border-slate-500 border-opacity-20 overflow-y-auto">
        <LeadDetails />
        <ActivitiesSection />
      </div>
      <DeleteDialogModal isOpen={showDeleteModal} close={closeDeleteModal} />
    </div>
  )
}

export default InboxPage
