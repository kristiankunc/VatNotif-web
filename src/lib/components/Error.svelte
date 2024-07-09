<script lang="ts" context="module">
	import { writable } from "svelte/store";

	const title = writable("Error");
	const message = writable("An error occurred");
	const isVisible = writable(false);
	let popover: HTMLDivElement;

	export function showError(_title: string, _message: string) {
		title.set(_title);
		message.set(_message);
		popover.showPopover();
		isVisible.set(true);
	}

	function hideError() {
		popover.hidePopover();
		isVisible.set(false);
	}
</script>

<div class="relative">
	{#if $isVisible}
		<div class="fixed inset-0 z-50 bg-black bg-opacity-35"></div>
	{/if}
	<div bind:this={popover} popover="manual" class="bg-transparent">
		<div class="m-auto flex flex-col rounded-lg bg-red-500 p-4 text-white">
			<h2 class="w-full text-left text-3xl">{$title}</h2>
			<p class="w-full text-left text-lg">{$message}</p>
			<button on:click={() => hideError()} class="m-2 rounded-lg bg-white p-2 text-red-500 hover:bg-red-100 hover:text-red-700">Roger</button>
		</div>
	</div>
</div>
