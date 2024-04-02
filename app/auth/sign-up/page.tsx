
import React from "react";
import { SignUpForm } from "./credentials/sign-up-form";

export const dynamic = "force-dynamic";

export default function SignUp() {

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center space-y-6">
          <div className="flex flex-col items-center space-y-8">

            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-semibold text-white tracking-tight">
                Zeta | Tecnologia & Inovação
              </h1>
              <p className="text-sm text-muted-foreground">
                The all-in-one video solution for online learning.
              </p>
            </div>
          </div>
          <div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  )
}