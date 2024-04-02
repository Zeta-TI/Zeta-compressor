import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { signUpWithEmail } from '../actions'
import { SignUpWithEmailButton } from './sign-up-with-email-button'

export function SignUpForm() {
    return (
        <form action={signUpWithEmail} method="POST" className="space-y-4">
            <div className="space-y-1">
                <Label className='text-white' htmlFor="email">Nome</Label>
                <Input
                    className="border-2 border-zinc-700 rounded-lg text-white px-6 py-3 text-base hover:border-white cursor-pointer transition_"
                    name="name"
                    id="name"
                    type="text"
                />
            </div>

            <div className="space-y-1">
                <Label className='text-white' htmlFor="email">E-mail</Label>
                <Input
                    className="border-2 border-zinc-700 rounded-lg text-white px-6 py-3 text-base hover:border-white cursor-pointer transition"
                    name="email"
                    id="email"
                    type="email"
                />
            </div>

            <div className="space-y-1">
                <Label className='text-white' htmlFor="email">CPF</Label>
                <Input
                    className="border-2 border-zinc-700 rounded-lg text-white px-6 py-3 text-base hover:border-white cursor-pointer transition"
                    name="cpf"
                    id="cpf"
                    type="text"
                />
            </div>

            <div className="space-y-1">
                <Label className='text-white' htmlFor="email">Contato</Label>
                <Input
                    className="border-2 border-zinc-700 rounded-lg text-white px-6 py-3 text-base hover:border-white cursor-pointer transition"
                    name="contact"
                    id="contact"
                    type="text"
                />
            </div>

            <div className="space-y-1">
                <Label className="text-white" htmlFor="password">Senha</Label>
                <Input
                    className="border-2 border-zinc-700 rounded-lg text-white px-6 py-3 text-base hover:border-white cursor-pointer transition"
                    name="password"
                    id="password"
                    type="password"
                />
            </div>

            <SignUpWithEmailButton />
        </form>
    )
}