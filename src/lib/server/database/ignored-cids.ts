import { prisma } from "./prisma";
import { Database } from "./database";

export class IgnoredCidsDatabase extends Database {
	public static async getAll(): Promise<number[]> {
		const ignoredCids = await prisma.ignored_cids.findMany();
		return ignoredCids.map((ignoredCid) => ignoredCid.cid);
	}

	public static async set(cid: number, state: boolean): Promise<void> {
		await prisma.ignored_cids.upsert({
			where: {
				cid: cid,
			},
			update: {},
			create: {
				cid: cid,
			},
		});
	}

	public static async isIgnored(cid: number): Promise<boolean> {
		const ignoredCid = await prisma.ignored_cids.findUnique({
			where: {
				cid: cid,
			},
		});

		return ignoredCid !== null;
	}
}
