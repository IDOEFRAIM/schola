import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User{
    username:string,
  }
  interface Session {
    user: User &{
        username:string
      /** The user's postal address. */
      address: string?
    },
    token:{
        username:string
    }
  }
}