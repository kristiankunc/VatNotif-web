// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
				cid: string;
				name_first: string;
				name_last: string;
				name: string;
				id: string;
			};
		}
		interface PageData {
			session?: {
				user: {
					cid: string;
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

export {};
