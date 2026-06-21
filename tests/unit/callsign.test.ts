import { describe, it, expect } from "vitest";
import { isCallsign } from "$lib/callsign";

describe("isCallsign", () => {
	it("accepts a standard position callsign", () => {
		expect(isCallsign("LHR_APP")).toBe(true);
	});

	it("accepts a short prefix callsign", () => {
		expect(isCallsign("LA_TWR")).toBe(true);
	});

	it("accepts a long prefix callsign", () => {
		expect(isCallsign("LON_S_CTR")).toBe(true);
	});

	it("accepts a callsign with digits and underscore", () => {
		expect(isCallsign("LHR_2_TWR")).toBe(true);
	});

	it("rejects a top-down style callsign (letter suffix not supported)", () => {
		expect(isCallsign("LHR_APP_A")).toBe(false);
	});

	it("accepts FSS suffix", () => {
		expect(isCallsign("EGKK_FSS")).toBe(true);
	});

	it("accepts OBS suffix", () => {
		expect(isCallsign("LHR_OBS")).toBe(true);
	});

	it("accepts FIS suffix", () => {
		expect(isCallsign("LON_FIS")).toBe(true);
	});

	it("accepts a wildcard callsign with % prefix (needs 2+ chars before %)", () => {
		expect(isCallsign("LON%_CTR")).toBe(true);
	});

	it("rejects wildcard with fewer than 2 chars before %", () => {
		expect(isCallsign("L%_APP")).toBe(false);
	});

	it("accepts wildcard at the end of prefix", () => {
		expect(isCallsign("LON%_CTR")).toBe(true);
	});

	it("accepts full wildcard prefix", () => {
		expect(isCallsign("LON_%_TWR")).toBe(true);
	});

	it("rejects too-long callsigns (>15 chars)", () => {
		expect(isCallsign("LONGNAME_APP")).toBe(false);
	});

	it("rejects unknown suffix", () => {
		expect(isCallsign("LHR_XYZ")).toBe(false);
	});

	it("rejects wildcard at position 0", () => {
		expect(isCallsign("%HR_APP")).toBe(false);
	});

	it("rejects wildcard at position 1 (too early)", () => {
		expect(isCallsign("L%_APP")).toBe(false);
	});

	it("rejects empty string", () => {
		expect(isCallsign("")).toBe(false);
	});

	it("accepts wildcard with no explicit suffix (wildcard path is lenient)", () => {
		expect(isCallsign("LHR%")).toBe(true);
	});
});
