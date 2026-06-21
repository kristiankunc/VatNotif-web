import { PrismaClient } from "@prisma/client";
import type { TestUser } from "./auth";

export const prisma = new PrismaClient({
	datasources: { db: { url: process.env.DATABASE_URL } }
});

export async function cleanAll() {
	await prisma.discordEmbed.deleteMany();
	await prisma.watchedCallsign.deleteMany();
}

export async function seedCallsign(user: TestUser, callsign: string, topdown = false) {
	return prisma.watchedCallsign.create({
		data: { cid: user.cid, callsign, topdown }
	});
}

export async function seedEmbed(
	user: TestUser,
	overrides: Partial<{
		event: string;
		enabled: boolean;
		name: string;
		url: string;
		author: string;
		title: string;
		text: string;
		color: string;
		avatar: string;
	}> = {}
) {
	return prisma.discordEmbed.create({
		data: {
			cid: user.cid,
			event: "up",
			enabled: true,
			name: "Test embed",
			url: "",
			author: "TestBot",
			title: "Test notification",
			text: "**{name}** logged on as **{callsign}**",
			color: "#16a34a",
			avatar: "https://example.com/avatar.png",
			...overrides
		}
	});
}
