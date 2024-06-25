import { prisma } from "$lib/prisma";
import { error, fail, type Load } from "@sveltejs/kit";

export const load: Load = async ({ locals }) => {
	const session = await locals.auth();

	if (!session) error(401, { message: "Unauthorized" });

	const watchedCallsigns = await prisma.watchedCallsign.findMany({
		where: {
			cid: session.user.cid
		}
	});

	return {
		watchedCallsigns
	};
};

export const actions = {
	addCallsign: async ({ request, locals }) => {
		const session = await locals.auth();
		if (!session?.user) fail(401, { message: "Unauthorized" });

		const form = await request.formData();

		if (!form.get("callsign")) fail(400, { message: "No callsign provided" });

		await prisma.watchedCallsign.create({
			data: {
				cid: session!.user.cid,
				callsign: form.get("callsign") as string
			}
		});

		return {
			status: 200
		};
	}
};
