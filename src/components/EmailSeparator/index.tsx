import React from "react"

const EmailSeparator = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="w-full h-[2px] bg-gray-200 "></div>
      <div className="-mt-[17px] bg-slate-50 w-fit px-4 py-1 text-xs">
        Today
      </div>
    </div>
  )
}

export default EmailSeparator
