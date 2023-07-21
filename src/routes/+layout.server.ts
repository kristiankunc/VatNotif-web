import { apiUrl } from "$lib/server/conf/general";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ cookies }) => {
	const sessionId = cookies.get("session");
	const res = await fetch(apiUrl);

	return {
		isLoggedIn: sessionId ? true : false,
		apiStatus: res.ok,
	};
}) satisfies LayoutServerLoad;
