import { prisma } from "./prisma";
import { Database } from "./database";
import * as crypto from "crypto";

export class SessionsDatabase extends Database {
	private static async generateSessionId(): Promise<string> {
		const sessionIds = await prisma.sessions.findMany({
			select: {
				session_id: true,
			},
		});

		let sessionId = "";

		do {
			sessionId = crypto.randomBytes(32).toString("hex");
		} while (sessionIds.some((session) => session.session_id === sessionId));

		return sessionId;
	}

	public static async createSession(accessToken: string, refreshToken: string): Promise<string> {
		const sessionId = await this.generateSessionId();

		await prisma.sessions.create({
			data: {
				session_id: sessionId,
				access_token: accessToken,
				refresh_token: refreshToken,
			},
		});

		return sessionId;
	}

	public static async getSession(sessionId: string): Promise<{ accessToken: string; refreshToken: string } | null> {
		const session = await prisma.sessions.findUnique({
			where: {
				session_id: sessionId,
			},
		});

		if (!session) return null;

		return {
			accessToken: session.access_token,
			refreshToken: session.refresh_token,
		};
	}

	public static async deleteSessionById(sessionId: string): Promise<void> {
		await prisma.sessions.delete({
			where: {
				session_id: sessionId,
			},
		});
	}

	public static async deleteSessionByAccessToken(accessToken: string): Promise<void> {
		await prisma.sessions.deleteMany({
			where: {
				access_token: accessToken,
			},
		});
	}

	public static async deleteExpiredSessions(): Promise<void> {
		await prisma.sessions.deleteMany({
			where: {
				created_at: {
					lte: new Date(Date.now() - 24 * 60 * 60 * 1000),
				},
			},
		});
	}
}
