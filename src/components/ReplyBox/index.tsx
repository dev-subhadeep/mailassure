import React from "react"
import { Button } from "../ui/button"
import { Eye, X } from "lucide-react"
import ThunderIcon from "../Icons/ThunderIcon"
import DownArrowIcon from "../Icons/DownArrowIcon"

const ReplyBox = ({ closeReplyBox }: { closeReplyBox: () => void }) => {
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
        ></textarea>
      </div>
      <div className="flex gap-2 items-center px-4 py-2">
        <Button variant="primary">
          <span className="mr-4">Send</span>
          <DownArrowIcon />
        </Button>
        <Button variant="ghost">
          <ThunderIcon /> <span className="ml-4">Variables</span>
        </Button>
        <Button variant="ghost">
          <Eye /> <span className="ml-4">Preview Email</span>
        </Button>
      </div>
    </div>
  )
}

export default ReplyBox
