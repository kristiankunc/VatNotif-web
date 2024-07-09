import { validateFormData } from "$lib/form";
import { error, fail, type ServerLoad } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { prisma } from "$lib/prisma";
import { DiscordHelper } from "$lib/discord-embeds";

export const load: ServerLoad = async ({ locals }) => {
	const sesh = await locals.auth();

	if (!sesh) error(401, { message: "Unauthorized" });

	let embeds = await prisma.discordEmbed.findMany({
		where: { cid: sesh.user.cid },
		select: {
			id: true,
			url: true,
			avatar: true,
			name: true,
			title: true,
			color: true,
			text: true,
			author: true,
			event: true
		}
	});

	if (embeds.length === 0) {
		embeds = await DiscordHelper.createDefaultEmbeds(sesh.user.cid);
	}

	return {
		embeds: embeds
	};
};

export const actions = {
	updateembed: async ({ request, locals }) => {
		const sesh = await locals.auth();
		if (!sesh) return fail(401, { message: "Unauthorized" });
		const cid = sesh.user.cid;

		const form = await request.formData();

		const isValid = validateFormData(form, [
			{ key: "id", type: "number", maxLength: -1 },
			{ key: "notificationType", type: "string", maxLength: 4 }, // up | down
			{ key: "url", type: "string", maxLength: 256 },
			{ key: "author", type: "string", maxLength: 80 },
			{ key: "title", type: "string", maxLength: 256 },
			{ key: "text", type: "string", maxLength: 4096 },
			{ key: "color", type: "string", maxLength: 7 },
			{ key: "avatar", type: "string", maxLength: 256 }
		]);

		if (!isValid) return fail(400, { message: "Invalid form data" });

		const currentWebhookUrl = await prisma.discordEmbed.findFirst({
			where: {
				id: parseInt(form.get("id") as string)
			},
			select: {
				url: true
			}
		});

		const newWebhookUrl = form.get("url") as string;

		if (!DiscordHelper.isWebhookUrl(newWebhookUrl)) return fail(400, { message: "Invalid webhook URL" });
		if (currentWebhookUrl?.url !== newWebhookUrl) {
			if (!DiscordHelper.isWebhookUrlValid(newWebhookUrl)) return fail(400, { message: "Invalid webhook URL" });
		}

		if (form.get("notificationType") !== "up" && form.get("notificationType") !== "down") {
			return fail(400, { message: "Invalid event, must be [up|down]" });
		}

		await prisma.discordEmbed.upsert({
			where: {
				id: parseInt(form.get("id") as string),
				cid: cid
			},
			update: {
				event: form.get("notificationType") as string,
				name: form.get("name") as string,
				url: form.get("url") as string,
				author: form.get("author") as string,
				title: form.get("title") as string,
				text: form.get("text") as string,
				color: form.get("color") as string,
				avatar: form.get("avatar") as string
			},
			create: {
				cid: cid,
				event: form.get("notificationType") as string,
				name: form.get("name") as string,
				url: form.get("url") as string,
				author: form.get("author") as string,
				title: form.get("title") as string,
				text: form.get("text") as string,
				color: form.get("color") as string,
				avatar: form.get("avatar") as string
			}
		});
	},
	deleteembed: async ({ request, locals }) => {
		const sesh = await locals.auth();
		if (!sesh) return fail(401, { message: "Unauthorized" });
		const cid = sesh.user.cid;

		const form = await request.formData();
		const isValid = validateFormData(form, [{ key: "id", type: "number", maxLength: -1 }]);

		if (!isValid) return fail(400, { message: "Invalid form data" });

		await prisma.discordEmbed.deleteMany({
			where: {
				id: parseInt(form.get("id") as string),
				cid: cid
			}
		});
	}
} satisfies Actions;
