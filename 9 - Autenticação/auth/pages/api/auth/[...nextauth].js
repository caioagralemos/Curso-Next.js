import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
        async authorize(credentials) {
            const client = await connectToDatabase()
            const usersCollection = client.db('auth').collection('accounts')

            const user = await usersCollection.findOne({email: credentials.email})

            if(!user) {
                throw new Error('Nenhum usuário encontrado.')
            }

            const isValid = await verifyPassword(credentials.password, user.password)

            if(!isValid) {
                throw new Error('Credenciais incorretas. Tente novamente mais tarde')
            }

            client.close()

            return {email: user.email} // retornar chaves vazias avisa ao nextauth que a autenticação teve sucesso
        }
    })
    ]
})