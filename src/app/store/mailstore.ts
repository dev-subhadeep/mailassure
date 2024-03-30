import { Email } from "@/lib/types"
import { create } from "zustand"

interface EmailState {
  emails: Email[] | []
  thread: Email[] | []
  setThread: (emails: Email[]) => void
  selectedThread: number | undefined
  setSelectedThread: (id: number | undefined) => void
  addEmails: (emails: Email[]) => void
  deleteThread: (id: number) => void
}

const useEmailStore = create<EmailState>()((set) => ({
  emails: [],
  thread: [],
  selectedThread: undefined,
  setSelectedThread: (id) => set((state) => ({ selectedThread: id })),
  addEmails: (emails: Email[]) => set((state) => ({ emails: [...emails] })),
  setThread: (emails: Email[]) => set((state) => ({ thread: [...emails] })),
  deleteThread: (id: number) =>
    set((state) => ({ emails: state.emails.filter((e) => e.id !== id) })),
}))

export default useEmailStore
