import { prisma } from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session?.user) return new Response("Unauthorized", { status: 401 });

	await prisma.discordEmbed.updateMany({
		where: {
			cid: session.user.cid
		},
		data: {
			enabled: true
		}
	});

	return new Response("OK", { status: 200 });
};

export const DELETE: RequestHandler = async ({ locals }) => {
	const session = await locals.auth();
	if (!session?.user) return new Response("Unauthorized", { status: 401 });

	await prisma.discordEmbed.updateMany({
		where: {
			cid: session.user.cid
		},
		data: {
			enabled: false
		}
	});

	return new Response("OK", { status: 200 });
};
