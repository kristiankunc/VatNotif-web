import { Database } from "./database";

export class WatchedCallsignsDatabase extends Database {
	private static readonly TABLE_NAME = "watched_callsigns";

	public static async getWatchedCallsignsForCid(cid: number): Promise<string[]> {
		const sql = `SELECT callsign FROM ${this.TABLE_NAME} WHERE cid = ?`;
		const values = [cid];
		const rows = await super.query(sql, values);

		return rows.map((row: { callsign: string }) => row.callsign);
	}

	public static async addWatchedCallsign(cid: number, callsign: string): Promise<void> {
		const sql = `INSERT INTO ${this.TABLE_NAME} (cid, callsign) VALUES (?, ?)`;
		const values = [cid, callsign];
		await super.query(sql, values);
	}

	public static async removeWatchedCallsign(cid: number, callsign: string): Promise<void> {
		const sql = `DELETE FROM ${this.TABLE_NAME} WHERE cid = ? AND callsign = ?`;
		const values = [cid, callsign];
		await super.query(sql, values);
	}
}
