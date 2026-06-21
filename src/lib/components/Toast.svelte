<script lang="ts">
	import { getToasts, removeToast, type ToastType } from "$lib/stores/toast.svelte";

	let toasts = $derived(getToasts());

	const bgMap: Record<ToastType, string> = {
		success: "bg-green-600",
		error: "bg-red-600",
		info: "bg-primary-600"
	};

	const iconMap: Record<ToastType, string> = {
		success: "check_circle",
		error: "error",
		info: "info"
	};
</script>

{#if toasts.length > 0}
	<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2" aria-live="polite">
		{#each toasts as toast (toast.id)}
			<div
				class="flex animate-slide-up items-center gap-3 rounded-lg px-4 py-3 text-white shadow-elevation-3 {bgMap[toast.type]}"
				role="alert"
			>
				<span class="material-symbols-outlined text-lg">{iconMap[toast.type]}</span>
				<p class="text-sm font-medium">{toast.message}</p>
				<button
					onclick={() => removeToast(toast.id)}
					class="ml-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition hover:bg-white/20"
					aria-label="Dismiss"
				>
					<span class="material-symbols-outlined text-base">close</span>
				</button>
			</div>
		{/each}
	</div>
{/if}
