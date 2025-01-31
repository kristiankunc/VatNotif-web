<script lang="ts">
	import { enhance } from "$app/forms";
	import { isCallsign } from "$lib/callsign";
	import { showError } from "$lib/components/Error.svelte";
	import { writable } from "svelte/store";

	export let data;

	let callsignsStore = writable(data.watchedCallsigns);

	const isIgnored = writable(data.isIgnored);
</script>

<svelte:head>
	<title>VatNotif | Dashboard</title>
</svelte:head>

<div class="flex min-h-[90vh] flex-col justify-center">
	<h1 class="m-2 text-center text-4xl font-semibold">Dashboard</h1>

	<div class="flex flex-row flex-wrap items-start justify-evenly">
		<div class="m-4 flex flex-col items-center justify-center">
			<h2 class="mb-2 text-2xl font-semibold">Tracked callsigns</h2>

			<form method="POST" action="?/addCallsign" class="flex flex-wrap justify-center">
				<input
					type="text"
					name="callsign"
					id="callsign"
					placeholder="EGKK_GND"
					class="m-2 grow rounded border border-gray-300 p-2"
					maxlength="15"
					required
				/>
				<button
					type="submit"
					class="m-2 flex items-center rounded bg-primary-500 px-3 py-2 text-white transition duration-150 ease-in-out hover:bg-primary-600"
				>
					<span class="material-symbols-outlined mr-2">add</span>
					<p>Add callsign</p>
				</button>
			</form>

			{#each $callsignsStore as callsign}
				<div class="flex w-full items-center justify-between">
					<p class="m-2 w-20">{callsign.callsign}</p>
					<form method="POST" action="?/removeCallsign" class="flex justify-center">
						<input type="hidden" name="callsign" value={callsign.callsign} />
						<button
							type="submit"
							class="m-2 flex rounded bg-secondary-700 px-3 py-2 text-white transition duration-150 ease-in-out hover:bg-secondary-800"
						>
							<span class="material-symbols-outlined mr-2">cancel</span>
							<p>Remove</p>
						</button>
					</form>
				</div>
			{/each}
		</div>
		<div class="m-4 flex flex-col items-center justify-center">
			<h2 class="mb-2 mt-6 w-full text-left text-2xl font-semibold">Discord notifications</h2>
			<div class="flex w-full flex-row items-center justify-between rounded border border-gray-300 p-2">
				<p class="w-1/2">
					{data.hasEmbedUrls ? "✅ All of your embeds have a working webhook URL" : "❌ Some of your embeds are missing a webhook URL"}
				</p>

				<div class="flex flex-row items-center justify-center">
					<a href="/embed">
						<button
							class="m-2 flex items-center rounded bg-primary-500 px-3 py-2 text-white transition duration-150 ease-in-out hover:bg-primary-600"
						>
							<span class="material-symbols-outlined mr-2">rule_settings</span>
							<p>Configure embeds</p></button
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
