import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from './db';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/auth/login',
        newUser: '/dashboard/profile'
    },
    secret: process.env.JWT_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "@" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                
                if (!credentials?.email || !credentials?.password) {
                    console.log('check field')
                    return null
                }
                //dont forget to hash and compare hashed
                const existingUser = await db.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                
                if (!existingUser) {
                    return null
                }
                const passwordMatch = credentials?.password == existingUser.password
                if (!passwordMatch) return null
                return {
                    id: existingUser.id,
                    username: existingUser.username,
                    email: existingUser.email,

                }
            }
        })
    ],
    callbacks:{
        async jwt({ token, user}) {
            // Persist the OAuth access_token and or the user id to the token right after signin  
            if(user){
                return {
                    ...token,
                    username:user.username
                }
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            return {
                ...session,
                user:{
                    ...session.user,
                    username:token.username
                }

            }
        }
    }
}