import DOMPurify from "dompurify";
import { marked } from "marked";
import { prisma } from "./prisma";

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
}
