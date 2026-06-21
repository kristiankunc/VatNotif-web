import { describe, it, expect } from "vitest";
import { validateFormData } from "$lib/form";

describe("validateFormData", () => {
	const rules = [
		{ key: "name", type: "string" as const, maxLength: 50 },
		{ key: "age", type: "number" as const, maxLength: -1 },
		{ key: "active", type: "boolean" as const, maxLength: -1 }
	];

	function makeForm(values: Record<string, string>): FormData {
		const fd = new FormData();
		for (const [k, v] of Object.entries(values)) fd.append(k, v);
		return fd;
	}

	it("passes valid data", () => {
		const fd = makeForm({ name: "John", age: "30", active: "true" });
		expect(validateFormData(fd, rules)).toBe(true);
	});

	it("fails on missing key", () => {
		const fd = makeForm({ name: "John", age: "30" });
		expect(validateFormData(fd, rules)).toBe(false);
	});

	it("fails on empty string value", () => {
		const fd = makeForm({ name: "", age: "30", active: "true" });
		expect(validateFormData(fd, rules)).toBe(false);
	});

	it("fails when string exceeds maxLength", () => {
		const fd = makeForm({
			name: "a".repeat(51),
			age: "30",
			active: "true"
		});
		expect(validateFormData(fd, rules)).toBe(false);
	});

	it("fails on non-numeric number field", () => {
		const fd = makeForm({ name: "John", age: "not-a-num", active: "true" });
		expect(validateFormData(fd, rules)).toBe(false);
	});

	it("fails on invalid boolean", () => {
		const fd = makeForm({ name: "John", age: "30", active: "maybe" });
		expect(validateFormData(fd, rules)).toBe(false);
	});

	it("passes boolean 'false'", () => {
		const fd = makeForm({ name: "John", age: "30", active: "false" });
		expect(validateFormData(fd, rules)).toBe(true);
	});
});
