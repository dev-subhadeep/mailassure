import React from "react"
import Step from "./Step"

const ActivitiesSection = () => {
  return (
    <div className="p-2 max-w-[400px]">
      <div className="bg-gray-100 text-opacity-80 font-bold bg-opacity-25 rounded-md p-2">
        Activities
      </div>
      <div className="px-6 mt-8">
        <h3 className="text-xl font-bold">Campaign Name</h3>
        <div className="mb-[30px]">3 Steps | 5 Days in Sequence</div>
        <div className="flex flex-col gap-[70px] border-l border-slate-500 border-opacity-20 box-content ml-6">
          <Step step={1} date="3rd, Feb" status="sent" />
          <Step step={2} date="5th, Feb" status="opened" />
          <Step step={3} date="5th, Feb" status="opened" />
        </div>
      </div>
    </div>
  )
}

export default ActivitiesSection
