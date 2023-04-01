import { SessionsDatabase } from "$lib/server/database/sessions";
import type { PageServerLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import { vatsimConfig } from "$lib/server/conf/vatsim";

export const load = (async ({ cookies }) => {
	const authUrl = `${vatsimConfig.authUrl}/oauth/authorize?client_id=${vatsimConfig.clientId}&redirect_uri=${vatsimConfig.redirectUri}&response_type=code&scope=${vatsimConfig.scopes}`;

	const sessionId = cookies.get("session");
	if (!sessionId) throw redirect(302, authUrl);

	const session = await SessionsDatabase.getSession(sessionId);
	if (!session) throw redirect(302, authUrl);

	throw redirect(302, "/");
}) satisfies PageServerLoad;
