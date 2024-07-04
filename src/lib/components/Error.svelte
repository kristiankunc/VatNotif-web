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
	<h2>{$title}</h2>
	<p>{$message}</p>
	<button on:click={() => popver.hidePopover()}>Roger</button>
</div>
