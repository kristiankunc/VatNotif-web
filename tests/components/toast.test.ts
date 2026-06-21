// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import "./setup";
import { render, screen, waitFor } from "@testing-library/svelte";
import Toast from "../../src/lib/components/Toast.svelte";
import { addToast, removeToast, getToasts } from "$lib/stores/toast.svelte";

describe("Toast", () => {
	beforeEach(() => {
		const toasts = getToasts();
		while (toasts.length > 0) {
			removeToast(toasts[0].id);
		}
	});

	it("renders nothing when there are no toasts", () => {
		const container = render(Toast);
		expect(container.queryByRole("alert")).toBeNull();
	});

	it("displays a success toast", () => {
		addToast("Operation succeeded", "success");
		render(Toast);
		expect(screen.getByText("Operation succeeded")).toBeTruthy();
	});

	it("displays an error toast", () => {
		addToast("Something went wrong", "error");
		render(Toast);
		expect(screen.getByText("Something went wrong")).toBeTruthy();
	});

	it("displays an info toast", () => {
		addToast("Heads up!", "info");
		render(Toast);
		expect(screen.getByText("Heads up!")).toBeTruthy();
	});

	it("shows multiple toasts at once", () => {
		addToast("Toast 1", "info");
		addToast("Toast 2", "success");
		render(Toast);
		expect(screen.getByText("Toast 1")).toBeTruthy();
		expect(screen.getByText("Toast 2")).toBeTruthy();
	});

	it("has dismiss buttons on each toast", () => {
		addToast("Dismiss me", "info");
		render(Toast);

		const dismissButtons = screen.getAllByLabelText("Dismiss");
		expect(dismissButtons.length).toBeGreaterThan(0);
	});
});
