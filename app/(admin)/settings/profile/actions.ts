'use server'

import { z } from 'zod'

const EditUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cpf: z.string().min(11),
    contact: z.string().min(11),
})

export async function EditProfileWithData(data: FormData) {
    const { name, email, cpf, contact } = EditUserSchema.parse(Object.fromEntries(data))

}