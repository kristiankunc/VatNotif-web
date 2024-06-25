// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			session?: {
				user: {
					cid: number;
					name_first: string;
					name_last: string;
					name: string;
					id: string;
				};
				expires: string;
			};
		}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module "@auth/sveltekit" {
	interface Session {
		user: {
			cid: number;
			name_first: string;
			name_last: string;
			name: string;
			id: string;
		};
		expires: string;
	}
}

export {};
