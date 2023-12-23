import { Database } from "./database";
import { prisma } from "./prisma";
export class DiscordNotificationsDatabase extends Database {
	public static async addNotification(cid: number, webhookUrl: string): Promise<void> {
		await prisma.discord_notifications.create({
			data: {
				cid: cid,
				webhook_url: webhookUrl,
			},
		});
	}

	public static async removeNotification(cid: number, webhookUrl: string): Promise<void> {
		await prisma.discord_notifications.deleteMany({
			where: {
				cid: cid,
				webhook_url: webhookUrl,
			},
		});
	}

	public static async getNotificationsForCid(cid: number): Promise<string[]> {
		const notifications = await prisma.discord_notifications.findMany({
			where: {
				cid: cid,
			},
		});
		return notifications.map((notification) => notification.webhook_url);
	}
}
