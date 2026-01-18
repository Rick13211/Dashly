import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import connectToDB from "@/utlis/DB";
import User from "@/models/user";
import bcrypt from "bcryptjs";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider(
      {
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "johndoe@email.com" },
          password: { label: "Password", type: "password", placeholder: "••••••••" }
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid credentials")
          }
          try {
            await connectToDB();
            const user = await User.findOne({ email: credentials!.email })
            if (!user) {
              throw new Error("No user found, please sign in first")
              return null;
            }
            const isPasswordValid = await bcrypt.compare(credentials!.password, user.password)
            if (!isPasswordValid) {
              throw new Error("Invalid password")
            }
            return {
              id:user._id.toString(),
              name:user.name,
              email:user.email,
            } 
          }
          catch (error) {
            console.log(error)
            return null
          }
        }
      }
    )
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      if (session.user) {
        session.user.id = token.id as string
      }
      session.accessToken = token.accessToken
      return session
    }
  },
  pages: {
    signIn: "auth/signin",
    error: "auth/signin"
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }