import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { SessionsDatabase } from "$lib/server/database/sessions";

export const POST = (async ({ cookies }) => {
	const sessionId = cookies.get("session");
	if (!sessionId) throw error(400, "No session cookie provided");

	const session = await SessionsDatabase.getSession(sessionId);
	if (!session) throw error(400, "Invalid session cookie provided");

	return new Response(null, {
		status: 200,
	});
}) satisfies RequestHandler;
