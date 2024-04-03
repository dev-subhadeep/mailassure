"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import { Eye, X } from "lucide-react"
import ThunderIcon from "../Icons/ThunderIcon"
import DownArrowIcon from "../Icons/DownArrowIcon"
import { useRouter, useSearchParams } from "next/navigation"
import { replyToThread } from "@/lib/data"
import SpellCheckIcon from "../Icons/SpellCheckIcon"
import Unfold from "../Icons/Unfold"
import PersonRemoveIcon from "../Icons/PersonRemoveIcon"
import EmojiIcon from "../Icons/EmojiIcon"
import LinkIcon from "../Icons/LinkIcon"
import ImageIcon from "../Icons/ImageIcon"

const ReplyBox = ({ closeReplyBox }: { closeReplyBox: () => void }) => {
  const [emailBody, setEmailBody] = useState("")
  const searchParams = useSearchParams()

  const threadId = Number(searchParams.get("thread"))
  const router = useRouter()

  return (
    <div className="border border-slate-500 border-opacity-20 rounded-md  bg-gray-500 bg-opacity-20">
      <div className="px-6 py-2 border-b border-slate-500 border-opacity-20 flex justify-between items-center font-bold">
        Reply
        <Button size={"sm"} variant={"link"} onClick={closeReplyBox}>
          <X />
        </Button>
      </div>
      <div>
        <div className="px-6 py-2 border-b border-slate-500 border-opacity-20">
          <span className="text-slate-500">To : </span> jeanne@icloud.com
        </div>
        <div className="px-6 py-2 border-b border-slate-500 border-opacity-20">
          <span className="text-slate-500">From : </span> peter@reachinbox.com
        </div>
        <div className="px-6 py-2 border-b border-slate-500 border-opacity-20">
          <span className="text-slate-500">Subject : </span> Warmup Welcome
        </div>
      </div>
      <div className="p-6">
        <textarea
          placeholder="Hi Jeanne,"
          className="w-full h-[200px] bg-transparent outline-none"
          onChange={(e) => setEmailBody(e.target.value)}
        ></textarea>
      </div>
      <div className="flex gap-1 items-center px-4 py-2">
        <Button variant="primary">
          <span
            className="mr-4"
            onClick={async () => {
              const res = await replyToThread(threadId, emailBody)
              if (res.data.status === 200) {
                router.push("/dashboard/inbox")
                closeReplyBox()
              }
            }}
          >
            Send
          </span>
          <DownArrowIcon />
        </Button>
        <Button variant="ghost">
          <ThunderIcon /> <span className="ml-4">Variables</span>
        </Button>
        <Button variant="ghost">
          <Eye /> <span className="ml-4">Preview Email</span>
        </Button>
        <Button variant={"ghost"}>
          <SpellCheckIcon />
        </Button>
        <Button variant={"ghost"}>
          <LinkIcon />
        </Button>
        <Button variant={"ghost"}>
          <ImageIcon />
        </Button>
        <Button variant={"ghost"}>
          <EmojiIcon />
        </Button>
        <Button variant={"ghost"}>
          <PersonRemoveIcon />
        </Button>
        <Button variant={"ghost"}>
          <Unfold />
        </Button>
      </div>
    </div>
  )
}

export default ReplyBox
