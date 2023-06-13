import { SessionsDatabase } from "$lib/server/database/sessions";
import type { PageServerLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import { vatsimConfig } from "$lib/server/conf/vatsim";

export const load = (async ({ cookies }) => {
	const authUrl = new URL(`${vatsimConfig.authUrl}/oauth/authorize`);
	authUrl.searchParams.append("client_id", vatsimConfig.clientId);
	authUrl.searchParams.append("redirect_uri", vatsimConfig.redirectUri);
	authUrl.searchParams.append("response_type", "code");
	authUrl.searchParams.append("scope", vatsimConfig.scopes);

	if (!cookies.get("session") || !(await SessionsDatabase.getSession(cookies.get("session")!))) {
		throw redirect(302, authUrl.toString());
	}

	throw redirect(302, "/dashboard");
}) satisfies PageServerLoad;
