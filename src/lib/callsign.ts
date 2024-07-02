function isCallsign(callsign: string): boolean {
	return /^[A-Z]{2,4}((\_|-)[A-Z0-9_]{0,2})?_?\_(CTR|APP|DEP|TWR|GND|DEL|TMU|FSS|RMP|FIS|FMP|AFIS)$/.test(callsign) && callsign.length <= 15;
}
