import { InputValidation } from "$lib/scripts/input-validation";
import { DiscordNotificationsDatabase } from "$lib/server/database/discord-notifications";
import { SessionsDatabase } from "$lib/server/database/sessions";
import { VatsimUser } from "$lib/server/vatsim/user";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { IgnoredCidsDatabase } from "$lib/server/database/ignored-cids";

export const POST = (async ({ cookies, request }) => {
	if (!request.body) throw error(400, "Bad Request");

	const sessionId = cookies.get("session");
	if (!sessionId) throw error(401, "Unauthorized");

	const session = await SessionsDatabase.getSession(sessionId);
	if (!session) throw error(401, "Unauthorized");

	const { accessToken } = session;
	const user = await VatsimUser.fetchUserDetails(accessToken);
	const { state } = await request.json();

	if (state! instanceof Boolean) throw error(400, "Bad Request");

	await IgnoredCidsDatabase.set(user.cid, state);

	return new Response(null, {
		status: 200,
	});
}) satisfies RequestHandler;
