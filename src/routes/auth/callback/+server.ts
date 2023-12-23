import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { SessionsDatabase } from "$lib/server/database/sessions";
import { VatsimAuth } from "$lib/server/vatsim/auth";

export const GET = (async ({ url }) => {
	const callbackCode = url.searchParams.get("code");

	if (!callbackCode) throw error(400, "No callback code provided");
	const { accessToken, refreshToken } = await VatsimAuth.getUserTokens(callbackCode);

	const sessionId = await SessionsDatabase.createSession(accessToken, refreshToken);
	SessionsDatabase.deleteExpiredSessions();

	return new Response(null, {
		status: 302,
		headers: {
			"Set-Cookie": `session=${sessionId}; Path=/; HttpOnly; SameSite=Lax; expires=${new Date(
				Date.now() + 1000 * 60 * 60 * 24 // 1 day
			).toUTCString()}; Secure`,
			Location: "/",
		},
	});
}) satisfies RequestHandler;
