import { prisma } from "./prisma";
import { type DiscordEmbed as PrismaDiscordEmbed } from "@prisma/client";

export interface DiscordEmbed {
	url: string;
	author: string;
	title: string;
	text: string;
	color: string;
	avatar: string;
}

export function isWebhookUrl(url: string): boolean {
	const webhookRegex = /^https:\/\/discord(app)?\.com\/api\/webhooks\/\d+\/[\w-]+$/;
	return webhookRegex.test(url);
}

export class DiscordHelper {
	public static getDefaultEmbed(): { up: DiscordEmbed; down: DiscordEmbed } {
		let baseEmbed = {
			url: "",
			author: "VatNotif",
			title: "New notification",
			avatar: "https://vatnotif.kristn.co.uk/logo.webp"
		};

		return {
			up: {
				...baseEmbed,
				color: "#16a34a",
				text: "**{name}** (`{cid}`) has just logged on as **{callsign}** (`{frequency}`)."
			},
			down: {
				...baseEmbed,
				color: "#dc2626",
				text: "**{name}** (`{cid}`) has just logged off from **{callsign}** (`{frequency}`)."
			}
		};
	}

	public static isWebhookUrl(url: string): boolean {
		return /^https:\/\/discord\.com\/api\/webhooks\/\d+\/[a-zA-Z0-9_-]+$/.test(url);
	}

	public static async createDefaultEmbeds(cid: number) {
		const defaultEmbeds = DiscordHelper.getDefaultEmbed();
		await prisma.discordEmbed.createMany({
			data: [
				{
					cid: cid,
					event: "up",
					enabled: true,
					name: "Default logon notification",
					...defaultEmbeds.up
				},
				{
					cid: cid,
					event: "down",
					enabled: true,
					name: "Default logoff notification",
					...defaultEmbeds.down
				}
			]
		});

		return await prisma.discordEmbed.findMany({
			where: { cid: cid },
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
	}

	public static async isWebhookUrlValid(url: string): Promise<boolean> {
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

		if (!message.id) return false;

		const webhookId = url.split("/")[5];
		const webhookToken = url.split("/")[6];

		await fetch(`https://discord.com/api/webhooks/${webhookId}/${webhookToken}/messages/${message.id}`, {
			method: "DELETE"
		});

		return true;
	}
}
