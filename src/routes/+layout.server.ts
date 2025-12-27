import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();

	// Return a clean serializable session object
	if (!session) {
		return { session: null };
	}

	return {
		session: {
			user: session.user,
			expires: session.expires
		}
	};
};
