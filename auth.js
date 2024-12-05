import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        console.log("credentials", credentials);

        if (credentials.email && credentials.password) {
          if (credentials.email === "wekids@naver.com" && credentials.password === "1234") {
            const user = {
              id: "WEKIDS_ADMIN",
              role: "ADMIN",
            };
            console.log("user:", user);

            return user;
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        role: token.role,
      };

      return session;
    },
    async authorized({ auth }) {
      return !!auth;
    },
  },
});
