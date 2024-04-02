'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { OTPInput } from 'input-otp'
import { cn } from "@/lib/utils";
import ConfirmationCode from "@/controllers/confirmation-code";
import { Button } from "./ui/button";

export default function ConfirmationCodeOTP() {

  // Inspired by Stripe's MFA input.
  function FakeDash() {
    return (
      <div className="flex w-10 justify-center items-center">
        <div className="w-3 h-1 rounded-full bg-border" />
      </div>
    )
  }

  // Feel free to copy. Uses @shadcn/ui tailwind colors.
  function Slot(props: { char: string | null; isActive: boolean }) {
    return (
      <div
        className={cn(
          'relative w-10 h-14 text-[2rem]',
          'flex items-center justify-center',
          'transition-all duration-300',
          'border-border border-blue-500 border-y border-r first:border-l first:rounded-l-md last:rounded-r-lg',
          'group-hover:border-blue-500 group-focus-within:border-accent-foreground/20',
          'outline outline-0 outline-accent-foreground/20',
          { 'outline-4 outline-accent-foreground': props.isActive },
        )}
      >
        {props.char !== null && <div>{props.char}</div>}
        {props.char === null && props.isActive && <FakeCaret />}
      </div>
    )
  }

  // You can emulate a fake textbox caret!
  function FakeCaret() {
    return (
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
        <div className="w-px h-8 bg-white" />
      </div>
    )
  }

  const router = useRouter();
  const [confirmCode, setConfirmCode] = useState('');

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();
    const email: any = localStorage.getItem("emailUser");
    const resp = await ConfirmationCode(email, confirmCode)

    if (resp.ok) {
      toast.success('Confirmado com sucesso!')
      router.push("/sign-in");
    }
    if (!resp.ok) {
      toast.error('Não possível concluir sua confirmação. Tente novamente mais tarde!')
      router.push('/sign-up')
    }
  }

  return (
    <>
      <form onSubmit={registerUser}>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <OTPInput
              maxLength={6}
              containerClassName="group flex items-center justify-center has-[:disabled]:opacity-30 mb-4"
              onChange={setConfirmCode}
              value={confirmCode}
              render={({ slots }) => (
                <>
                  <div className="flex">
                    {slots.slice(0, 3).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>

                  <FakeDash />

                  <div className="flex">
                    {slots.slice(3).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                </>
              )}
            />
            <Button type='submit' className=" text-white text-1xl bg-purple-600 hover:bg-purple-700 w-full rounded-md p-2 m-2 text-center">Enviar</Button>
          </div>
        </div>
      </form>
    </>
  )
}