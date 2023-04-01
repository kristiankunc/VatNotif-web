import type { VatsimConfigOptions } from "$lib/types/config";

export const vatsimConfig: VatsimConfigOptions = {
	authUrl: "https://auth-dev.vatsim.net",
	clientId: "530",
	clientSecret: "BHKcNwjP6m8kMuG97eS8b7W6fRlKvl5jLv1HzSUQ",
	redirectUri: "https://vatnotif.kristn.co.uk/auth/callback",
	scopes: "full_name+vatsim_details+email",
};
