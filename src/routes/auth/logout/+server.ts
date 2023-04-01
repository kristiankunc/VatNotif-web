import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { SessionsDatabase } from "$lib/server/database/sessions";

export const GET = (async ({ cookies }) => {
	const sessionId = cookies.get("session");
	if (!sessionId) throw error(400, "No session id provided");

	const session = await SessionsDatabase.getSession(sessionId);
	if (!session) throw error(400, "Invalid session id provided");

	await SessionsDatabase.deleteSessionById(sessionId);

	return new Response(null, {
		status: 302,
		headers: {
			location: "/",
		},
	});
}) satisfies RequestHandler;
