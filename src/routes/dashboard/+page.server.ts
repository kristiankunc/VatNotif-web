import { DiscordNotificationsDatabase } from "$lib/server/database/discord-notifications";
import { SessionsDatabase } from "$lib/server/database/sessions";
import { WatchedCallsignsDatabase } from "$lib/server/database/watched-callsigns";
import { VatsimUser } from "$lib/server/vatsim/user";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = (async ({ cookies }) => {
	const sessionId = cookies.get("session");
	if (!sessionId) throw error(400, "No session cookie provided");

	const session = await SessionsDatabase.getSession(sessionId);
	if (!session) throw error(400, "Invalid session cookie provided");

	const { accessToken } = session;

	const user = await VatsimUser.fetchUserDetails(accessToken);
	const watchedCallsigns = await WatchedCallsignsDatabase.getWatchedCallsignsForCid(user.cid);
	const discordNotifications = await DiscordNotificationsDatabase.getNotificationsForCid(user.cid);

	return { watchedCallsigns: watchedCallsigns, user: user, discordNotifications: discordNotifications };
}) satisfies PageServerLoad;
