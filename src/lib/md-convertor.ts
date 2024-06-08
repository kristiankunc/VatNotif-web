import DOMPurify from "dompurify";
import { marked } from "marked";

export async function mdToHtml(md: string): Promise<string> {
	const renderer = new marked.Renderer();
	renderer.link = function (href, title, text) {
		return `<a href="${href}" class="text-blue-500 hover:underline">${text}</a>`;
	};
	renderer.paragraph = function (text) {
		return `<p class="white-space-pre-line word-break break-all mb-2 rounded bg-[#2b2d31] p-2 leading-relaxed">${text}</p>`;
	};
	marked.setOptions({ renderer });

	return DOMPurify.sanitize(await marked(md), { USE_PROFILES: { html: true } });
}
