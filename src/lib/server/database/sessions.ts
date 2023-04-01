import { Database } from "./database";
import * as crypto from "crypto";

export class SessionsDatabase extends Database {
	private static readonly TABLE_NAME = "sessions";

	private static async generateSessionId(): Promise<string> {
		const query = `SELECT session_id FROM ${this.TABLE_NAME}`;
		const rows = await super.query(query);

		const sessionIds = rows.map((row: { session_id: string }) => row.session_id);

		let sessionId = "";

		do {
			sessionId = crypto.randomBytes(32).toString("hex");
		} while (sessionIds.includes(sessionId));

		return sessionId;
	}

	public static async createSession(accessToken: string, refreshToken: string): Promise<string> {
		const sessionId = await this.generateSessionId();

		const query = `INSERT INTO ${this.TABLE_NAME} (session_id, access_token, refresh_token) VALUES (?, ?, ?)`;
		const values = [sessionId, accessToken, refreshToken];

		await super.query(query, values);

		return sessionId;
	}

	public static async getSession(sessionId: string): Promise<{ accessToken: string; refreshToken: string } | null> {
		const query = `SELECT access_token, refresh_token FROM ${this.TABLE_NAME} WHERE session_id = ?`;
		const values = [sessionId];

		const rows = await super.query(query, values);

		if (rows.length === 0) return null;

		return {
			accessToken: rows[0].access_token,
			refreshToken: rows[0].refresh_token,
		};
	}

	public static async deleteSessionById(sessionId: string): Promise<void> {
		const query = `DELETE FROM ${this.TABLE_NAME} WHERE session_id = ?`;
		const values = [sessionId];

		await super.query(query, values);
	}

	public static async deleteSessionByAccessToken(accessToken: string): Promise<void> {
		const query = `DELETE FROM ${this.TABLE_NAME} WHERE access_token = ?`;
		const values = [accessToken];

		await super.query(query, values);
	}

	public static async deleteExpiredSessions(): Promise<void> {
		const query = `DELETE FROM ${this.TABLE_NAME} WHERE created_at < NOW() - INTERVAL 24 HOUR;`;
		await super.query(query);
	}
}
