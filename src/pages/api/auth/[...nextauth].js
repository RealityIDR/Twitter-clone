import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req){
        const {email, password} = credentials

        if (email !== "john@gmail.com" || password !== "1234") {
          return null
        }

        return {id: "1234", name: "John Doe", email: 'john@gmail.com', image: 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-5f2f5.appspot.com/o/Placeholder.png?alt=media&token=0eecc264-1226-4a07-a770-858ba11b4f86'}
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

        session.user.uid = token.sub;
        return session;
    },
  },
  secret: process.env.JWT_SECRET
};

export default NextAuth(authOptions);
