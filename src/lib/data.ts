import axios from "axios"
import { getToken } from "./utils"

export async function getEmails(token: string) {
  try {
    const data = await fetch(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return data.json()
  } catch (error) {
    throw new Error("server error")
  }
}

export async function deleteThread(id: number) {
  const token = getToken()
  try {
    const data = await axios.delete(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return data
  } catch (error: any) {
    throw new Error(error?.message)
  }
}

export async function replyToThread(id: number, body: string) {
  const token = getToken()
  try {
    const data = await axios.post(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`,

      {
        data: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return data
  } catch (error: any) {
    throw new Error(error?.message)
  }
}
