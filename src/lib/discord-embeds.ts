import DOMPurify from "dompurify";
import { marked } from "marked";
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

export async function mdToHtml(md: string): Promise<string> {
	const renderer = new marked.Renderer();
	renderer.link = function (href, title, text) {
		return `<a href="${href}" class="text-blue-500 hover:underline">${text}</a>`;
	};
	renderer.paragraph = function (text) {
		return `<p class="white-space-pre-line word-break break-all mb-2 rounded bg-[#2b2d31] p-2 leading-relaxed">${text}</p>`;
	};
	marked.setOptions({ renderer, breaks: true });

	let textWithVars = (await marked(md))
		.replace("{name}", "John Doe")
		.replace("{cid}", "123456")
		.replace("{callsign}", "EGKK_GND")
		.replace("{frequency}", "121.805");

	return DOMPurify.sanitize(textWithVars, { USE_PROFILES: { html: true } });
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
			avatar: "https://cdn.discordapp.com/embed/avatars/0.png"
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

	public static async createDefaultEmbeds(cid: number): Promise<PrismaDiscordEmbed[]> {
		const defaultEmbeds = DiscordHelper.getDefaultEmbed();
		await prisma.discordEmbed.createMany({
			data: [
				{
					cid: cid,
					event: "down",
					enabled: true,
					name: "Default logoff notification",
					...defaultEmbeds.down
				},
				{
					cid: cid,
					event: "up",
					enabled: true,
					name: "Default logon notification",
					...defaultEmbeds.up
				}
			]
		});

		return await prisma.discordEmbed.findMany({
			where: { cid: cid }
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
