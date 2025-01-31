import { prisma } from "$lib/prisma";
import { error, fail, type Load, type ServerLoad } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { isCallsign } from "$lib/callsign";

export const load: ServerLoad = async ({ locals }) => {
	const session = await locals.auth();

	if (!session) error(401, { message: "Unauthorized" });

	const watchedCallsigns = await prisma.watchedCallsign.findMany({
		where: {
			cid: session.user.cid
		},
		select: {
			callsign: true,
			topdown: true
		}
	});

	const embeds = await prisma.discordEmbed.findMany({
		where: {
			cid: session.user.cid
		}
	});

	return {
		watchedCallsigns,
		hasEmbedUrls: embeds.length !== 0 && embeds.every((embed) => embed.url !== "")
	};
};

export const actions = {
	addCallsign: async ({ request, locals }) => {
		const session = await locals.auth();
		if (!session?.user) return fail(401, { message: "Unauthorized" });

		const form = await request.formData();

		let callsign = form.get("callsign") as string;
		if (!callsign) return fail(400, { message: "No callsign provided" });

		callsign = callsign.toUpperCase().replace(/_+/g, "_");
		if (!isCallsign(callsign)) return fail(400, { message: "Callsign is invalid" });

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
