import { SvelteKitAuth, type Session } from "@auth/sveltekit";
import { VATSIM_CLIENT_ID, VATSIM_CLIENT_SECRET, VATSIM_AUTH_URL, AUTH_SECRET } from "$env/static/private";

export const auth = SvelteKitAuth({
	trustHost: true,
	providers: [
		{
			id: "vatsim",
			name: "VATSIM Connect",
			type: "oauth",
			authorization: {
				url: `${VATSIM_AUTH_URL}/oauth/authorize?response_type=code`,
				params: {
					scope: "full_name"
				}
			},
			clientId: VATSIM_CLIENT_ID,
			clientSecret: VATSIM_CLIENT_SECRET,
			token: {
				url: `${VATSIM_AUTH_URL}/oauth/token`
			},
			userinfo: `${VATSIM_AUTH_URL}/api/user`,
			async profile(profile) {
				return {
					cid: Number.parseInt(profile.data.cid),
					name_first: profile.data.personal.name_first,
					name_last: profile.data.personal.name_last,
					name: profile.data.personal.name_full
				};
			}
		}
	],
	callbacks: {
		async session({ session, token, newSession, trigger }) {
			if (session && token) {
				let u = token.user;
				delete u["tokens"];

				session.user = u;
				//session.token_expires = token.account.expires_at;
				//session.accessToken = token.accessToken;
				//session.refreshToken = token.refreshToken;
			}

			return session;
		},
		async jwt({ token, user, account, profile, trigger, session }) {
			if (token && user) {
				token.user = user;

				if (account) {
					token.account = account;
					token.accessToken = account.access_token;
					token.refreshToken = account.refresh_token;
				}
			}

			return token;
		}
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60 // 30 days
	},
	secret: AUTH_SECRET
});
