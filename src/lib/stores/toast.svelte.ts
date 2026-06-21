export type ToastType = "success" | "error" | "info";

interface Toast {
	id: number;
	message: string;
	type: ToastType;
}

let toasts = $state<Toast[]>([]);
let nextId = 0;

export function addToast(message: string, type: ToastType = "info") {
	const id = nextId++;
	toasts = [...toasts, { id, message, type }];
	setTimeout(() => removeToast(id), 4000);
}

export function removeToast(id: number) {
	toasts = toasts.filter((t) => t.id !== id);
}

export function getToasts() {
	return toasts;
}
