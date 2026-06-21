import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "tests", ".env.test") });

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ["tests/**/*.test.ts"],
		environment: "node",
		hookTimeout: 30_000,
		testTimeout: 15_000
	}
});
