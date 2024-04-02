'use server'

import { URL_API } from '@/utils/constants'
import { z } from 'zod'
import { redirect } from 'next/navigation'

const signInFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cpf: z.string().min(11),
    contact: z.string().min(11),
    password: z.string().min(6),

})

export async function signUpWithEmail(data: FormData) {
    const { name, email, cpf, contact, password } = signInFormSchema.parse(Object.fromEntries(data))

    const res = await fetch(`${URL_API}/clients`, {
        method: 'POST',
        headers: {
            'Content-type': 'application-json',
        },

        body: JSON.stringify({
            name,
            email,
            cpf,
            contact: '+55' + contact,
            password,
        })
    });

    if (res.ok) {
        redirect('/auth/sign-up/confirmation-code')
    }

    redirect('/auth/sign-up/confirmation-code')

}