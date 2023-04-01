import { vatsimConfig } from "../conf/vatsim";

export class VatsimAuth {
	public static async getUserTokens(callbackCode: string): Promise<{ accessToken: string; refreshToken: string }> {
		const url = new URL(`${vatsimConfig.authUrl}/oauth/token`);

		const res = await fetch(url.toString(), {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				grant_type: "authorization_code",
				client_id: vatsimConfig.clientId,
				client_secret: vatsimConfig.clientSecret,
				redirect_uri: vatsimConfig.redirectUri,
				code: callbackCode,
			}),
		});

		if (!res.ok) {
			console.log(await res.json());
			return Promise.reject(res.status);
		}

		const { access_token, refresh_token } = await res.json();
		if (!access_token || !refresh_token) {
			Promise.reject(500);
		}

		return {
			accessToken: access_token,
			refreshToken: refresh_token,
		};
	}

	public static async refreshAccessToken(refreshToken: string): Promise<string> {
		const url = new URL(`${vatsimConfig.authUrl}/oauth/token`);
		url.searchParams.append("grant_type", refreshToken);
		url.searchParams.append("client_id", vatsimConfig.clientId);
		url.searchParams.append("client_secret", vatsimConfig.clientSecret);
		url.searchParams.append("scopes", vatsimConfig.scopes);

		const res = await fetch(url.toString(), {
			method: "POST",
		});

		if (!res.ok) {
			console.log(await res.json());
			Promise.reject(res.status);
		}

		return (await res.json()).access_token;
	}
}
