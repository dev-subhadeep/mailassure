import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import SignUpWithGoogleButton from "./SignUpWithGoogleButton"
import { Button } from "../ui/button"

const SignUpCard = () => {
  return (
    <Card className="p-10 bg-gray-600 bg-opacity-20">
      <CardHeader>
        <CardTitle className="text-center">Create a new account</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="my-4">
          <SignUpWithGoogleButton />
        </div>
        <div className="flex justify-center mt-10">
          <Button>Create an Account</Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <p>
          Already have an account? <Link href={"/account/login"}>Sign In</Link>
        </p>
      </CardFooter>
    </Card>
  )
}

export default SignUpCard
