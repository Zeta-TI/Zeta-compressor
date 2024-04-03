import { URL_API } from '@/utils/constants'
import { toast } from 'sonner'

export async function ResendConfirmationCode(email: string) {

    const res = await fetch(`${URL_API}/clients/auth/confirmation-email/resend`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
        })
    })

    if (res.status === 200) {
        toast.success('Email reenviado com sucesso!')
        return
    }

    toast.error('Não foi possível reenviar o email. Tente novamente mais tarde!')
    return
}