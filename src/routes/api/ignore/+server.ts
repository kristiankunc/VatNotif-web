import { prisma } from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session?.user) return new Response("Unauthorized", { status: 401 });

	await prisma.ignoredCid.upsert({
		where: {
			cid: session.user.cid
		},
		create: {
			cid: session.user.cid
		},
		update: {}
	});

	return new Response("OK", { status: 200 });
};

export const DELETE: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session?.user) return new Response("Unauthorized", { status: 401 });

	await prisma.ignoredCid.delete({
		where: {
			cid: session.user.cid
		}
	});

	return new Response("OK", { status: 200 });
};
