import { prisma } from "./prisma";
import { Database } from "./database";

export class PushNotificationsDatabase extends Database {
	public static async registerPushSubscription(cid: number, subscription: any): Promise<void> {
		await prisma.push_notifications.create({
			data: {
				cid: cid,
				endpoint: subscription.endpoint,
				expiration_time: subscription.expirationTime,
				p256dh: subscription.keys.p256dh,
				auth: subscription.keys.auth,
			},
		});
	}

	public static async deletePushNotification(cid: number, endpoint: string): Promise<void> {
		await prisma.push_notifications.deleteMany({
			where: {
				cid: cid,
				endpoint: endpoint,
			},
		});
	}
}
