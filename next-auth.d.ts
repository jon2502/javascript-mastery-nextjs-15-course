import NextAuth from "next-auth";

declare module "next-auth" {
    interface session {
        id: string
    }
    interface JWT {
        id: string
    }
}