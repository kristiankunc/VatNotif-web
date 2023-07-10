<script lang="ts">
	import { onMount } from "svelte";

	let dialog: HTMLDialogElement;

	onMount(() => {
		const hasSeenDialog = Number.parseInt(localStorage.getItem("feedbackLastShown") || "0"); //unix timestamp

		if (hasSeenDialog + 604800 < Date.now() / 1000) {
			dialog.showModal();
			localStorage.setItem("feedbackLastShown", (Date.now() / 1000).toString());
		}
	});

	function closeModal() {
		dialog.close();
	}
</script>

<dialog bind:this={dialog} class="dialog">
	<h1>We are looking for feedback</h1>
	<p>Help us improve our website by taking a short <a href="https://forms.gle/ku8YakpWW4ur42jf6"><b>Survey</b></a>.</p>

	<button on:click={closeModal}>Close</button>
</dialog>

<style>
	.dialog {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		padding: 20px;
		max-width: 500px;
		width: 100%;
		max-height: 80vh;
		overflow-y: auto;
	}

	.dialog h1 {
		font-size: 24px;
		margin-top: 0;
	}

	.dialog p {
		font-size: 16px;
		margin-bottom: 20px;
	}

	.dialog button {
		background-color: #007acc;
		color: #fff;
		border: none;
		border-radius: 5px;
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
	}

	.dialog button:hover {
		background-color: #005d9e;
	}
</style>
