import React from "react"

const LeadDetails = () => {
  return (
    <div className="p-2 max-w-[400px]">
      <div className="bg-gray-100 text-opacity-80 font-bold bg-opacity-25 rounded-md p-2">
        Lead Details
      </div>
      <div className="my-4">
        <table className="table-fixed border-separate border-spacing-2">
          <tbody>
            <tr>
              <td className="text-sm">Name</td>
              <td className="text-right">Orlando</td>
            </tr>
            <tr>
              <td className="text-sm">Contact No</td>
              <td className="text-right">+54-9062827869</td>
            </tr>
            <tr>
              <td className="text-sm">Email ID</td>
              <td className="text-right">orlando@gmail.com</td>
            </tr>
            <tr>
              <td className="text-sm">LinkedIn</td>
              <td className="text-right">linkedin.com/in/timvadde/</td>
            </tr>
            <tr>
              <td className="text-sm">Company Name</td>
              <td className="text-right">Reachinbox</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeadDetails
