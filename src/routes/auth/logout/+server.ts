import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { SessionsDatabase } from "$lib/server/database/sessions";

export const GET = (async ({ cookies }) => {
	const sessionId = cookies.get("session");

	if (!sessionId)
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/",
			},
		});

	await SessionsDatabase.deleteSessionById(sessionId);

	return new Response(null, {
		status: 302,
		headers: {
			location: "/",
		},
	});
}) satisfies RequestHandler;
