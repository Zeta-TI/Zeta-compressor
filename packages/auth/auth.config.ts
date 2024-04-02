
import type { NextAuthConfig, Session } from 'next-auth'

import { credentialsProvider } from './credentials-provider'

export const authConfig = {
    providers: [credentialsProvider],
    pages: {
        signIn: '/auth/sign-in',
        error: '/auth/error',
    },
    session: {
        maxAge: 3 * 24 * 60 * 60, // 30 dias de token
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === 'credentials') {
                return true
            }
            return false
        },
        jwt({ token, user, session, trigger }) {
            if (user) {
                const DataAtualSeconds = Math.floor(Date.now() / 1000);
                const ExpirationTokenSeconds = Math.floor(3 * 24 * 60 * 60);

                token.AccessToken = user.AccessToken;
                token.IdToken = user.IdToken
                token.cpf = user.cpf;
                token.contact = user.contact;
                token.expiration = Math.floor(DataAtualSeconds + ExpirationTokenSeconds);
            }

            function isSessionAvailable(session: unknown): session is Session {
                return !!session
            }

            if (trigger === 'update' && isSessionAvailable(session)) {
                token.name = session.user.name
            }

            return token
        },
        session({ session, ...params }) {
            if ('token' in params && session.user) {
                session.user.AccessToken = params.token.AccessToken;
                session.user.IdToken = params.token.IdToken;
                session.user.cpf = params.token.cpf;
                session.user.contact = params.token.contact;

                session.user.id = params.token.sub!
            };
            return session
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user

            const isOnPublicPages = nextUrl.pathname.startsWith('/auth')
            const isOnPublicAPIRoutes = nextUrl.pathname.startsWith('/api/auth')
            const isOnAPIRoutes = nextUrl.pathname.startsWith('/api')
            const isOnPrivatePages = !isOnPublicPages

            if (isOnPublicAPIRoutes) {
                return true
            }

            if (isOnPublicPages && isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }

            if (isOnAPIRoutes && !isLoggedIn) {
                return Response.json({ message: 'Unauthorized.' }, { status: 401 })
            }

            if (isOnPrivatePages && !isLoggedIn) {
                // Redirect user back to sign in
                return false
            }

            return true
        },
    },
} satisfies NextAuthConfig