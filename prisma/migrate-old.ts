import { PrismaClient as PrismaClientLegacy } from "./generated/client-legacy";
import { PrismaClient } from "@prisma/client";
import { DiscordHelper } from "../src/lib/discord-embeds";

const prismaLegacy = new PrismaClientLegacy();
const prisma = new PrismaClient();

const legacyCallsigns = await prismaLegacy.watched_callsigns.findMany();
await prisma.watchedCallsign.createMany({
	data: legacyCallsigns.map((callsign) => ({
		cid: callsign.cid,
		callsign: callsign.callsign,
		topdown: false
	}))
});

const legacyIgnored = await prismaLegacy.ignored_cids.findMany();
await prisma.ignoredCid.createMany({
	data: legacyIgnored.map((cid) => ({
		cid: cid.cid
	}))
});

const legacyWebhooks = await prismaLegacy.discord_notifications.findMany();
const defaultEmbeds = DiscordHelper.getDefaultEmbed();

const newEmbeds: any = [];
for (const legacyWebhook of legacyWebhooks) {
	newEmbeds.push({
		cid: legacyWebhook.cid,
		event: "up",
		enabled: true,
		name: "Imported logon notification",
		color: defaultEmbeds.up.color,
		title: defaultEmbeds.up.title,
		text: defaultEmbeds.up.text,
		author: defaultEmbeds.up.author,
		avatar: defaultEmbeds.up.avatar,
		url: legacyWebhook.webhook_url
	});
	newEmbeds.push({
		cid: legacyWebhook.cid,
		event: "down",
		enabled: true,
		name: "Imported logoff notification",
		color: defaultEmbeds.down.color,
		title: defaultEmbeds.down.title,
		text: defaultEmbeds.down.text,
		author: defaultEmbeds.down.author,
		avatar: defaultEmbeds.down.avatar,
		url: legacyWebhook.webhook_url
	});
}

await prisma.discordEmbed.createMany({
	data: newEmbeds
});
