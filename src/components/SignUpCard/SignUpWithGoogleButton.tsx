import Link from "next/link"
import React from "react"
import GoogleIconColored from "../Icons/GoogleIconColored"

const SignUpWithGoogleButton = () => {
  return (
    <Link
      href={`https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${process.env.DOMAIN}`}
      className="min-w-[400px] border border-slate-100 py-2 flex justify-center items-center gap-4 rounded-md"
    >
      <GoogleIconColored />
      <span className="font-semibold">Sign Up with Google</span>
    </Link>
  )
}

export default SignUpWithGoogleButton
