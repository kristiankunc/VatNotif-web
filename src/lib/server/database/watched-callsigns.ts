import type { WatchedCallsign } from "$lib/types/vatsim";
import { Database } from "./database";

export class WatchedCallsignsDatabase extends Database {
	private static readonly TABLE_NAME = "watched_callsigns";

	public static async getWatchedCallsignsForCid(cid: number): Promise<WatchedCallsign[]> {
		const sql = `SELECT * FROM ${this.TABLE_NAME} WHERE cid = ?`;
		const values = [cid];
		const rows = await super.query(sql, values);
		return rows.map((row: { callsign: string; topdown: number }) => {
			return { string: row.callsign, topdown: row.topdown === 1 };
		});
	}

	public static async isWatched(cid: number, callsign: string): Promise<boolean> {
		const sql = `SELECT * FROM ${this.TABLE_NAME} WHERE cid = ? AND callsign = ?`;
		const values = [cid, callsign];
		const rows = await super.query(sql, values);
		return rows.length > 0;
	}

	public static async addWatchedCallsign(cid: number, callsign: WatchedCallsign): Promise<void> {
		const sql = `INSERT INTO ${this.TABLE_NAME} (cid, callsign, topdown) VALUES (?, ?, ?)`;
		const values = [cid, callsign.string, callsign.topdown ? 1 : 0];
		await super.query(sql, values);
	}

	public static async removeWatchedCallsign(cid: number, callsign: string): Promise<void> {
		const sql = `DELETE FROM ${this.TABLE_NAME} WHERE cid = ? AND callsign = ?`;
		const values = [cid, callsign];
		await super.query(sql, values);
	}

	public static async patchTopdown(cid: number, callsign: WatchedCallsign): Promise<void> {
		const sql = `UPDATE ${this.TABLE_NAME} SET topdown = ? WHERE cid = ? AND callsign = ?`;
		const values = [callsign.topdown ? 1 : 0, cid, callsign.string];
		await super.query(sql, values);
	}
}
