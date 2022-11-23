import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE__CLIENT_SECRET,
      authorization: {
        params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
        }
      }
      
    }),
    GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)