import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { load, actions } from "../../src/routes/dashboard/+page.server";
import { mockLocals, defaultUser } from "../helpers/auth";
import { prisma, cleanAll, seedCallsign, seedEmbed } from "../helpers/db";

describe("dashboard load", () => {
	beforeEach(async () => {
		await cleanAll();
	});

	afterEach(async () => {
		await cleanAll();
	});

	it("throws 401 when not authenticated", async () => {
		const locals = mockLocals(null);
		await expect(load({ locals } as any)).rejects.toThrow("Unauthorized");
	});

	it("returns empty watched callsigns for a new user", async () => {
		const data = await load({ locals: mockLocals(defaultUser) } as any);
		expect(data.watchedCallsigns).toEqual([]);
	});

	it("returns watched callsigns for the user", async () => {
		await seedCallsign(defaultUser, "LHR_APP");
		await seedCallsign(defaultUser, "EGLL_TWR", true);

		const data = await load({ locals: mockLocals(defaultUser) } as any);
		expect(data.watchedCallsigns).toHaveLength(2);
		expect(data.watchedCallsigns).toContainEqual(expect.objectContaining({ callsign: "LHR_APP", topdown: false }));
		expect(data.watchedCallsigns).toContainEqual(expect.objectContaining({ callsign: "EGLL_TWR", topdown: true }));
	});

	it("does not return other users' callsigns", async () => {
		await seedCallsign(defaultUser, "LHR_APP");
		await seedCallsign({ cid: 999, name: "Other", name_first: "O", name_last: "User" }, "LHR_TWR");

		const data = await load({ locals: mockLocals(defaultUser) } as any);
		expect(data.watchedCallsigns).toHaveLength(1);
		expect(data.watchedCallsigns[0].callsign).toBe("LHR_APP");
	});

	it("hasEmbedUrls is true when all embeds have URLs", async () => {
		await seedEmbed(defaultUser, { url: "https://discord.com/api/webhooks/1/tok" });

		const data = await load({ locals: mockLocals(defaultUser) } as any);
		expect(data.hasEmbedUrls).toBe(true);
	});

	it("hasEmbedUrls is false when any embed is missing a URL", async () => {
		await seedEmbed(defaultUser, { url: "" });

		const data = await load({ locals: mockLocals(defaultUser) } as any);
		expect(data.hasEmbedUrls).toBe(false);
	});
});

describe("dashboard actions", () => {
	beforeEach(async () => {
		await cleanAll();
	});

	afterEach(async () => {
		await cleanAll();
	});

	describe("addCallsign", () => {
		it("adds a valid callsign", async () => {
			const form = new FormData();
			form.set("callsign", "LHR_APP");

			const result = await actions.addCallsign({
				request: new Request("http://localhost", { method: "POST", body: form }),
				locals: mockLocals(defaultUser)
			} as any);

			expect(result).toBeUndefined();

			const rows = await prisma.watchedCallsign.findMany({
				where: { cid: defaultUser.cid }
			});
			expect(rows).toHaveLength(1);
			expect(rows[0].callsign).toBe("LHR_APP");
		});

		it("upper-cases and normalizes underscores", async () => {
			const form = new FormData();
			form.set("callsign", "lhr___app");

			await actions.addCallsign({
				request: new Request("http://localhost", { method: "POST", body: form }),
				locals: mockLocals(defaultUser)
			} as any);

			const rows = await prisma.watchedCallsign.findMany({
				where: { cid: defaultUser.cid }
			});
			expect(rows[0].callsign).toBe("LHR_APP");
		});

		it("rejects an invalid callsign", async () => {
			const form = new FormData();
			form.set("callsign", "INVALID");

			const result = await actions.addCallsign({
				request: new Request("http://localhost", { method: "POST", body: form }),
				locals: mockLocals(defaultUser)
			} as any);

			expect(result?.status).toBe(400);
		});

		it("rejects a duplicate callsign", async () => {
			await seedCallsign(defaultUser, "LHR_APP");

			const form = new FormData();
			form.set("callsign", "LHR_APP");

			const result = await actions.addCallsign({
				request: new Request("http://localhost", { method: "POST", body: form }),
				locals: mockLocals(defaultUser)
			} as any);

			expect(result?.status).toBe(400);
		});

		it("returns 401 when not authenticated", async () => {
			const form = new FormData();
			form.set("callsign", "LHR_APP");

			const result = await actions.addCallsign({
				request: new Request("http://localhost", { method: "POST", body: form }),
				locals: mockLocals(null)
			} as any);

			expect(result?.status).toBe(401);
		});
	});

	describe("removeCallsign", () => {
		it("removes an existing callsign", async () => {
			await seedCallsign(defaultUser, "LHR_APP");

			const form = new FormData();
			form.set("callsign", "LHR_APP");

			await actions.removeCallsign({
				request: new Request("http://localhost", { method: "POST", body: form }),
				locals: mockLocals(defaultUser)
			} as any);

			const rows = await prisma.watchedCallsign.findMany({
				where: { cid: defaultUser.cid }
			});
			expect(rows).toHaveLength(0);
		});

		it("does not fail when removing a non-existent callsign", async () => {
			const form = new FormData();
			form.set("callsign", "NONEXIST");

			await expect(
				actions.removeCallsign({
					request: new Request("http://localhost", { method: "POST", body: form }),
					locals: mockLocals(defaultUser)
				} as any)
			).resolves.not.toThrow();
		});
	});
});

function mockLocals(user: import("../helpers/auth").TestUser | null): Record<string, unknown> {
	return {
		auth: async () => (user ? { user: { ...user }, expires: new Date().toISOString() } : null)
	};
}
