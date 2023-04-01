import type { VatsimUserData } from "$lib/types/vatsim";
import { vatsimConfig } from "../conf/vatsim";
import { SessionsDatabase } from "../database/sessions";

export class VatsimUser {
	// make private
	public static async fetchUserDetails(accessToken: string): Promise<VatsimUserData> {
		const res = await fetch(`${vatsimConfig.authUrl}/api/user`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
			},
		});

		if (!res.ok) {
			return Promise.reject(res.status);
		}

		return (await res.json()).data;
	}

	public static async getUser(accessToken: string): Promise<VatsimUserData> {
		const data = await this.fetchUserDetails(accessToken);
		return data;
	}
}
