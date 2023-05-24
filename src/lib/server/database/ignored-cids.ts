import { Database } from "./database";

export class IgnoredCidsDatabase extends Database {
	private static readonly TABLE_NAME = "ignored_cids";

	public static async getAll(): Promise<number[]> {
		return (await super.query(`SELECT cid FROM ${this.TABLE_NAME}`)) as number[];
	}

	public static async set(cid: number, state: boolean): Promise<void> {
		if (state) {
			await super.query(`INSERT IGNORE INTO ${this.TABLE_NAME} (cid) VALUES (?)`, [cid]);
		} else {
			await super.query(`DELETE FROM ${this.TABLE_NAME} WHERE cid = ?`, [cid]);
		}
	}

	public static async isIgnored(cid: number): Promise<boolean> {
		const result = await super.query(`SELECT cid FROM ${this.TABLE_NAME} WHERE cid = ?`, [cid]);
		return result.length > 0;
	}
}
