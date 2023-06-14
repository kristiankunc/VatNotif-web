import type { LayoutServerLoad } from "./$types";

export const load = (async ({ cookies }) => {
	const sessionId = cookies.get("session");
	const res = await fetch("https://api.vatnotif.kristn.co.uk");
	console.log(sessionId);
	console.log(cookies.getAll());
	return {
		isLoggedIn: sessionId ? true : false,
		apiStatus: res.ok,
	};
}) satisfies LayoutServerLoad;
