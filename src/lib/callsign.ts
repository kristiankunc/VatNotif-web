export function isCallsign(callsign: string): boolean {
	if (callsign.length > 15) return false;

	if (!callsign.includes("%"))
		return /^[A-Z]{2,4}((\_|-)[A-Z0-9_]{0,3})?_?\_(CTR|APP|DEP|TWR|GND|DEL|TMU|FSS|RMP|FIS|FMP|AFIS|OBS|SUP)$/.test(callsign);

	if (callsign.indexOf("%") < 2) return false;

	return true;
}
