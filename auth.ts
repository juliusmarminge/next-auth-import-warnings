import NextAuth from "next-auth";

export const {
	auth,
	handlers: { GET, POST },
} = NextAuth({
	providers: [],
});
