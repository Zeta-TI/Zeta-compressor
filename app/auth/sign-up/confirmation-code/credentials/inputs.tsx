'use client'

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { OTPInput } from "input-otp";
import { useSearchParams } from "next/navigation";

export function InputsForm() {

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

    const searchParams = useSearchParams()
    const email = searchParams.get('email')

    return (
        <div>
            <Input
                className="hidden border-2 border-white rounded-lg text-white px-6 py-3 text-base mb-4"
                name="email"
                defaultValue={email as string}
            />
            <OTPInput
                maxLength={6}
                containerClassName="group text-white flex items-center justify-center has-[:disabled]:opacity-30 mb-4"
                name="confirmationCode"
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
        </div>
    )
}