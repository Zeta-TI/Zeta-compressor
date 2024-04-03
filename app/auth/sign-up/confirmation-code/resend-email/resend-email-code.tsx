'use client'

import { Loader2, MoveRight } from 'lucide-react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { ResendConfirmationCode } from './actions'
import { useSearchParams } from 'next/navigation'

export function ResendEmailCode() {
    const { pending } = useFormStatus()

    const searchParams = useSearchParams()
    const email = searchParams.get('email')

    return (
        <Button
            disabled={pending}
            onClick={() => ResendConfirmationCode(email as string)}
            className="w-full mt-4 bg-zinc-700 hover:bg-zinc-800"
        >
            {pending ? (
                <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
                <MoveRight className="mr-2 size-4" />
            )}
            Reenviar email
        </Button>
    )
}