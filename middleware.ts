import type { MiddlewareConfig } from "next/server";

export { auth as default } from "./auth";

export const config: MiddlewareConfig = {
	matcher: [
		// Omit API routes and static files
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
