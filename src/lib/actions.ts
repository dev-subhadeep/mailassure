import { cookies } from "next/headers"

export async function login(data: any) {
  cookies().set({
    name: "token",
    value: "lee",
    httpOnly: true,
    path: "/",
  })
}
