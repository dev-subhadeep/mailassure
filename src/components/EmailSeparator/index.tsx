import React from "react"

const EmailSeparator = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="w-full h-[2px] bg-slate-500 bg-opacity-20 "></div>
      <div className="-mt-[15px] bg-slate-200 dark:bg-slate-600  w-fit px-4 py-1 text-xs z-40">
        {text}
      </div>
    </div>
  )
}

export default EmailSeparator
