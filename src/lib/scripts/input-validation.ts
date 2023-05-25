export class InputValidation {
	public static isCallsign(callsign: string): boolean {
		return /^[A-Z]{2,4}_?[A-Z]{1,4}_?(GND|TWR|APP|DEP|CTR|FSS|DEL|INFO|RAI|ACC)$/.test(callsign);
	}

	public static isDiscordWebhookUrl(webhookUrl: string): boolean {
		return /^https:\/\/discord\.com\/api\/webhooks\/\d+\/[a-zA-Z0-9_-]+$/.test(webhookUrl);
	}
}
