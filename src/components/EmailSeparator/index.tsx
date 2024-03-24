import React from "react"

const EmailSeparator = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="w-full h-[2px] bg-gray-200 bg-opacity-10 "></div>
      <div className="-mt-[17px] bg-white bg-opacity-5 w-fit px-4 py-1 text-xs z-40">
        Today
      </div>
    </div>
  )
}

export default EmailSeparator
