// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import "./setup";
import { render, screen } from "@testing-library/svelte";
import Footer from "../../src/lib/components/Footer.svelte";

describe("Footer", () => {
	it("renders the copyright line", () => {
		render(Footer);
		expect(screen.getByText(/vatnotif/i)).toBeTruthy();
	});

	it("has a GitHub link", () => {
		render(Footer);
		const link = screen.getByText(/github/i);
		expect(link).toBeTruthy();
		expect(link.getAttribute("href")).toContain("github");
	});

	it("has a Support link", () => {
		render(Footer);
		const link = screen.getByText(/support/i);
		expect(link).toBeTruthy();
	});
});
