'use server'

import { URL_API } from '@/utils/constants'
import { z } from 'zod'

const confirmationCodeSchema = z.object({
    email: z.string().email(),
    confirmationCode: z.string(),
})

export async function ConfirmationCodeAction(data: FormData) {
    const { email, confirmationCode } = confirmationCodeSchema.parse(Object.fromEntries(data))

    const res = await fetch(`${URL_API}/clients/auth/confirmation-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            confirmationCode
        })
    })

    if (res.status === 200) {
        return true
    }

    return false;

}