import type { VatsimUserData } from "$lib/types/vatsim";
import { vatsimConfig } from "../conf/vatsim";

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
			return Promise.reject(await res.text());
		}

		const data = (await res.json()).data;
		return {
			cid: Number.parseInt(data.cid),
			personal: {
				name_first: data.personal.name_first,
				name_last: data.personal.name_last,
				name_full: data.personal.name_full,
			},
			oauth: {
				token_valid: data.oauth.token_valid === "true",
			},
		};
	}

	public static async getUser(accessToken: string): Promise<VatsimUserData> {
		const data = await this.fetchUserDetails(accessToken);
		return data;
	}
}
