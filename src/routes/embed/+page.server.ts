import { validateFormData } from "$lib/form";
import { fail, type Load } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { prisma } from "$lib/prisma";
import { embedToJSON } from "$lib/discord-embeds";

export const load: Load = async ({ locals }) => {
	const sesh = await locals.auth();
	if (!sesh) return fail(401, { message: "Unauthorized" });

	const currentWebhook = await prisma.discordNotification.findFirst({
		where: { cid: sesh.user.cid },
		include: {
			upEmbed: true,
			downEmbed: true
		}
	});

	if (!currentWebhook) return { notification: null };

	return {
		notification: currentWebhook
	};
};

export const actions = {
	updateembed: async ({ request, locals }) => {
		const sesh = await locals.auth();
		if (!sesh) return fail(401, { message: "Unauthorized" });
		const cid = sesh.user.cid;

		const form = await request.formData();

		const isValid = validateFormData(form, [
			{ key: "url", type: "string", maxLength: 256 },
			{ key: "author", type: "string", maxLength: 80 },
			{ key: "title", type: "string", maxLength: 256 },
			{ key: "text", type: "string", maxLength: 4096 },
			{ key: "color", type: "string", maxLength: 7 },
			{ key: "avatar", type: "string", maxLength: 256 }
		]);

		if (!isValid) return fail(400, { message: "Invalid form data" });

		const json = await embedToJSON({
			author: form.get("author") as string,
			title: form.get("title") as string,
			text: form.get("text") as string,
			color: form.get("color") as string,
			avatar: form.get("avatar") as string
		});

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

		await prisma.DiscordNotification.upsert({
			where: { cid },
			update: { up_content: json, webhook_url: url },
			create: { cid, up_content: json, webhook_url: url }
		});
	}
} satisfies Actions;
