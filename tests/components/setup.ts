import { vi } from "vitest";

vi.mock("$app/state", () => ({
	page: {
		get url() {
			return new URL("http://localhost");
		},
		get data() {
			return {
				session: {
					user: { cid: 1234567, name: "John Doe", name_first: "John", name_last: "Doe" },
					expires: new Date(Date.now() + 86400000).toISOString()
				}
			};
		},
		get status() {
			return 200;
		},
		get error() {
			return null;
		},
		get form() {
			return null;
		}
	},
	navigating: {
		get from() {
			return null;
		},
		get to() {
			return null;
		},
		get type() {
			return null;
		}
	},
	updated: {
		get current() {
			return false;
		},
		check: () => false
	}
}));

// ---------------------------------------------------------------------------
// $app/navigation
// ---------------------------------------------------------------------------
vi.mock("$app/navigation", () => ({
	navigate: vi.fn(),
	beforeNavigate: vi.fn(),
	afterNavigate: vi.fn(),
	goto: vi.fn(),
	invalidate: vi.fn(),
	invalidateAll: vi.fn(),
	onNavigate: vi.fn(),
	pushState: vi.fn(),
	replaceState: vi.fn()
}));

// ---------------------------------------------------------------------------
// $app/forms
// ---------------------------------------------------------------------------
vi.mock("$app/forms", () => ({
	enhance: () => () => {},
	applyAction: vi.fn(),
	deserialize: vi.fn()
}));

// ---------------------------------------------------------------------------
// $app/environment
// ---------------------------------------------------------------------------
vi.mock("$app/environment", () => ({
	browser: true,
	dev: true,
	build: false,
	version: "test"
}));

// ---------------------------------------------------------------------------
// $app/paths
// ---------------------------------------------------------------------------
vi.mock("$app/paths", () => ({
	base: "",
	assets: "",
	relative: () => "",
	resolveRoute: (path: string) => path
}));

// ---------------------------------------------------------------------------
// @auth/sveltekit/client
// ---------------------------------------------------------------------------
vi.mock("@auth/sveltekit/client", () => ({
	signIn: vi.fn(),
	signOut: vi.fn()
}));

// Stub scrollTo for jsdom
if (typeof window !== "undefined" && !window.scrollTo) {
	window.scrollTo = vi.fn() as any;
}
