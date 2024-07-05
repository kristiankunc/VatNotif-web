<script lang="ts" context="module">
	import { writable } from "svelte/store";

	const title = writable("Error");
	const message = writable("An error occurred");
	let popver: HTMLDivElement;

	export function showError(_title: string, _message: string) {
		title.set(_title);
		message.set(_message);
		popver.showPopover();
	}
</script>

<div bind:this={popver} popover="manual">
	<div class="m-auto flex w-10/12 flex-col rounded-lg bg-red-500 p-4 text-white md:w-3/6">
		<h2 class="w-full text-left text-3xl">{$title}</h2>
		<p class="w-full text-left text-lg">{$message}</p>
		<button on:click={() => popver.hidePopover()} class="m-2 rounded-lg bg-white p-2 text-red-500 hover:bg-red-100 hover:text-red-700">Roger</button>
	</div>
</div>
