import { Database } from "./database";

export class DiscordNotificationsDatabase extends Database {
	private static readonly TABLE_NAME = "discord_notifications";

	public static async addNotification(cid: number, webhookUrl: string): Promise<void> {
		const sql = `INSERT INTO ${this.TABLE_NAME} (cid, webhook_url) VALUES (?, ?)`;
		const values = [cid, webhookUrl];
		await super.query(sql, values);
	}

	public static async removeNotification(cid: number, webhookUrl: string): Promise<void> {
		const sql = `DELETE FROM ${this.TABLE_NAME} WHERE cid = ? AND webhook_url = ?`;
		const values = [cid, webhookUrl];
		await super.query(sql, values);
	}

	public static async getNotificationsForCid(cid: number): Promise<string[]> {
		const sql = `SELECT webhook_url FROM ${this.TABLE_NAME} WHERE cid = ?`;
		const values = [cid];
		const rows = await super.query(sql, values);

		return rows.map((row: { webhook_url: string }) => row.webhook_url);
	}
}
