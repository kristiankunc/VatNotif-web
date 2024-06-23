import type { JsonValue } from "@prisma/client/runtime/library";
import DOMPurify from "dompurify";
import { marked } from "marked";

export interface DiscordEmbed {
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

	return DOMPurify.sanitize(await marked(md), { USE_PROFILES: { html: true } });
}

export function embedToJSON(embed: DiscordEmbed): string {
	return JSON.stringify({
		content: null,
		embeds: [
			{
				title: embed.title,
				description: embed.text,
				color: parseInt(embed.color.replace("#", ""), 16)
			}
		],
		username: embed.author,
		avatar_url: embed.avatar,
		attachments: []
	});
}

export function JSONtoEmbed(json: string | JsonValue): DiscordEmbed {
	const embed = JSON.parse(json as string);
	return {
		author: embed.username,
		title: embed.embeds[0].title,
		text: embed.embeds[0].description,
		color: "#" + embed.embeds[0].color.toString(16).padStart(6, "0"),
		avatar: embed.avatar_url
	};
}

export function isWebhookUrl(url: string): boolean {
	const webhookRegex = /^https:\/\/discord(app)?\.com\/api\/webhooks\/\d+\/[\w-]+$/;
	return webhookRegex.test(url);
}
