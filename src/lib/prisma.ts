import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

let client: PrismaClient | undefined;

export const prisma = new Proxy({} as PrismaClient, {
	get(_target, prop) {
		if (!client) {
			client = new PrismaClient({
				adapter: new PrismaMariaDb(process.env.DATABASE_URL!)
			});
		}
		return Reflect.get(client, prop);
	}
});
