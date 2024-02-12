import { auth } from "@/auth";

export const GET = auth((req) => {
	return Response.json({ message: "Hello, world!" });
});
