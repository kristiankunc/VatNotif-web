import { apiUrl } from "$lib/server/conf/general";
import { PushNotificationsDatabase } from "$lib/server/database/push-notifications";
import { SessionsDatabase } from "$lib/server/database/sessions";
import { VatsimUser } from "$lib/server/vatsim/user";
import { error, type RequestHandler } from "@sveltejs/kit";

export const POST = (async ({ request, cookies }) => {
	const sessionId = cookies.get("session");

	if (!sessionId) {
		throw error(401, "Unauthorized");
	}
	const { subscription } = await request.json();

	if (!subscription) {
		throw error(400, "Bad Request - Invalid subscription or state");
	}

	const session = await SessionsDatabase.getSession(sessionId);
	if (!session) {
		throw error(401, "Unauthorized");
	}

	const { accessToken } = session;
	const user = await VatsimUser.fetchUserDetails(accessToken);

	if (!user) {
		throw error(401, "Unauthorized");
	}

	const res = await fetch(`${apiUrl}/push/subscribe`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			cid: user.cid,
			subscription: subscription,
		}),
	});

	if (res.status !== 201) {
		throw error(500, `Internal Server Error - ${await res.text()}`);
	}

	return new Response("OK", {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
}) satisfies RequestHandler;

export const DELETE = (async ({ request, cookies }) => {
	const sessionId = cookies.get("session");

	if (!sessionId) {
		throw error(401, "Unauthorized");
	}

	const session = await SessionsDatabase.getSession(sessionId);
	if (!session) {
		throw error(401, "Unauthorized");
	}

	const { accessToken } = session;
	const user = await VatsimUser.fetchUserDetails(accessToken);

	if (!user) {
		throw error(401, "Unauthorized");
	}

	const { subscription } = await request.json();

	if (!subscription) {
		throw error(400, "Bad Request - Invalid subscription or state");
	}

	await PushNotificationsDatabase.deletePushNotification(user.cid, subscription.endpoint);

	return new Response("OK", {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
}) satisfies RequestHandler;
