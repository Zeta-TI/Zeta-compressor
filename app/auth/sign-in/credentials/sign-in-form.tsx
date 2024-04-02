import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { signInWithEmail } from '../actions'
import { SignInWithEmailButton } from './sign-in-with-email-button'

export function SignInForm() {
    return (
        <form action={signInWithEmail} method="POST" className="space-y-4">
            <div className="space-y-2">
                <Label className='text-white' htmlFor="email">E-mail</Label>
                <Input
                    className="border-2 border-zinc-700 rounded-lg text-white px-6 py-3 text-base hover:border-white cursor-pointer transition"
                    name="email"
                    id="email"
                    type="email"
                />
            </div>

            <div className="space-y-2">
                <Label className="text-white" htmlFor="password">Senha</Label>
                <Input
                    className="border-2 border-zinc-700 rounded-lg text-white px-6 py-3 text-base hover:border-white cursor-pointer transition"
                    name="password"
                    id="password"
                    type="password"
                />
            </div>

            <SignInWithEmailButton />
        </form>
    )
}