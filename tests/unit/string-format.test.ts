// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { mdToText, mdToTitle } from "$lib/string-format";

describe("mdToText", () => {
	it("renders bold Markdown", async () => {
		const html = await mdToText("**bold**");
		expect(html).toContain("<strong>bold</strong>");
	});

	it("renders italic Markdown", async () => {
		const html = await mdToText("*italic*");
		expect(html).toContain("<em>italic</em>");
	});

	it("renders inline code", async () => {
		const html = await mdToText("`code`");
		expect(html).toContain("<code>code</code>");
	});

	it("renders a link", async () => {
		const html = await mdToText("[link](https://example.com)");
		expect(html).toContain('href="https://example.com"');
	});

	it("strips script tags (XSS protection via DOMPurify)", async () => {
		const html = await mdToText('<script>alert("xss")</script>');
		expect(html).not.toContain("<script>");
	});

	it("renders a multi-line string", async () => {
		const html = await mdToText("Line 1\n\nLine 2");
		expect(html).toContain("Line 1");
		expect(html).toContain("Line 2");
	});

	it("replaces {callsign} variable with sample data", async () => {
		const html = await mdToText("Watching {callsign}");
		expect(html).toContain("EGKK_GND");
	});

	it("replaces {cid} variable with sample data", async () => {
		const html = await mdToText("User {cid}");
		expect(html).toContain("123456");
	});

	it("replaces {name} variable", async () => {
		const html = await mdToText("Hello {name}");
		expect(html).toContain("John Doe");
	});

	it("replaces {frequency} variable", async () => {
		const html = await mdToText("On {frequency}");
		expect(html).toContain("121.805");
	});

	it("replaces all variables in one string", async () => {
		const html = await mdToText("{name} ({cid}) on {callsign} freq {frequency}");
		expect(html).toContain("John Doe");
		expect(html).toContain("123456");
		expect(html).toContain("EGKK_GND");
		expect(html).toContain("121.805");
	});

	it("leaves unknown placeholders as-is", async () => {
		const html = await mdToText("Hello {unknown}");
		expect(html).toContain("{unknown}");
	});
});

describe("mdToTitle", () => {
	it("renders bold Markdown in title", async () => {
		const html = await mdToTitle("**title**");
		expect(html).toContain("<strong>title</strong>");
	});

	it("strips dangerous HTML from title", async () => {
		const html = await mdToTitle('<img onerror="alert(1)" src=x />');
		expect(html).not.toContain("onerror");
	});

	it("replaces variables in title", async () => {
		const html = await mdToTitle("{callsign} notification");
		expect(html).toContain("EGKK_GND");
	});
});
