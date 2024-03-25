export interface Email {
  id: number
  fromName?: string
  fromEmail: string
  toName?: string
  toEmail: string
  cc: string | null
  bcc: string | null
  threadId: number
  messageId: string
  inReplyTo: string
  references: string
  subject: string
  body: string
  isRead: true
  folder: string
  uid: number
  sentAt: string
  archivedAt: null
  createdAt: string
  updatedAt: string
  deletedAt: null
}
