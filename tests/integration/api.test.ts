import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { POST, DELETE } from "../../src/routes/api/notify/+server";
import { mockLocals, defaultUser } from "../helpers/auth";
import { prisma, cleanAll, seedEmbed } from "../helpers/db";

describe("POST /api/notify", () => {
	beforeEach(cleanAll);
	afterEach(cleanAll);

	it("returns 401 when not authenticated", async () => {
		const res = await POST({ locals: mockLocals() } as any);
		expect(res.status).toBe(401);
	});

	it("enables all embeds for the authenticated user", async () => {
		await seedEmbed(defaultUser, { enabled: false });
		await seedEmbed(defaultUser, { enabled: false, event: "down" });

		const res = await POST({ locals: mockLocals(defaultUser) } as any);
		expect(res.status).toBe(200);

		const embeds = await prisma.discordEmbed.findMany({
			where: { cid: defaultUser.cid }
		});
		expect(embeds.every((e) => e.enabled)).toBe(true);
	});

	it("does not affect other users' embeds", async () => {
		await seedEmbed(defaultUser, { enabled: false });

		const res = await POST({ locals: mockLocals(defaultUser) } as any);
		expect(res.status).toBe(200);

		const all = await prisma.discordEmbed.findMany();
		expect(all.length).toBe(1);
	});
});

describe("DELETE /api/notify", () => {
	beforeEach(cleanAll);
	afterEach(cleanAll);

	it("returns 401 when not authenticated", async () => {
		const res = await DELETE({ locals: mockLocals() } as any);
		expect(res.status).toBe(401);
	});

	it("disables all embeds for the authenticated user", async () => {
		await seedEmbed(defaultUser, { enabled: true });
		await seedEmbed(defaultUser, { enabled: true, event: "down" });

		const res = await DELETE({ locals: mockLocals(defaultUser) } as any);
		expect(res.status).toBe(200);

		const embeds = await prisma.discordEmbed.findMany({
			where: { cid: defaultUser.cid }
		});
		expect(embeds.every((e) => e.enabled)).toBe(false);
	});

	it("does not affect other users' embeds", async () => {
		await seedEmbed(defaultUser, { enabled: true });
		await seedEmbed(defaultUser, { enabled: true, event: "down" });

		const res = await DELETE({ locals: mockLocals(defaultUser) } as any);
		expect(res.status).toBe(200);

		const all = await prisma.discordEmbed.findMany({
			where: { enabled: true }
		});
		expect(all.length).toBe(0);
	});
});
