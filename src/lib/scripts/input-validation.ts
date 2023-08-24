export class InputValidation {
	public static isCallsign(callsign: string): boolean {
		return callsign.length <= 15;
	}

	public static isDiscordWebhookUrl(webhookUrl: string): boolean {
		return /^https:\/\/discord\.com\/api\/webhooks\/\d+\/[a-zA-Z0-9_-]+$/.test(webhookUrl);
	}
}
