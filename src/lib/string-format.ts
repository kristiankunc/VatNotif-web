import DOMPurify from "dompurify";
import { marked } from "marked";

function addVariables(text: string): string {
	return text.replace("{name}", "John Doe").replace("{cid}", "123456").replace("{callsign}", "EGKK_GND").replace("{frequency}", "121.805");
}

export async function mdToText(md: string): Promise<string> {
	const renderer = new marked.Renderer();
	renderer.link = function (href, title, text) {
		return `<a href="${href}" class="text-blue-500 hover:underline">${text}</a>`;
	};
	renderer.paragraph = function (text) {
		return `<p class="white-space-pre-line word-break break-all rounded bg-[#2b2d31] pt-2 px-2 pb-1 leading-relaxed">${text}</p>`;
	};
	marked.setOptions({ renderer, breaks: true });

	return DOMPurify.sanitize(addVariables(await marked(md)), { USE_PROFILES: { html: true } });
}

export async function mdToTitle(md: string): Promise<string> {
	const renderer = new marked.Renderer();

	renderer.link = function (href, title, text) {
		return `<a href="${href}" class="text-blue-500 hover:underline">${text}</a>`;
	};
	renderer.paragraph = function (text) {
		return `<p class="white-space-pre-line word-break break-all pl-2 text-lg font-semibold">${text}</p>`;
	};

	marked.setOptions({ renderer, breaks: true });

	return DOMPurify.sanitize(addVariables(await marked(md)), { USE_PROFILES: { html: true } });
}
