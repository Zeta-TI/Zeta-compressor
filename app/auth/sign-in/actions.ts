'use server'

import { signIn } from '../../../packages/auth'
import { z } from 'zod'

const signInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export async function signInWithEmail(data: FormData) {
    const { email, password } = signInFormSchema.parse(Object.fromEntries(data))

    await signIn('credentials', {
        email,
        password,
        redirectTo: '/dashboard',
    })

}