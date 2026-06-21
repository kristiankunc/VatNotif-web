/**
 * Test helpers for mocking Auth.js sessions.
 *
 * Generates a realistic session object matching what locals.auth()
 * returns after a real VATSIM Connect login.
 */
export interface TestUser {
	cid: number;
	name_first: string;
	name_last: string;
	name: string;
}

export const defaultUser: TestUser = {
	cid: 1234567,
	name_first: "John",
	name_last: "Doe",
	name: "John Doe"
};

export const secondUser: TestUser = {
	cid: 7654321,
	name_first: "Jane",
	name_last: "Smith",
	name: "Jane Smith"
};

export function mockSession(user: TestUser = defaultUser) {
	return {
		user: { ...user },
		expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
	};
}

export function mockLocals(user?: TestUser) {
	const session = user ? mockSession(user) : null;

	return {
		auth: async () => session,
		// Stubs for SvelteKit internals
		setHeaders: () => {},
		getHeaders: () => ({})
	} as any;
}
