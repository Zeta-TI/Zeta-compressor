import { Metadata } from 'next'
import { SignInForm } from './credentials/sign-in-form'

export const metadata: Metadata = {
  title: 'Sign In',
}

export const dynamic = "force-dynamic";

export default function SignInPage() {

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center space-y-6">
        <div className="flex flex-col items-center space-y-8">

          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              Zeta | Tecnologia & Inovação
            </h1>
            <p className="text-sm text-muted-foreground">
              Realize o login para acessar os dados de seu compressor.
            </p>
          </div>
        </div>
        <div>
          <SignInForm />
        </div>
        <p className="px-8 text-center text-sm leading-relaxed text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <a
            href="https://www.rocketseat.com.br/terms"
            className="underline underline-offset-4 hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="https://www.rocketseat.com.br/privacy"
            className="underline underline-offset-4 hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}