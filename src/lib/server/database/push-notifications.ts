import { Database } from "./database";

export class PushNotificationsDatabase extends Database {
	private static readonly TABLE_NAME = "push_notifications";

	public static async registerPushSubscription(cid: number, subscription: any): Promise<void> {
		const sql = `
        INSERT INTO ${this.TABLE_NAME} (cid, endpoint, expiration_time, p256dh, auth)
        VALUES ($1, $2, $3, $4, $5)
        `;
		const values = [cid, subscription.endpoint, subscription.expirationTime, subscription.keys.p256dh, subscription.keys.auth];

		await super.query(sql, values);
	}

	public static async deletePushNotification(cid: number, endpoint: string): Promise<void> {
		const query = `DELETE FROM ${this.TABLE_NAME} WHERE cid = ? AND endpoint = ?`;
		const values = [cid, endpoint];

		await this.query(query, values);
	}
}
