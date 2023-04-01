import { InputValidation } from "$lib/scripts/input-validation";
import { DiscordNotificationsDatabase } from "$lib/server/database/discord-notifications";
import { SessionsDatabase } from "$lib/server/database/sessions";
import { VatsimUser } from "$lib/server/vatsim/user";
import { error, type RequestHandler } from "@sveltejs/kit";

export const POST = (async ({ url, cookies }) => {
	const sessionId = cookies.get("session");

	if (!sessionId) {
		throw error(401, "No session cookie provided");
	}

	const webhookUrl = url.searchParams.get("webhookUrl");
	if (!webhookUrl) {
		throw error(400, "Missing webhookUrl");
	}

	if (!InputValidation.isDiscordWebhookUrl(webhookUrl)) {
		throw error(400, "Invalid webhookUrl");
	}

	const session = await SessionsDatabase.getSession(sessionId);

	if (!session) {
		throw error(401, "Session cookie invalid");
	}

	const { accessToken } = session;

	const user = await VatsimUser.fetchUserDetails(accessToken);

	if (user.cid === null || !user) {
		throw error(401, "Failed to fetch user details");
	}

	const notifications = await DiscordNotificationsDatabase.getNotificationsForCid(user.cid);

	if (notifications.includes(webhookUrl)) {
		throw error(400, "Webhook URL already being watched");
	}

	await DiscordNotificationsDatabase.addNotification(user.cid, webhookUrl);

	return new Response("Webhook URL added to watchlist", {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
}) satisfies RequestHandler;

export const DELETE = (async ({ url, cookies }) => {
	const sessionId = cookies.get("session");

	if (!sessionId) {
		throw error(401, "No session cookie provided");
	}

	const webhookUrl = url.searchParams.get("webhookUrl");
	if (!webhookUrl) {
		throw error(400, "Missing webhookUrl");
	}

	if (!InputValidation.isDiscordWebhookUrl(webhookUrl)) {
		throw error(400, "Invalid webhookUrl");
	}

	const session = await SessionsDatabase.getSession(sessionId);

	if (!session) {
		throw error(401, "Session cookie invalid");
	}

	const { accessToken } = session;

	const user = await VatsimUser.fetchUserDetails(accessToken);

	if (user.cid === null || !user) {
		throw error(401, "Failed to fetch user details");
	}

	const notifications = await DiscordNotificationsDatabase.getNotificationsForCid(user.cid);

	if (!notifications.includes(webhookUrl)) {
		throw error(400, "Webhook URL not being watched");
	}

	await DiscordNotificationsDatabase.removeNotification(user.cid, webhookUrl);

	return new Response("Webhook URL removed from watchlist", {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
}) satisfies RequestHandler;
