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
