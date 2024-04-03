'use client'

import { Loader2, LogIn } from 'lucide-react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'

export function ConfirmationCodeButton() {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type="submit" className="w-full bg-blue-500 hover:bg-blue-700">
            {pending ? (
                <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
                <LogIn className="mr-2 size-4" />
            )}
            Enviar
        </Button>
    )
}