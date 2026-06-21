// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import "./setup";
import { render, screen } from "@testing-library/svelte";
import ErrorComponent from "../../src/lib/components/Error.svelte";
import { showError, hideError, getErrorState } from "$lib/stores/error.svelte";

describe("Error modal", () => {
	beforeEach(() => {
		hideError();
	});

	it("does not render when not visible", () => {
		const container = render(ErrorComponent);
		expect(container.queryByRole("dialog")).toBeNull();
	});

	it("renders the title and message when shown", () => {
		showError("Test Error", "Something bad happened");
		render(ErrorComponent);

		expect(screen.getByText("Test Error")).toBeTruthy();
		expect(screen.getByText("Something bad happened")).toBeTruthy();
	});

	it("shows a 'Got it' dismiss button", () => {
		showError("Err", "desc");
		render(ErrorComponent);

		const btn = screen.getByText("Got it");
		expect(btn).toBeTruthy();
	});

	it("hides the modal when 'Got it' is clicked", async () => {
		showError("Err", "desc");
		render(ErrorComponent);

		const btn = screen.getByText("Got it");
		btn.click();

		const state = getErrorState();
		expect(state.isVisible).toBe(false);
	});
});
