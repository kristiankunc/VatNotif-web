import { InputValidation } from "$lib/scripts/input-validation";
import { SessionsDatabase } from "$lib/server/database/sessions";
import { WatchedCallsignsDatabase } from "$lib/server/database/watched-callsigns";
import { VatsimUser } from "$lib/server/vatsim/user";
import { error, type RequestHandler } from "@sveltejs/kit";

export const POST = (async ({ url, cookies }) => {
	const sessionId = cookies.get("session");
	if (!sessionId) {
		throw error(401, "No session cookie provided");
	}

	const callsign = url.searchParams.get("callsign");
	const topdown = url.searchParams.get("topdown") === "true";
	if (!callsign) {
		throw error(400, "Missing callsign");
	}

	if (!InputValidation.isCallsign(callsign)) {
		throw error(400, "Invalid callsign");
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

	if (await WatchedCallsignsDatabase.isWatched(user.cid, callsign)) {
		throw error(400, "Callsign already being watched");
	}

	await WatchedCallsignsDatabase.addWatchedCallsign(user.cid, { string: callsign, topdown: topdown });

	return new Response("Callsign added to watchlist", {
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

	const callsign = url.searchParams.get("callsign");
	if (!callsign) {
		throw error(400, "Missing callsign");
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

	if (!(await WatchedCallsignsDatabase.isWatched(user.cid, callsign))) {
		throw error(400, "Callsign not being watched");
	}

	await WatchedCallsignsDatabase.removeWatchedCallsign(user.cid, callsign);

	return new Response("Callsign removed from watchlist", {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
}) satisfies RequestHandler;

export const PUT = (async ({ url, cookies }) => {
	const sessionId = cookies.get("session");
	if (!sessionId) {
		throw error(401, "No session cookie provided");
	}

	const callsign = url.searchParams.get("callsign");
	const topdown = url.searchParams.get("topdown") === "true";
	if (!callsign) {
		throw error(400, "Missing callsign");
	}

	if (!InputValidation.isCallsign(callsign)) {
		throw error(400, "Invalid callsign");
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

	if (!(await WatchedCallsignsDatabase.isWatched(user.cid, callsign))) {
		throw error(400, "Callsign not being watched");
	}

	await WatchedCallsignsDatabase.patchTopdown(user.cid, { string: callsign, topdown: topdown });

	return new Response("Callsign updated", {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
}) satisfies RequestHandler;
