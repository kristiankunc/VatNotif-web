// @vitest-environment jsdom
import { describe, it, expect, vi, beforeAll } from "vitest";
import "./setup";
import { render, screen } from "@testing-library/svelte";
import Navbar from "../../src/lib/components/Navbar.svelte";

describe("Navbar (authenticated)", () => {
	it("renders the brand name and logo", () => {
		render(Navbar);
		expect(screen.getByText("VatNotif")).toBeTruthy();
	});

	it("shows the user's name", () => {
		render(Navbar);
		expect(screen.getByText("John Doe")).toBeTruthy();
	});

	it("shows the Dashboard link", () => {
		render(Navbar);
		const dashboardLink = screen.getByText("Dashboard");
		expect(dashboardLink).toBeTruthy();
		expect(dashboardLink.getAttribute("href")).toBe("/dashboard");
	});

	it("shows the Sign out button", () => {
		render(Navbar);
		expect(screen.getByText("Sign out")).toBeTruthy();
	});

	it("does NOT show the Sign in button", () => {
		render(Navbar);
		expect(screen.queryByText("Sign in with VATSIM")).toBeNull();
	});
});
