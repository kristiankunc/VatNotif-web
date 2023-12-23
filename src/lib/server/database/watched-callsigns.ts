import type { WatchedCallsign } from "$lib/types/vatsim";
import { PrismaClient } from "@prisma/client";
import { Database } from "./database";
import { prisma } from "./prisma";

export class WatchedCallsignsDatabase extends Database {
	public static async getWatchedCallsignsForCid(cid: number): Promise<WatchedCallsign[]> {
		const watchedCallsigns = await prisma.watched_callsigns.findMany({
			where: {
				cid: cid,
			},
		});

		return watchedCallsigns.map((watchedCallsign) => {
			return {
				string: watchedCallsign.callsign ?? "",
				topdown: watchedCallsign.topdown,
			};
		});
	}

	public static async isWatched(cid: number, callsign: string): Promise<boolean> {
		const watchedCallsign = await prisma.watched_callsigns.findFirst({
			where: {
				cid: cid,
				callsign: callsign,
			},
		});

		return watchedCallsign !== null;
	}

	public static async addWatchedCallsign(cid: number, callsign: WatchedCallsign): Promise<void> {
		await prisma.watched_callsigns.create({
			data: {
				cid: cid,
				callsign: callsign.string,
				topdown: callsign.topdown,
			},
		});
	}

	public static async removeWatchedCallsign(cid: number, callsign: string): Promise<void> {
		await prisma.watched_callsigns.deleteMany({
			where: {
				cid: cid,
				callsign: callsign,
			},
		});
	}

	public static async patchTopdown(cid: number, callsign: WatchedCallsign): Promise<void> {
		await prisma.watched_callsigns.updateMany({
			where: {
				cid: cid,
				callsign: callsign.string,
			},
			data: {
				topdown: callsign.topdown,
			},
		});
	}
}
