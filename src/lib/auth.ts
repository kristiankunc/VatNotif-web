import { SvelteKitAuth } from "@auth/sveltekit";
import dotenv from "dotenv";

dotenv.config();

export const auth = SvelteKitAuth({
	trustHost: true,
	providers: [
		{
			id: "vatsim",
			name: "VATSIM Connect",
			type: "oauth",
			authorization: {
				url: `${process.env.VATSIM_AUTH_URL}/oauth/authorize?response_type=code`,
				params: {
					scope: "full_name"
				}
			},
			clientId: process.env.VATSIM_CLIENT_ID,
			clientSecret: process.env.VATSIM_CLIENT_SECRET,
			token: {
				url: `${process.env.VATSIM_AUTH_URL}/oauth/token`
			},
			userinfo: `${process.env.VATSIM_AUTH_URL}/api/user`,
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
	secret: process.env.AUTH_SECRET
});
