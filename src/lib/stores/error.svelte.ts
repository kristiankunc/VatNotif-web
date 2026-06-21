let title = $state("");
let message = $state("");
let isVisible = $state(false);

export function showError(_title: string, _message: string) {
	title = _title;
	message = _message;
	isVisible = true;
}

export function hideError() {
	isVisible = false;
}

export function getErrorState() {
	return {
		get title() {
			return title;
		},
		get message() {
			return message;
		},
		get isVisible() {
			return isVisible;
		}
	};
}
