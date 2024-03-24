import { MailIcon, MailOpen, SendIcon } from "lucide-react"

interface StepProps {
  step: number
  date: string
  status: "sent" | "opened"
}

const Step = ({ step, date, status }: StepProps) => {
  return (
    <div className="flex items-center gap-2 -ml-[17px] -my-4">
      <div className="dark:bg-slate-700 bg-gray-50 border border-slate-200 border-opacity-20 rounded-full flex p-2 h-fit w-fit">
        <MailIcon className="h-4 w-4" />
      </div>
      <div>
        <div>Step {step}: Email</div>
        <div className="flex items-center gap-2">
          {status === "sent" && <SendIcon className="h-3 w-3" />}
          {status === "opened" && (
            <MailOpen className="h-3 w-3 text-yellow-500" />
          )}
          <span className="text-sm capitalize">
            {status} {date}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Step
