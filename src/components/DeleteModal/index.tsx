"use client"
import React, { useState } from "react"
import { Button } from "../ui/button"
import { deleteThread } from "@/lib/data"
import { useRouter, useSearchParams } from "next/navigation"

const DialogModal = ({
  isOpen,
  close,
}: {
  isOpen: boolean
  close: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const searchParams = useSearchParams()
  const threadId = Number(searchParams.get("thread"))
  const router = useRouter()
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen z-40 w-full flex justify-center items-center bg-gray-500 bg-opacity-50 ">
          <div className="bg-white dark:bg-[#0f0f0f] p-10 flex flex-col gap-10 rounded-md">
            <div>
              <h1 className="text-xl font-bold mb-5 text-center">
                Are you sure?
              </h1>
              <p className="text-slate-400 text-center">
                Your selected email will be deleted.
              </p>
            </div>
            <div className="flex justify-between">
              <Button size={"lg"} onClick={close}>
                Cancel
              </Button>
              <Button
                size={"lg"}
                variant={"danger"}
                onClick={async () => {
                  const res = await deleteThread(threadId)
                  if (res.status === 200) {
                    alert("Deleted thread successfully")
                    router.push("/dashboard/inbox")
                  }
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DialogModal
