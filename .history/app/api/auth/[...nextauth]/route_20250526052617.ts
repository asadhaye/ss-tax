import NextAuth, { Session } from "next-auth"
import { JWT } from "next-auth/jwt"
import AzureADProvider from "next-auth/providers/azure-ad"

const handler = NextAuth({
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: {
        params: {
          scope: "openid profile email"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }): Promise<JWT> {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }): Promise<Session> {
      if (session) {
        session.accessToken = token.accessToken
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }