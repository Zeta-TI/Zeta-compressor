import { URL_API } from '@/utils/constants';
import CredentialsProvider from 'next-auth/providers/credentials'

export const credentialsProvider = CredentialsProvider({
    name: "credentials",

    credentials: {
        email: {},
        password: {},
    },
    async authorize(credentials) {
        if (
            credentials
        ) {

            const res = await fetch(`${URL_API}/clients/auth/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.status === 400) {
                throw new Error('Incorrect credentials.')
            }

            const user = await res.json();

            return user.data
        }

        throw new Error('Unauthorized.')
    }
})