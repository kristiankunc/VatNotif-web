import { describe, it, expect } from "vitest";
import { isWebhookUrl, DiscordHelper } from "$lib/discord-embeds";

describe("isWebhookUrl", () => {
	it("accepts a valid Discord webhook URL", () => {
		expect(isWebhookUrl("https://discord.com/api/webhooks/123456789/abcDEF_-123")).toBe(true);
	});

	it("accepts a valid discordapp.com webhook URL", () => {
		expect(isWebhookUrl("https://discordapp.com/api/webhooks/123456789/abcDEF_-123")).toBe(true);
	});

	it("rejects a URL with no token", () => {
		expect(isWebhookUrl("https://discord.com/api/webhooks/123456789")).toBe(false);
	});

	it("rejects a non-Discord URL", () => {
		expect(isWebhookUrl("https://example.com/webhook")).toBe(false);
	});

	it("rejects empty string", () => {
		expect(isWebhookUrl("")).toBe(false);
	});

	it("rejects malformed URL", () => {
		expect(isWebhookUrl("not-a-url")).toBe(false);
	});
});

describe("DiscordHelper.getDefaultEmbed", () => {
	it("returns up and down embeds", () => {
		const embeds = DiscordHelper.getDefaultEmbed();
		expect(embeds).toHaveProperty("up");
		expect(embeds).toHaveProperty("down");
	});

	it("up embed has green color", () => {
		const { up } = DiscordHelper.getDefaultEmbed();
		expect(up.color).toBe("#16a34a");
	});

	it("down embed has red color", () => {
		const { down } = DiscordHelper.getDefaultEmbed();
		expect(down.color).toBe("#dc2626");
	});

	it("both embeds have default author 'VatNotif'", () => {
		const { up, down } = DiscordHelper.getDefaultEmbed();
		expect(up.author).toBe("VatNotif");
		expect(down.author).toBe("VatNotif");
	});

	it("up embed text mentions logon", () => {
		const { up } = DiscordHelper.getDefaultEmbed();
		expect(up.text).toContain("logged on");
	});

	it("down embed text mentions logoff", () => {
		const { down } = DiscordHelper.getDefaultEmbed();
		expect(down.text).toContain("logged off");
	});

	it("both embeds have the same base fields", () => {
		const { up, down } = DiscordHelper.getDefaultEmbed();
		expect(up.avatar).toBe(down.avatar);
		expect(up.title).toBe(down.title);
	});
});
