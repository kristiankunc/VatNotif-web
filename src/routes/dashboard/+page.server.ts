import { prisma } from "$lib/prisma";
import { error, fail, type Load, type ServerLoad } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { isCallsign } from "$lib/callsign";

// TODO: Add default embed for new users

export const load: ServerLoad = async ({ locals }) => {
	const session = await locals.auth();

	if (!session) error(401, { message: "Unauthorized" });

	const watchedCallsigns = await prisma.watchedCallsign.findMany({
		where: {
			cid: session.user.cid
		}
	});

	const embeds = await prisma.discordEmbed.findMany({
		where: {
			cid: session.user.cid
		}
	});

	const isIgnored =
		(await prisma.ignoredCid.findFirst({
			where: {
				cid: session.user.cid
			}
		})) !== null;

	return {
		watchedCallsigns,
		embedConfig: {
			up: embeds.find((embed) => embed.event === "up") !== undefined,
			down: embeds.find((embed) => embed.event === "down") !== undefined
		},
		embedStatus: {
			up: embeds.find((embed) => embed.enabled === true) !== undefined,
			down: embeds.find((embed) => embed.enabled === true) !== undefined
		},
		isIgnored: isIgnored
	};
};

export const actions = {
	addCallsign: async ({ request, locals }) => {
		const session = await locals.auth();
		if (!session?.user) return fail(401, { message: "Unauthorized" });

		const form = await request.formData();

		const callsign = form.get("callsign") as string;
		if (!callsign) return fail(400, { message: "No callsign provided" });
		if (!isCallsign(callsign)) return fail(400, { message: "Invalid callsign" });

		await prisma.watchedCallsign.create({
			data: {
				cid: session!.user.cid,
				callsign: callsign
			}
		});
	},
	removeCallsign: async ({ request, locals }) => {
		const session = await locals.auth();
		if (!session?.user) fail(401, { message: "Unauthorized" });

		const form = await request.formData();

		if (!form.get("callsign")) fail(400, { message: "No callsign provided" });

		await prisma.watchedCallsign.deleteMany({
			where: {
				cid: session!.user.cid,
				callsign: form.get("callsign") as string
			}
		});
	}
} satisfies Actions;
