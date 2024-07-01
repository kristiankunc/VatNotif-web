import { validateFormData } from "$lib/form";
import { error, fail, type Load } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { prisma } from "$lib/prisma";

export const load: Load = async ({ locals }) => {
	const sesh = await locals.auth();

	if (!sesh) error(401, { message: "Unauthorized" });

	const embeds = await prisma.discordEmbed.findMany({
		where: { cid: sesh.user.cid }
	});

	if (!embeds) return { notification: null };

	return {
		embeds: {
			up: embeds.find((embed) => embed.event === "up"),
			down: embeds.find((embed) => embed.event === "down")
		}
	};
};

export const actions = {
	updateembed: async ({ request, locals }) => {
		const sesh = await locals.auth();
		if (!sesh) return fail(401, { message: "Unauthorized" });
		const cid = sesh.user.cid;

		const form = await request.formData();

		const isValid = validateFormData(form, [
			{ key: "isDownNotification", type: "boolean", maxLength: 0 },
			{ key: "url", type: "string", maxLength: 256 },
			{ key: "author", type: "string", maxLength: 80 },
			{ key: "title", type: "string", maxLength: 256 },
			{ key: "text", type: "string", maxLength: 4096 },
			{ key: "color", type: "string", maxLength: 7 },
			{ key: "avatar", type: "string", maxLength: 256 }
		]);

		if (!isValid) return fail(400, { message: "Invalid form data" });

		const url = form.get("url") as string;

		const postRes = await fetch(`${url}?wait=true`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				embeds: null,
				content: "VatNotif test notification",
				attachments: []
			})
		});

		const message = await postRes.json();

		if (!message.id) return fail(400, { message: "Invalid webhook URL" });

		const webhookId = url.split("/")[5];
		const webhookToken = url.split("/")[6];

		await fetch(`https://discord.com/api/webhooks/${webhookId}/${webhookToken}/messages/${message.id}`, {
			method: "DELETE"
		});

		const embedType = form.get("isDownNotification") === "true" ? "down" : "up";

		await prisma.discordEmbed.upsert({
			where: {
				cid_event: {
					cid: cid,
					event: embedType
				}
			},
			update: {
				url: form.get("url") as string,
				author: form.get("author") as string,
				title: form.get("title") as string,
				text: form.get("text") as string,
				color: form.get("color") as string,
				avatar: form.get("avatar") as string
			},
			create: {
				cid: cid,
				event: embedType,
				url: form.get("url") as string,
				author: form.get("author") as string,
				title: form.get("title") as string,
				text: form.get("text") as string,
				color: form.get("color") as string,
				avatar: form.get("avatar") as string
			}
		});
	}
} satisfies Actions;
